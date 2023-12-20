import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import Home from './components/Home';
import ProtectedRoute from './utils/ProtectedRoute';
import BookAppointment from './components/BookAppointment';
import MyAppointments from './components/MyAppointments';
import AddDoctor from './components/AddDoctor';
import DeleteDoctor from './components/DeleteDoctor';

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
        {/* public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* private Routes */}
        <Route
          path="/"
          element={(
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/bookappointment"
          element={(
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/myappointment"
          element={(
            <ProtectedRoute>
              <MyAppointments />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/add-doctor"
          element={(
            <ProtectedRoute>
              <AddDoctor />
            </ProtectedRoute>
          )}
        />
        <Route
          path="/delete-doctor"
          element={(
            <ProtectedRoute>
              <DeleteDoctor />
            </ProtectedRoute>
          )}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
