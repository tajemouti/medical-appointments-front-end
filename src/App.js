import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

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
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
