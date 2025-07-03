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
          <h1>Naldehra Golf Course – A Timeless Gem in the Himalayas 🏌️‍♂️🌲</h1>
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
              <p>Nestled 23 km from Shimla at an elevation of about 2,200 m, Naldehra Golf Course is one of India’s oldest and most scenic golf venues. Built in 1905 under the patronage of Lord Curzon, the course blends colonial heritage with Himalayan grandeur.

</p>
<p>🏌️‍♀️ The Historic Legacy <br />
Originally a 9‑hole course, Naldehra expanded to a full 18‑hole par‑68 layout—with 16 greens and 18 tees—evoking the charm of traditional Scottish links. It remains steeped in history and legend: Curzon, so captivated by its landscape, named his daughter Alexandra Naldehra as a tribute. </p>
{/* <div className={Style.twoimage}>
  <Image
              src="/slider/second-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              <Image
              src="/slider/first-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div> */}
<br />
<p>🏞️ Nature’s Splendor & Layout<br />
Picture playing amidst towering deodars, rolling meadows, and mist-wrapped peaks. The undulating terrain, bunkers cut into Himalayan slopes, and a thick forest canopy create a strategic, challenging, and breathtaking experience. </p>
{/* <div className={Style.twoimage}>
  <Image
              src="/slider/third-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              <Image
              src="/slider/four-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div> */}
<br />
<p>🛎️ What to Do Beyond the Fairways<br />
Visit the ancient temples: Mahunag and Mahakali shrines within the grounds reflect local culture and spirituality. </p>
{/* <div className={Style.twoimage}>
  <Image
              src="/slider/five-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              <Image
              src="/slider/six-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div>
<br /> */}
{/* <p>🔹 March 2025 <br />
Slab work executed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/seven-slider.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              <Image
              src="/slider/nine.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div> */}
{/* <br /> */}
{/* <p>🔹 April 2025 <br />
Second floor slab and roof work completed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/ten.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              <Image
              src="/slider/eleven.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div>
<br /> */}
{/* <p>🔹 May 2025 <br />
Superstructure completed for Villa No. 5 & 6.</p>
<div className={Style.twoimage}>
  <Image
              src="/slider/twelve.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
              <Image
              src="/slider/thirteen.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div>
<br />
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
              <Image
              src="/slider/sixteen.jpeg"
              alt={"Vive villa"}
              width={400}
              height={400}
              priority
              />
</div>
<br /> */}
 
              </div>
              <ul>
  <li>Horse riding & nature walks: Serene trails and pony rides offer an alternative to golf.<br /></li>
  <li>Picnics & sip local refreshments: Enjoy Maggi, coffee, or chai while savouring the views.<br /></li>
   
 
</ul>

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
