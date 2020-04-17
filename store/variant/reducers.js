import types from './types'

const INITAL_STATE = {
  variant_is_loading: true,
  variants: [],

}

const variantReducer = (state = INITAL_STATE, action) => {
  
  switch(action.type){
    case types.SET_VARIANTS: {
      const { variants } = action
      
      return {
        ...state,
        variants,
        variant_is_loading: false

      }
    }


    default: return state;
  }
  
}


export default variantReducer;