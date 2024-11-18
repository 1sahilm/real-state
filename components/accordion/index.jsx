"use client";
import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


//     <div key={index} className="faq-item mt-10 md:mt-0">
//     <div
//       className="faq-question w-full px-8 py-5"
//       onClick={() => toggleQuestion(index)}
//     >
//       <span>{question}</span>
//       <span className="font-3xl">+</span>
//     </div>
//   </div>




    return (
        <div className="  border-[1px] border-[#0000003B] rounded-[20px] overflow-hidden" >
            <div 
                className="faq-question w-full px-8 py-5" 
                onClick={toggleAccordion} 
                 
            >
                {question}
                <span className="font-3xl">
                    {isOpen ? <>-</> : <>+</>}
                    
                    
                    </span>
            </div>
            {isOpen && (
                <div 
                    className="accordion-body px-8 pb-5" 
                    style={{  background: "#fff", borderBottom: "1px solid #ddd" }}
                >
                    {answer}
                </div>
            )}
        </div>
    );
};

export default Accordion;
