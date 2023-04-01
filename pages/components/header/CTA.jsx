import React from 'react';
import Button from '@mui/material/Button';
import CV from '../../assets/Edward_Habermann_Lebenslauf.png';

const CTA = () => {
  return (
    <div className='cta'>
        <Button className='btn' variant='outlined' size='large' href={CV} download>
          Download CV
        </Button>
        <Button className='btn' variant='contained' size='large'>
          Let's Talk
        </Button>
    </div>
  );
}

export default CTA;
