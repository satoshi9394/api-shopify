//aciones puras no asincronas
import types from './types'

const saveShopifyData = (shop) => {
  return{
    type: types.SAVE_SHOPIFY_DATA,
    shop, //shop: shop
  }
}

const registroBtn = (shop_exists) => {
  return{
    type: types.REGISTRO_BTN_ACTIVE,
    shop_exists
  }
}

const loading = (shop_loading) => {
  return{
    type: types.ACTIVE_LOADING,
    shop_loading
  }
}

export default {
  saveShopifyData,
  registroBtn,
  loading
}

