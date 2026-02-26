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
          <h1>What makes Vvie Villas truly exclusive</h1>
          <p>Featuring Vvie Villas X Ama Stays and Trails</p>
        </div>

        <div className={Style.content}>
          <div className={Style.img}>
            <Image
              src="/blog/blog12-banner.jpeg"
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
              
              <h4>A Limited Collection of Private Villas</h4>

              <p>Not a crowded development, but an intimate collection of just 6 exclusive villas, created for a truly privileged few. With limited residences, privacy, space, and serenity become the true luxuries of everyday living.
<br />A private clubhouse further enhances the experience, offering a refined social and wellness retreat reserved only for residents.

              </p>
         

                <br />
                <div className={Style.twoBox}>

              
               
                  <Image
                              src="/five-banner.jpg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                
 <div>


                <h4>Prime Location in Naldehra&apos;s Elite Hillscape</h4> 
                <p style={{
                  marginTop:"20px"
                }}>Set beside the iconic Naldehra Golf Course, Vvie Villas is surrounded by a legacy once favoured by royalty. A lifestyle of quiet grandeur unfolds here — where the hills meet elegance and tradition. Live amidst pine forests and mountain calm, in a destination that feels truly regal and rare.</p>
                 </div>
  </div>
<br />
<br />
      <div className={Style.twoimage}>
                  <Image
                              src="/blog/blog-13-middel.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
                </div>

<br />

  <h4>Architecture That Blends Luxury with Nature</h4>
<p 
style={{
  marginTop:"20px"
}}
>Designed by PSDA Architects, Vvie Villas embodies an architectural vision that blends luxury seamlessly with nature. Every villa is crafted to complement the surrounding pine forests, mountain views, and timeless hill charm. A perfect balance of modern elegance and natural harmony, created for refined living in the hill.</p>
   

  <br />
   <div className={Style.twoBox}>
        
 <div>


                <h4>Vvie Villas, in collaboration with Ama Stays & Trails</h4> 
                <p style={{
                  marginTop:"20px"
                }}>This collaboration brings the assurance of curated service, refined experiences, and the warmth of luxury living inspired by heritage retreats. <br />At Vvie Villas, residents don’t just own a home in the hills — they become part of an elevated lifestyle shaped by exclusivity, comfort, and exceptional care.</p>
                 </div>
                   <Image
                              src="/blog/blog-13-last.jpeg"
                              alt={"Vive villa"}
                              width={400}
                              height={400}
                              priority
                              />
  </div>

  <br /><br />
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
