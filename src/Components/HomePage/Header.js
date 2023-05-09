import { Link } from "react-router-dom";

function Header () {
    return (
    <>
      <header>
      <p>Gdave</p>
      <Link to='/' className='navItems'>Home</Link>
      <Link to='/about-us' className='navItems'>About Us</Link>
      <Link to='/booking' className='navItems'>Book an Appointment</Link>
      </header>
    </>
    )
}
export default Header;