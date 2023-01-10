import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import VideosToday from '../components/Videos/VideosToday';
import VideosHead from '../components/Videos/VideosHead';
import AdVideosToday from '../components/Videos/AdVideosToday';

const mainContainer = {
    display: 'flex, block',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    marginRight: 'auto',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: '4rem',
    fontFamily: 'Arial',
    maxWidth: '105ch',
    position: 'relative' 
}

const box = {
    flexGrow: 1,
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 10,
    margin: 'auto',
    maxWidth: '100%',
    justifyContent: 'center',
    justifyItem: 'center',
        button: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        },
}


const gridimg = {
    backgroundColor: 'rgba(white)', // farbe = 0,0,0,.1
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
}

const daynewslist = {
    backgroundColor: 'rgba(white)',
}


function Nutzungsbestimmungen() {
  return (
    <Container sx={mainContainer}> 
        <Box
        component="section"
        sx={box}>
            <Box>
                <VideosHead/>
            </Box>
                <Grid item xs={12} container>
                    <Grid item container direction="row">
                        <Grid item sx={daynewslist} xs={8}>
                            <VideosToday/>
                        </Grid>
                        <Grid item sx={gridimg} xs={4}>
                            <AdVideosToday/>
                        </Grid>
                    </Grid>
                </Grid>
        </Box>
    </Container>
  );
}

  

export default Nutzungsbestimmungen;
