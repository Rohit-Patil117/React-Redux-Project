import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';

export default function RemoveUser(props) {

    const [userid, setUserid] = useState('');

    return (
        <div>
            <h1>Remove User</h1>
            <TextField id="outlined-basic"
                label="User ID"
                variant="outlined"
                onChange={(e) => { setUserid(e.target.value) }}
            /><br /><br />

            <Button variant="contained"
                color="secondary"
                onClick={() => {
                    props.removeToUserHandler({
                        userid: userid,
                    })
                }}
            >Remove User
            </Button>
        </div>
    );
}