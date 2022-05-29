import React from 'react';

const Blogs = () => {
    return (
        <div class="grid grid-cols-3 py-40 gap-10  justify-center mx-auto">

            <div class="card w-full sm:grid-clo-1 sm:w-full  bg-base-100 shadow-xl">
                <div class="card-body p-5">
                    <h2 className='text-xl'>Answer:1</h2>
                    <p>
                        Internally I In proved, React uses several clever techniques to minimize the number of costly DOM operations required to update the UI. For many applications, using React will lead to a fast user interface without doing much work to specifically optimize for performance. Nevertheless, there are several ways you can speed up your React application.
                    </p>
                </div>
            </div>
            <div class="card w-full sm:w-full shadow-2xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:1</h2>
                    <p>
                        In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.
                        The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.
                    </p>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:1</h2>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:1</h2>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                    <h2 className='text-xl'>Answer:1</h2>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:1</h2>
                </div>
            </div>

        </div>
    );
};

export default Blogs;