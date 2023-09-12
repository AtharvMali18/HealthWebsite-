import Maint from './Components/Maint';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Patient from './Components/patient';
import Profile from './Components/profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Maint} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path='/patient' Component={Patient} />
        <Route path="/Profile" Component={Profile} />
        
      </Routes>
    </>
  )
}

export default App
