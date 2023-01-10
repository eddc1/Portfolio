import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from './modules/components/theme/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NewsTicker from './modules/components/News/NewsTicker/NewsTicker';
import TopNews from './modules/components/News/NewsTicker/TopNews';
import GameList from './modules/components/News/NewsTicker/GameList';
import TechList from './modules/components/News/NewsTicker/TechList';
import VideoList from './modules/components/News/NewsTicker/VideoList';

const box = {
  flexGrow: 1,
  overflow: 'hidden',
  p: 1,
  margin: 'auto',
  justifyContent: 'center',
  justifyItem: 'center',
  display: 'flex',
  maxWidth: '100%',
    button: {
      width: '100%',
      height: 'auto'
    },
}

const container = {
  margin: 2,
  display: 'flex',
  position: 'relative'
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function News() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
    component="section"
    sx={box}>
      <Container sx={container}>
        <Grid 
              container
              direction="row"
              justifyContent="center"
              pb={6}>
          <Grid item sx={{ mb: 2 }} xs={12}>
            <Typography variant='h4'>Newsticker: Alle Inhalte im Überblick</Typography>
          </Grid>
          <Grid item sx={{ mb: 3 }} xs={12}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs  variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Newsticker" {...a11yProps(0)} />
                  <Tab label="Top-News" {...a11yProps(1)} />
                  <Tab label="Spiele" {...a11yProps(2)} />
                  <Tab label="Tech" {...a11yProps(3)} />
                  <Tab label="Video" {...a11yProps(4)} />
                  <Tab label="Deals" {...a11yProps(5)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <NewsTicker/>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TopNews/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <GameList/>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <TechList/>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <VideoList/>
              </TabPanel>
              <TabPanel value={value} index={5}>
                Weiter leiten zu Artikel Deals &amp; Sells
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
  </Box>
);
}



export default News;
