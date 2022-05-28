import React from 'react';
import { Link } from 'react-router-dom';

const PartsGroup = ({part}) => {
    const {_id, name, img, quantity, price, description} = part

    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{price}</p>
                <p className=''>Avalabible: {quantity}</p>
                <p>{description}</p>
                <div class="card-actions justify-end">
                    <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default PartsGroup;