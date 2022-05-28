import React from 'react';

const Payment = () => {
    return (
        <div>
            <div class="card w-50  max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                <div class="card-body">
                    <p className='font-bold text-success'>Hello, </p>
                    <h2 class="card-title">Please Pay for </h2>
                    <p>Your order <span className="text-orange-600"></span> at </p>
                    <p>Please Pay: </p>
                </div>
            </div>
            <div class="card mx-auto flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements> */}


                </div>
            </div>
        </div>
    );
};

export default Payment;