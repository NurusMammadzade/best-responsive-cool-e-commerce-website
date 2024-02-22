"use client";

import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';


const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false
    };
    const sliderData = [
        {
            id: 0,
            img: "/vertj.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/vertj.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15"
        },
        {
            id: 2,
            img: "/vertj.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30"
        }

    ]
  return (
    <div>
      <div className='container pt-6 lg:pt-0 font-black'>
        <Slider {...settings}>
            {sliderData.map((item) => (
                <Slide key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price} />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
