import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://medical-appointments-booking-wizard.onrender.com/api/v1/appointments';
const token = JSON.parse(localStorage.getItem('user'));
const authToken = token.token;

const createAppointment = createAsyncThunk('user/createAppointment', async (data) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
});

const fetchAppointments = createAsyncThunk('doctors/fetchAppointments', async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };

    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: error.message };
  }
});

const fetchAppointment = createAsyncThunk('appointments/fetchAppointment', async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };

    const response = await fetch(`${url}/${id}`, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return { error: error.message };
  }
});

const deleteAppointment = createAsyncThunk('appointments/deleteAppointment', async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };

    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
});

const initialState = {
  isLoading: false,
  appointments: [],
  appointment: {},
  createAppointmentMsg: {},
  deleteAppointmentMsg: {},
  error: undefined,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appointment = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createAppointmentMsg = action.payload;
        console.log(action.payload);
      })
      .addCase(createAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        console.log(state.error);
      })
      .addCase(deleteAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deleteAppointmentMsg = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },

});

export {
  fetchAppointments,
  fetchAppointment,
  createAppointment,
  deleteAppointment,
};
export default appointmentSlice.reducer;
