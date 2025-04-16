import Image from "next/image";
import React from "react";
import style from "./conatctus.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer/pages";

const ContactUs = () => {
  return (
    <>
            {/* <Header headertheme={true} isLogo={true} /> */}
            <div className={style.desktopHeader}>
            <Header headertheme={true} isLogo={true} />
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
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <textarea name="" id="" placeholder="Message"></textarea>
                <button>send</button>
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
                    <p>Monday to Friday, 9AM - 5PM</p>
                    <p>Weekend Closed</p>
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
