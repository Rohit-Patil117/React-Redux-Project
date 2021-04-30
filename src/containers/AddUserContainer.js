import AddUsers from '../components/AddUsers';
import { connect } from 'react-redux';
import { Add } from '../services/actions/Action';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addToUserHandler: data => dispatch(Add(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers)