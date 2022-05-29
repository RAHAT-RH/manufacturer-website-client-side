import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState({});
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const myProfile = {
                        name: user.displayName,
                        email: user.email,
                        description: data.description,
                        address: data.address,
                        education: data.education,
                        img: img,
                    }
                    // send to my database
                    fetch('http://localhost:5000/myProfile', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(myProfile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('Review Added Successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Product')
                            }
                        })
                }

            })
    }

    // get data
    useEffect(() => {
        fetch(`http://localhost:5000/myProfile/${user.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user])

    const imageStorageKey = '4c8d6ff46a25522b68b347a2284bbf1f';
    return (
        <div>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card w-full flex lg:w-full  shadow-2xl bg-base-100">
                    <div class="avatar mx-auto">
                        <div class="w-40 border-2 mask mask-squircle">
                            <img src={profile.img}alt=''/>
                        </div>
                    </div>
                    <div class="card-body">

                        <h2 className='text-xl'> <span className='font-bold'>Name: {profile.name}</span> </h2>
                        <h2 className='font-normal text-normal'> <span className='font-bold'>Email: {profile.email}</span> </h2>
                        <p className='text-sm'> <span className='font-bold'>Description: {profile.description}</span> </p>
                        <p className='text-sm'> <span className='font-bold'>Education: {profile.education}</span> </p>
                        <p className='text-sm'> <span className='font-bold'>Address: {profile.address}</span> </p>
                        
                    </div>
                </div>

                <div class="card w-full lg:mim-w-full  shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                    <span class="label-text">About Me</span>
                                </label>
                                <textarea
                                    {...register("description", {
                                        required: {
                                            value: true,
                                            message: "Description is Required"
                                        },
                                    })} class="textarea textarea-bordered" placeholder="Bio"></textarea>
                                <label className="label">
                                    {errors.description?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}

                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Education Qualification</span>
                                </label>
                                <input type="text"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: "education is Required"
                                        },
                                    })}
                                    class="input input-bordered" />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: "address is Required"
                                        },
                                    })}
                                    class="input input-bordered" />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Image</span>
                                </label>
                                <input type="file"
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "Image Is Required"
                                        }
                                    })}
                                    class="input input-bordered" />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Add Profile</button>
                            </div>
                        </form>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default MyProfile;