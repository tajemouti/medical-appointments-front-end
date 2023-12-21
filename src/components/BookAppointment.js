import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchDoctors } from '../features/doctors/doctorsSlice';
import { createAppointment } from '../features/appointments/appointmentsSlice';
import NavigationBar from './NavigationBar';
import cities from './Cities';

function BookAppointment() {
  const { name, id } = useLocation()?.state?.doctor || {};
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [doctorId, setDoctorId] = useState();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(dayjs());

  const fetchedDoctors = useSelector((state) => state.doctors.doctors);

  const dispatch = useDispatch();

  const handleBookAppointment = () => {
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    const formattedTime = selectedTime.format('HH:mm:ss.SSS');
    const formattedDateTime = `${formattedDate}T${formattedTime}Z`;
    return formattedDateTime;
  };

  const handleSelectedCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  const handleSelectedDoctor = (event) => {
    const doctor = event.target.value;
    const doctorObject = fetchedDoctors.find((doc) => doc.name === doctor);
    setSelectedDoctor(event.target.value);
    setDoctorId(doctorObject.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataAppoinment = {
      appointment_time: handleBookAppointment(),
      city: selectedCity,
      doctor_id: doctorId,
    };
    dispatch(createAppointment(dataAppoinment));
    navigate('/myappointment');
  };

  useEffect(() => {
    if (name) {
      setDoctorId(id);
      setSelectedDoctor(name);
    }
    dispatch(fetchDoctors());
  }, [dispatch, selectedDoctor, selectedDate, selectedTime, id, name]);

  return (
    <>
      <div className="flex flex-row justify-center items-center md:items-end w-[100vw] h-[100vh] overflow-hidden">
        <div className="md:flex md:w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col h-full items-center md:items-end w-[85%] bg-white justify-center overflow-hidden">
          <div className="flex h-full flex-col justify-center  items-end gap-12 md:pr-16 pr-0 w-full">
            <div>
              <h1 className="md:text-right md:text-slate-800 text-4xl md:text-6xl md:font-bold  font-bold text-center md:font-['Inter'] md:leading-[72px]">Book Appointment</h1>
            </div>
            <form className="flex w-full md:max-w-fit flex-col md:flex-row items-center justify-center gap-6 md:pl-8">
              <FormControl className="flex md:flex-1 flex-none w-full" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">Select your doctor</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={selectedDoctor}
                  label="Select doctor"
                  onChange={handleSelectedDoctor}
                >
                  {fetchedDoctors?.map((doctor) => (
                    <MenuItem
                      key={doctor.name}
                      value={doctor.name}
                    >
                      {doctor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="flex md:flex-1 flex-none w-full" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">Select a city</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={selectedCity}
                  label="Select doctor"
                  onChange={handleSelectedCity}
                >
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="flex flex-2 flex-col md:flex-row justify-between gap-8 mb-2 w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer className="w-full" components={['DatePicker']}>
                    <DatePicker
                      className="flex flex-1"
                      label="Select a date"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </DemoContainer>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker
                      className="flex md:flex-1 flex-none"
                      label="Select a time"
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </form>
            <div className="flex w-full justify-center md:justify-end">
              <button
                className="p-4 self-end text-white bg-lime-500 rounded-r-[80px] rounded-l-[80px]"
                type="submit"
                onClick={handleSubmit}
                aria-label="Next"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
