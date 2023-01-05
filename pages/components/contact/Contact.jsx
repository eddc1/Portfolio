import { Box, Container, Button } from '@mui/material';
import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TextsmsIcon from '@mui/icons-material/Textsms';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_admin', 'template_5m6xrjq', form.current, 'SiYqt0avPq3M-geW3')

    e.target.reset();
  }; 
  return (
    <Box id='contact'>
        <Container>
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </Container>
        <Container className='container contact__container'>
          <div className='contact__options'>
            <article className="article contact__option">
              <MailOutlineIcon className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>edward.habermann@icloud.com</h5>
              <a href='mailto:edward.habermann@icloud.com' target='_blank' rel='noopener noreferrer'>Send a message</a>
            </article>
            <article className="article contact__option">
              <TextsmsIcon className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Edward Habermann</h5>
              <a href='https://m.me/edward.achiever' target='_blank' rel='noopener noreferrer'>Send a message</a>
            </article>
            <article className="article contact__option">
              <WhatsAppIcon className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+49 176 34992789</h5>
              <a href='https://api.whatsapp.com/send?=+4917634992789' target='_blank' rel='noopener noreferrer'>Send a message</a>
            </article>
          </div>
          {/* END OF CONTACT OPTION */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email'/>
            <textarea name="message" rows='7' placeholder='Your Message'></textarea>
            <Button type='submit' className='btn' variant='contained' size='medium'>Send Message</Button>
          </form>
        </Container>
    </Box>
  )
}

export default Contact
