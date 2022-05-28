import React, { useEffect, useState, Component } from 'react';
import Slider from "react-slick";
import './Reviews.css'
import ReviewItem from './ReviewItem';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviewItem.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section class="py-10">
            
            <Slider {...settings}>
                {
                    reviews.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
                }
            </Slider>
        </section>
    );
};

export default Reviews;