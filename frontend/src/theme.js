import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8b5cf6',
    },
    background: {
      default: '#1e1b4b',
      paper: '#2e1065',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
