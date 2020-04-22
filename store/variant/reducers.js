import types from './types'

const INITAL_STATE = {
  variant_is_loading: true,
  variants: [],

  variants_with_conflict: [],
  variant_in_modal: {},
  can_solve: false,
  modal_open: false


}

const variantReducer = (state = INITAL_STATE, action) => {
  
  switch(action.type){
    case types.SET_VARIANTS: {
      const { variants } = action
      
      return {
        ...state,
        variants,
        variant_is_loading: false,
        variants_with_conflict: 
        variants.filter( element => element.status === 'Conflicto')
          .map(element => {return {...element, price_selected:null } }),
        
      }
    }
    case types.SOLVE_VARIANT: {
      const { id } = action
      const index = state.variants_with_conflict.findIndex( element => element.id === id)
      //const variant_in_modal = {...state.variants_with_conflict[index]} ES6
      const variant_in_modal = JSON.parse(JSON.stringify(state.variants_with_conflict[index]))
      return {
        ...state,
        variant_in_modal,
        modal_open: true

      }
    }


    default: return state;
  }
  
}


export default variantReducer;