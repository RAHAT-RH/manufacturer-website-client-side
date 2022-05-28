import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';


const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [error, setError] = useState('')

    const { data: services, isLoading, refetch } = useQuery(['available'], () => fetch(`http://localhost:5000/allProducts/${id}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allProducts/${id}`)
    //         .then(res => res.json())
    //         .then(data => setSingleProduct(data))
    // }, [singleProduct])
    const { _id, name, quantity, price, img, description } = services;


    const placeOrder = event => {
        event.preventDefault()
        const orderQuantity = event.target.orderQuantity.value;
        if (parseInt(orderQuantity) < 2) {
            return setError('Min order 2')
        }
        const totalPrice = parseInt(orderQuantity) * price;
        const resentQuantity = parseInt(orderQuantity) - quantity;
        // console.log(numberPrice)
        // console.log(resentQuantity)


        const order = {
            product: name,
            img,
            orderQuantity,
            totalPrice,
            userEmail: user.email,
            userName: user.displayName,
            address: event.target.address.value
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                // close the modal
                console.log(data)

                toast.success("Order Successfully")
                refetch();
                event.target.reset()

            })
    }
    return (
        <div class="flex lg:h-screen sm:h-full justify-center  mx-auto">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card lg:w-2/4 sm:w-96  bg-base-100 shadow-xl">
                    <figure><img width={300} src={img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <h2 className='text-xl badge badge-lg'> <span className='font-bold'>Price:</span> ${price}</h2>
                        <p className='text-sm'> <span className='font-bold'>Quantity:</span> ${quantity}</p>
                        <p>{description}</p>
                    </div>
                </div>
                <div class="card w-full flex lg:w-2/4  shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={placeOrder}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" value={user.displayName} disabled class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Email</span>
                                </label>
                                <input type="text" value={user.email} disabled class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <textarea name='address' class="textarea textarea-bordered" placeholder="Bio"></textarea>

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input type="number" onClick={(event) => event.target.value} name='orderQuantity' required mim-value={2} class="input input-bordered" />
                                <label class="label">
                                    <span class="label-text">{error}</span>
                                </label>
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;