"use client";

import React from "react";
import styles from "./welcome.module.css";
import Image from "next/image";

const Welcome = () => {
  return (
    <div
      className={`${styles.container}  max-[768px]:!block max-w-[1366px] mr-auto ml-auto`}
    >
      <div className={styles.text}>
        <h1 className={styles.title}>Welcome To The</h1>
        <h2 className={styles.subtitle}>Vision of Infranium</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          placeat alias magni nobis, fuga id? Assumenda vel asperiores ipsa
          sapiente excepturi doloribus eius labore numquam quibusdam atque
          dolorem cum, explicabo, velit mollitia magnam obcaecati placeat. Non
          architecto animi beatae magnam, quas impedit? Odio, eius perferendis
          aspernatur commodi libero molestias. Tempora unde quisquam, quod
          eligendi quis consectetur reiciendis expedita veniam magni numquam
          itaque excepturi nisi! Ipsa quaerat soluta aliquam natus perferendis
          est, quis ullam eligendi laboriosam, repellendus adipisci velit
          temporibus molestias. Eligendi voluptatibus harum totam magnam
          corrupti voluptas minima esse deleniti tenetur illum, eaque, expedita
          aliquid enim voluptates maiores, laudantium sequi.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          className={styles.customImage}
          src={require("../../assets/Welcome/image.png")}
          alt="Welcome"
        />
      </div>
    </div>
  );
};

export default Welcome;
