import {connect} from 'react-redux'

import ResolveConflict from '../components/ResolveConflict'
import { variantOperation } from '../store/variant'


const mapStateProps = state => ({
  variants_with_conflict: state.variant.variants_with_conflict,
  variant_in_modal: state.variant.variant_in_modal,
  can_solve: state.variant.can_solve,
  modal_open: state.variant.modal_open

})
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(variantOperation.closeModal()),
  stepVariant: (selected, next_index) => dispatch(variantOperation.stepVariant(selected, next_index))
})

export default connect(
  mapStateProps,
  mapDispatchToProps
)(ResolveConflict)
  
