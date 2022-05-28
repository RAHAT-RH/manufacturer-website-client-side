import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?userEmail=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if(res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setMyOrders(data);
                })
        }
    }, [user])
    return (
        <div className='overflow-x-hidden'>
            
            <div class="overflow-x-auto ">
                <table class="table w-full overflow-x-hidden">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Order Item</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((myOrder, index) => <MyOrderRow myOrder={myOrder} key={index} index={index}></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;