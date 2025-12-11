"use client"

import React from "react";
import Style from "./style.module.scss"
import Image from "next/image";
import Link from "next/link";
import { link } from "fs";
import { unique } from "next/dist/build/utils";
import axios from "axios";
import { decode } from "html-entities";

const FeaturedReads = () => {
    const [activeTab, setActiveTab] = React.useState("Salesforce Insights");
    console.log("activeTab", { activeTab })

    const filteredData = blogData?.find((item) => item?.id === activeTab);
    const sortedBlogData = filteredData?.blogpost;
    console.log("sortedBlogData", { sortedBlogData })

      const [blog, setBlog] = React.useState<any>([]);
    console.log("blog", { blog })

  const getAllBlogsData = async () => {
    const data = await axios.get("/api/blog");
    if (data.status === 200) {
      setBlog(data?.data);
    }
  };

  React.useEffect(() => {
    getAllBlogsData();
  }, []);


  console.log("blog", { blog })

  // filter blog based on active tab customCategory is have items so filter based on that 
    const filterBlogData = blog?.filter((item: any) => {
        // Check if the item has a customCategory and if it matches the activeTab
        return item?.customCategory?.some((category: any) => category?.value === activeTab);
    }
    );
    console.log("filterBlogData", { filterBlogData })
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>

                    <div className={Style.row}>
                        <h2>Featured Reads</h2>
                       <div className={Style.bloglist}>
                       {/* <ul className={Style.tabws}>
                            {tabsarry?.map((items, index) => {
                                return (
                                    <>
                                        <button className={activeTab === items.tabname ? Style.active : Style.inactive} key={index} onClick={() => setActiveTab(items.tabname)}>{items.tabname}</button>
                                    </>
                                )
                            })}
                        </ul> */}

                        <div className={Style.blogbox}>
                            {blogsData?.map((items:any, index:any) => {
                                console.log("items", { items })
                                return (
                                    <SmallCard
                                        key={items.id}
                                        image={items?.image}
                                        title={items?.title}
                                        description={items?.desc}
                                        readmore={`${items.link}`}
                                    />
                                )
                            })}

                        </div>
                       </div>



                    </div>

                </div>
            </section>
        </>
    )
}

export default FeaturedReads;


const tabsarry = [
    { tabname: "Vvie Villas" }, 
]

const blogsData = [
    {
        id:1,
        title:"Vvie Villas – Construction Update as of Sept 2025",
        desc:"At Infranium Homes, we believe in transparency, consistency, and keeping our community informed at every stage of development....",
        image:"/vivle-villa-banner.webp",
        link:"/blog/vvievillasconstruction"
    },
    {
        id:2,
        title:"Naldehra Golf Course – A Timeless Gem in the Himalayas",
        desc:"Nestled 23 km from Shimla at an elevation of about 2,200 m, Naldehra Golf Course is one of India’s....",
        image:"/blog2-naldera.jpg",
        link:"/blog/naldehra-golf-course"
    },
    {
        id:3,
        title:"Shimla’s Colonial Charm: Why Royal Families Chose It as Their Summer Retreat",
        desc:"Tucked away in the lap of the Himalayas, Shimla is more than just a picturesque hill station....",
        image:"/blog/shimla-colonial-charm-royal-summer-retreat.webp",
        link:"/blog/shimla-colonial-charm"
    },
    {
        id:4,
        title:"Why Shimla Is Becoming the New Hub for Luxury Villa Living in North India",
        desc:"Some places don’t ask you to slow down. They make you want to....",
        image:"/blog/shimla-new-hub-for-luxury-villas.webp",
        link:"/blog/luxury-villas-shimla"
    },
    {
        id:5,
        title:"Investment Property Near Naldehra Golf Course, Shimla",
        desc:"In the serene landscapes of Himachal Pradesh....",
        image:"/blog/investment-property-naldehra-golf-course.webp",
        link:"/blog/naldehra-golf-property"
    },
    {
        id:6,
        title:"Gated Community Villas for Sale in Naldehra: Discover the Luxurious Charm of Vvie Villas",
        desc:"Just imagine a place away in the beautiful hills of Himachal Pradesh....",
        image:"/blog/gated-community-villas-naldehra-vvie.webp",
        link:"/blog/naldehra-gated-villas"
    },
    {
        id:7,
        title:"Buying a Villa in Shimla: A Smart Investment or a Dream Fulfilled?",
        desc:"We often talk about investments as numbers. Returns. Trends. Risk and Reward....",
        image:"/blog/buying-villa-in-shimla-smart-investment-or-dream.webp",
        link:"/blog/buying-villa-shimla"
    },
    {
        id:8,
        title:"Experience Luxury Living: Inside Shimla’s Most Premium & Lavish Villas",
        desc:"Shimla has always been called the Queen of Hills....",
        image:"/blog/premium-villas-shimla.webp",
        link:"/blog/premium-villas-shimla"
    },
    {
        id:9,
        title:"From Vision to Reality: How the Infranium Transforming Naldehra",
        desc:"Naldehra is an old-school, cool hill station....",
        image:"/blog/infranium-transforming-naldehra.webp",
        link:"/blog/infranium-transforming-naldehra"
    },
    {
        id:10,
        title:"Why Infranium Sets the Standard for the Best Luxury Villas in Himachal Pradesh?",
        desc:"Luxury in Himachal Pradesh has become much more....",
        image:"/blog/best-luxury-villas-himachal.webp",
        link:"/blog/best-luxury-villas-himachal"
    },
    {
        id:11,
        title:"How Infranium Helps You Buy the Perfect Luxury Villa in Himachal Pradesh?",
        desc:"Purchasing a luxury villa is an important choice....",
        image:"/blog/buy-luxury-villa-himachal.webp",
        link:"/blog/buy-luxury-villa-himachal"
    }
]



