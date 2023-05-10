import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const links = (
    <>
    <Link to='/' className='navItems'>Home</Link>
    <Link to='/about-us' className='navItems'>About Us</Link>
    <Link to='/booking' className='navItems'>Book an Appointment</Link>
    </>
  )
// const screenWidth = window.innerWidth;
// function Header () {
//     return (
//     <>
//       <header>
//        <div>
//        <Link to='/' className='gdave'>Gdave</Link>
//        {
//         screenWidth >= 600 ? ({links}) : null
//        }
//        </div> 
//       </header>
//     </>
//     )
// }


function Header () {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
    <div>
      <Link to='/' className='gdave'>Gdave</Link>
      {screenWidth && screenWidth >= 600 ? links : null}
    </div>
    </header>
  );
}

export default Header;