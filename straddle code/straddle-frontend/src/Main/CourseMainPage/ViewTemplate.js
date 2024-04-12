import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import CourseHero from './CourseHero';
import { useModuleContext } from './ModuleContext'; // Import the context

const ViewTemplate = () => {
  const { moduleId } = useModuleContext(); // Access the module ID from the context

  return (
    <div className='w-full h-screen bg-[#F1F2F2]'>
      <div className='w-full h-[10%] '>
        <Topbar />
      </div>

      <div className='flex items-center justify-around w-full h-[86%] mt-4'>
        <div className='w-[30%] h-full bg-white rounded-3xl p-5'>
          <p className='text-center font-bold text-xl py-2 mb-5 border-b-2 border-[#cfcfcf]'>Course Content</p>
          {/* Pass moduleId to Sidebar */}
          <Sidebar moduleId={moduleId} />
        </div>

        <div className='w-[68%] h-full bg-white rounded-3xl p-5'>
          {/* Pass moduleId to CourseHero */}
          <CourseHero moduleId={moduleId} />
        </div>
      </div>
    </div>
  );
}

export default ViewTemplate;