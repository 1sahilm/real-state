import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "Question number one",
    "Question number two",
    "Question number three",
  ];

  return (
    <div className="md:px-32 p-8 my-10  md:my-28 flex flex-col md:flex-row justify-between">
      <div className="faq-container">
        <h2 className="text-5xl font-semibold leading-[55px]">
          Frequently Asked Questions
        </h2>
        <p className="text-xl mt-2 leading-[30px] font-normal">
          Lorem ipsum dolor sit amet consectetur. Tellus urna <br /> urna
          molestie.
        </p>
      </div>
      <div className="faq-list">
        {questions.map((question, index) => (
          <div key={index} className="faq-item mt-10 md:mt-0">
            <div
              className="faq-question w-full px-8 py-5"
              onClick={() => toggleQuestion(index)}
            >
              <span>{question}</span>
              <span className="font-3xl">+</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
