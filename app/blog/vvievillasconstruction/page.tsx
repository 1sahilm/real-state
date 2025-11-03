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
          <h1>Vvie Villas – Construction Update</h1>
          <span>June 2025</span>
        </div>

        <div className={Style.content}>
          <div className={Style.img}>
            <Image
              src="/slider/first-slider.jpeg"
              alt={"Vive villa"}
              width={775}
              height={460}
              priority
              />
          </div>

          <div
            className={Style.textblock} 
            >
              <p>At Infranium Homes, we believe in transparency, consistency, and keeping our community informed at every stage of development. We&apos;re excited to share the June 2025 construction progress of our premium project – Vvie Villas, a collection of luxury villas nestled in the natural heartland of Coorg.
</p>
<p>📍 Project Timeline So Far <br />
🔹 December 2024
Site development officially kicked off.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/second-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              {/* <Image
              src="/slider/first-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> */}
</div>
<br />
<p>🔹 January 2025 <br />
Foundation work began for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/third-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              {/* <Image
              src="/slider/four-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> */}
</div>
<br />
<p>🔹 February 2025 <br />
Column work completed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/five-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              {/* <Image
              src="/slider/six-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> */}
</div>
<br />
<p>🔹 March 2025 <br />
Slab work executed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/seven-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              {/* <Image
              src="/slider/nine.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> */}
</div>
<br />
<p>🔹 April 2025 <br />
Second floor slab and roof work completed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/ten.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              {/* <Image
              src="/slider/eleven.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> */}
</div>
<br />
<p>🔹 May 2025 <br />
Superstructure completed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/twelve.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
           
</div>
 
<p><strong>Foundation work for Villa No. 3 & 4 commenced.</strong></p>
<p>🔹 June 2025 <br />
Structure of Villas 5 & 6 and ground floor of Villas 3 & 4 completed.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/fourtheen.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
           
</div>
<br />
     <ul className={Style.under} 
     style={{
      textAlign:"left",
      width:"100%",
     }}
     >
  <li>Second floor slab for Villas 3 & 4 poured.<br /></li>
  <li>Plastering and roof work for Villas 5 & 6 wrapped up.<br /></li>
  <li>Our on-site office is nearing completion.<br /></li>
 

  <li>
    🏡 <strong>A Vision Taking Shape</strong><br />
    Vvie Villas is more than just a residential project — it&apos;s a curated lifestyle experience amidst nature, designed with modern sensibilities and timeless aesthetics. Whether you&apos;re looking for a peaceful escape, an investment property, or a nature-wrapped primary home, Vvie Villas brings it all together.
  </li>

  <li>
    📸 We’ll continue to share progress photos and walkthroughs regularly — stay tuned!
  </li>
  
</ul>
<p> 
Plaster work & Roof Work of Villa No. 5 & 6 Completed   - June End</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/june-first.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
  <Image
              src="/blog/june-second.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
           
</div>
<p> 
Second floor Slab For Villa No. 3 & 4  - June End</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/june-third.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
  <Image
              src="/blog/june-fourth.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
           
</div>
<p> 
Site Office Near Completion –  June End</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/june-five.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
MEP of Villa  6 &  5  Started Aug ’25</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-first.jpeg"
              alt={"Vive villa"}
              width={600}
              height={600}
              priority
              /> 
           
</div>
<p> 
Structure of Villa  4 & 3 near Completion –  Aug ’25 End</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-second.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Structure of 4  villas completed -  Aug ’25</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-third.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Foundation Work for Villas  2 & 1 Started – Aug ’25 End</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-fourth.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Plaster Work for Villas 6&5 Completed  – Sept’25</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-first.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Exterior Plaster Work for Villas 4&3 completed – Sept’25 End</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-second.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Slab Work for Villa 1  - Sept’25</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-third.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Foundation Work for Villas 2  – Sept’25</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-fourth.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Electric and Plumbing for Villas 6,5 & 4  – Sept’25</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-five.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
  <Image
              src="/blog/sep-six.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p> 
Villas Coming to Life</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-seven.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
  <Image
              src="/blog/sep-eight.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>


              </div> <br />
              
          
  
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
