import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Avatar from '../../../assets/Photos/avatar.png'

const Navbar = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    const menuItem = [
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            {/* <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li> */}
            {
                user && <li><Link to='/dashboard'>Dashboard</Link></li>
            }
            {/* <li>{
                user?.uid ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>
            }</li> */}
            <li>{
                user?.uid ? <div class="dropdown dropdown-end">
                    <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            {user.photoURL ? <img src={user?.photoURL} alt='' /> : <img src={Avatar} style={{ width: '100%' }} alt='' />}
                        </div>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-44 p-2 shadow bg-black text-white rounded-box w-52">
                        <li><button onClick={logout} className="btn btn-ghost">Sign Out</button></li>
                    </ul>
                </div> :
                    <Link to='/login'>Login</Link>
            }
            </li>

        </>
    ]
    return (
        <div class="navbar text-white bg-black lg:px-12 ">
            <div class="navbar-start">
                <div class="dropdown ">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="h-screen bg-black menu menu-compact dropdown-content mt-3 p-0 shadow bg-base-100  w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            {/* <div class="navbar-end">
                <a class="btn">Get started</a>
            </div> */}
            <div className="navbar-end lg:hidden">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;