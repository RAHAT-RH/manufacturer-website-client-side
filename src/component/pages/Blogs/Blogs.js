import React from 'react';

const Blogs = () => {
    return (
        <div class="grid lg:grid-cols-3 sm:grid-cols-1 py-32 gap-10 px-12 justify-center mx-auto">
            
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
                <h2 className='text-xl'>Answer:2</h2>
                    <p>
                        In modern React, we build our applications with functional components. Components are themselves JavaScript functions, independent and reusable bits of code.
                        The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.
                    </p>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:3</h2>
                <p>
                Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using
                </p>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:4</h2>
               <p>
               One should never update the state directly because of the following reasons: <br />
                    1. If I update it directly, calling the setState() afterward may just replace the update you made. <br />
                    2. When I directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. <br />
                    3. You will lose control of the state across all components. <br />
               </p>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                    <h2 className='text-xl'>Answer:5</h2>
                    <p>
                    If you're building a React app, you want your users to be able to search and get exact results. And if you are getting tons of items from an API, then you need to create a way for users to be able to find various items easily.
                    </p>
                </div>
            </div>
            <div class="card w-full  sm:w-full  shadow-xl bg-base-100">
                <div class="card-body p-5">
                <h2 className='text-xl'>Answer:6</h2>
                <p>
                Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.
                </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;