"use client";
// import React, { useState } from "react";
import "./FAQ.css";
import Accordion from "@/components/accordion";

const FAQ = () => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // const toggleQuestion = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  // const questions = [
  //   "Question number one",
  //   "Question number two",
  //   "Question number three",
  // ];

  return (
    <div className="md:px-32 p-8 my-10  max-[768px]:pl-[20px] max-[768px]:pr-[20px]    md:my-28 flex flex-col md:flex-row justify-between  max-w-[1366px] mr-auto ml-auto ">
      <div className="faq-container">
        <h2 className="text-5xl font-semibold leading-[55px]">
          Frequently Asked Questions
        </h2>
        <p className="text-xl mt-2 leading-[30px] font-normal max-[768px]:my-[15px]">
          Lorem ipsum dolor sit amet consectetur. Tellus urna <br /> urna
          molestie.
        </p>
      </div>
      <div className="faq-list flex flex-col gap-[20px] max-w-[991px] w-[991px] max-[768px]:w-full">
        {/* {questions.map((question, index) => (
          <div key={index} className="faq-item mt-10 md:mt-0">
            <div
              className="faq-question w-full px-8 py-5"
              onClick={() => toggleQuestion(index)}
            >
              <span>{question}</span>
              <span className="font-3xl">+</span>
            </div>
          </div>
           
        ))} */}
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const faqs = [
  {
    question: "Question number one",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "Question number two",
    answer:
      "A component is a reusable piece of code that represents a part of the UI.",
  },
  {
    question: "Question number three",
    answer:
      "State is a built-in object that stores property values that belong to a component.",
  },
];
