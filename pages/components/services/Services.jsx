import { Box, Container } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

const Services = () => {
  return (
    <Box id='services'>
        <Container>
          <h5>What I Offer</h5>
          <h2>Services</h2>
        </Container>
        <div className='container services__container'>
          <article className='service'>
            <div className='service__head'>
              <h3>Ui/Ux Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
            </ul>
          </article>
          {/* END OF UI/UX */}
          <article className='service'>
            <div className='service__head'>
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
            </ul>
          </article>
          {/* WEB DEVELOPMENT */}
          <article className='service'>
            <div className='service__head'>
              <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION */}
        </div>
    </Box>
  )
}

export default Services