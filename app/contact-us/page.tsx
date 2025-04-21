"use client";
import Image from "next/image";
import React, { useState } from "react";
import style from "./conatctus.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer/pages";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const [loader, setLoader] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const router = useRouter()
  

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    description: "",
  });

  console.log("inputValue", { inputValue });

  const handleSendInquiry = async () => {
    const nesteddata = {
      firstName: inputValue?.firstName,
      lastName: inputValue?.lastName,
      email: inputValue?.email,
      phone: inputValue?.mobile,
      description: inputValue?.description,
    };

    try {
      setLoader(true);
      // const response = await axios.post("/api/inquiry", nesteddata);
      const sendLeadRes = await axios.post("/api/send-leads", {
        firstName: inputValue?.firstName, 
        email: inputValue?.email,
        phone: inputValue?.mobile,
        message: inputValue?.description, 
      });
      console.log("sendLeadRes", sendLeadRes);


      const emailRes = await axios.post("/api/sendemail", {
        firstName: inputValue?.firstName,
        lastName: inputValue?.lastName,
        email: inputValue?.email,
        message: inputValue?.description,
        phone: inputValue?.mobile,
        work_experience: inputValue?.description,
      });
      console.log("emailRes", emailRes);

   

 
      if (emailRes) {
        setInputValue({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          description: "",
        });
        setLoader(false); 
        router.push("/thank-you")

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
            {/* <Header headertheme={true} isLogo={true} /> */}
            <div className={style.desktopHeader}>
            <Header headertheme={true} isLogo={true} />
            {isOpen2 && (
      <div className={style.popupOverlay} >
        <div className={style.popupContent} style={{
        height:"370px",
        display:"flex",
        alignItems:"center",
      }}>
          <button className={style.closeButton} onClick={()=> setIsOpen2(false)}>×</button>
          <h2>Thank you for reaching out. We&apos;ve received your message and will be in touch with you shortly. </h2>
        
        </div>
      </div>
    )}
    </div> 
      <section className={style.contactpage}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.col1}>
              <div className={style.conter}>
                <p>
                Feel free to fill out the form below, and one of our luxury property specialists will reach out to you shortly. Your dream home in the hills awaits!
                </p>
              </div>
              <div className={style.form}>
                <div className={style.row1}>
                <input type="text" name="name" required 
                placeholder="Name"
             value={inputValue.firstName}
             onChange={(e) =>
               setInputValue({
                 ...inputValue,
                 firstName: e.target.value,
               })
             }
            />
                  <input type="email" name="email" required
            placeholder="Email"
            value={inputValue.email}
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
            />
            <input type="tel" name="mobile" required 
            placeholder="Mobile Number"
            value={inputValue.mobile}
            onChange={(e) =>
              setInputValue({ ...inputValue, mobile: e.target.value })
            }
            />
                </div>
                <textarea name="message" required 
            placeholder="Message"
             value={inputValue.description}
             onChange={(e: any) =>
               setInputValue({
                 ...inputValue,
                 description: e.target.value,
               })
             }
            ></textarea>
               

                {
              loader ? 
               <button type="submit">Loading ....</button>
              
              :             <button type="submit" onClick={handleSendInquiry}>Send</button>

            }
              </div>
            </div>
            <div className={style.col2}>
              <div className={style.addres}>
                <div className={style.addrlist}>
                  {" "}
                  <h5>DIRECT CONTACT</h5>
                  <div className={style.box}>
                    <p>15, LSC, First Floor,<br />
                    Panchsheel Park, New Delhi-110017</p>
                    <p>+91 8471002002</p>
                    <p>Sales@infranium.in</p>
                  </div>
                </div>
                <div className={style.addrlist}>
                  <h5>ADMINISTRATIVE HOURS</h5>
                  <div className={style.box}>
                    <p>Monday to Saturday, 9AM - 6PM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.742037470674!2d77.20927719112142!3d28.543596327672116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2177772b113%3A0xe0b92f108d24abf1!2sPanchsheel%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740646953037!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
