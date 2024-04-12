import React from 'react'
import { useModuleContext } from './ModuleContext';


const CourseHero = () => {

    const { selectedVideo } = useModuleContext()

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        
        {selectedVideo ? (
        <iframe
          width="98%"
          height="93%"
          src={`${selectedVideo.url}?rel=0?embed=true`}
          title={selectedVideo.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Please select a video from the sidebar.</p>
      )}

    </div>
  )
}

export default CourseHero