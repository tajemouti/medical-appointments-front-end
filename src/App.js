import './App.css';
import Login from './components/Login'
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import Signin from './components/signin';
//import User from './components/User';

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
        {/* <User /> */}
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
