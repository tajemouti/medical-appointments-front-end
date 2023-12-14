import './App.css';
import Login from './components/login'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signin from './components/signin';

const theme = createTheme({
  palette: {
    primary: {
      main: '#97BF0F',
    },
    secondary: {
      main: '#1F2937',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Login /> */}
        <Signin />
      </div>
    </ThemeProvider>
  );
}

export default App;
