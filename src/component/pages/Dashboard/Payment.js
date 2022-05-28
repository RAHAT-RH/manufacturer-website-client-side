import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2GDxCnfQKZ3PG64anyXRaI5sfOwANqppUHlpHV5LgbIswPqk9KeGoevN89cZGgE0oz8KsizJogWBnVYNaucOvQ00Xbk1lDf3');
const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/orders/${id}`
    
    const {data: order, isLoading} = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    const {userName, product, orderQuantity, totalPrice, userEmail, address} = order
    return (
        <div>
            <div class="card w-50  max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className='font-bold text-success'>Hello, {userName}</p>
                    <h2 class="card-title font-normal">Your Product : <span className='font-medium'>${product}</span></h2>
                    <p>Your Address <span className="text-orange-600">{address}</span></p>
                    <p>Your Order Quantity {orderQuantity}</p>
                    <p>Please Pay: {totalPrice}</p>
                </div>
            </div>
            <div class="card mx-auto flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>


                </div>
            </div>
        </div>
    );
};

export default Payment;