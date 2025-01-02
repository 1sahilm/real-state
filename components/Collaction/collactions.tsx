import Image from "next/image";
import React from "react";
import style from "./collaction.module.css";

const Collactions = () => {
  return (
    <section className="flex  px-[30px] gap-[15px] mr-auto ml-auto mt-[50px] mb-[50px]">
      <div className="w-[17%]">
        <div className="flex flex-col gap-[15px] h-[100%]">
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/1.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/2.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[17%]">
        <div className="flex flex-col gap-[15px] h-[100%]">
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/3.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/4.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[32%]">
        <div className={style.image}>
          <Image
            src={require("../../assets/infranium-images/5.jpeg")}
            // src={"/assets/infranium-images/2.jpeg"}

            alt={""}
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-[17%]">
        <div className="flex flex-col gap-[15px] h-[100%]">
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/6.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/7.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[17%]">
        <div className="flex flex-col gap-[15px] h-[100%]">
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/8.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
          <div className={`${style.image} ${style.imagcard}`}>
            <Image
              src={require("../../assets/infranium-images/9.jpeg")}
              // src={"/assets/infranium-images/2.jpeg"}

              alt={""}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collactions;
