import './App.css';
import AddUsers from './containers/AddUserContainer';
import UserList from './containers/UserListContainer';
import RemoveUser from './containers/RemoveUserContainer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="App-footer">
        <h1>React - Redux</h1>
      </div>
      <div className="App-container">
        <div className="App-add">
          <BrowserRouter>
            <Link to={'/'}><Button color="primary">Add User</Button></Link>
            <Link to={'/remove'}><Button color="secondary">Remove User</Button></Link>

            <Route exact path="/" component={AddUsers}></Route>
            <Route path="/remove" component={RemoveUser}></Route>
          </BrowserRouter>

        </div>
        <div className="App-list">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
