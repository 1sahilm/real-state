"use client";
import Image from "next/image";
import ArrowImage from "@/assets/arrow-right-line.svg";

interface PropertiescardProp {
  imageurl?: any;
  title?: string;
  content?: string;
  pagelink?: string;
}

const Propertiescard = ({
  imageurl,
  title,
  content,
  pagelink,
}: PropertiescardProp) => {
  return (
    <>
      <div className="p-[20px]">
        <div
          className=""
          style={{
            lineHeight: "0px",
          }}
        >
          <Image
            src={imageurl}
            width={400}
            height={400}
            className="rounded-[15px]"
            alt={"image"}
          />
        </div>
        <div className="p-[15px] flex gap-[15px] justify-between items-center">
          <div className="flex-1">
            {" "}
            {title && (
              <>
                <h2 className="text-[24px] leading-6 text-[#1c2d37] font-[600] mb-[13px] line-clamp-1">
                  {title}
                </h2>
              </>
            )}
            {content && (
              <>
                <p className="text-[16px] text-[#1c2d37] font-[500] mb-[11px] ">
                  {content}
                </p>
              </>
            )}
          </div>
          <div>
            <a
              href={pagelink}
              className="flex items-center border border-[#1c2d37] py-[5px] px-[20px] rounded-[30px] w-fit"
            >
              Details
              <span>
                <Image
                  src={ArrowImage}
                  width={20}
                  height={20}
                  alt={ArrowImage}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Propertiescard;
