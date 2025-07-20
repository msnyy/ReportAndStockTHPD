import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';


function DeviceCount() {
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
                <h4>สรุปจำนวนอุปกรณ์ทั้งหมด แยกตามหมวดหมู่อุปกรณ์</h4>

                <div>
                    <form>
                        <div className='d-flex mt-4'>
                            <div style={{ width: '20%' }}>
                                <label className="form-label">หมวดหมู่อุปกรณ์</label>
                                <select className="form-select flex-fill" name="type_repair">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">หน่วยงาน / แผนก</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">----</option>
                                    {/* เดต้าเบส */}
                                    {/* <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option> */}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success'>ค้นหา</button>
                    </div>

                    <div className='card mt-4 p-5'>
                        
                    </div>


                    <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                        <p className='mt-2'>หมวดหมู่อุปกรณ์ / ประเภทอุปกรณ์</p>
                        <p className='mt-2'>จำนวน</p>
                        <p className='mt-2'>รายละเอียด / รุ่น</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DeviceCount;
