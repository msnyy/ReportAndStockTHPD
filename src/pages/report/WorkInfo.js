import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';


function WorkInfo() {
    const [msg, setMsg] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [searchType, setSearchType] = useState('ข้อมูลการทำงาน');
    const navigate = useNavigate();

    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        setStartDate(e.target.value);
    };

    //   useEffect(() => {
    //     fetch('http://localhost:3001/login')
    //       .then((res) => res.json())
    //       .then((data) => setMsg(data.message));
    //   }, []);


    return (
        <div>
            <Header />
            <div className='m-4'>
                <h4>ข้อมูลการทำงาน :</h4>

                <div className='m-4'> 
                    <form>
                        <div className='d-flex mt-4'>
                            <div style={{ width: '20%' }}>
                                <label className="form-label">ค้นหาจาก</label>
                                <select className="form-select flex-fill" name="type_repair">
                                    <option value="">วันที่แจ้งซ่อม</option>
                                    <option value="">วันที่ดำเนินการ</option>
                                    <option value="">วันที่สำเร็จ</option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">วันที่</label>
                                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ถึง</label>
                                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">หน่วยงาน / แผนก</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--หน่วยงาน / แผนก--</option>
                                    {/* <option value="">ปกติ</option>
                                    <option value="ด่วน">ด่วน</option>
                                    <option value="ด่วนมาก">ด่วนมาก</option> */}
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">เลือกผู้ดำเนินการ</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--เลือกผู้ดำเนินการ--</option>
                                    {/* <option value="">ปกติ</option>
                                    <option value="ด่วน">ด่วน</option>
                                    <option value="ด่วนมาก">ด่วนมาก</option> */}
                                </select>
                            </div>
                        </div>
                    </form>

                    <form>
                        <div className='d-flex mt-4 '>
                            <div style={{ width: '20%' }}>
                                <label className="form-label">ความเร่งด่วน</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--ความเร่งด่วน--</option>
                                    <option value="">ปกติ</option>
                                    <option value="">ด่วน</option>
                                    <option value="">ด่วนมาก</option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ประเภทงานซ่อม</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--ประเภทงานซ่อม--</option>
                                    <option value="">ปัญหาโปรแกรม</option>
                                    <option value="">ปัญหาอุปกรณ์</option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ประเภทปัญหา</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--ประเภทปัญหา--</option>
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">หมวดหมู่อุปกรณ์</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--หมวดหมู่อุปกรณ์--</option>
                                    {/* <option value="">ปกติ</option>
                                    <option value="ด่วน">ด่วน</option>
                                    <option value="ด่วนมาก">ด่วนมาก</option> */}
                                </select>
                            </div>

                            <div style={{ marginLeft: '2%', width: '20%' }}>
                                <label className="form-label">ชื่ออุปกรณ์</label>
                                <select className="form-select mb-2 flex-fill" name="Urgency">
                                    <option value="">--ชื่ออุปกรณ์--</option>
                                    {/* <option value="">ปกติ</option>
                                    <option value="ด่วน">ด่วน</option>
                                    <option value="ด่วนมาก">ด่วนมาก</option> */}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div>
                        <form>
                            <div className='d-flex flex-row'>
                                <div style={{ width: '20%' }}>
                                    <label className="form-label">สถานะ</label>
                                    <select className="form-select flex-fill" name="Urgency">
                                        <option value="">--สถานะ--</option>
                                        <option value="">แจ้งซ่อม</option>
                                        <option value="">รอตรวจสอบ</option>
                                        <option value="">ส่งซ่อม/เคลม</option>
                                        <option value="">ยกเลิก</option>
                                        <option value="">สำเร็จ</option>
                                        <option value="">ยังไม่ได้ประเมินความพึงพอใจ</option>
                                    </select>
                                </div>

                                <div className='ms-4 d-flex align-items-end'>
                                    <button className='btn btn-success'>ค้นหา</button>
                                    <button className='btn btn-secondary ms-3'>clear</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

                <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                    <p className='mt-2'>วันที่แจ้งซ่อม</p>
                    <p className='mt-2'>ชื่ออุปกรณ์</p>
                    <p className='mt-2'>ชื่อผู้แจ้ง</p>
                    <p className='mt-2'>ประเภทงานซ่อม</p>
                    <p className='mt-2'>ปัญหา/งานซ่อม</p>
                    <p className='mt-2'>สาเหตุ/วิธีแก้</p>
                    <p className='mt-2'>ผู้ดำเนินการ</p>
                    <p className='mt-2'>วันที่สำเร็จ</p>
                    <p className='mt-2'>สถานะ</p>
                </div>
            </div>
        </div>
    );
}


export default WorkInfo;
