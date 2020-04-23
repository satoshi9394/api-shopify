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

    case types.CLOSE_MODEL: {
      return{
        ...state,
        variant_in_modal: {},
        modal_open: false
      }
    }

    case types.STEP_VARIANT: {
      const { selected, next_index } = action

      const currentIndex = state.variants_with_conflict
        .findIndex( element => element.id === state.variant_in_modal.id)
      const variant = {...state.variant_in_modal, price_selected: selected }  

      let newVariants = JSON.parse(JSON.stringify(state.variants_with_conflict))
      newVariants[currentIndex]= variant

      const nextVariant = {...newVariants[next_index]}

      const remaining = newVariants.filter( element => 
        element.price_selected===undefined || 
        element.price_selected=== null
      )
      console.log('finalice cambios')
      return{
        ...state,
        variant_in_modal: nextVariant,
        variants_with_conflict: newVariants,
        can_solve: remaining.length > 0 ? false : true
      }
    }


    default: return state;
  }
  
}


export default variantReducer;