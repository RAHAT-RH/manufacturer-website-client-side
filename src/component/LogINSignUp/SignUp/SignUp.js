import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
import Loading from '../../../component/shared/Loading/Loading';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    // create email and password
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //   Sing In With Google

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || googleUser)


    

    let signInError;

    if (token) {
        // console.log(user, googleUser)
        navigate('/')
    }
    if(user || googleUser) {
        // console.log(user, googleUser)
    }

    if (loading || googleLoading || updating) {
        return <Loading></Loading>
    }

    if (error || googleError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message || updateError?.message}</small></p>
    }

    // handle Sign Up Button
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        // navigate('/appointment')
    }
    return (
        <div className='flex items-center justify-center h-screen '>
            <div class="card   w-96 bg-base-100 shadow-xl">
                <div class="card-body lg:mx-auto w-full">
                    <h2 class="text-center text-xl font-semibold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })} type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                                type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                                type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">

                                {errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* <div class="form-control w-full md:max-w-md lg:max-w-lg">
                            <label class="label">
                                <span class="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" class="input input-bordered w-full md:max-w-md lg:max-w-lg h-10" />
                            <label class="label">
                                 <span class="label-text-alt">error</span> 
                            </label>

                        </div> */}
                        <input type='submit' class="btn btn-primary w-full md:max-w-md lg:max-w-lg" value='Sign Up' />
                    </form>
                    {signInError}
                    <p className='text-center'><small>Already Have an Account <Link className='text-primary' to='/login'>Please Log In</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>

                </div>
            </div>

        </div>
    );
};

export default SignUp;