import PropTypes from 'prop-types';

function DoctorDetails({ doctor }) {
  return (
    <div>
      <h1>{doctor.name}</h1>
      <h2>{doctor.speciality}</h2>
      <h3>{doctor.address}</h3>
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
