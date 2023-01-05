import React from 'react';
import Button from '@mui/material/Button';

const CTA = () => {
  return (
    <div className='cta'>
        <Button className='btn' variant='outlined' size='large' href="#">Download CV</Button>
        <Button className='btn' variant='contained' size='large'>Let's Talk</Button>
    </div>
  );
}

export default CTA;
