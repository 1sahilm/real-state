import React from "react";
import "./Testimonial.css";
import Image from "next/image";
const testimonials = [
  {
    name: "Ramesh",
    title: "Co-founder of Forpeople",
    image: require("../../assets/Testinomial/Ellipse 4.png"),
  },
  {
    name: "Gokul Sahay",
    title: "Design director",
    image: require("../../assets/Testinomial/Ellipse 4.png"),
  },
  {
    name: "Abhay",
    title: "Sr. Designer of Gonji",
    image: require("../../assets/Testinomial/Ellipse 4.png"),
  },
  {
    name: "Abhay",
    title: "Sr. Designer of Gonji",
    image: require("../../assets/Testinomial/Ellipse 4.png"),
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-[#fff] py-[30px]">
        <div className="testimonial-section  max-w-[1366px] mr-auto ml-auto">
          <h3>Our Client</h3>
          <h1>Testimonial</h1>
          <p>
            When applied to building block a website or similar work product, a
            Visual Guide can be an intermediate step toward the end goal of a
            complete website. By creating a visual guide along the way, the
            designer or developer can get input from the other people involved
            in the website such as the customer, their manager, and other
            members of the team.
          </p>
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Image src={testimonial.image} alt={testimonial.name} />
                <div className="testimonial-text">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
