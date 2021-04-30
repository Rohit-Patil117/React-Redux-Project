import { useEffect, useState } from "react";

export default function UserList(props) {
   // console.log('UserList', props.data);
    
    const [arr, setArr] = useState([]);

    useEffect(() => {
        setArr(props.data);
    });

    return (
        <div>
            <h1>User Store</h1>
            <table border='1' align="center" width='80%'>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((el, i) => (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{el.users.userid}</td>
                            <td>{el.users.username}</td>
                            <td>{el.users.email}</td>
                            <td>{el.users.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}