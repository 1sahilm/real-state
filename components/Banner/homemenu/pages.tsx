import React from "react";
import Style from "../homemenu/homemenu.module.scss";
import Link from "next/link";
import Image from "next/image";

const HomeMenu = () => {
  return (
    <header className={Style.header}>
      <div className={Style.innerbox}>
        <ul className={Style.menulist}>
          {menuarry?.map((item, index) => {
            return (
              <>
                <li
                  className={`${Style.link} ${
                    item.manuname === "home" && Style.active
                  }`}
                >
                  <Link href={item.manulink} key={index}>
                    {item.manuname}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
        <div className={Style.logoimage}>
          <Image
            src={"/logo-updated_processed.jpeg"}
            width={150}
            height={150}
            alt="logo"
            className={Style.logo}
          />
        </div>
      </div>
    </header>
  );
};

export default HomeMenu;

const menuarry = [
  {
    manuname: "Home",
    manulink: "#",
  },
  {
    manuname: "About",
    manulink: "/about-us",
  },
  {
    manuname: "Projects",
    manulink: "#",
  },
  {
    manuname: "Faqs",
    manulink: "#",
  },
  // {
  //   manuname: "blog",
  //   manulink: "#",
  // },
  {
    manuname: "Get in touch",
    manulink: "#",
  },
];
