//acciones async
//usamos thunk
import axios from 'axios'
import Creators from './actions'
import VariantsCreators from '../variant/actions'

//a==============================
//funciones que uso internamente en este archivo
//pero que el componente no necesite ejecutar
const _saveShopifyData = Creators.saveShopifyData
const _shopExists= Creators.shopExists
const _shopNotExists = Creators.shopNotExist


const _isLoading = Creators.isLoading
const _isNotLoading = Creators.isNotLoading
const _setError = Creators.setError
const clearError = Creators.clearError

const _setVariants = VariantsCreators.setVariants



//b===========================
//funciones que se conectan con apis 
//async usan thunk
const getShopifyData = () => {

  return (dispatch) => {
    const instanceShopify = axios.create({
      baseURL:'/api',
      timeout: 10000
    }) 

    return instanceShopify.get('/shopify')
      .then( response => {
        console.log('entre')
        const {shop} = response.data
        dispatch(_saveShopifyData(shop))
        //id de la tienda
        const { id } = shop
        axios.get(`/store/${id}`)
          .then(response => {
            dispatch(_shopExists(response.data))
            dispatch(_setVariants(response.data.variants))
          },error => {
            dispatch(_shopNotExists())
          })
      }, error => {
        console.log('falle', error)
      })




  }
}

const createShop = (payload) => {

  return(dispatch) => {
    dispatch(_isLoading())
    axios.post('/store', payload)
      .then(response => {
        dispatch(_shopExists(response.data))
      },err => {
        dispatch(_shopNotExists())
        switch(err.response.status){
          case 400:
            dispatch(_setError('Error de validacion, verifique sus datos'))
          default:
            dispatch(_setError('Error de servidor'))  
        }
      })
  }
}



//c======================
//exportar las funciones que finalmente se van a comunicar
//con los componentes reales
//con el exterior
export default {
  getShopifyData,
  createShop,
  clearError
}