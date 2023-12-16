import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function DoctorDetails({ doctor }) {
  if (!doctor) {
    return null;
  }

  return (
    <div className="flex justify-between w-full h-full">
      <div className="flex items-end pb-12">
        <button
          className="w-[114px] h-[74px] bg-lime-500 rounded-r-[80px]"
          type="button"
          aria-label="Next"
        >
          <ArrowBackIcon className="text-white" />
        </button>
      </div>
      <div className="flex items-end ">
        <img src={doctor.picture} alt="" />
      </div>
      <div className="flex flex-col justify-between self-end pb-12 pr-8 h-[70%]">
        <div className="flex flex-col gap-2 items-end">
          <h1 className="text-slate-800 text-4xl font-bold font-['Inter'] leading-[72px]">{doctor.name}</h1>
          <h2 className="w-[383px] text-right text-gray-400 text-xl font-normal font-['Inter'] leading-[44px]">{doctor.speciality}</h2>
          <h3 className="w-[383px] text-right text-gray-400 text-sm font-normal font-['Inter'] leading-[44px]">{doctor.address}</h3>
        </div>
        <button
          className="p-4 text-white bg-lime-500 rounded-r-[80px] rounded-l-[80px]"
          type="button"
          aria-label="Next"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

DoctorDetails.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorDetails;
