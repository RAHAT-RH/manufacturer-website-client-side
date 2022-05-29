import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import UserConfirmDelete from './UserConfirmDelete';
import UsersRow from './UsersRow';

const AllUsers = () => {
    const [deleteUser, setDeleteUser] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-xl font-bold'>All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UsersRow key={user._id} user={user} index ={index} refetch={refetch}  setDeleteUser={setDeleteUser}></UsersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteUser && 
                <UserConfirmDelete 
                refetch={refetch}
                deleteUser={deleteUser}
                setDeleteUser={setDeleteUser}
                >
                    
                </UserConfirmDelete>
            }
        </div>
    );
};

export default AllUsers;