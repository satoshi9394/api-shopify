import { connect } from 'react-redux'
import Registro from '../components/Registro'

import { shopifystoreOperation } from '../store/shopifystore'

const mapStateToProps =(state) => {
  const { shop_is_loading, shop_exists, shop, shop_error} = state.shopify
  return{
    shop_is_loading,
    shop_exists,
    shop,
    shop_error
  }
}
const mapDispatchToProps = dispatch => ({
  createShop: (payload) => dispatch(shopifystoreOperation.createShop(payload)),
  clearError: () => dispatch(shopifystoreOperation.clearError())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registro)