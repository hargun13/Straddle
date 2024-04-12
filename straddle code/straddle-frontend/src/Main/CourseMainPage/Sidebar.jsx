import React, { useEffect } from 'react';
import { MdSlowMotionVideo } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useModuleContext } from './ModuleContext';
import { Button } from '@mui/material';

const Sidebar = ({ moduleId }) => {
  const { moduleData, setModuleData, selectedVideo, setSelectedVideo } = useModuleContext();
  

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Map numeric module IDs to corresponding MongoDB ObjectIds
        const moduleIdMap = {
          1: '6574dfc4c16dcc8d44842d92',
          2: '6574dfc4c16dcc8d44842da2',
          3: '65c0d9c3debe3d1577e310d4'
        };

        // Use the mapped ObjectId in the request
        const mappedModuleId = moduleIdMap[moduleId];
        if (!mappedModuleId) {
          console.error('Invalid module ID:', moduleId);
          return;
        }

        const response = await fetch(`http://localhost:5000/api/modules/${mappedModuleId}/topics`);
        const data = await response.json();
        console.log("Received data", data);
        setModuleData({ topics: data });
        // Clear the selected video when new module data is fetched
        setSelectedVideo(null);
      } catch (error) {
        console.error('Error fetching module data:', error);
      }
    };

    if (moduleId) {
      fetchData();
    }
  }, [moduleId, setModuleData]);

  return (
    <div className="w-full h-[90%] overflow-y-scroll scrollbar-hide">
      {Array.isArray(moduleData.topics) && moduleData.topics.map((topic, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${index}-content`} id={`panel-${index}-header`}>
            <p className="font-extrabold tracking-widest">{topic.name}</p>
          </AccordionSummary>

          <AccordionDetails>
            <ul>
              {Array.isArray(topic.videos) && topic.videos.map((video, vIndex) => (
                <Button>
                <li key={vIndex} onClick={() => handleVideoClick(video)} 
                className="flex  items-center justify-start gap-3 cursor-pointer ">
                    
                        <MdSlowMotionVideo />
                        <p>{video.title}</p>
                        <GoDotFill size={10} className="text-[#D2D3D3]" />
                        <p>play</p>
                    
                </li>
                </Button>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Sidebar;
