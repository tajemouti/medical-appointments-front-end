import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from './NavigationBar';
import { fetchAppointments } from '../features/appointments/appointmentsSlice';

function MyAppointments() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.appointments);

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
          <h1>my Book</h1>
        </div>
      </div>
    </>
  );
}

export default MyAppointments;
