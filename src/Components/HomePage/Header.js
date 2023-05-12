import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const links = (
    <>
    <Link to='/' className='navItems'>Home</Link>
    <Link to='/about-us' className='navItems'>About Us</Link>
    <Link to='/booking' className='navItems'>Book an Appointment</Link>
    </>
  )
 
function Header () {
  const [screenWidth, setScreenWidth] = useState(null);  

  useEffect(
     () => {
       setScreenWidth(window.innerWidth);
       const handleResize = () => setScreenWidth(window.innerWidth);
       window.addEventListener("resize", handleResize);
       return () => window.removeEventListener("resize", handleResize);
      }, []
    );
    const hamburgerRef = useRef(null)
     useEffect (
      ()=>{
        hamburgerRef.current.addEventListener(
          'click', 
          ()=>{
            hamburgerRef.current.classList.toggle('change')
          }
        )
      }
     )
  const hamburger = (
      <div ref={hamburgerRef} className='container' >
         <div className="bar1"></div>
         <div className="bar2"></div>
         <div className="bar3"></div>
      </div>
  )



  const headRef = useRef(null)
  useEffect (
    ()=>{
         function handleScroll () {
        if (window.scrollY >= 100) {
           headRef.current.style.backgroundColor  = "#ffffff"
           headRef.current.style.color  = "#000000"
        } else {
            headRef.current.style.backgroundColor = '#00000026';
       }
      }
      window.addEventListener('scroll', handleScroll );
      return () => {
      window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
  return (
    <header ref={headRef}>
    <div>
      <Link to='/' className='gdave'>GDave</Link>
      {screenWidth && screenWidth >= 622 ? links : hamburger}
    </div>
    </header>
  );
}

export default Header;