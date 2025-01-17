import Image from "next/image";
import React from "react";
import styles from "./read-more.module.css";

interface ReadMoreProps {
  text: string;
  maxLength: number;
  css?: string;
}

const ReadMore = ({ text, maxLength , css }: ReadMoreProps) => {
  const [readMore, setReadMore] = React.useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div>
      <p>
        {readMore
          ? text
          : `${text.slice(0, maxLength)}${
              text.length > maxLength ? "..." : ""
            }`}
      </p>
      {text.length > maxLength && (
        <a
          onClick={handleReadMore}
          className="label-medium !tertiary-500 d-flex items-center simply-gap-8"
          style={{
            cursor: "pointer",
            color: css ? "#000" :"#FFF",
            fontSize: "18px",
            textAlign: "center",
            margin:"0 auto",
            display: css ? "flex" :"block",
            fontWeight: 700,
          }}
        >
          {readMore ? "Read Less" : "Read More"}{" "}
          <Image
            src={require("../../assets/Readmore/readmoreicon.svg")}
            width={20}
            height={20}
            alt="readmoreicon "
            style={{
              transform: readMore ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </a>
      )}
    </div>
  );
};

export default ReadMore;
