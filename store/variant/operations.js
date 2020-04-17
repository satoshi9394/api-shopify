//acciones con axios async
//usamos thunk

import axios from 'axios'
import Creators from './actions'

import shopifyCreators from '../shopifystore/actions'

const setVariants = Creators.setVariants
const _shopExists = shopifyCreators.shopExists


// A ===================
//funciones que uso internamente en este archivo
//pero que el componente no necesita ejecutar
const _saveShopifyData  = Creators.saveShopifyData




// B ===================
//fuciones que se conectan con apis
//async usan thunk
const reviewVariants = (payload) => {

    return (dispatch, getState) => {

        const { shop } = getState().shopify

        axios.post(`/store/${shop.id}/review_variants`,payload)
            .then(response=>{

                dispatch(setVariants(response.data.store.variants))
                dispatch(_shopExists(response.data.store))

                console.log('reviewVariants success', response)

            }, error=>{

                console.log('reviewVariants error', error)
            })
    }

}



// C ===================
//exportar las funciones que finalmente se van a comunicar
//con los componentes reales es decir tienen comunicacion
//con el exterior
export default {
    reviewVariants
}