import { combineReducers } from 'redux'

import shopifystoreReducer from './shopifystore'

const rootReducer = combineReducers({
  shopify: shopifystoreReducer
})

export default rootReducer;
