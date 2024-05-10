import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Landing from './Landing/Landing/Landing';
import Home from './Blog/Home';
import Community from './Community/Community'
import Login from './Login_Signup/Login';
import Signup from './Login_Signup/Signup';
import Dashboard from './Main/Dashboard/Dashboard';
import ViewTemplate from './Main/CourseMainPage/ViewTemplate';

function App() {
  return (
    <div className="h-full w-full">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Blog' element={<Home/>} />
        <Route path='/Community' element={<Community/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<Signup/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Dashboard/CourseView/:moduleId' element={<ViewTemplate/>} />
      </Routes>
    </div>
  );
}

export default App;
