import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import doctorReducer from '../features/doctors/doctorsSlice';
// import appointmentReducer from '../features/appointment/appointmentSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    doctors: doctorReducer,
    // appointments: appointmentReducer,
  },
});

export default store;
