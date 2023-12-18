import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { createDoctor } from '../features/doctors/doctorsSlice';
import NavigationBar from './NavigationBar';

function AddDoctorForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [address, setAddress] = useState('');
  const [speciality, setSpeciality] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.value);
  };

  const handleaddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSpecialityChange = (event) => {
    setSpeciality(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDoctor({
      name,
      picture,
      address,
      speciality,
    }));
    navigate('/');
  };

  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-[85%] bg-white justify-center items-end">
          <div className="flex flex-col justify-center  items-end gap-12 pr-16 w-full">
            <div>
              <h1 className="text-right text-slate-800 text-6xl font-bold font-['Inter'] leading-[72px]">Add Doctor</h1>
            </div>
            <form
              className="flex items-center justify-center gap-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <TextField
                required
                id="outlined-basics"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
                label="Enter Doctor"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                type="text"
                value={picture}
                onChange={(e) => handlePictureChange(e)}
                label="Paste Picture Link"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                type="text"
                value={address}
                onChange={(e) => handleaddressChange(e)}
                label="Enter Specialization"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-basic"
                type="text"
                value={speciality}
                onChange={(e) => handleSpecialityChange(e)}
                label="Enter Address"
                variant="outlined"
              />
            </form>
            <div>
              <button
                className="p-4 self-end text-white bg-lime-500 rounded-r-[80px] rounded-l-[80px]"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                aria-label="Next"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDoctorForm;
