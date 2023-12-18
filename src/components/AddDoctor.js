import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createDoctor } from '../features/doctors/doctorsSlice';
import NavigationBar from './NavigationBar';

function AddDoctorForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [doctorData, setDoctorData] = useState({
    name: '',
    picture: '',
    speciality: '',
    address: '',
  });

  const { isLoading, createDoctorMsg, error } = useSelector((state) => state.doctors);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    await dispatch(createDoctor(doctorData));

    navigate('/');
  };

  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div>
          <h1>Add Doctor</h1>
          {isLoading && <p>Adding doctor...</p>}
          {error && (
            <p>
              Error:
              {error}
            </p>
          )}
          {createDoctorMsg && <p>{createDoctorMsg.message}</p>}
          <form onSubmit={handleAddDoctor}>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={doctorData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label htmlFor="picture">
              Picture:
              <input
                type="text"
                name="picture"
                value={doctorData.picture}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label htmlFor="speciality">
              Specialization:
              <input
                type="text"
                name="speciality"
                value={doctorData.speciality}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <label htmlFor="address">
              Address:
              <input
                type="text"
                name="address"
                value={doctorData.address}
                onChange={handleInputChange}
                required
              />
            </label>
            <br />
            <button type="submit">Add Doctor</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddDoctorForm;
