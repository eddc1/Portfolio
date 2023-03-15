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
    name: 'Sarah Smith',
    review: "Edward's web development expertise was evident from the start. He was responsive, attentive to detail, and met all deadlines. Our website looks better than ever, and we highly recommend him for any web development needs."
  },
  {
    avatar: Avt2,
    name: 'Jack Brown',
    review: "Edward's web development skills are top-notch. He's reliable, responsive, and always delivers high-quality work. I would definitely recommend him to anyone looking for a talented developer."
  },
  {
    avatar: Avt3,
    name: 'Michael Lee',
    review: "I had the pleasure of working with Edward on a web development project, and I couldn't be happier with the results. He's a true professional, and his expertise in the field is exceptional. I would definitely work with Edward again in the future"
  },
  {
    avatar: Avt4,
    name: 'Tina Snow',
    review: "Edward is an outstanding programmer who goes above and beyond to ensure the success of his projects. He's easy to work with and always delivers on time. I would highly recommend Edward to anyone looking for a skilled web developer."
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
          prevButton={<div className="swiper-button-prev"></div>}
          nextButton={<div className="swiper-button-next"></div>}
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