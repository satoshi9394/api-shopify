import { connect } from 'react-redux'
import Home from '../components/Home'

import { shopifystoreOperation } from '../store/shopifystore'
import {variantOperation} from '../store/variant'


const mapStateToProps =(state) => {
  const { shop_is_loading, shop_exists, shop_status} = state.shopify
  return{
    shop_is_loading,
    shop_exists,
    shop_status
  }
}
const mapDispatchToProps = dispatch => ({
  getShopifyData: () => dispatch(shopifystoreOperation.getShopifyData()),
  reviewVariants: (payload) => dispatch(variantOperation.reviewVariants(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
