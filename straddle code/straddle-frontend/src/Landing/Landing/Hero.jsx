import React, {useState} from 'react'
import Navbar from './Navbar'
import img1 from './hero/5.png'
import img2 from './hero/3.png'
import img3 from './hero/4.png'
import img4 from './hero/1.png'
import img5 from './hero/2.png'
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


const Carousel = ({ textData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + textData.length) % textData.length);
    };
  
    return (
        <div className="text-xs w-[80%] flex items-center justify-between ">
            <div className="w-[75%]">
                <p >{textData[currentIndex]}</p>
            </div>
            <div className="flex w-[20%] items-center justify-between">
                <FaArrowCircleLeft onClick={handlePrev} size={30} className='text-[#cfe99d] cursor-pointer'/>
                <FaArrowCircleRight onClick={handleNext} size={30} className='text-[#cfe99d] cursor-pointer'/>
            </div>
        </div>
    );
  };


const Hero = () => {

    const text = [
        "Tailored learning paths designed to adapt to your progress, ensuring a personalized and efficient learning experience.",
        "Stay ahead with up-to-the-minute market insights, empowering you to make informed decisions and seize opportunities.",
        "Connect with a vibrant community of learners and experts, fostering collaboration, discussions, and shared experiences for enhanced learning and growth.",
    ]

  return (
    <div className='h-auto bg-white pb-20 ' >
        <Navbar />

        <div className='md:flex w-full items-center justify-center mt-5 text-black'>

            <div className='md:w-[55%] px-16'>
                
                <div className='flex items-center justify-start text-[10px] gap-3'>
                    <p className='bg-[#F0F1EB] py-1 px-3 rounded-full font-bold'>FINANCE</p>
                    <p className='bg-[#F0F1EB] py-1 px-3 rounded-full font-bold'>ED-TECH</p>
                </div>

                <h1 className='md:text-6xl text-5xl font-semibold py-3 '>Play, Learn, Prosper!</h1> 
                <h1 className='md:text-6xl text-5xl font-semibold pt-3 -ml-4'><span className='bg-[#D9EAB6] px-4 rounded-full'>Finance</span> Made Fun!</h1>

                <p className='text-sm py-10 pr-40 font-bold my-5'>Embark on a journey where finance becomes an exciting adventure. Explore, learn, and thrive with our engaging platform designed to make finance enjoyable and rewarding.</p>

                <div className='flex items-center gap-7 uppercase text-xs font-extrabold'>
                    <p className='flex items-center justify-start gap-1'><FaCheckCircle size={20} className='text-[#cfe4a6]'/>Rewarding Games</p>
                    <p className='flex items-center justify-start gap-1'><FaCheckCircle size={20} className='text-[#cfe4a6]'/>Smart Learning Paths</p>
                    <p className='flex items-center justify-start gap-1'><FaCheckCircle size={20} className='text-[#cfe4a6]'/>Playful Quests</p>
                </div>
                
                <hr className=' border border-[#F0F1EB] my-3 w-[80%]'/>

                <Carousel textData={text}/>
                
            </div>

            <div className='md:w-[45%] flex justify-center'>
                <div className='md:w-[45%] flex flex-col justify-center items-center'>
                    <img src={img1} alt="hero-1" />
                    <img src={img2} alt="hero-2" />
                </div>

                <div className='md:w-[50%] flex flex-col justify-center items-center'>
                <img src={img3} alt="hero-3" />
                <img src={img4} alt="hero-4" />
                <img src={img5} alt="hero-5" />
                </div>
            </div>


        </div>


    </div>
  )
}

export default Hero