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

      <div className='m-4'>
        <h4>รายงานผู้ใช้งานระบบ</h4>
      
      <hr style={{ border: '3px solidrgb(71, 71, 71)', marginTop: '2%' }} />

      <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                    <p className='mt-2'>ลำดับ</p>
                    <p className='mt-2'>ชื่อ-นามสกุล</p>
                    <p className='mt-2'>ตำแหน่ง</p>
                    <p className='mt-2'>หน่วยงาน / แผนก</p>
                    <p className='mt-2'>E-mail</p>
                    <p className='mt-2'>สิทธิ์การใช้งาน</p>
                </div>
                </div>
    </div>
  );
}


export default UserList;
