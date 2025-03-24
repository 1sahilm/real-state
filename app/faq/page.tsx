"use client";
import Header from '@/components/Header'
import React, { useState } from 'react'
import styles from '../../styles/FaqSection.module.css'
import Footer from '@/components/Footer/pages'

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
    <Header headertheme={true} />
    <section className={styles.aboutSection}>
      <div className={styles.imageWrapper}>
        <img
          src="/about-us/baneer-about.jpg"
          alt="Architectural design"
          className={styles.backgroundImage}
        />
         <div className={styles.textOverlay}>
          <h1>FAQ: Vvie Villas by Infranium</h1>
        </div>
      </div> 
    </section> 

    <div className="max-w-6xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Project info</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold py-2 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Design and Construction</h2>
      <div className="space-y-4">
        {faqsSecond?.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold py-2 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Infrastructure and Safety</h2>
      <div className="space-y-4">
        {faqsThird?.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold py-2 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Amenities and Lifestyle</h2>
      <div className="space-y-4">
        {faqsFour.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold py-2 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Ownership and Maintenance</h2>
      <div className="space-y-4">
        {faqsFive?.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold py-2 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">Parking and Access</h2>
      <div className="space-y-4">
        {faqsSix?.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="w-full text-left font-semibold py-2 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>

 
 

    <Footer />
  </>
  )
}

export default Faq
const faqs = [
    { question: "Where is Vvie Villas located?", answer: "Vvie Villas is situated at Naldehra Golf Hills, Shimla, Himachal Pradesh, offering a serene Himalayan retreat." },
    { question: "Who is the project architect?", answer: "The renowned Pradeep Sachdeva Design Associates is the architect behind Vvie Villas." },
    { question: "Is Vvie Villas a drive-in property?", answer: "Yes, a proper metaled road leads directly to your doorstep for easy access." },
  ];
const faqsSecond = [
    { question: "What are the construction specifications?", answer: "Fully furnished with ultra-luxury specifications; detailed specs are available upon request." },
    { question: "What are the sustainability features?", answer: "Vvie Villas incorporates eco-friendly elements, including rainwater harvesting, a waste treatment plant, energy-efficient lighting, and an eco-conscious design. Wherever possible, locally sourced traditional building materials are used to minimize environmental impact and honor regional heritage." },
    { question: "How are landslides prevented?", answer: "The project complies with Seismic Zone 4 standards and undergoes strict structural checks for safety." },
  ];
const faqsThird = [
    { question: "Is there power backup?", answer: "Yes, 100% power backup ensures uninterrupted electricity for all residents." },
    { question: "What is the water supply source?", answer: "An IPH (Irrigation and Public Health) water connection is available, supplemented by 25,000-liter water storage." },
    { question: "Where are the water storage tanks located?", answer: "Discreet rooftop tanks are provided for each unit, with additional external storage available." },
    { question: "Is there a Sewage Treatment Plant (STP)?", answer: "10.Yes, an on-site Sewage Treatment Plant ensures sustainable waste management." },
    { question: "What security measures are in place?", answer: "Security includes perimeter fencing, manned guards, and 24/7 CCTV surveillance in common areas." },
  ];

  const faqsFour = [
    { question: "What club services are offered?", answer: "Residents enjoy an indoor heated pool, spa, gym, multicuisine restaurant, on-call butler service, golf course assistance, and a party hall." },
    { question: "Are furnished options available?", answer: "Yes, all units come fully furnished for immediate occupancy." },
    { question: "Can private green areas be fenced?", answer: "Yes, every unit includes fenced private lawn.Yes, every unit includes fenced private lawn." },
  ];
  const faqsFive = [
    { question: "Can non-Himachali residents own property here?", answer: "Yes, non-Himachali buyers can purchase units, as Vvie Villas is a RERA-approved project." },
    { question: "Does the project offer post-possession rental assistance?", answer: "Yes, rental assistance is provided post possession." },
    { question: "Can owners modify their villas?", answer: "No structural or façade changes are permitted to maintain architectural integrity." },
    { question: "Who maintains vacant villas?", answer: "A professional management firm handles the upkeep of vacant villas." },
    { question: "Are facility management services offered?", answer: "Yes, services include electricians, plumbers, carpenters, and other maintenance support." },
  ];
  const faqsSix = [
    { question: "What parking is provided?", answer: "20.Each villa includes one dedicated parking slot, with additional visitor parking available." },
    { question: "Can parking be covered?", answer: "No, parking remains uncovered to preserve the villa’s aesthetic façade." },
  ];