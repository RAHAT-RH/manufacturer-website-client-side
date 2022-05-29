import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import MakeAppointment from './about';
import Testimonials from './Testimonials';
import ComputerParts from './ComputerParts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ComputerParts></ComputerParts>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            {/* <Reviews></Reviews> */}
        </div>
    );
};

export default Home;