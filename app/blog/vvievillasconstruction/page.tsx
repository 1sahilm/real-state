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
              <p>At Infranium Homes, we believe in transparency, consistency, and keeping our community informed at every stage of development. We&apos;re excited to share the construction progress of our premium project – Vvie Villas, a collection of luxury villas nestled in the iconic naldehra golf hills shimla.
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
  
</ul>
 
<p>🔹 June End<br />
Plaster work & Roof Work of Villa No. 5 & 6 Completed</p>
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
 
<p>🔹 July 2025<br />
Second floor Slab For Villa No. 3 & 4.</p>
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
 
<p>🔹 July 2025<br />
Site Office Near Completion.</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/june-five.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
 
<p>🔹 Aug 2025<br />
MEP of Villa  6 &  5.</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-first.jpeg"
              alt={"Vive villa"}
              width={600}
              height={600}
              priority
              /> 
           
</div>
<p>🔹 Aug End<br />
Structure of Villa  4 & 3 near Completion.</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-second.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Aug 2025<br />
Structure of 4  villas completed</p>
 
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-third.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Aug 2025 End<br />
Foundation Work for Villas  2 & 1</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/aug-fourth.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Sept 2025<br />
Plaster Work for Villas 6&5</p>
 
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-first.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Sept 2025 End<br />
Exterior Plaster Work for Villas 4&3</p>
 
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-second.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Sept 2025<br />
Slab Work for Villa 1</p>
 
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-third.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Sept 2025<br />
Foundation Work for Villas 2</p>
 
<div className={Style.twoimage}>
  <Image
              src="/blog/sep-fourth.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
<p>🔹 Sept 2025<br />
Electric and Plumbing for Villas 6,5 & 4</p>
 
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
<strong> Villas Coming to Life</strong></p>
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
<br />
   <ul className={Style.under} 
     style={{
      textAlign:"left",
      width:"100%",
     }}
     > 

  <li>
    🏡 <strong>A Vision Taking Shape</strong><br />
    Vvie Villas is more than just a residential project — it&apos;s a curated lifestyle experience amidst nature, designed with modern sensibilities and timeless aesthetics. Whether you&apos;re looking for a peaceful escape, an investment property, or a nature-wrapped primary home, Vvie Villas brings it all together.
  </li>

  <li>
    📸 We’ll continue to share progress photos and walkthroughs regularly — stay tuned!
  </li>
  
</ul>
<br />
<p>🔹October & December 
<br />
VRV ducting work completed in Villa 4,5&6</p>
<div className={Style.twoimage}>
  <Image
              src="/blog/jan-blog-f.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
  <Image
              src="/blog/jan-blog-s.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>

<p>🔹December

<br />
Water Proofing work completed in Villa 4,5&6</p>
 
<div className={Style.twoimage}>
  <Image
              src="/blog/jan-blog-Third.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
  <Image
              src="/blog/jan-blog-four.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div>
 <br />
<div className={Style.twoimage}>
  <Image
              src="/blog/jan-blog-five.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
  <Image
              src="/blog/jan-blog-six.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
           
</div> 

<p>🔹January

<br />
Structures of Unit 1&2 near completion</p>
  
<br />
<div className={Style.twoimage}>
  <Image
              src="/blog/jan-blog-seven.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              /> 
  <Image
              src="/blog/jan-blog-eight.jpeg"
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
