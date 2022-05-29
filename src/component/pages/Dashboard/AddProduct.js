import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/allParts').then(res => res.json()))


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
                    const product = {
                        name: data.name,
                        description: data.description,
                        quantity: data.quantity,
                        price: data.price,
                        img: img
                    }
                    // send to my database
                    fetch('http://localhost:5000/product', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast.success('Product Added Successfully')
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
        <div className='flex items-center justify-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=""><h2 className='text-2xl'>Add A New Product</h2></h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Name Field */}

                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                placeholder="Product Name"
                                className="w-full max-w-xs input input-bordered"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                            </label>
                        </div>

                        {/* Description Field */}

                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text"
                                placeholder="Description"
                                className="w-full max-w-xs input input-bordered"
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

                        {/* Quantity options */}

                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number"
                                placeholder="Quantity"
                                className="w-full max-w-xs input input-bordered"
                                {...register("quantity",  {
                                    required: {
                                        min: 20,
                                        value: true,
                                        message: "Quantity is Required"
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                            </label>
                        </div>

                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number"
                                placeholder="price"
                                className="w-full max-w-xs input input-bordered"
                                {...register("price",  {
                                    required: {
                                        min: 20,
                                        value: true,
                                        message: "price is Required"
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}


                            </label>
                        </div>

                        {/* Image Upload Field */}

                        <div className="w-full max-w-xs form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file"
                                className="w-full max-w-xs input input-bordered"
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
                        

                        <input className='w-full max-w-xs btn' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;