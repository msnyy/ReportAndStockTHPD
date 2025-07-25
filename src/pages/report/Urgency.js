import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header'; 


function Urgency() {
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
                <h4>ความเร่งด่วน</h4>
            

            <div className='d-flex mt-3'>
                <form>
                    <div className='d-flex mt-3'>
                        <div className='d-flex align-items-center'>
                            <label className="form-label">ค้นหาจาก</label>
                        </div>
                        <div className='ms-2'>
                            <select className='form-select mb-2 flex-fill' name="Urgency">
                                <option value="">วันที่แจ้งซ่อม</option>
                                <option value="">วันที่สำเร็จ</option>
                            </select>
                        </div>

                        <div className='d-flex align-items-center ms-3'>
                            <label className="form-label">เลือกปี</label>
                        </div>
                        <div className='ms-2'>
                            <select className="form-select mb-2 flex-fill" name="Urgency">
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>

                        <div className='ms-3'>
                            <button className='btn btn-success'>ค้นหา</button>
                        </div>

                    </div>
                </form>
            </div>

            <div className='card mt-4 p-5'>
                        
                    </div>

                    <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                        <p className='mt-2'>ลำดับ</p>
                        <p className='mt-2'>ความเร่งด่วน</p>
                        <p className='mt-2'>จำนวน</p>
                        <p className='mt-2'>รายละเอียด</p>
                    </div>
                    </div>
        </div>
  );
}


export default Urgency;
