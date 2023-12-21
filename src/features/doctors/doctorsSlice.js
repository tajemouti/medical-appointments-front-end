import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://medical-appointments-booking-wizard.onrender.com/api/v1/doctors';

const user = localStorage.getItem('user');
let authToken = '';
if (user !== null) {
  const userObject = JSON.parse(user);
  if (userObject && 'token' in userObject) {
    authToken = userObject.token;
  }
}

// Create Doctor
const createDoctor = createAsyncThunk('doctors/createDoctor', async (data) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers,
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

// List Doctors
const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`,
    };
    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: error.message };
  }
});

// get doctor by id
const fetchDoctor = createAsyncThunk('doctors/fetchDoctor', async (id) => {
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
    return data;
  } catch (error) {
    return { error: error.message };
  }
});

// Delete doctor by id
const deleteDoctor = createAsyncThunk('doctors/deleteDoctor', async (id) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))?.token}`,
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
      })
      .addCase(deleteDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },

});

export {
  createDoctor, fetchDoctors, fetchDoctor, deleteDoctor,
};
export default doctorSlice.reducer;
