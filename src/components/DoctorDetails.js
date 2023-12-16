function DoctorDetails({ doctor }) {
  return (
    <div>
      <h1>{doctor.name}</h1>
      <h2>{doctor.speciality}</h2>
      <h3>{doctor.address}</h3>
    </div>
  );
}

export default DoctorDetails;
