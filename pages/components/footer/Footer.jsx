import React from 'react'
import { Box, Container } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box className='footer'>
      <Container>
            <a href='#home' className='footer__logo'>EDWARD</a>

            <ul className='premalinks'>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#experiece'>Expeirience</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FacebookIcon /></a>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'><InstagramIcon /></a>
              <a href='https://twwitter.com' target='_blank' rel='noopener noreferrer'><TwitterIcon /></a>
            </div>

            <div className='footer__copyright'>
              <small>&copy; Edward Habermann. All rights reserved.</small>
            </div>
      </Container>
    </Box>
    
  )
}


export default Footer