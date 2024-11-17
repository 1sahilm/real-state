import React from "react";
import "./Contact.css";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="md:px-32 pb-24 md:pb-0 px-8 border-black border-b-[1px] mb-6  max-w-[1366px] mr-auto ml-auto  ">
      <div>
        <h2 className="text-[22.67px] font-normal">Contact Us</h2>
        <h1 className="text-5xl md:text-6xl font-semibold -ml-1 mt-2">
          Connect With Our Sales Team.
        </h1>
        <p className="font-normal text-xl text-[#716F6F] mt-4 md:mb-2">
          Our leasing agents are available for virtual and in-person visits.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  justify-between mt-10">
        <div className="space-y-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-3">
            <Image
              src={require("../../assets/contact/whatsapp 1.png")}
              alt="WhatsApp"
              width={30}
              height={30}
              objectFit="contain"
            />
            <div>
              <h3 className="font-medium text-xl">WhatsApp</h3>
              <p className="text-base text-[#716F6F]">Click to WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src={require("../../assets/contact/phone-call 1.png")}
              alt="Phone"
              width={30}
              height={30}
              objectFit="contain"
            />
            <div>
              <h3 className="font-medium text-xl">Phone</h3>
              <p className="text-base text-[#716F6F]">+91-8378298098</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Image
              src={require("../../assets/contact/email 1.png")}
              alt="Email"
              width={30}
              height={30}
              objectFit="contain"
            />
            <div>
              <h3 className="font-medium text-xl">Email</h3>
              <p className="text-base text-[#716F6F]">abcxyz@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form md:mb-16 w-1/2 p-16 relative">
          <div className="bg-black text-white p-3 text-center absolute help-wrapper">
            How can we Help you?
          </div>
          <div className="absolute chat-wrapper">
            <Image
              src={require("../../assets/contact/chat-bubble 1.png")}
              alt="WhatsApp"
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
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
    </div>
  );
};

export default ContactForm;
