import React from 'react'
import Image from "next/image";
import Style from "../style.module.scss";
import FeaturedReads from "@/components/Blog/FeaturedReads/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer/pages";

const Test = () => {
  return (
   <>
    <div className={Style.desktopHeader}>
            <Header headertheme={true} isLogo={true} />
        </div>
        <div className={Style.mobileHeader}>
        <Header isTrue={true} headertheme={false}  />
        </div>
    <div className={Style.blogsingle}>
      <div className={Style.innerblog}>
        <div className={Style.title}>
          <h1>Naldehra Golf Hills - The Power Of Location</h1>
          <p>Featuring Vvie Villas X Ama Stays and Trails</p>
        </div>

        <div className={Style.content}>
          <div className={Style.img}>
            <Image
              src="/blog/naldehra-golf-first.jpeg"
              alt={"Vive villa"}
              width={775}
              height={460}
              priority
              style={{
                height:"600px",
                objectFit:"cover"
              }}
              />
          </div>

          <div
            className={Style.textblock} 
            >
              
              <h4>Why Naldehra Matters</h4>

              <p>Naldehra is not a crowded hill station. It is calm, exclusive, and naturally premium.</p>

              <ul className={Style.bulletpoints}>
                <li>Home to one of Asia’s oldest and most scenic golf courses</li>
                <li>Surrounded by dense deodar forests and rolling hills</li>
                <li>Pleasant climate throughout the year</li>
                <li>Just a short drive from Shimla, yet far from the chaos</li>
              </ul>

                <br />
                <div className={Style.twoimage}>
                  <Image
                              src="/blog/naldehra-golf-third.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                </div>

                <br />
                <h4>Vvie Villas – Living in the Best of Naldehra</h4>

                
                <ul className={Style.bulletpoints}>
                  <li>Prime location near Naldehra Golf Hills</li>
                  <li>Scenic views, clean air, and peaceful surroundings</li>
                  <li>Low-density, private luxury living</li>
                  <li>Ideal for personal use, leisure stays, and premium rentals</li>
                </ul>

                <p>Here, every morning begins with misty views and silence broken only by birds and breeze.</p>
      <div className={Style.twoimage}>
                  <Image
                              src="/blog/naldehra-golf-second.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                </div>

<br />

  <h4>5 Reasons the location of Vvie Villas changes everything</h4>

   

  <ul>
    <li>Iconic Naldehra Golf Course Proximity</li>
    <li>Pristine Deodar Forests and Rolling Hills</li>
    <li>Premium Climate and Year-Round Appeal</li>
    <li>Controlled Development Exclusivity</li>
    <li>Strategic Shimla Connectivity</li>
  </ul>
   

  <br />
                <div className={Style.twoimage}>
                  <Image
                              src="/blog/naldehra-golf-four.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                  <Image
                              src="/blog/naldehra-golf-five.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                  <Image
                              src="/blog/naldehra-golf-six.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                </div>

<br />
  
 
              </div>

        </div>
        
      </div>

      <FeaturedReads />
      {/* <JustReading /> */}
    </div>
    <Footer />
   </>
  )
}

export default Test
