import React from 'react';
import Box from '@mui/material/Box';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { Container } from '@mui/material';

const Header = () => {
  return (
      <div id='home' className='header'>
        <Box className='container header__container'>
          <Container>
            <h5 component='div'>Hello I'm</h5>
            <h1 component='div'>Edward Habermann</h1>
            <h5 componente='div'>Fullstack Developer</h5>
          </Container>
          <CTA/>
          <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt='me'></img>
          </div>
          <a href='#contact' className='scroll__down'>Scrolle Down</a>
        </Box>
      </div>        
  );
}

export default Header;