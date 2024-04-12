import React from 'react'
import { IoLayers } from "react-icons/io5";
import { FaEllipsis } from "react-icons/fa6";


const MyAssignments = () => {
  return (
    <div>
        <div className='flex items-center justify-between my-5'>
            <p style={{fontWeight:900}}>My Assignments</p>
            <p className='text-xs '>View All</p>
        </div>

        <div className='flex items-center justify-between my-4'>
            <div className='flex items-center'>
                <div className='mr-5 bg-[#BFA8FF] text-[#2A2B47] p-2 rounded-xl'>
                    <IoLayers size={30}/>
                </div>

                <div>
                    <p className='font-bold'>What is Money?</p>
                    <p className='text-xs'>New Beginner Module</p>
                </div>

            </div>

            <p className='text-sm font-extrabold' >11 Dec, 2023</p>
            <FaEllipsis />
        </div>

        <div className='flex items-center justify-between my-4'>
            <div className='flex items-center'>
                <div className='mr-5 bg-[#BFA8FF] text-[#2A2B47] p-2 rounded-xl'>
                    <IoLayers size={30}/>
                </div>

                <div>
                    <p className='font-bold'>History Of Money</p>
                    <p className='text-xs'>New Beginner Module</p>
                </div>

            </div>

            <p className='text-sm font-extrabold' >18 Dec, 2023</p>
            <FaEllipsis />
        </div>

    </div>
  )
}

export default MyAssignments