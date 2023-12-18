import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors, deleteDoctor } from '../features/doctors/doctorsSlice';
import NavigationBar from './NavigationBar';

const DeleteDoctor = () => {
  const dispatch = useDispatch();
  const { doctors, isLoading, error } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id)).then(() => {
      dispatch(fetchDoctors());
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row w-screen">
        <div className="w-1/6">
          <NavigationBar />
        </div>
        <div className="w-5/6 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-400 p-4">
          <h1 className="text-2xl font-bold mb-4">Delete a doctor from the following List</h1>
          {doctors.length === 0 ? (
            <p>No doctors found.</p>
          ) : (
            <div className="flex flex-col">
              <ul className="flex flex-col gap-4">
                {doctors.map((doctor) => (
                  <li key={doctor.id}>
                    <div className="flex flex-col">
                      <img className="w-8 h-8 rounded-full" src={doctor.picture} alt="" />
                      <span>{doctor.name}</span>
                    </div>
                    <div>
                      <p>{doctor.city}</p>
                      <button type="button" onClick={() => handleDelete(doctor.id)}>
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteDoctor;
