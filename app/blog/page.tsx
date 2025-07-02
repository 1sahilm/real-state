import BannerSection from "@/components/Blog/Banner/page";
import FeaturedReads from "@/components/Blog/FeaturedReads/page";
import ManufacturingBlog from "@/components/Blog/ManufacturingBlog/page";
import Trustedby2 from "@/components/Blog/TrustedbyBlog/page";
import WeDesign from "@/components/Blog/WeDesign/page";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import styles from "./style.module.scss";
import Footer from "@/components/Footer/pages";
import BaseballSlider from "@/components/Blog/constructionSlider/page";

const BlogPage = ()=>{
  
    return(
        <>
      <div className={styles.desktopHeader}>
      <Header headertheme={true} />
    </div>
    <div className={styles.mobileHeader}>
    <Header isTrue={true} headertheme={false}  />
    </div>
        <BannerSection />
        <WeDesign />
        <BaseballSlider />
        <FeaturedReads />
       {/* <Trustedby2 /> */}
      {/* <ManufacturingBlog  /> */}
      
           <ContactUs />  
      <Footer />
           
        </>
    )
}
export default BlogPage;