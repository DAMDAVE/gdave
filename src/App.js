// import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Body from './Components/HomePage/Body';
import Header from './Components/HomePage/Header';
 
function App() {
  return (
    <>
    <Header />
     <Routes>
      <Route path='/' element={<Body />}></Route>
      <Route path='/about-us' element={<Body />}></Route>
      <Route path='/booking' element={<Body />}></Route>
     </Routes>
    </>
  )
}

export default App;
