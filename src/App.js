// import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/HomePage/Home';
 
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about-us' element={<Home />}></Route>
      <Route path='/booking' element={<Home />}></Route>
     </Routes>
    </>
  )
}

export default App;
