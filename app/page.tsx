"use client";

import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Welcome from "../components/Welcome/welcome";
import Story2 from "../components/Story2";
import Slider from "../pages/slidercard";
import Dream from "../components/Dream";
import Testimonial from "../components/Testomonial";
import SocialMediaUpdates from "@/components/Social";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/Contact";
// import LocomotiveScroll from 'locomotive-scroll';
import Footer from "@/components/Footer";
// import Carousel from "@/components/Carousel/Carousel";
import Propertiesslider from "@/components/Properties";
import AboutShimla from "@/components/About-Shimla/About";
import AboutnewSection from "@/components/aboutnewsection/AboutnewSection";
import Aboutvvie from "@/components/Aboutvvie/Aboutvvie";
export default function Home() {
  const bannerData = [
    {
      id: 1,
      image: "3.jpeg",
      heading: "FIND YOUR DREAM HOME WITH INFRANIUM",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
    {
      id: 2,
      image: "2.jpeg",
      heading: "You can find your dream home.",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
    {
      id: 3,
      image: "4.jpeg",
      heading: "Home is where the heart is",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
  ];

  return (
    <div>
      <Banner bannerData={bannerData} />
      {/* <Propertiesslider /> */}
      {/* <Carousel /> */}
      <About />
      <AboutShimla />

      <AboutnewSection />

      {/* <Welcome /> */}
      {/* <Slider /> */}
      <Aboutvvie />
      <Propertiesslider />
      {/* <Story2 /> */}
      {/* <Dream /> */}
      {/* <Testimonial /> */}
      <SocialMediaUpdates />
      {/* <FAQ /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}
