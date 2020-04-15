//acciones async
//usamos thunk
import axios from 'axios'
import Creators from './actions'
import { createStore } from 'redux'
//a==============================
//funciones que uso internamente en este archivo
//pero que el componente no necesite ejecutar
const _saveShopifyData = Creators.saveShopifyData
const _registroBtn = Creators.registroBtn
const _loading = Creators.loading



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

        const { id } = shop
        axios.get(`/store/${id}`)
          .then(response => {
            dispatch(_loading(false))
            dispatch(_registroBtn(true))
          },error => {
            dispatch(_loading(false))
            dispatch(_registroBtn(false))
          })
      }, error => {
        console.log('falle', error)
      })




  }
}




//c======================
//exportar las funciones que finalmente se van a comunicar
//con los componentes reales
//con el exterior
export default {
  getShopifyData
}