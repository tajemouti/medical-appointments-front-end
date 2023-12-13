import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// let url = 'http://127.0.0.1:3000/api/v1/doctors';
let url = 'https://medical-appointments-booking-wizard.onrender.com/api/v1/doctors';

let token = JSON.parse(localStorage.getItem('user'));
let authToken = token.token;
const createDoctor = createAsyncThunk('doctors/createDoctor', async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
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

const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };

    const response = await fetch(url, {
      headers: headers,
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

const fetchDoctor = createAsyncThunk('doctors/fetchDoctor', async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };

    const response = await fetch(`${url}/${id}`, {
      headers: headers,
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

const deleteDoctor = createAsyncThunk('doctors/deleteDoctor', async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };

    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: headers,
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
  doctors: [],
  doctor: {},
  docDeleteMsg: {},
  createDoctorMsg: {},
  error: undefined,
};

const doctorSlice = createSlice({
  name: 'doctors',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createDoctorMsg = action.payload;
        console.log(action.payload);
      })
      .addCase(createDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctors = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.doctor = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.docDeleteMsg = action.payload;
        console.log(action.payload);
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },

});

export { createDoctor, fetchDoctors, fetchDoctor, deleteDoctor };
export default doctorSlice.reducer;
