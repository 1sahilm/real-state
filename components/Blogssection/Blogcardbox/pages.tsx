import Image from "next/image";
import React from "react";
import styles from "./blogcard.module.scss";

interface BlogssectionProp extends React.AllHTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  cat?: string;
  date?: string;
}

const BlogssectionCard = ({
  image,
  title,
  cat,
  date,
  ...rest
}: BlogssectionProp) => {
  return (
    <div {...rest}>
      <div className={styles.cardbox}>
        <img src={image} alt={title} className={styles.image} />
        <h2 className={styles.title}>
          <a href="#">{title}</a>
        </h2>
        <div className={styles.datecat}>
          <span>{cat}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogssectionCard;
