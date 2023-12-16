import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NavigationBar from './NavigationBar';
import { fetchDoctors } from '../features/doctors/doctorsSlice';
import x from '../images/x.svg';
import DoctorDetails from './DoctorDetails';

function Home() {
  const dispatch = useDispatch();
  const fetchedDoctors = useSelector((state) => state.doctors.doctors);
  const [startIndex, setStartIndex] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchDoctors());
    };
    fetchData();
  }, [dispatch]);

  const displayDoctors = fetchedDoctors.slice(startIndex, startIndex + 3);
  const handleNextClick = () => {
    if (startIndex + 3 < fetchedDoctors.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const hasDoctorsOnLeft = startIndex > 0;
  const hasDoctorsOnRight = startIndex + 3 < fetchedDoctors.length;

  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-[85%] bg-white justify-center items-center ">
          <DoctorDetails doctor={selectedDoctor} />
          <h1 className="text-slate-800 text-4xl font-bold font-['Inter'] leading-[44px] mb-8">Our Doctors</h1>
          <div className="flex justify-center items-center gap-4">
            {
              displayDoctors.map((doctor) => (
                <div key={doctor.id} className="flex items-center justify-center flex-col p-4 rounded-xl gap-4 border-2 border-gray-100 flex-1 ">
                  <div className="gap-4">
                    <img className="w-[189px] h-[189px] rounded-full" src={doctor.picture} alt="" />
                  </div>
                  <div className=" flex flex-col justify-center gap-2">
                    <h2 className="text-slate-800 text-lg text-center font-medium text-ellipsis overflow-hidden w-[250px] whitespace-nowrap">{doctor.name}</h2>
                    <hr />
                    <h2 className="text-gray-300 text-sm text-center font-normal text-ellipsis overflow-hidden w-[250px] whitespace-nowrap">{doctor.speciality}</h2>
                  </div>
                  <ul className="flex gap-4 justify-around w-full">
                    <li className="w-8 h-8 rounded-full border border-gray-300 flex justify-center items-center"><img className="w-4 h-4 relative" src={x} alt="" /></li>
                    <li className="w-8 h-8 rounded-full border border-gray-300 flex justify-center items-center"><img className="w-4 h-4 relative" src={x} alt="" /></li>
                    <li className="w-8 h-8 rounded-full border border-gray-300 flex justify-center items-center"><img className="w-4 h-4 relative" src={x} alt="" /></li>
                  </ul>
                </div>
              ))
            }
          </div>
          <div className="flex justify-between w-[85%] mt-4 absolute">
            <button
              className={`w-[114px] h-[74px] ${hasDoctorsOnLeft ? 'bg-lime-500' : 'bg-gray-300'} rounded-r-[80px]`}
              type="button"
              onClick={handlePrevClick}
              disabled={!hasDoctorsOnLeft}
              aria-label="Previous"
            >
              <ArrowBackIcon className="text-white" />
            </button>

            <button
              className={`w-[114px] h-[74px] ${hasDoctorsOnRight ? 'bg-lime-500' : 'bg-gray-300'} rounded-l-[80px]`}
              type="button"
              onClick={handleNextClick}
              disabled={!hasDoctorsOnRight}
              aria-label="Next"
            >
              <ArrowForwardIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
