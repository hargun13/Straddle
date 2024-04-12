import React from 'react'
import Topbar from '../Toolbar/Topbar'
import Sidebar from '../Toolbar/Sidebar'
import Banner from './Banner'
import Stats from './Stats'
import Calender from './Calender'
import MyAssignments from './MyAssignments'

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full h-screen'>

      <div className='w-full my-2 px-2'>
        <Topbar />
      </div>

      <div className='flex w-full h-full  '>
        <Sidebar />

        <div className='px-5  py-1 w-[85%] overflow-y-scroll scrollbar-hide'>
          <Banner />

          <div className=' flex items-start justify-between my-4'>
            <div className='w-[60%]'>
              <Stats />
              <MyAssignments />
            </div>
            <div className='w-[36%]'>
              <Calender />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard