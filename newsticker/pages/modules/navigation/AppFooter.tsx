import * as React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/theme/Typography';

import Link from 'next/link';


function Copyright() {
  return (
    <React.Fragment>
      <Typography color="white" href="https://mui.com/">
        {'© '} GameEye {new Date().getFullYear()}
      </Typography>{' '}
    </React.Fragment>
  );
}

function Important() {
  return (
    // display: inline-flex sorgt für den Zeilenbruch bei sx und sm automatisch.
    // flexWrap: wrap sorgt dafür dass die Grid Items nicht über dem Bildschierm überragen.
    <React.Fragment>
        <Box sx={{ flex: 1, display: { xs: 'row', md: 'flex' }, whiteSpace: 'pre-wrap', flexWrap: 'wrap'  }}>
          <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
            {importantList.map((page, i) => (
              <Grid item key={i} xs="auto" sx={{ display: 'inline-flex', }}>
                <Link style={{ textDecoration: "none", color: "white", paddingRight: 15 }} href={`/${page}`}>
                  {page}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
    </React.Fragment>
  );
}

const importantList = ["Impressum", "Gameeye", "Newsletter", "Kontakt", "Nutzungsbestimmungen", "Mediadaten", "Datenschutzerklärung", "Cookies & Tracking"];

function Social() {
  return (
    // display: inline-flex sorgt für den Zeilenbruch bei sx und sm automatisch.
    // flexWrap: wrap sorgt dafür dass die Grid Items nicht über dem Bildschierm überragen.
    <React.Fragment>
        <Box sx={{ flex: 1, display: { xs: 'row', md: 'flex' }, whiteSpace: 'pre-wrap', flexWrap: 'wrap'  }}>
          {socialList.map((page, i) => (
            <Grid item key={i} sx={{ display: 'inline-flex' }}>
              <Link style={{ textDecoration: "none", color: "white", paddingRight: 15 }} href={`/${page}`}>
                {page}
              </Link>
            </Grid>
          ))}
        </Box>
    </React.Fragment>
  );
}

const socialList = ["Meta", "Instagram", "Twitter", "TikTok"];


export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'primary.dark', color: 'white', marginTop: 'calc(10% + 78px)', bottom: 0, }}
    >
      <Container sx={{ my: 4, display: 'flex'}}>
        <Grid container spacing={3} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '5vh' }}>
          <Grid item>
            <Important/>
          </Grid>
          <Grid item>
            <Social/>
          </Grid>
          <Grid item>
            <Copyright/>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
