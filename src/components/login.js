import { Button } from '@mui/material';
import img from '../images/bg.svg'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', userName);
    console.log('Password:', password);
    // Do whatever you want with the input value
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
        <div className='flex items-center justify-center flex-col gap-6 w-4/5 p-12 md:max-w-fit md:max-h-fit bg-white rounded-md'>
          <h1 className='text-gray-800 font-bold text-2xl'>Welcome to <span className='text-[#97BF0F]'>Shah Clinic</span></h1>
          <form className='flex items-center justify-center flex-col gap-6' onSubmit={handleSubmit}>
            <TextField id="outlined-basic"  type='text' value={userName} onChange={handleUsernameChange} label="Username" variant="outlined" />
            <TextField id="outlined-basic" type='password' value={password} onChange={handlePasswordChange} label="Password" variant="outlined" />
            <Button type='submit' variant="outlined">Login</Button>
          </form>
        </div>
    </div>
    </>
  )
}

export default Login;