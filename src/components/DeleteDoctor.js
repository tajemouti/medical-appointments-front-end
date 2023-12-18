import React, { useEffect } from 'react';
import { Button } from '@mui/material';
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
        <div className=" flex flex-col w-5/6 bg-white  text-gray-700 dark:text-gray-800 p-4 gap-8">
          <h1 className="text-right text-slate-800 pr-8 pt-12 text-6xl font-bold font-['Inter'] leading-[72px]">My doctors</h1>
          {doctors.length === 0 ? (
            <p>No doctors found.</p>
          ) : (
            <div className="flex flex-col">
              <table className="w-full text-sm table-auto">
                <thead className="text-xs bg-primary main-bg-dark dark:bg-secondary dark:text-gray-800">
                  <tr>
                    <th className="text-start text-base px-2 md:px-6 py-2">Image</th>
                    <th className="text-start text-base px-2 md:px-6 py-2">Name</th>
                    <th className="text-start text-base px-2 md:px-6 py-2">Speciality</th>
                    <th className="text-start text-base px-2 md:px-6 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor.id} className="bg-white border-b dark:border-gray-300">
                      <td aria-label="dsa" className="text-gray-600 px-2 md:px-6 py-2 font-medium"><img className="w-8 h-8 rounded-full" src={doctor.picture} alt="" /></td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{doctor.name}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{doctor.speciality}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">
                        <Button variant="outlined" color="error" type="button" onClick={() => handleDelete(doctor.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DeleteDoctor;
