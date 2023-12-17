// import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import NavigationBar from './NavigationBar';
import { createAppointment } from '../features/appointments/appointmentsSlice';

function BookAppointment() {
  const [doctor, setDoctor] = useState('');
  const dispatch = useDispatch();
  const createAppointmentResponse = useSelector((state) => state.appointments.createAppointmentMsg);
  console.log(createAppointmentResponse);

  // appointment
  const appointmentAfterXDays = 5;
  const currentDate = new Date();
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + appointmentAfterXDays);

  const datetime = futureDate.toISOString();
  console.log(datetime);

  const dataAppoinment = {
    doctor_id: 1,
    appointment_time: datetime,
  };

  dispatch(createAppointment(dataAppoinment));
  useEffect(() => {
  }, []);

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };

  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-[85%] bg-white justify-center items-end">
          <div className="flex flex-col justify-center  items-end gap-4 pr-16 w-full">
            <div>
              <h1 className="text-right text-slate-800 text-6xl font-bold font-['Inter'] leading-[72px]">Book Appointment</h1>
            </div>
            <form className="flex items-center justify-center gap-6 flex-1 w-full pl-8">
              <FormControl className="flex flex-1 " sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-helper-label">Select Doctor</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={doctor}
                  label="Select doctor"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
              <div className="flex flex-2 justify-between gap-8 mb-2">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker className="flex flex-1" label="Basic date picker" />
                  </DemoContainer>
                  <DemoContainer components={['TimePicker']}>
                    <TimePicker className="flex flex-1" label="Basic time picker" />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <FormControl className="flex flex-1" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-helper-label">Select Doctor</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={doctor}
                  label="Select doctor"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
              </FormControl>
            </form>
            <div>
              <button
                className="p-4 self-end text-white bg-lime-500 rounded-r-[80px] rounded-l-[80px]"
                type="button"
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
