import { Button } from '@mui/material';
import img from '../images/bg.svg'
import TextField from '@mui/material/TextField';
import React from "react";
import { useEffect, useState } from "react";
import { createUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";


function SignUp() {
  const [dataReg, setDataReg] = useState ({
        user: {
            username: '',
            password: ''
        },
    });
    const dispatch = useDispatch();
    const createUserResponse = useSelector((state) => state.user.createUserMsg);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(dataReg));
        console.log(dataReg);
    }
    console.log(createUserResponse);
    useEffect(()=> {
    }, [dispatch, createUserResponse] );

    const handleUsernameChange = (e) => {
        setDataReg({ ...dataReg, user: { ...dataReg.user, username: e.target.value } });
    }
    const handlePasswordChange = (e) => {
        setDataReg({ ...dataReg, user: { ...dataReg.user, password: e.target.value } });
    }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
        <div className='flex items-center justify-center flex-col gap-6 w-4/5 p-12 md:max-w-fit md:max-h-fit bg-white rounded-md'>
          <h1 className='text-gray-800 font-bold text-2xl'>Welcome to <span className='text-[#97BF0F]'>Health Clinic</span></h1>
          <form className='flex items-center justify-center flex-col gap-6' onSubmit={(e) => handleSubmit(e)}>
            <TextField id="outlined-basic"  type='text'  onChange={(e) => handleUsernameChange(e)} label="Username" variant="outlined" />
            <TextField id="outlined-basic" type='password'  onChange={(e) => handlePasswordChange(e)} label="Password" variant="outlined" />
            <Button type='submit' variant="outlined">Sign Up</Button>
          </form>
        </div>
    </div>
    </>
  )
}

export default SignUp;