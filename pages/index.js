import { connect } from 'react-redux'
import Home from '../components/Home'

import { shopifystoreOperation } from '../store/shopifystore'

const mapStateToProps =(state) => {
  const { shop_is_loading, shop_exists, shop_status} = state.shopify
  return{
    shop_is_loading,
    shop_exists,
    shop_status
  }
}
const mapDispatchToProps = dispatch => ({
  getShopifyData: () => dispatch(shopifystoreOperation.getShopifyData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
