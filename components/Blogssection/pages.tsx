import Image from "next/image";
import React from "react";
import styles from "./blogssection.module.scss";
import BlogssectionCard from "./Blogcardbox/pages";

const Blogssection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.innerbox}>
          {blogsarry?.map((item, index) => {
            return (
              <>
                <BlogssectionCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  cat={item.cat}
                  date={item.date}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogssection;

const blogsarry = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "blog-4.jpg",
    cat: "CATEGORY",
    date: " SEPTEMBER 11, 2024",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "blog-3.jpg",
    cat: "CATEGORY",
    date: " SEPTEMBER 11, 2024",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "blog-2.jpg",
    cat: "CATEGORY",
    date: " SEPTEMBER 11, 2024",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: "blog-1.jpg",
    cat: "CATEGORY",
    date: " SEPTEMBER 11, 2024",
  },
];
