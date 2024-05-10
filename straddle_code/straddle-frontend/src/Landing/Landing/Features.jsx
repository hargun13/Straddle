import React from 'react'
import ap from './always_protected.png'
import fs from './free_shipping.png'
import gr from './get_reward.png'
import nhf from './no_hidden_fees.png'

const Features = () => {


    const bag2 = "https://assets.website-files.com/62cc07ca0720bd63152e1799/62cd16b4a5613c06cf9a0ff4_line-bg.svg";

    const data = [
        {
            logo: ap,
            heading:"Interactive Learning Games",
            content:"Engaging users with fun and interactive games that transform complex financial concepts into an enjoyable learning experience."
        },
        {
            logo: gr,
            heading:"Real-time Market Simulations",
            content:"Providing users with the opportunity to practice and refine their financial decision-making skills through realistic market simulations."
        },
        {
            logo: nhf,
            heading:"Rewarding Challenges",
            content:"Creating a sense of achievement and motivation by incorporating competitive challenges and a rewards system. "
        },
        {
            logo: fs,
            heading:"Certificates and Badges",
            content:"Offering tangible recognition of their achievements with certificates and badges upon course completion. How cool is that!!"
        },
    ]
  return (
    <div style={{backgroundImage: `url(${bag2})`, backgroundSize:'cover'}} className='h-auto flex flex-col items-center justify-center py-5'>
        
        <h1 className='text-5xl  font-bold text-center py-5'>Fun and Exciting Features</h1>
        <p className='md:text-xl text-lg italic font-semibold text-gray-500 text-center my-5 px-10'>Want to pay anything so easy with the touch of a finger. Through<br /> TSF Bank, you can make practically any transaction.</p>

        <div className='grid md:grid-cols-4 grid-cols-1 place-items-center items-center justify-center m-10 '>
            
            {data.map((data) =>(

            <div className='mx-5 p-6 bg-white rounded-2xl transition duration-700 hover:-translate-y-3 hover:bg-[#72e485] hover:text-black group shadow-2xl'>

                <img src={data.logo} alt="card depiction" className='h-16 mb-5' />
                <h1 className='text-2xl font-bold my-5'>{data.heading}</h1>
                <p className=' text-lg font-bold italic text-gray-300 transition duration-700 group-hover:text-black'>{data.content}</p>

            </div>

            ))}

        </div>


    </div>
  )
}

export default Features