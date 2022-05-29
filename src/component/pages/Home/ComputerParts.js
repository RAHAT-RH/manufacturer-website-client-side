import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PartsGroup from './PartsGroup';

const ComputerParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='pb-20'>
            <div className='text-center p'>
                <h2 className='text-xl font-bold text-primary'>Computer Parts</h2>
                <h3 className='text-3xl'>Best Quality We Provide</h3>
            </div>
            <div className='grid gap-8 my-20 lg:px-12 sm:w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    parts.slice(0, 6).map(part => <PartsGroup key={part._id} part={part}></PartsGroup>)
                }
            </div>
            <div className='mx-auto text-center'>
            <Link to='/allShowProducts' className='text-center btn btn-secondary'>See More</Link>
            </div>
        </div>
    );
};

export default ComputerParts;