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
    <div className="md:p-32 max-[768px]:pl-[20px] max-[768px]:pr-[20px] my-10 md:my-0 flex flex-col gap-4 md:flex-row justify-between  max-w-[1366px] mr-auto ml-auto ">
      <div className="faq-container">
        <h2 className="text-[40px] font-[600]">
          Frequently Asked Questions
        </h2>
        <p className="text-[16px] mt-2 leading-[27px] font-[300] max-[768px]:my-[15px]">
        Client Questions 
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
    question: "What unique approach does Infranium bring to luxury real estate ?",
    answer: "Its only pur 1st project, but the team has a vast experience of curating and delivering numerous projects under different brands",
  },
  {
    question: "Are there past projects that should be referenced to showcase your expertise? (it can be in different spheres of the market as well",
    answer:
      "no, but you can highlight projects done by the architect.",
  },
];
