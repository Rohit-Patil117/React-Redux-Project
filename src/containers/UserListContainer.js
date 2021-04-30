import UserList from '../components/UserList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data: state.addUsers
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList)