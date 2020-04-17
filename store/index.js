import { combineReducers } from 'redux'

import shopifystoreReducer from './shopifystore'
import variantReducer from './variant'

const rootReducer = combineReducers({
  shopify: shopifystoreReducer,
  variant: variantReducer
})

export default rootReducer;
