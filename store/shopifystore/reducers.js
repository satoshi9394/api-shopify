import types from './types'

const INITAL_STATE = {
  shop: null,
  shop_exists: false,
  shop_loading: true,
  shop_error: null,
  shop_status: null 
}

const shopifystoreReducer = (state = INITAL_STATE, action) => {
  
  switch(action.type){
    case types.SAVE_SHOPIFY_DATA: {
      const { type, shop } = action
      
      return {
        ...state,
        shop
      }
    }

    default: return state;
  }
  
}


export default shopifystoreReducer;