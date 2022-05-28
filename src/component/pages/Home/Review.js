import React from 'react';

const Review = ({ review }) => {
    const {name, description, designation, img, rating} = review;
    return (
        <div className="grid mx-auto lg:max-w-lg bg-base-100">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex items-center justify-around pb-5'>
                <div className="avatar">
                    <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl">{name}</h3>
                    <h3 className="text-xl">{designation}</h3>
                    <p>{rating}</p>
                </div>

            </div>
        </div>
    );
};

export default Review;