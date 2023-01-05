import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/material';


const HeaderSocials = () => {
  return (
    <Box className='socials'>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><LinkedInIcon/></a>
        <a href='https://github.com' target='_blank' rel='noopener noreferrer'><GitHubIcon/></a>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FacebookIcon/></a>
    </Box>
  );
}

export default HeaderSocials;

/* die buttons werden nicht angezeigt -.-  */