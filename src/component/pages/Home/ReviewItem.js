import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = ({ review }) => {
    const {  name, img, description, star, designation } = review;
    console.log(name)
    return (
        <div className=''>
            <figure class="md:flex bg-slate-100 rounded-xl p-10 md:p-0  lg:px-12 overflow-hidden">
                <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512" />
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p class="text-lg font-medium">
                            {description}
                        </p>
                    </blockquote>
                    <figcaption class="font-medium">
                        <div class="text-sky-500 dark:text-sky-400">
                            {name}
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            {designation}
                        </div>
                        <div class="text-slate-700 dark:text-slate-500">
                            {star}
                        </div>
                    </figcaption>
                </div>
            </figure>

        </div>


    );
};

export default ReviewItem;