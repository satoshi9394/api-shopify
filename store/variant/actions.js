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

const closeModal = () => {
  return{
    type: types.CLOSE_MODEL
  }
}

const stepVariant = (selected, next_index) => {
  return{
    type: types.STEP_VARIANT,
    selected,
    next_index
  }
}

export default {
  setVariants,
  solveVariant,
  closeModal,
  stepVariant
}

