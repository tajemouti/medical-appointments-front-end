import logo from '../images/logo.svg'
function NavigationBar() {
  return (
    <>
      <div className='flex flex-col pt-4 pb-4 justify-between items-center h-[100dvh] bg-white w-full drop-shadow-md'>
        <div>
          <img src={logo} alt="" />
        </div>
        <nav className='w-full'>
          <ul className='flex flex-col'>
            <li className='flex p-4 w-full bg-[#97BF0F] text-white text-sm font-medium cursor-pointer border-b border-gray-200'>Doctors</li>
            <li className='flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100'>Book Appointment</li>
            <li className='flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100'>My Appointments</li>
            <li className='flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100'>Add Doctor</li>
            <li className='flex p-4 w-full  text-sm font-medium cursor-pointer border-b border-gray-200 hover:bg-gray-100'>Delete Doctor</li>
          </ul>
        </nav>
        <footer>
          <h1>footer</h1>
        </footer>
      </div>
    </>
  )
}

export default NavigationBar;