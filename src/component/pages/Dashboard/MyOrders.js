import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

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
                    if (res.status === 401 || res.status === 403) {
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
    }, [user, navigate])
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
                            myOrders.map((order, index) =>  <tr class='' key={index}>
                            <th>{index + 1}</th>
                            <td>{order.userName}</td>
                            <td >
                                <div className='flex items-center gap-2'>
                                    <div class="avatar ">
                                        <div class="w-14 rounded">
                                            <img src={order.img} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                    <div>
                                        {order.product}
                                    </div>
                                </div>
                            </td>
                            <td>{order.totalPrice}</td>
                            <td>{order.orderQuantity}</td>
                            <td>{order.userEmail}</td>
                            <td>{(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                {(order.totalPrice && order.paid) && <div>
                                    <p><span className="text-success">Paid</span></p>
                                    <p>Transaction id: <span className="text-success"> {order.transactionId}</span></p>
                                </div>}</td>
                        </tr>)
                        }
                        
                        {/* {
                            myOrders.map((myOrder, index) => <MyOrderRow myOrder={myOrder} key={index} index={index}></MyOrderRow>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;