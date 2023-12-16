import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import img from '../images/bg.svg';
import { loginUser } from '../features/user/userSlice';

function Login() {
  const navigate = useNavigate();
  const loginResponse = useSelector((state) => state.user.user.token);
  // const loginTokin = useSelector((state) => state.user.token);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (loginResponse) {
      navigate('/home'); // uses history object from react-router-dom
    }
  }, [dispatch, loginResponse, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(loginUser({
      username: userName,
      password,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
        <div className="flex items-center justify-center flex-col gap-6 w-4/5 p-12 md:max-w-fit md:max-h-fit bg-white rounded-md">
          <h1 className="text-gray-800 font-bold text-2xl">
            Welcome to
            <span className="text-[#97BF0F]">Health Clinic</span>
          </h1>
          <h2 className="text-gray-800 font-bold text-2xl">Log in</h2>
          <form className="flex items-center justify-center flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              required
              id="outlined-basics"
              type="text"
              value={userName}
              onChange={(e) => handleUsernameChange(e)}
              label="Username"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              label="Password"
              variant="outlined"
            />
            <div className="flex gap-4">
              <Button type="submit" variant="outlined">Login</Button>
              <Button variant="outlined"><Link to="/signup">Sign up</Link></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
