import React from "react";
import style from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className={style.section}>
        <div className={style.container}>
          <div className={style.innerbox}>
            <div className={style.qodefgriditem1}>
              <div className={style.logo}>
                <Image
                  src="/new-logo.png"
                  alt="logo"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className={style.qodefgriditem2}>
              <div className={style.widget}>
                <div className={style.title}>Social</div>
                <ul>
                  <li>
                    <a href="">Instagram</a>
                  </li>

                  <li>
                    <a href="">Behance</a>
                  </li>

                  <li>
                    <a href="">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.qodefgriditem2}>
              <div className={style.widget}>
                <div className={style.title}>Social</div>
                <ul>
                  <li>
                    <a href="">Contact</a>
                  </li>

                  <li>
                    <a href="">Terms of service</a>
                  </li>

                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.qodefgriditem2}>
              <div className={style.widget}>
                <div className={style.title}>Location</div>
                <ul>
                  <li>
                    <a href="">15, LSC, First Floor,
                    Panchsheel Park, New Delhi-110017</a>
                  </li>

                  <li>
                    <a href="tel:+91 8471002002">+91 8471002002</a>
                  </li>

                  <li>
                    <a href="emailto:Info@infranium.in">Info@infranium.in</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className={style.botomfooter}>
        <div className={style.container}>
          <p>Copyright 2025. INFRANIUM</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