const blogData = [


    {
        id: "Salesforce Insights",
        blogpost:
            [
                {
                    uniqueid: "0",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "1",
                    title: "test",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "3",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "4",
                    title: "test",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "5",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
                {
                    uniqueid: "6",
                    title: "test",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
            ]
    },


    {
        id: "Culture",
        blogpost:
            [
                {
                    uniqueid: "2",
                    title: "ZERO TO CRM HERO: HOW WE HELPED A REAL ESTATE CLIENT TRIPLE CONVERSIONS",
                    description: "A legacy system was slowing them down...",
                    image: "/blog/blog1.png",
                    link: "#",
                },
            ]
    },


    {
        id: "Tech & Tools",
        blogpost:
            [
                {
                    uniqueid: "3",
                    title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
                    description: "Before you launch, read this...",
                    image: "/blog/blog2.png",
                    link: "#",
                },
            ]
    },
    {
        id: "Staff Augmentation & Talent",
        blogpost:
            [
                {
                    uniqueid: "3",
                    title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
                    description: "Before you launch, read this...",
                    image: "/blog/blog2.png",
                    link: "#",
                },
            ]
    },
    {
        id: "Salesforce Appexchange",
        blogpost:
            [
                {
                    uniqueid: "3",
                    title: "VISIBILITY = VIABILITY: 5 WAYS TO MAKE YOUR APP STAND OUT",
                    description: "Before you launch, read this...",
                    image: "/blog/blog2.png",
                    link: "#",
                },
            ]
    },





    ,
];


interface SmallCardProp {
    image?: any;
    title?: string;
    description?: string;
    readmore?: string;
}
const SmallCard = ({ image, title, description, readmore }: SmallCardProp) => {
    console.log("description",{description})
    const cleanedHTML = description?.replace(/&nbsp;/g, ' ');
    const [cleanedText, setCleanedText] = React.useState('');
    React.useEffect(() => { 
    const noTags = description?.replace(/<[^>]+>/g, '');
    const decoded = decode(noTags); 
    setCleanedText(decoded);
  }, [description]);
  console.log("cleanedText", { cleanedText })
    return (
        <>
            <div className={Style.blogcard} >
                <div className={Style.image}>
                    <Image src={image} width={312} height={200} alt={title || "Default Alt Text"} />
                </div>
                <div className={Style.contentbox}>
                    <h3>{title}</h3>
                    
                    <p>{cleanedText}</p>
                    <Link href={readmore || "#"} >
                        Read More
                    </Link>
                </div>
            </div>
        </>
    )
}



