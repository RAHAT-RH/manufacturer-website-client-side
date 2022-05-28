import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
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
                    const review = {
                        name: user.displayName,
                        description: data.description,
                        designation: data.designation,
                        img: img,
                        rating: "⭐️⭐️⭐️⭐️⭐️"
                    }
                    // send to my database
                    fetch('http://localhost:5000/review', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
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

    const imageStorageKey = '4c8d6ff46a25522b68b347a2284bbf1f';
    return (
        
            <div class="card  w-full  lg:w-2/4 mx-auto shadow-2xl bg-base-100">


                <div class="card-body">
                    <h2 className='text-xl font-bold text-center'>Add A Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Name Field */}

                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Product Name"
                                className="w-full input input-bordered"
                                value={user.displayName} disabled
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                            </label>
                        </div>

                        {/* Description Field */}

                        <div className="w-full  form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea placeholder="write something"
                                className="textarea textarea-bordered w-full"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is Required"
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}

                            </label>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Designation</span>
                            </label>
                            <input type="text"
                                placeholder="Designation"
                                className="w-full input input-bordered"
                                {...register("designation", {
                                    required: {
                                        value: true,
                                        message: "price is Required"
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.designation?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                            </label>
                        </div>

                        {/* Image Upload Field */}

                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"
                                className="w-full  input input-bordered"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image Is Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.image.message}</span>}
                            </label>
                        </div>


                        <input className='w-full  btn' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        
    );
};

export default AddReview;