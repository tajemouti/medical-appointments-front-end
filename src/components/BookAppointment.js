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
import { useNavigate } from 'react-router-dom';
import { fetchDoctors } from '../features/doctors/doctorsSlice';
import { createAppointment } from '../features/appointments/appointmentsSlice';
import NavigationBar from './NavigationBar';

function BookAppointment() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [doctorId, setDoctorId] = useState();
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState(dayjs('2022-04-17'));
  const [selectedTime, setSelectedTime] = useState(dayjs());
  const cities = ['Islamaabad', 'Rabat', 'London', 'Porto'];

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
    dispatch(fetchDoctors());
  }, [dispatch, selectedDoctor, selectedDate, selectedTime]);

  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-[85%] bg-white justify-center items-end">
          <div className="flex flex-col justify-center  items-end gap-12 pr-16 w-full">
            <div>
              <h1 className="text-right text-slate-800 text-6xl font-bold font-['Inter'] leading-[72px]">Book Appointment</h1>
            </div>
            <form className="flex items-center justify-center gap-6 flex-1 w-full pl-8">
              <FormControl className="flex flex-1 " sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-helper-label">Select your doctor</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={selectedDoctor}
                  label="Select doctor"
                  onChange={handleSelectedDoctor}
                >
                  {fetchedDoctors.map((doctor) => (
                    <MenuItem
                      key={doctor.name}
                      value={doctor.name}
                    >
                      {doctor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="flex flex-2 justify-between gap-8 mb-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker
                      className="flex flex-1"
                      label="Select a date"
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </DemoContainer>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker
                      className="flex flex-1"
                      label="Select a time"
                      value={selectedTime}
                      onChange={handleTimeChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <FormControl className="flex flex-1" sx={{ m: 1, minWidth: 180 }}>
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
            </form>
            <div>
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
