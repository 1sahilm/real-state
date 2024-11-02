import React from 'react';
import './Contact.css';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <h1>Connect With Our Sales Team.</h1>
        <p>Our leasing agents are available for virtual and in-person visits.</p>
        <div className="contact-methods">
          <div className="contact-method">
            <Image src={require('../../assets/contact/whatsapp 1.png')} alt="WhatsApp" width={30} height={30} objectFit='contain'/>
            <div className='contact-method-text'>
              <h3>WhatsApp</h3>
              <p>Click to WhatsApp</p>
            </div>
          </div>
          <div className="contact-method">
            <Image src={require('../../assets/contact/phone-call 1.png')} alt="Phone" width={30} height={30} objectFit='contain'/>
            <div className='contact-method-text'>
              <h3>Phone</h3>
              <p>+91-8378298098</p>
            </div>
          </div>
          <div className="contact-method">
            <Image src={require('../../assets/contact/email 1.png')} alt="Email" width={30} height={30} objectFit='contain'/>
            <div className='contact-method-text'>
              <h3>Email</h3>
              <p>abcxyz@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Type anything in your mind"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

