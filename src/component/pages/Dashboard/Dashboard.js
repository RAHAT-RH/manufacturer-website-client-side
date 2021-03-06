import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../../firebase.init'

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl text-primary text-bold'>Welcome To Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                    {!admin && <>
                        <li><Link to='/dashboard/myOrder'>My Orders</Link></li>
                        <li><Link to='/dashboard/review'>Add A Review</Link></li>
                    </>
                    }


                    {admin && <>
                        <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/manageOrders'>Manage All Orders</Link></li>

                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;