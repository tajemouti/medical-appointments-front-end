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
      <div className="flex flex-row justify-center items-center w-[100dvw] h-[100dvh]">
        <div className="md:flex md:w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col h-full w-[85%] bg-white justify-center items-end">
          <div className="flex flex-col h-full justify-center items-center  md:items-end gap-12 md:pr-16 pr-0 w-full">
            <div>
              <h1 className="md:text-right md:text-slate-800 text-4xl md:text-6xl md:font-bold  font-bold text-center md:font-['Inter'] md:leading-[72px]">Add Doctor</h1>
            </div>
            <form
              className="flex items-center flex-col w-full md:flex-row justify-center md:pl-4 gap-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <TextField
                className="w-full"
                required
                id="outlined-basics"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
                label="Enter Doctor"
                variant="outlined"
              />
              <TextField
                className="w-full"
                required
                id="outlined-basic"
                type="text"
                value={picture}
                onChange={(e) => handlePictureChange(e)}
                label="Paste Picture Link"
                variant="outlined"
              />
              <TextField
                className="w-full"
                required
                id="outlined-basic"
                type="text"
                value={address}
                onChange={(e) => handleaddressChange(e)}
                label="Enter Specialization"
                variant="outlined"
              />
              <TextField
                className="w-full"
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
                Add Doctor
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDoctorForm;
