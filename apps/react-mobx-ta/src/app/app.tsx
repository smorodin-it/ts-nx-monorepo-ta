import { ThemeProvider } from '@mui/material';
import { lightTheme } from './themes/light';
import Router from './router/Router';

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
