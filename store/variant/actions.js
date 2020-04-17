//aciones puras no asincronas
import types from './types'

const setVariants = (variants) => {
  return{
    type: types.SET_VARIANTS,
    variants, //shop: shop
  }
}

export default {
  setVariants,
}

