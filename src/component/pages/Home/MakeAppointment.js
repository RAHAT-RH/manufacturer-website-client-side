import React from 'react';
import cpu from '../../../assets/Photos/rgb-black-glass.jpg'
// import bg from '../../../assets/Photos/bg.jpg'


const MakeAppointment = () => {
    return (
        <section  className='flex items-center justify-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='' src={cpu} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                <h2 className='my-2 text-3xl '>Make an Appointment Today</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis harum hic earum repellat saepe velit pariatur, dolorem illo ea iste a iusto quidem modi ipsa possimus molestias consectetur. Doloribus at debitis illum minima sequi nisi autem quaerat corporis dolorum eveniet.</p>
                <button className='btn btn-primary'>Get Appointment</button>
            </div>
        </section>
    );
};

export default MakeAppointment;