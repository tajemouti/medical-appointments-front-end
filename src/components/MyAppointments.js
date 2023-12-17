import NavigationBar from './NavigationBar';

function MyAppointments() {
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
