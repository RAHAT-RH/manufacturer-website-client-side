import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import formatRelativeWithOptions from 'date-fns/fp/formatRelativeWithOptions/index.js';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    const {_id, userName, product, totalPrice,  userEmail } = order;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        //   if(error){
        //     setCardError(error.message);
        //   }
        //   else{
        //       setCardError('');
        //   }
        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);
        //  confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail

                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)
        }
        else {
            setCardError('')
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! payment is completed')

            // store payment on Database
            const payment = {
                order: _id,
                product: product,
                transactionId: paymentIntent.id,
            }
            
            fetch(`http://localhost:5000/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(formatRelativeWithOptions)
                    console.log(data);
                })
        }
        if(processing) {
            return <Loading></Loading>
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-4 btn btn-success btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction Id: <span className='font-bold text-orange-500'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;