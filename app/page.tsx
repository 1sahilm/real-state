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
import Carousel from "@/components/Carousel/Carousel";
export default function Home() {
  const bannerData = [
    {
      id: 1,
      image: "unsplash_2gDwlIim3Uw.png",
      heading: "FIND YOUR DREAM HOME.",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
    {
      id: 2,
      image: "pexels-alex-staudinger-829197-1732414.jpg",
      heading: "You can find your dream home.",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
    {
      id: 3,
      image: "pexels-pixabay-262048.jpg",
      heading: "Home is where the heart is",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
  ];

  return (
    <div>
      <Banner bannerData={bannerData} />
      {/* <Story /> */}
      <Carousel />
      <About />
      <Welcome />
      <Slider />
      <Story2 />
      <Dream />
      <Testimonial />
      <SocialMediaUpdates />
      <FAQ />
      <ContactForm />
      <Footer />
      {/* <Weather /> */}
    </div>
  );
}
