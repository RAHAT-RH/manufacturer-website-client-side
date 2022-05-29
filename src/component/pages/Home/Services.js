import React from 'react';
import computer from '../../../assets/images/mouse-svgrepo-com.svg'
import customer from '../../../assets/images/customer-service-headset-svgrepo-com.svg'
import service from '../../../assets/images/heardware.svg'

import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Our Best Service",
            description: 'From real-time AI to desktop automation, our solution delivers everything you need to bring service into the digital era. ',
            img: computer
        },
        {
            _id: 2,
            name: "Service 24/7",
            description: '24/7 Customer, which has been rebranded as [24]7 Inc., offers software products targeted at financial services, communications, retail, travel and technology industries.',
            img: customer
        },
        {
            _id: 3,
            name: "High Speed",
            description: 'The prevalence of various types of electronic devices is rising rapidly in recent years. Almost every device contains a CPU (central processing unit) to execute most instructions.',
            img: service
        },
    ]
    return (

        < div className='px-12 my-28' >
            <div className="text-center">
                <h3 className='text-xl font-bold uppercase text-primary'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;