import { Box, ListItemButton, ListItemIcon, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../../theme/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AdVideoList from '../AdNewsList/AdVideoList';

const box = {
    flexGrow: 1,
    width: '100%',
    overflow: 'hidden',
    p: 2,
    margin: 'auto',
    maxWidth: '100%',
    justifyContent: 'center',
    justifyItem: 'center',
        button: {
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        },
        headline: {
            borderBottom: '1px solid #303f9f',
            paddingBottom: 1
        },
        iconstyle: {
            color: '#303f9f'
        }
}



const gridimg = {
    backgroundColor: 'rgba(white)', // farbe = 0,0,0,.1
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '.875rem',
    zIndex: 'tooltip',
    left: '66%',
}

const daynewslist = {
    backgroundColor: 'rgba(white)',
}


function VideoList() {
  return (
    <Box
      component="section"
      sx={box}>
        <Grid container xs={12} >
            <Grid item container direction="row">
                <Grid item sx={daynewslist} sm={12} md={8}>
                    <Grid container>
                        <Grid item>
                            <Container>
                                <Grid container xs={12} sx={{ maxWidth: '100%' }}>
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' sx={box.headline}>Freitag, 30.09.2022</Typography>
                                    </Grid>
                                    {contentListFriday.map((item) => (
                                        <Grid item container direction="row" sx={{ borderBottom: '1px solid #303f9f' }}>
                                            <ListItemButton key={item.title}>
                                                <Grid item sx={{ pr: 2 }}>
                                                    <Typography variant='body2'>{`${item.time}`}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <ListItemIcon sx={box.iconstyle}>{item.icon}</ListItemIcon>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body2'>{`${item.title}`}</Typography>
                                                </Grid>
                                            </ListItemButton>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid container xs={12} sx={{ maxWidth: '100%', paddingTop: 4 }}>
                                    <Grid item xs={12}>
                                        <Typography variant='subtitle1' sx={box.headline}>Donnerstag, 29.09.2022</Typography>
                                    </Grid>
                                    {contentListThursday.map((item) => (
                                        <Grid item container direction="row" sx={{ borderBottom: '1px solid #303f9f' }}>
                                            <ListItemButton key={item.title}>
                                                <Grid item sx={{ pr: 2 }}>
                                                    <Typography  variant='body2'>{`${item.time}`}</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <ListItemIcon sx={box.iconstyle}>{item.icon}</ListItemIcon>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant='body2'>{`${item.title}`}</Typography>
                                                </Grid>
                                            </ListItemButton>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid container direction="row" sx={{ pt: 2 }}>
                                    <Button size="small">
                                        <Grid item>
                                            <Typography variant='body2'>mehr anzeigen</Typography>
                                        </Grid>
                                        <Grid item>
                                            <ArrowDropDownIcon/>
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={gridimg} xs={4}>
                    <Box sx={{flex: 1, display: { xs: 'none', md: 'flex' }}}>
                        <AdVideoList/>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </Box>
  );
}

const contentListFriday = [
    {
        time: '20:44',
        icon: <PlayCircleIcon/>,
        title: 'Endlich kann Vali den Wilden Westen ohne Zeitdruck erkunden - Unsere Relax Games Teil 3'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: '14 geniale und manchmal auch fiese Twists in Spielen'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Total War: Warhammer 3 - Das steckt wohl hinter dem kryptischen Trailer zum neuen Modus'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Der realistische Hardcore-Shooter Road to Vostok stellt spielbare Demo vor'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Ergreifende Szenen im neuen Story-Trailer zur Mittelalter-Hoffnung A Plague Tale 2'
    },
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Neue Spiele im Oktober - Vorschau-Video für PC und Konsolen'
    },
  ];

  const contentListThursday = [
    {
        time: '20:43',
        icon: <PlayCircleIcon/>,
        title: 'Wrath of the Righteous: Das Weltklasse-Rollenspiel hat ab sofort eine noch bessere Version'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: '500€ günstiger - 4K Ultrawide Monitor mit 175 Hertz, 21:9 und 38 Zoll im Hammerangebot auf Amazon'
    },
    {
        time: '20:43',
        icon: <DiamondIcon/>,
        title: 'Gratis bei Epic - Für wen lohnen sich die zwei kostenlosen Spiele?'
    },
    {
        time: '20:43',
        icon: '',
        title: 'GameEye Tech sucht - Jetzt als freier Smart Home-Autor (m/w/d) bewerben!'
    },
    {
        time: '20:43',
        icon: <DiamondIcon/>,
        title: 'Kostenlos bei GOG - Globalstrategie-Klassiker gibt es gratis - aber ihr müsst euch beeilen!'
    },
    {
        time: '20:43',
        icon: '',
        title: 'CoD Modern Warfare 2 - Alle Multiplayer-Maps im Überblick'
    },
    {
        time: '20:43',
        icon: '',
        title: 'GameEye sucht - Online Marketing Manager Affiliate (m/w/d)'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Dead Space - Neue Screenshots zeigen mehr von der Remake-Grafikpracht'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: 'Black Friday - Nicht mehr lange bis zu den Sale-Highlights 202'
    },
    {
        time: '20:43',
        icon: <ShoppingCartIcon/>,
        title: '65 Zoll 4K QLED TV - von Hisense nur heute zum Bestpreis bei Saturn'
    },
    {
        time: '20:43',
        icon: '',
        title: 'Star Wars - Wie sich Andor in Folge 4 mit The Force Unleashed verknüpft'
    },

  ];


  

export default VideoList;
