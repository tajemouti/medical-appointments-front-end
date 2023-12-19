import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.svg';
import fb from '../images/fb.svg';
import google from '../images/google.svg';
import x from '../images/x.svg';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button
        type="button"
        className="md:hidden absolute top-4 left-4 mr-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none f ocus:ring focus:ring-gray-200"
        onClick={toggleMenu}
      >
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      {/* <MenuIcon className="cursor-pointer text-gray-500 lg:hidden" onClick={toggleMenu} /> */}
      <div className={`${showMenu ? 'flex absolute z-50' : 'hidden md:flex'} flex-col pt-4 pb-12 md:pb-1 justify-between items-center h-[100dvh] bg-white w-full drop-shadow-md`}>
        <div>
          <img src={logo} alt="" />
          <button
            type="button"
            className="md:hidden absolute top-4 left-4 mr-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none f ocus:ring focus:ring-gray-200"
            onClick={toggleMenu}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <nav className="w-full">
          <ul className="flex flex-col">
            <NavLink to="/">
              <li className="flex p-4 w-full bg-[#97BF0F] text-white text-sm font-medium cursor-pointer border-b border-gray-200">Doctors</li>
            </NavLink>
            <NavLink to="/bookappointment">
              <li className="flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100">
                Book Appointment
              </li>
            </NavLink>
            <NavLink to="/myappointment">
              <li className="flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100">My Appointments</li>
            </NavLink>
            <NavLink to="/add-doctor">
              <li className="flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100">Add Doctor</li>
            </NavLink>
            <NavLink to="/delete-doctor">
              <li className="flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100">Delete Doctor</li>
            </NavLink>
          </ul>
        </nav>
        <footer className="flex flex-col gap-4 w-full pt-4 pb-2 pl-4 pr-4">
          <ul className=" justify-start items-end gap-3.5 inline-flex">
            <li className="w-6 h-6 relative"><img src={fb} alt="" /></li>
            <li className="w-6 h-6 relative"><img src={x} alt="" /></li>
            <li className="w-6 h-6 relative"><img src={google} alt="" /></li>
            <li className="w-6 h-6 relative"><img src={github} alt="" /></li>
            <li className="w-6 h-6 relative"><img src={linkedin} alt="" /></li>
          </ul>
          <p className="text-gray-300 text-xs font-medium font-['Inter'] leading-[18px] tracking-[2.88px]">@ 2023 Health Clinic</p>
        </footer>
      </div>
    </>
  );
}

export default NavigationBar;
