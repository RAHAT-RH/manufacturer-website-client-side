import React from 'react';
import monitor from '../../../assets/bannerPhoto/curve-monitor.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{background: `url(${monitor})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center"}}>
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content  text-center text-white">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
            <p class="mb-5">Enjoy the members-only access to the best parts on products and curated
services and solutions that fit your business needs.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;