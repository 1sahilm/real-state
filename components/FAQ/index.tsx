

import React, { useState } from 'react';
import './FAQ.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    "Question number one",
    "Question number two",
    "Question number three"
  ];

  return (
    <div className='faq-main-container'>
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Tellus urna urna molestie.</p>
      </div>
      <div className="faq-list">
        {questions.map((question, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              <span>{question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>This is the answer to {question.toLowerCase()}.</p>
              </div>
            )}
          </div>
        ))}
      </div>
        
        </div>
       
  );
};

export default FAQ;

