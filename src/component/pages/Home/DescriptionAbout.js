import React from 'react';
import Processor from '../../../assets/processor.jpg'

const DescriptionAbout = () => {
    return (
        <div class="hero min-h-full py-20 ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Processor} alt='' class="lg:max-w-lg sm:max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-4xl font-normal">Lets take your Computer Build <br /> To <span className='text-primary'>Next</span> Generation</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DescriptionAbout;