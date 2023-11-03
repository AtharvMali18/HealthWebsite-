import Maint from './Components/Maint';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import { useState, useEffect } from 'react';
import Signup from './Components/Signup';
import Patient from './Components/InfoWithImage';
import Loader from './Components/Loader';
import Update from './Components/Update';

function App() {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);



  return (
    <>
      <Routes>

{Loading ? <> <Route path='/' Component={Loader} /></>:<> <Route path='/' Component={Maint} /></>}

        <Route path='/' Component={Maint} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path='/patient' Component={Patient} />
        <Route path='/update' Component={Update} />
      </Routes>
    </>
  )
}

export default App
