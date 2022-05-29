import React from 'react';
import { FaUserPlus, FaFingerprint } from "react-icons/fa";
const Stat = () => {
    return (
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 mx-auto  pb-20  overflow-hidden">

            <div class="stat flex justify-center">
                <div class="stat-figure text-secondary">
                <FaUserPlus class="inline-block w-8 h-8" />
                </div>
                <div>
                    <div class="stat-title">Customers</div>
                    <div class="stat-value">31K</div>
                    <div class="stat-desc">Jan 1st - Feb 1st</div>
                </div>
            </div>

            <div class="stat flex justify-center">
                <div class="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div><div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div></div>
            </div>

            <div class="stat flex justify-center">
                <div class="stat-figure text-secondary">
                <FaFingerprint class="inline-block w-8 h-8"/>
                </div>
                <div>
                    <div class="stat-title">New Registers</div>
                    <div class="stat-value">1,200</div>
                    <div class="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>

        </div>
    );
};

export default Stat;