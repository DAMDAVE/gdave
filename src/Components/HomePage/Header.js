import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header () {
const links = (
    <>
    <Link to='/' className='navItems'>Home</Link>
    <Link to='/about-us' className='navItems'>About Us</Link>
    <Link to='/booking' className='navItems'>Book an Appointment</Link>
    </>
  )


const [screenWidth, setScreenWidth] = useState(null); 

/**********************************Window Resize*************************************/

useEffect(
     () => {
       setScreenWidth(window.innerWidth);
       const handleResize = () => setScreenWidth(window.innerWidth);
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
      }, []
    );

 /********************************Hamburger Menu***************************************/  

 let [clicked, setClicked]= useState(false);

 const handleClick = () => {
  setClicked(clicked = !clicked)
 }

 const hamburgerMenu = (
  <>
    <div className={`container ${clicked? "change" : ''}`} onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  </>
)
  
const smallSizeScreen = (
  <>
    <div className="encapsulate">
      <div><Link to='/' className='navItems2'>Home</Link><hr /></div>
    <div><Link to='/about-us' className='navItems2'>About Us</Link><hr /></div>
    <div><Link to='/booking' className='navItems2'>Book an Appointment</Link></div>
    </div>
  </>
)
  
  return (
    <header>
      <div>
        <Link to='/' className='gdave'>GDave</Link>
        {screenWidth && screenWidth > 622 ? links : hamburgerMenu}
        <div className={`contain ${clicked? "change" : ''}`}>{smallSizeScreen}</div>
     </div>
    </header>
  );
}

export default Header;