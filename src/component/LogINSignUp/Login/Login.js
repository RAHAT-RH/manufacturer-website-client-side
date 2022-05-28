import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../shared/Loading/Loading';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || googleUser);

    
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])




    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signInError = <p className='text-red-500'><small>{error?.message || googleError?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    return (
        <div className='flex items-center justify-center h-screen '>
            <div class="card   w-96 bg-base-100 shadow-xl">
                <div class="card-body lg:mx-auto w-full">
                    <h2 class="text-center text-xl font-semibold">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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

                        <input type='submit' class="btn btn-primary w-full md:max-w-md lg:max-w-lg" value='Sign Up' />
                    </form>
                    {signInError}
                    <p className='text-center'><small>Create New Account <Link className='text-primary' to='/signup'>Please Sing Up</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;