import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BookIcon from '@mui/icons-material/Book';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MessageIcon from '@mui/icons-material/Message';
import { Box } from '@mui/material';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div>
      <Box className='nav'>
        <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><HomeIcon /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><PersonOutlineIcon /></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BookIcon /></a>
        <a href='#services'  onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><DesignServicesIcon /></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MessageIcon /></a>
      </Box>    
    </div>
  )
}

export default Nav