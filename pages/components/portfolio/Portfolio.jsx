import { Box, Container, Button } from '@mui/material';
import React from 'react';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Programmer's Portfolio",
    github: "https://github.com/eddc1/Portfolio",
    demo: "https://dribbble.com/shots/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Blog Potwarmer',
    github: 'https://github.com/eddc1/Potwarmer',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'News Ticker',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
    },
  {
    id: 4,
    image: IMG4,
    title: 'Foxrunner',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard & Financial Visualiztion',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  }, 
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualiztion',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/'
  }      
]

const Portfolio = () => {
  return (
    <Box id='portfolio'>
      <Container>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </Container>

      <div className='container portfolio__container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <Button href={github} className='btn' variant='outlined' size='large' target='_blank' rel='noreferrer'>Github</Button>
                  <Button href={demo} className='btn' variant='contained' size='large' target='_blank' rel='noreferrer'>Live Demo</Button>
                </div>
              </article>
            )
          })
        }
      </div>
    </Box>
  )
}

export default Portfolio