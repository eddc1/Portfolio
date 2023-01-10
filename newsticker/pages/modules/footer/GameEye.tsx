import { Container, Box } from '@mui/material';
import Gridhead from '../components/homepage/Gridhead';


function GameEye() {

  return (
    <Box>
        <Container sx={{display: 'flex, block', justifyContent: 'center', width: '100%', marginLeft: 'auto', boxSizing: 'border-box',  marginRight: 'auto', paddingLeft: '16px', paddingRight: '16px', paddingTop: '4rem', fontFamily: 'Arial', maxWidth: '105ch', position: 'relative' }}> 
          <Gridhead/>
        </Container>
    </Box>
  );
}

export default GameEye;
