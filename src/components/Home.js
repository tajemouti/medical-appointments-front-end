import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NavigationBar from './NavigationBar';
import { fetchDoctors } from '../features/doctors/doctorsSlice';
import DoctorCard from './DoctorCard';

function Home() {
  const dispatch = useDispatch();
  const fetchedDoctors = useSelector((state) => state.doctors.doctors);
  console.log(fetchedDoctors);

  const fetchData = async () => {
    await dispatch(fetchDoctors());
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex w-[85%] bg-white justify-center items-center gap-4">
          {
            fetchedDoctors.map((doctor) => (
              <DoctorCard doctorcard={doctor} key={doctor.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Home;
