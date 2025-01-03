"use client";
import React from 'react';
import './ContactUs.css';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';

const ContactUs = () => {

  // const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   event.preventDefault();
  //   const targetId = event.currentTarget.getAttribute('href')?.substring(1);
  //   const targetElement = document.getElementById(targetId || '');
  //   if (targetElement) {
  //     window.scrollTo({
  //       top: targetElement.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <>
    <Header />
     <div>
      <div className="hero" id="hero">
        <div className="hero-backgroundimage">
          <h1 className='hero-title'>CONTACT US</h1>
          <p className='hero-subtitle'>We provide a complete service for the sale, purchase or rental of real estate.</p>
          <div className="scroll-down">
            <a href="#contact-section"
            //  onClick={handleScroll}
              style={{display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white'}}>
              <Image src={require('../../assets/drop-icon.png')} alt="Scroll down" className='scroll-down-icon'/>
              Scroll down
            </a>
          </div>
        </div>
      </div>
      <div className="contact-section" id="contact-section">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Firstname" required className="form-input"  />
            <input type="text" placeholder="Lastname" required className="form-input" />
          </div>
          <input type="email" placeholder="Email" required className="form-input" />
          <textarea placeholder="Message..." required className="form-textarea"></textarea>
          <button type="submit" className="form-button">SEND</button>
        </form>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <h4>Say something to start a live chat!</h4>
          <p><Image src={require('../../assets/contact/Vector (5).png')} alt="phone" className='contact-icon'/> +1012 3456 789</p>
          <p><Image src={require('../../assets/contact/Vector (6).png')} alt="email" className='contact-icon'/> demo@gmail.com</p>
          <p><Image src={require('../../assets/contact/Vector (7).png')} alt="location" className='contact-icon'/> 132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
          <div className="social-icons-contact">
            <a href="#"><Image src={require('../../assets/contact/Facebook - Original.png')} alt="facebook" className='contact-icon'/></a>
            <a href="#"><Image src={require('../../assets/contact/Instagram - Original.png')} alt="instagram" className='contact-icon'/></a>
            <a href="#"><Image src={require('../../assets/contact/Twitter - Original.png')} alt="twitter" className='contact-icon'/></a>
            <a href="#"><Image src={require('../../assets/contact/LinkedIn - Original.png')} alt="linkedin" className='contact-icon'/></a>
          </div>
        </div>
      </div>
      <div className="map-section">
        <div className="map-locator">
          <h2>Map</h2>
          <h2>Satelite</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d77.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc123456789%3A0x123456789abcdef!2sSome%20Location%20in%20India!5e0!3m2!1sen!2s!4v1234567890123"
          width="1450"
          height="451"
          style={{ border: 0, alignSelf: 'center' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer />
    </>
   
  );
};

export default ContactUs;
