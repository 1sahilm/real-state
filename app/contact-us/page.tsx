import Image from "next/image";
import React from "react";
import style from "./conatctus.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer/pages";

const ContactUs = () => {
  return (
    <>
      <Header headertheme />

      <section className={style.contactpage}>
        <div className={style.container}>
          <div className={style.row}>
            <div className={style.col1}>
              <div className={style.conter}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
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
                    <p>123 Tera Street, New Delhi</p>
                    <p>+91 9874 98754</p>
                    <p>info@infranium.com</p>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d224130.79157571626!2d77.23534480824672!3d28.62845478972887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Tera%20Street%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1737984594189!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
