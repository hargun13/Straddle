import VoiceNav from './VoiceNav'
import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
//icons
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
//image
import logo from "../../Logos/straddleblack.png"


const Topbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <div className='w-full '>
        <Box display="flex" justifyContent="space-between" p={2}>
            <a href='/' className='flex items-center justify-center gap-2'>
                <img src={logo} alt="intellihealth logo" className='h-[30px]'/>
                <p className='text-2xl'>dashboard</p>
            </a>

            {/* ICONS */}
            <Box display="flex" gap="8px">
                {/* SEARCH BAR */}
                <Box
                    display="flex"
                    border="1px solid black"
                    borderRadius="8px"
                    padding="2px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>

                    <VoiceNav />
                    
                </Box>

                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>

                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>


                {/* Profile dropdown */}
                <div>
                    
                    <IconButton onClick={handleClick}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link to="/Dashboard"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem >Logout</MenuItem>
                    </Menu>
                </div>
                
            </Box>
        </Box>
    </div>
  )
}

export default Topbar