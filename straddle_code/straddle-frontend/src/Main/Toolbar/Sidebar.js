import React from 'react'
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button'
import { RxDashboard } from "react-icons/rx";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className='py-3  border-r-2 border-[#f0e8e8] w-[15%] h-[95%] '>
        <List className='w-full'>

            <ListItem className='my-7'>
                <Link to="/Dashboard">
                    <Button style={{ color: 'black' }}>
                        <RxDashboard className='mr-3' size={20}/>Dashboard
                    </Button>
                </Link>
            </ListItem>

            <ListItem className='my-7'>
                <Link to="/Courses">
                    <Button style={{ color: 'black' }}>
                        <BiBookBookmark className='mr-3' size={20}/>Courses
                    </Button>
                </Link>
            </ListItem>

            <ListItem className='my-7'>
                <Link to="/Schedule">
                    <Button style={{ color: 'black' }}>
                        <AiOutlineSchedule className='mr-3' size={20}/>Schedule
                    </Button>
                </Link>
            </ListItem>

        </List>

    </div>
  )
}

export default Sidebar