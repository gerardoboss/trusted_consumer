import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#fff8b7',
      main: '#e5e35b',
      dark: '#b3b248',
      contrastText: '#fff',
    },
  },
});

export default theme;
