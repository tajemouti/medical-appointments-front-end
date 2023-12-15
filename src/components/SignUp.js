import { Button } from '@mui/material';
import img from '../images/bg.svg'
import TextField from '@mui/material/TextField';

function SignUp() {

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
        <div className='flex items-center justify-center flex-col gap-6 w-4/5 p-12 md:max-w-fit md:max-h-fit bg-white rounded-md'>
          <h1 className='text-gray-800 font-bold text-2xl'>Welcome to <span className='text-[#97BF0F]'>Shah Clinic</span></h1>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="outlined">Sign In</Button>
        </div>
    </div>
    </>
  )
}

export default SignUp;