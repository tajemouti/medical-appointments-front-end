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
    return <div>Is loading...</div>;
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
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-[85%] bg-white justify-center items-center ">
          <h1>My Appointments</h1>
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <div className="flex flex-col">
              <table className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] food-display w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-1 md:px-6 py-1.5 py-3">Doctor Name</th>
                    <th scope="col" className="px-1 md:px-6 py-1.5 py-3">Appointment_Time</th>
                    <th scope="col" className="px-1 md:px-6 py-1.5 py-3">City</th>
                    <th scope="col" className="px-1 md:px-6 py-1.5 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-2 md:px-6 py-1 md:py-4 font-medium text-gray-900 md:whitespace-nowrap dark:text-white">{appointment.doctor_name}</th>
                      <td className="px-1 md:px-6 py-2 md:py-4">{appointment.appointment_time}</td>
                      <td className="px-1 md:px-6 py-2 md:py-4">
                        {' '}
                        {appointment.city}
                      </td>
                      <td className="px-1 md:px-6 py-2 md:py-4">del</td>
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
