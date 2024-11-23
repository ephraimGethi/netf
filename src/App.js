import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Tracks if auth state is initialized

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/'); // Navigate to Home if authenticated
      } else {
        navigate('/login'); // Navigate to Login if not authenticated
      }
      setIsAuthChecked(true); // Auth state checked
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [navigate]);

  if (!isAuthChecked) {
    // Optionally, show a loading screen while checking auth state
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;

// import React, { useEffect } from 'react'
// import Home from './pages/Home/Home'
// import { Routes,Route, useNavigate } from 'react-router-dom'
// import Login from './pages/Login/Login'
// import Player from './pages/Player/Player'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from './firebase'


// const App = () => {
//   const navigate = useNavigate()
//   useEffect(()=>{
//     onAuthStateChanged(auth,async (user)=>{
//       if(user){
//         navigate('/')
//       }else{
//         navigate('/login')
//       }
//     })
//   },[])
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//         <Route path='/player/:id' element={<Player/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App