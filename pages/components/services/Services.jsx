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
                <p>Creating user-friendly designs that take into account the needs of the users.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Developing wireframes and prototypes to visualize the design concept.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Using modern design tools and technologies to create visually appealing interfaces.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Considering color schemes, typography, and visual hierarchy to ensure a consistent and user-friendly experience.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Adhering to industry standards and best practices to ensure optimal user experience.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Working closely with clients to understand their requirements and needs and integrate them into the design concept.</p>
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
                <p>Developing responsive and scalable websites using the latest web technologies and frameworks.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Writing clean, efficient, and maintainable code that follows industry standards and best practices.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Optimizing website performance and loading times for a seamless user experience.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Incorporating SEO best practices to improve website visibility and ranking on search engines.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Integrating third-party APIs and services to add additional functionality and enhance user experience.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Providing ongoing website maintenance and support to ensure website functionality and security.</p>
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
                <p>Developing high-quality and engaging content that resonates with the target audience and aligns with the brand's tone and voice.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Conducting thorough research to ensure accuracy and relevance of the content.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Incorporating search engine optimization (SEO) best practices to improve content visibility and ranking on search engines.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Creating content that is shareable on social media platforms and other relevant channels.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Providing content strategy development to help brands align their content efforts with their business goals.</p>
              </li>
            </ul>
          </article>
          {/* END OF CONTENT CREATION */}
        </div>
    </Box>
  )
}

export default Services