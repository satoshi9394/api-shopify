import types from './types'

const saveShopifyData = (shop) => {
  return{
    types: types.SAVE_SHOPIFY_DATA,
    shop, //shop: shop

  }
}

export default {
  saveShopifyData,

}

