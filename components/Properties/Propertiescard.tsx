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
      <div className="px-5">
        <div
          className=""
          style={{
            lineHeight: "0px",
          }}
        >
          <div className="h-[220px] overflow-hidden" style={{
            lineHeight:"0px"
          }}>

          <Image
            src={imageurl}
            width={400}
            height={400}
            style={{
              lineHeight:"0px"
            }}
            className="h-[220px] "
            alt={"image"}
            objectFit="cover"
            />
            </div>
        </div>
        <div className="px-4 pt-4 flex gap-4 justify-between items-center">
          <div className="flex-1">
            {" "}
            {title && (
              <>
                <h2 className="text-[19px] leading-18 text-[#000] font-[600] mb-[13px] ">
                  {title}
                </h2>
              </>
            )}
            {content && (
              <>
                <p className="text-[16px] text-[#333] font-[500] mb-[11px] ">
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
