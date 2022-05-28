import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import quote from '../../../assets/icons/quote.svg'
import Review from './Review';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    // const reviews = [
    //     {
    //         "_id": 1,
    //         "name": "Rahat",
    //         "img": "https://i.ibb.co/sgdR7LM/testimonial-2.jpg",
    //         "description": "A designation is a description, name, or title that is given to someone or something. Designation is the fact of giving that description, name, or title.",
    //         "designation": "Student, Bangladesh",
    //         "star": "⭐️⭐️⭐️⭐️⭐️"
    //     },
    //     {
    //         "_id": 1,
    //         "name": "Rahat",
    //         "img": "https://i.ibb.co/sgdR7LM/testimonial-2.jpg",
    //         "description": "A designation is a description, name, or title that is given to someone or something. Designation is the fact of giving that description, name, or title.",
    //         "designation": "Student, Bangladesh",
    //         "star": "⭐️⭐️⭐️⭐️⭐️"
    //     },
    //     {
    //         "_id": 1,
    //         "name": "Rahat",
    //         "img": "https://i.ibb.co/sgdR7LM/testimonial-2.jpg",
    //         "description": "A designation is a description, name, or title that is given to someone or something. Designation is the fact of giving that description, name, or title.",
    //         "designation": "Student, Bangladesh",
    //         "star": "⭐️⭐️⭐️⭐️⭐️"
    //     }
    // ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className='px-12 my-28'>
            <div className='flex justify-between my-10'>
                <div>
                    <h4 className="text-xl font-bold text-primary">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Client Say</h2>
                </div>
                <div>
                    <img className='sm:w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>


            <div className=''>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;