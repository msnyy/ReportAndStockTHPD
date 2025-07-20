import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header'; 


function UserList() {
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


export default UserList;
