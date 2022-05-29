import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({user, index, refetch, setDeleteUser}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {   
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed To Make An Admin')
            }
            return res.json()
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success("Successfully Make An Admin");
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <button disabled class="btn btn-xs">Admin</button>}</td>
            <td>{role !== 'admin' ? <label   onClick={()=> setDeleteUser(user)} for="delete-confirm-user-modal" class="btn modal-button btn-xs bg-red-500">Delete</label> : <label disabled onClick={()=> setDeleteUser(user)} for="delete-confirm-user-modal" class="btn modal-button btn-xs bg-red-500">Delete</label>}</td>
        </tr>
    );
};

export default UsersRow;