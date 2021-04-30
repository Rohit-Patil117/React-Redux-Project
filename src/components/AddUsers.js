import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

export default function AddUsers(props) {
   
    const [userid, setUserid] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //console.log(props.data);

    return (
        <div>
            <h1>Add Users</h1>
            <TextField id="outlined-basic"
                label="User ID"
                variant="outlined"
                onChange={(e) => { setUserid(e.target.value) }}
            /><br /><br />
            <TextField id="outlined-basic"
                label="User Name"
                variant="outlined"
                onChange={(e) => { setUsername(e.target.value) }}
            /><br /><br />
            <TextField id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => { setEmail(e.target.value) }}
            /><br /><br />
            <TextField id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => { setPassword(e.target.value) }}
            /><br /><br />
            <Button variant="contained"
                color="primary"
                onClick={() => {
                    props.addToUserHandler({
                        userid: userid,
                        username: username,
                        email: email,
                        password: password
                    })
                }}
            >Add User
            </Button>
        </div>
    );

}