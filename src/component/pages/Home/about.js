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
                <h2 className='my-2 text-3xl '>About Us</h2>
                <p className='text-secondary'>A quick note before we dive into the details—I’m listing and talking about the different components of a computer. This is by no means intended to be an invitation to disassemble your computer, nor is it a set of instructions to do so. Without the proper knowledge, you can severely damage your computer, and importantly, doing so is unsafe. </p>
                <button className='mt-3 btn btn-primary'>Read More</button>
            </div>
        </section>
    );
};

export default MakeAppointment;