import RemoveUser from '../components/RemoveUser';
import { connect } from 'react-redux';
import { Remove } from '../services/actions/Action';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    removeToUserHandler: data => dispatch(Remove(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveUser)