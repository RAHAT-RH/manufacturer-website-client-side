import React from 'react';
const Service = ({ service }) => {

    return (
        <div className=" card lg:max-w-lg bg-base-100">
            <figure className="px-10 pt-10 mx-auto w-60">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="items-center text-center card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>

            </div>
        </div>



    );
};

export default Service;