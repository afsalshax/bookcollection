import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Err from './pages/Err';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/user' element={<Profile></Profile>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<Err></Err>}></Route>

       </Routes>
    </div>
  );
}

export default App;
