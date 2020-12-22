import { connect } from 'react-redux';
import {
  submitVendor,
  editVendor,
  deleteVendor,
  fetchVendorsTable,
  fetchVendor,
} from 'store/vendors/vendors.actions';
import t from 'store/types';

const mapDipatchToProps = (dispatch) => ({
  requestSubmitVendor: (form) => dispatch(submitVendor({ form })),
  requestEditVendor: (id, form) => dispatch(editVendor({ id, form })),
  requsetFetchVendor: (id) => dispatch(fetchVendor({ id })),
  requestFetchVendorsTable: (query = {}) =>
    dispatch(fetchVendorsTable({ query: { ...query } })),
  requestDeleteVender: (id) => dispatch(deleteVendor({ id })),
  changeVendorView: (id) =>
    dispatch({
      type: t.VENDORS_SET_CURRENT_VIEW,
      currentViewId: parseInt(id, 10),
    }),
  addVendorsTableQueries: (queries) =>
    dispatch({
      type: t.VENDORS_TABLE_QUERIES_ADD,
      payload: { queries },
    }),
});

export default connect(null, mapDipatchToProps);
