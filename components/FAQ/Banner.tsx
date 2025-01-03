import Image from "next/image";
import backgroundImg from "../../assets/AboutUs/real_estate_about_background.png";

const FaqBanner = ()=>{
return(
    <>
     <div
      className="relative md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-transparent  to-white"></div>

      {/* Container for content */}
      <div className="max-w-[1366px] mr-auto ml-auto relative z-10 flex flex-col md:justify-center md:items-center h-full p-8 space-y-8 md:flex-row md:space-x-24 md:space-y-0 md:p-20">
       
        {/* Text Section */}
        <div className="text-black md:text-white ">
          <h2 className="text-xl font-bold md:text-4xl ">
          FAQ
          </h2>
          <p className="mt-6 md:mt-4 text-lg  md:text-base">
          We provide a complete service for the sale,
purchase or rental of real estate.
          </p> 
          {/* <p className="mt-4 text-lg md:text-base">
          Each element within Vvie resonates with an ethos of refined living, offering serenity and elevated experiences for the discerning individual.
          </p> */}
        </div>
      </div>
    </div>
    </>
)
}

export default FaqBanner;