import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import MakeAppointment from './about';
import Testimonials from './Testimonials';
import ComputerParts from './ComputerParts';
import Stat from './Stat';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ComputerParts></ComputerParts>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Stat></Stat>
            {/* <Reviews></Reviews> */}
        </div>
    );
};

export default Home;