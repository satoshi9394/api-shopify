import { connect } from 'react-redux'
import Products from '../components/Products'

import { shopifystoreOperation } from '../store/shopifystore'
import {variantOperation} from '../store/variant'

const mapStateToProps =(state) => {
  const { variant_is_loading, variants } = state.variant
  return{
    variant_is_loading,
    variants
  }
}
const mapDispatchToProps = dispatch => ({
  getShopifyData: () => dispatch(shopifystoreOperation.getShopifyData()),
  reviewVariants: (payload) => dispatch(variantOperation.reviewVariants(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
