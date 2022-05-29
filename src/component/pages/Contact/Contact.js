import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div class="hero min-h-screen overflow-hidden">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left w-96">
                    <h1 class="text-4xl font-bold">Contact Us</h1>
                    <p class="py-6">
                        <span className='text-xl font-bold'>Tech Parts</span> <br />
                        Gulshan, Middle Badda -1100. <br />
                        tel: +88455445 <br />
                        Dhaka,Bangladesh
                    </p>
                </div>
                <div class="card flex w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="Write Your Message " class="textarea textarea-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;