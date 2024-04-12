// ModuleContext.js
import React, { createContext, useContext, useState } from 'react';

const ModuleContext = createContext();

export const ModuleProvider = ({ children }) => {
  const [moduleId, setModuleId] = useState(null);
  const [moduleData, setModuleData] = useState({}); // Add moduleData state
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <ModuleContext.Provider value={{ moduleId, setModuleId, moduleData, setModuleData, selectedVideo, setSelectedVideo}}>
      {children}
    </ModuleContext.Provider>
  );
};

export const useModuleContext = () => {
  const context = useContext(ModuleContext);
  if (!context) {
    throw new Error('useModuleContext must be used within a ModuleProvider');
  }
  return context;
};
