import React from 'react';
import LineChart from './LineChart'; 

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";

Chart.register(CategoryScale);

const Stats = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((entry) => entry.year),
        datasets: [
          {
            label: "Users Gained",
            data: Data.map((entry) => entry.userGain),
            fill: false,
            borderColor: "blue",
          },
        ],
      });


  return (
    <div className='w-full flex items-center justify-between  h-[120px] gap-5 my-5'>
        <div className='w-[20%] h-full bg-[#ebe4ff] rounded-3xl p-5 flex flex-col justify-between'>
            <p className='text-4xl font-bold'>2</p>
            <p className='text-xs font-extrabold'>Courses Completed</p>
        </div>

        <div className='w-[20%] h-full bg-[#ebe4ff] rounded-3xl p-5 flex flex-col justify-between'>
            <p className='text-4xl font-bold'>1</p>        
            <p className='text-xs font-extrabold'>Courses in progress</p>
        </div>

        <div className='w-[60%] h-full bg-[#ebe4ff] rounded-3xl p-5 flex items-center justify-between'>
            <div className='flex flex-col justify-between h-full w-[30%]'>
                <p className='text-4xl font-bold'>8.5</p>        
                <p className='text-xs font-extrabold'>Hours spent this week </p>
            </div>
            <div className='flex flex-col justify-between p-5 w-[70%]'>
                <LineChart chartData={chartData} />
            </div>
        </div>
    </div>
  )
}

export default Stats