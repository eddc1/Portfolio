import { Box, Container } from '@mui/material';
import React from 'react';
import Avt1 from '../../assets/avatar1.jpg';
import Avt2 from '../../assets/avatar2.jpg';
import Avt3 from '../../assets/avatar3.jpg';
import Avt4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  },
  {
    avatar: Avt2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  },
  {
    avatar: Avt3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  },
  {
    avatar: Avt4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
  }
]

const Testimonials = () => {
  return (
    <Box id='testimonials'>
      <Container>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
      </Container>
        <Swiper className="container testimonials__container"
        // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}>
          {
            data.map(({ avatar, name, review }, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                   {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </Box>
  )
}

export default Testimonials