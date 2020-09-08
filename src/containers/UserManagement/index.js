import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUserData } from 'containers/App/actions';
import UserManagementComponent from './UserManagement';
import { getUserListData } from './selectors';

const mapStateToProps = createStructuredSelector({
    usersList: getUserListData(),
});
const mapDispatchToProps = (dispatch) => ({
    getSearchResult: (searchKey) => dispatch(getUserData(searchKey)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserManagementComponent);
