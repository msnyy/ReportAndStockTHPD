import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';


function DeviceReg() {
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
                <h4>รายงานทะเบียนอุปกรณ์</h4>

                <div>
                    <form>
                        <div className='d-flex mt-4'>
                            <div style={{ width: '20%' }}>
                                <label className="form-label">รหัสอุปกรณ์</label>
                                <select className="form-select flex-fill" name="type_repair">
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ชื่ออุปกรณ์</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">----</option>
                                    {/* เดต้าเบส */}
                                    {/* <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option> */}
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">หมวดหมู่อุปกรณ์</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ประเภทอุปกรณ์</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className='d-flex mt-3'>
                            <div style={{ width: '20%' }}>
                                <label className="form-label">หน่วยงาน / แผนก</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--หน่วยงาน / แผนก--</option>
                                    {/* เดต้าเบส */}
                                    {/* <option value="">ปกติ</option>
                                    <option value="ด่วน">ด่วน</option>
                                    <option value="ด่วนมาก">ด่วนมาก</option> */}
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ผู้ใช้งาน</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">สถานะอุปกรณ์</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--</option>
                                    <option value=""></option>
                                    <option value=""></option>
                                    <option value=""></option>
                                </select>
                            </div>

                        </div>
                    </form>
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success'>ค้นหา</button>
                    </div>


                    <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                        <p className='mt-2'>รหัสอุปกรณ์</p>
                        <p className='mt-2'>ชื่ออุปกรณ์</p>
                        <p className='mt-2'>ยี่ห้อ / รุ่น</p>
                        <p className='mt-2'>หน่วยงาน / แผนก</p>
                        <p className='mt-2'>ผู้ใช้งาน / สถานที่ตั้ง</p>
                        <p className='mt-2'>สถานะ</p>
                        <p className='mt-2'>รายละเอียด</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DeviceReg;
