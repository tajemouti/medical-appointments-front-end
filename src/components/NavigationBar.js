import logo from '../images/logo.svg'
function NavigationBar() {
  return (
    <>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>Doctors</li>
            <li>Book Appointment</li>
            <li>My Appointments</li>
            <li>Add Doctor</li>
            <li>Delete Doctor</li>
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