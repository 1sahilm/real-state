import Footer from "@/components/Footer/pages";
import Header from "@/components/Header";
import React from "react";
import style from "./project.module.scss";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <>
      <Header headertheme />
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

export default ProjectPage;

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
  {
    image: "/h5-port-img-09-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-10-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-16-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-17-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/h5-port-img-19-650x728.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
];
