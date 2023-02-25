import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#282a36',
    },
    secondary: {
      main: '#443C68',
    },
  },
});

function ConfigureTheme({ children }) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
}
export default ConfigureTheme;