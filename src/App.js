// import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';

function App() {
  return (
    <>
    {/*  <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to be reloaded.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
      </div> */}
        <Link to='/' className='sections home'>Home</Link>
        {/* <Link to='/section2'className='navItems'>Section</Link>
        <Link to='/section3' className='navItems'>Sectioner</Link> */}
    
       <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/about' element={<About />}></Route>
        <Route path='/section3' element={<Contact Us />}></Route> */}
       </Routes>
    </>
  );
}

export default App;
