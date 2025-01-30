import Footer from "@/components/Footer/pages";
import Header from "@/components/Header";
import React from "react";
import style from "./singleproject.module.scss";
import Image from "next/image";

const SingleProject = () => {
  return (
    <>
      <Header headertheme />

      <section className={style.projectdatils}>
        <div className={style.content}>
          <div className={style.row}>
            <div className={style.image}>
              <div className={style.iner}>
                {" "}
                {projectarray?.map((item, index) => {
                  return (
                    <>
                      <div className={style.box} key={index}>
                        <img src={item.image} alt={item.title} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={style.contentblock}>
              <h1>Project Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>

              <div className={style.qodefportfolioinfo}>
                <div className={style.info}>
                  <h5>DATE :</h5>
                  <p>2024</p>
                </div>

                <div className={style.info}>
                  <h5>CATEGORY :</h5>
                  <p>FACADES, LANDSCAPING</p>
                </div>

                <div className={style.info}>
                  <h5>LOCATION :</h5>
                  <p>NEW DELHI, INDIA</p>
                </div>

                <div className={style.info}>
                  <h5>TAGS :</h5>
                  <p>
                    <span>Conceptual</span> <span>Exhibition</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.projectpage}>
        <div className={style.container}>
          <div className={style.row}>
            {projectarray?.map((item, index) => {
              return (
                <>
                  <div className={style.box} key={index}>
                    <div className={style.image}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={style.blockcontent}>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleProject;

const projectarray = [
  {
    image: "/h5-port-img-02-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-03-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-06-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-08-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
];
