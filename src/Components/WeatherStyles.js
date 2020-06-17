export const WeatherStyles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      height: '12vh',
      borderRadius: '20px',
      background: 'linear-gradient(145deg, #d4d8db, #fdffff)',
      boxShadow:  '5px 5px 10px #8e9092, -5px -5px 10px #ffffff'
    },
    paperSelected: {
      padding: theme.spacing(1),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textTransform: 'uppercase',
      height: '12vh',
      borderRadius: '20px',
      background: '#81859C',
      boxShadow:  'inset 5px 5px 10px #272932, inset -5px -5px 10px #A4A7B7'
    },
    paperLocationDetails: {
      padding: theme.spacing(4),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '35vh',
      borderRadius: '20px',
      background: 'linear-gradient(145deg, #d4d8db, #fdffff)',
      boxShadow:  '5px 5px 10px #8e9092, -5px -5px 10px #ffffff'
    }
  });

  