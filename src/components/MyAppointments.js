import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from './NavigationBar';
import { fetchAppointments } from '../features/appointments/appointmentsSlice';

function MyAppointments() {
  const dispatch = useDispatch();
  const { appointments, isLoading, error } = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

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
          <h1 className="text-2xl font-bold mb-4">My Appointments</h1>
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <div className="flex flex-col">
              <table className="w-full text-sm table-auto">
                <thead className="text-xs bg-primary main-bg-dark dark:bg-secondary dark:text-gray-400">
                  <tr>
                    <th className="px-2 md:px-6 py-2">Doctor Name</th>
                    <th className="px-2 md:px-6 py-2">Appointment Time</th>
                    <th className="px-2 md:px-6 py-2">City</th>
                    <th className="px-2 md:px-6 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-2 md:px-6 py-2 font-medium">{appointment.doctor_name}</td>
                      <td className="px-2 md:px-6 py-2">{appointment.appointment_time}</td>
                      <td className="px-2 md:px-6 py-2">{appointment.city}</td>
                      <td className="px-2 md:px-6 py-2 cursor-pointer text-red-500 hover:text-red-700">Delete</td>
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
}

export default MyAppointments;
