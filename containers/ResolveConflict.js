import {connect} from 'react-redux'

import ResolveConflict from '../components/ResolveConflict'
import { variantOperation } from '../store/variant'


const mapStateProps = state => ({
  variants_with_conflict: state.variant.variants_with_conflict,
  variant_in_modal: state.variant.variants_with_conflict,
  can_solve: state.variant.can_solve,
  modal_open: state.variant.modal_open

})
const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateProps,
  mapDispatchToProps
)(ResolveConflict)
  
