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
          <h1>Shimla’s Colonial Charm: Why Royal Families Chose It as Their Summer Retreat</h1>
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
              <p>Tucked away in the lap of the Himalayas, Shimla is more than just a picturesque hill station — it&apos;s a timeless symbol of colonial elegance, regal indulgence, and architectural grace. Once the summer capital of British India, Shimla was also the destination of choice for many Indian royal families who built their opulent summer homes here to escape the heat of the plains and soak in the serene mountain air.
</p>
<p>The Colonial Soul of Shimla<br />
Strolling through Shimla is like stepping into a living postcard from the past. Cobbled pathways, ivy-covered cottages, half-timbered buildings, and Gothic churches all echo the city’s British legacy. The Viceregal Lodge, Gaiety Theatre, Christ Church, and the Mall Road are more than tourist attractions—they are heritage monuments that narrate stories of a bygone era.</p>
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
<p>The British influence is visible in every corner. From architectural styles to leisurely traditions like high tea and ballroom dances, Shimla carries an air of aristocratic calm, making it irresistible to both colonial officers and Indian royals alike.</p>
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
<p><strong>Why Royal Families Chose Shimla</strong> </p>
<p>Climate Fit for Royalty</p>
 <ul>
  <li>With its cool climate and snow-capped surroundings, Shimla offered a refreshing retreat during the scorching Indian summers. The clean mountain air and temperate weather made it ideal for extended stays, where royals could enjoy comfort, privacy, and health benefits alike.</li>
</ul> <br />
<p>Proximity to Power</p>
 <ul>
  <li>Being the summer capital of the British Raj, Shimla naturally attracted Indian royalty who sought to maintain diplomatic and social ties with the British elite. Having a summer home here placed them at the center of seasonal political and social activity.</li>
</ul><br />
<p>Architectural Freedom</p>
 <ul>
  <li>Shimla gave royals the opportunity to express their grandeur through magnificent estates and palaces. From Indo-Gothic to Tudor-style mansions, these summer homes were expressions of both Western influence and Indian opulence. Some of these palaces still stand today, converted into luxury hotels or private estates.</li>
</ul><br />
<p>Social Prestige</p>
 <ul>
  <li>Owning a residence in Shimla became a status symbol. The who’s who of Indian royalty — from the Maharajas of Patiala and Kapurthala to princely families of Kashmir and Gwalior — made Shimla their summer address. It was not just about leisure; it was about being seen, known, and remembered.</li>
</ul>
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
              <br />
              <p><strong>The Legacy Today</strong></p>
              <ul>
  <li>Even today, Shimla retains its regal air. Heritage buildings continue to be preserved and restored, boutique hotels recreate colonial experiences, and luxury villas offer a taste of the old-world charm in a modern format. The blend of British sophistication and Indian heritage makes Shimla one of the most culturally rich hill stations in India.<br /> <br /></li>
  <li>Whether you&apos;re a history lover, an architecture enthusiast, or simply someone seeking a serene vacation, Shimla offers more than a view — it offers a narrative.<br /></li>
   
 
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
