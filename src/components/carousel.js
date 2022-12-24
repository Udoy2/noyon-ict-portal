import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import { dataDigitalBestSeller } from './data';


function Slide() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div className="carousel ">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="overflow-hidden rounded-md cursor-pointer text-black h-[25rem] bg-[#fdfdfd] border-2  border-[#ffffff] shadow-lg hover:scale-105 duration-300" key={item.id}>
            <div className="card-top">
              <img
                src={item.linkImg}
                alt={item.title}
                className='w-full h-[200px] object-cover bg-[#68b984]'
              />
              <h1 className='text-2xl font-bold m-4'>{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
            
          </div>
        ))}
      </Slider> 
    </div>
  );
} 

export default Slide;