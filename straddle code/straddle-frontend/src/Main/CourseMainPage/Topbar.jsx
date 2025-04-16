import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import { Box, Button, IconButton } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdHelpCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
//image
import logo from "../../Logos/straddleblack.png"

import { useModuleContext } from './ModuleContext';



const Topbar = () => {

    const [anchorE1, setAnchorE1] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);

    const { moduleId } = useModuleContext(); 

    const handleClick1 = (event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorE1(null);
    };

    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorE2(null);
    };

  return (
    <div className='w-full bg-white'>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>            
            <a href='/Dashboard' className='flex items-center justify-center gap-2'>
                <Button className='h-full' style={{color:"grey"}}><FaArrowLeftLong size={20}/></Button>
                <img src={logo} alt="intellihealth logo" className='h-[20px]'/>
                <p className='text-lg font-bold'>classroom</p>
            </a>

            {moduleId === 1 && (
                <p className='text-lg font-extrabold mr-5'>
                    Intoduction to Finance - The Straddle Way!
                </p>
            )}
            {moduleId === 2 && (
                <p className='text-lg font-extrabold mr-5'>
                    Intermediate Module
                </p>
            )}
            {moduleId === 3 && (
                <p className='text-lg font-extrabold mr-5'>
                    The Pro Module
                </p>
            )}

            <div className='flex items-center justify-center gap-3'>
                <IconButton><IoMdHelpCircle /></IconButton>

                {/* Profile dropdown */}
                <div>
                    
                    <IconButton onClick={handleClick1}>
                        <PersonOutlinedIcon />
                    </IconButton>
                    
                    <Menu anchorEl={anchorE1} open={Boolean(anchorE1)} onClose={handleClose1} >
                        <Link to="/Dashboard"><MenuItem onClick={handleClose1}>Profile</MenuItem></Link>
                        <MenuItem onClick={handleClose1}>My Account</MenuItem>
                        <MenuItem >Logout</MenuItem>
                    </Menu>
                </div>

                {/* Extras dropdown */}
                <div>
                    
                    <IconButton onClick={handleClick2}>
                        <RxHamburgerMenu />
                    </IconButton>
                    
                    <Menu anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={handleClose2}>
                        <Link to="/Blog"><MenuItem onClick={handleClose2}>Blogs</MenuItem></Link>
                        <Link to="/Community"><MenuItem onClick={handleClose2}>Community</MenuItem></Link>
                    </Menu>
                </div>

            </div>
        </Box>
    </div>
  )
}

export default Topbar