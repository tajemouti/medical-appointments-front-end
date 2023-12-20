import PropTypes from 'prop-types';

function DoctorCard({ DoctorCard }) {
  return (
    <>
      <div className="flex justify-center p-4">
        <div>
          <img src={DoctorCard.picture} alt="" />
        </div>
        <div>
          <h2>{DoctorCard.name}</h2>
          <p>{DoctorCard.speciality}</p>
        </div>
        <div>
          <img className="h-8 w-8" src={DoctorCard.picture} alt="" />
        </div>
      </div>
    </>
  );
}

DoctorCard.propTypes = {
  DoctorCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCard;
