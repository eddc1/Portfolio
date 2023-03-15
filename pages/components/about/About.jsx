import { Box, Button, Container  } from '@mui/material';
import React from 'react';
import ME from '../../assets/me-about.png';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const About = () => {
  return (
      <Box id='about'>
        <Container>
          <h5>Get To Know</h5>
          <h2 pb={5}>About Me</h2>
        </Container>
        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='About'/>
            </div>
          </div>
          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <MilitaryTechIcon className='about__icon'/>
                <h3>Experience</h3>
                <small>1+ Year Working</small>
              </article>
              
              <article className='about__card'>
                <FolderOpenIcon className='about__icon'/>
                <h3>Projects</h3>
                <small>4 Completed</small>
              </article>

              <article className='about__card'>
                <PeopleOutlineIcon className='about__icon'/>
                <h3>Downloads</h3>
                <small>1.000+ Worldwide</small>
              </article>
            </div>
            <p>
              I'm a self-taught programmer with over a year of experience and four completed projects. My apps have been downloaded by over a thousand people worldwide. I've tried many programming languages, but I find frontend web development the most interesting.
            </p>

            <Button href='#contact' className='btn' variant='contained' size='large'>Let's Talk</Button>
          </div>

        </div>
        
      </Box>
  )
}

export default About
