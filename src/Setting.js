import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './pages/header'; 


function Setting() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

//   useEffect(() => {
//     fetch('http://localhost:3001/login')
//       .then((res) => res.json())
//       .then((data) => setMsg(data.message));
//   }, []);

  

  return (
    <div>
      <Header />
    </div>
  );
}


export default Setting;
