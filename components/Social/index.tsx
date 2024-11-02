import React, { useState } from 'react';
import './SocialMediaUpdates.css';
import Image from 'next/image';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const SocialMediaUpdates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 3;

  const updates = [
    {
      title: "Six ways to make your house a smart home",
      description: "Smart home tech can help you save time, money and energy – plus it can add value to your home. Here's how to turn your house into a smart home.",
      image: require("../../assets/Social/image (10).png"),
    },
    {
      title: "Eight ways to tell if your home is winning the value race",
      description: "We're not saying it's a competition. But you might be winning. Want to know if your home’s gaining value faster than a mate’s?",
      image: require("../../assets/Social/unsplash_C__Rq5aCoPg.png"),
    },
    {
      title: "Seven ways to improve your home's EPC rating",
      description: "Rising energy bills and a hunger for greener living mean a good EPC rating is now more important than ever. Here's how to get one for your home.",
      image: require("../../assets/Social/unsplash_mCxk_ba7CJ8.png"),
    },
    {
      title: "Seven ways to improve your home's EPC rating",
      description: "Rising energy bills and a hunger for greener living mean a good EPC rating is now more important than ever. Here's how to get one for your home.",
      image: require("../../assets/Social/unsplash_mCxk_ba7CJ8.png"),
    },
  ];

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: visibleItems,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),

  };

  return (
    <div className='social-media-updates-container'>    
    <div className="social-media-updates">
    <div className="blurbackground2"></div>
      <h2 className='social-media-updates-title'>Our Social Media Updates</h2>
   
      <Slider {...settings}>
        
        {updates.map((update, index) => (
          <div className="update-card" key={index}>
            <Image src={update.image} alt={update.title} />
            <h3>{update.title}</h3>
            <p>{update.description}</p>
           
          </div>
          
        ))}
        
      </Slider>
      </div>
    </div>
  );
};

export default SocialMediaUpdates;
