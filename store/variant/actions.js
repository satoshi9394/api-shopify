//aciones puras no asincronas
import types from './types'

const setVariants = (variants) => {
  return{
    type: types.SET_VARIANTS,
    variants, //shop: shop
  }
}
const solveVariant = (id) => {
  return{
    type: types.SOLVE_VARIANT,
    id, //shop: shop
  }
}

export default {
  setVariants,
  solveVariant
}

