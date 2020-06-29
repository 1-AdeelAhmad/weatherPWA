export const WeatherStyles = (theme) => ({
    root: {
      flexGrow: 1,
      margin: '0 auto'
    },
    paper: {
      marginTop: '2rem',
      padding: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      height: '10vh',
      borderRadius: '20px',
      background: 'linear-gradient(145deg, #d4d8db, #fdffff)',
      boxShadow:  '5px 5px 10px #8e9092, -5px -5px 10px #ffffff'
    },
    paperSelected: {
      marginTop: '2rem',
      padding: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textTransform: 'uppercase',
      height: '10vh',
      borderRadius: '20px',
      background: '#81859C',
      boxShadow:  'inset 5px 5px 10px #272932, inset -5px -5px 10px #A4A7B7'
    },
    paperLocationDetails: {
      display: 'flex',
      alignItems: 'space-around',
      marginTop: '2rem',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '60vh',
      borderRadius: '20px',
      background: 'linear-gradient(145deg, #d4d8db, #fdffff)',
      boxShadow:  '5px 5px 10px #8e9092, -5px -5px 10px #ffffff'
    },
    paperLocationV2: {
      marginTop: '2rem',
      padding: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      height: '10vh',
      borderRadius: '25px',
      background: 'linear-gradient(145deg, #A4A7B7, #fdffff)',
      boxShadow:  '2px 2px 5px #8e9092, -2px -2px 5px #ffffff'
  }
  });

  