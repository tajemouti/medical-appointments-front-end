import { useSelector } from 'react-redux';
import NavigationBar from './NavigationBar';

function MyAppointments() {
  const { isLoading, error} = useSelector((state) => state.appointments);

  if (isLoading) {
    return <div>Is loading...</div>
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
