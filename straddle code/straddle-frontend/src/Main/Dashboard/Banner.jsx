import React, {useState} from 'react'
import { useModuleContext } from '../CourseMainPage/ModuleContext';
import { useNavigate } from 'react-router-dom';

import { MdOutlineArrowOutward, MdOutlineImportantDevices  } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoLayers } from "react-icons/io5";
import { LiaBuromobelexperte } from "react-icons/lia";
import LinearProgress from '@mui/material/LinearProgress';


const Banner = () => {
    const [progress, setProgress] = useState(20);
    const { setModuleId } = useModuleContext();
    const navigate = useNavigate();

    const handleCardClick = (moduleId) => {
        setModuleId(moduleId);
        navigate(`/Dashboard/CourseView/${moduleId}`)
        // You can navigate to the CourseView route if needed
        // history.push(`/Dashboard/CourseView/${moduleId}`);
    };

  return (
    <div className='flex items-center justify-between gap-5 h-[45%] w-full rounded-3xl bg-[#2A2B47] px-7 py-5 text-white'>
        <div className='w-[40%] h-full flex flex-col justify-between pb-3'>
            <div>
                <p className='p-1'>Hi, Hargun!</p>
                <p className='text-4xl my-5'>You have completed 6 lessons this week!</p>
            </div>

            <p className='bg-white font-bold text-sm text-black flex items-center justify-center rounded-full gap-3 w-[30%] p-2'>SEE ALL <MdOutlineArrowOutward /></p>
        </div>
        <div className='w-[60%] h-full flex items-center justify-around gap-3'>
            {/* Card Template */}
            <div onClick={() => handleCardClick(1)} className='transition duration-300 hover:-translate-y-2 cursor-pointer bg-[#BFA8FF] text-[#2A2B47] w-[32%] rounded-3xl h-full p-5 font-bold flex flex-col justify-between'>
                {/* <a href={`/Dashboard/CourseView/${moduleId}`} className='flex flex-col justify-between h-full'> */}
                <div className='flex items-center justify-between'>
                    <p>01</p>
                    <p><BiDotsVerticalRounded/></p>
                </div>

                <div>
                    <IoLayers size={40} className='my-2'/>
                    <p className='font-extrabold text-lg my-2'>New Beginner Module</p>

                    <p className='text-xs font-normal my-2'>15 Lessons | 54%</p>
                    <LinearProgress variant="determinate" value={progress} className='mb-2'/>
                </div>
                {/* </a> */}
            </div>
         
            {/* Card Template */}

            {/* Card Template */}
            <div onClick={() => handleCardClick(2)} className='transition duration-300 hover:-translate-y-2 cursor-pointer bg-[#FEE6C2] text-[#2A2B47] w-[32%] rounded-3xl h-full p-5 font-bold flex flex-col justify-between'>
                {/* <a href={`/Dashboard/CourseView/${moduleId}`} className='flex flex-col justify-between h-full'> */}
                <div className='flex items-center justify-between'>
                    <p>02</p>
                    <p><BiDotsVerticalRounded/></p>
                </div>

                <div>
                    <MdOutlineImportantDevices size={40} className='my-2'/>
                    <p className='font-extrabold text-lg my-2'>Intermediate Module</p>

                    <p className='text-xs font-normal my-2'>25 Lessons | 54%</p>
                    <LinearProgress variant="determinate" value={progress} className='mb-2'/>
                </div>
                {/* </a> */}
            </div>
            {/* Card Template */}

            {/* Card Template */}
            <div onClick={() => handleCardClick(3)} className='transition duration-300 hover:-translate-y-2 cursor-pointer bg-[#EDFA53] text-[#2A2B47] w-[32%] rounded-3xl h-full p-5 font-bold flex flex-col justify-between'>
                {/* <a href={`/Dashboard/CourseView/${moduleId}`} className='flex flex-col justify-between h-full'> */}
                <div className='flex items-center justify-between'>
                    <p>03</p>
                    <p><BiDotsVerticalRounded/></p>
                </div>

                <div>
                    <LiaBuromobelexperte size={40} className='my-2'/>
                    <p className='font-extrabold text-lg my-2'>Professional Module</p>

                    <p className='text-xs font-normal my-2'>35 Lessons | 54%</p>
                    <LinearProgress variant="determinate" value={progress} className='mb-2'/>
                </div>
                {/* </a> */}
            </div>
            {/* Card Template */}

        </div>
    </div>
  )
}

export default Banner