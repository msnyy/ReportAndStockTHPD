import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
//3อันบนใส่ทุกหน้า

//เอาบรรทัดชื่อใน function ไปเชื่อมกับหน้า index.js
function CreateDevice() {
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

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

            <div className='m-4 '>
                <h4>เพิ่มข้อมูล งานซ่อม</h4>
                <hr style={{ border: '3px solidrgb(71, 71, 71)', marginTop: '2%' }} />

                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-around w-75'>
                        <div className='flex-fill me-4 w-50'>

                            <div className='mt-4'>
                                <label className='form-label'>รหัสอุปกรณ์</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='form-label'>ยี่ห้อ</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='form-label'>ซีเรียลนัมเบอร์</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className="form-label">หมวดหมู่อุปกรณ์</label>
                                <div className='flex-fill'>
                                    <select className="form-select" name="type_repair">
                                        <option value=""></option>
                                        <option value="processing"></option>
                                        <option value="completed"></option>
                                    </select>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className="form-label">ผู้ใช้งาน</label>
                                <div className='flex-fill'>
                                    <select className="form-select" name="type_repair">
                                        <option value=""></option>
                                        <option value="processing"></option>
                                        <option value="completed"></option>
                                    </select>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className="form-label">วันที่เริ่มใช้งาน</label>
                                <div className='flex-fill'>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        max={today}
                                        className="form-control flex-fill"
                                    />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='form-label'>เอกสาร</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            
                        </div>

                        <div className='flex-fill ms-4 w-50'>
                            <div className='mt-4'>
                                <label className='form-label'>ชื่ออุปกรณ์</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='form-label'>รุ่น</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className="form-label">หน่วยงาน / แผนก</label>
                                <div className='flex-fill'>
                                    <select className="form-select" name="type_repair">
                                        <option value=""></option>
                                        <option value="processing"></option>
                                        <option value="completed"></option>
                                    </select>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className="form-label">ประเภทอุปกรณ์</label>
                                <div className='flex-fill'>
                                    <select className="form-select" name="type_repair">
                                        <option value=""></option>
                                        <option value="processing"></option>
                                        <option value="completed"></option>
                                    </select>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='form-label'>สถานที่ติดตั้ง</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label className='form-label'>ราคา</label>
                                <div className='flex-fill'>
                                    <input type='text' className='form-control' />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='d-flex justify-content-center'>
                <div className='mx-5 mt-4 w-75 mb-4'>
                                <label className='form-label'>รายละเอียดเพิ่มเติม</label>
                                <div className='flex-fill'>
                                    <textarea
                                        className='form-control mt-2'
                                        rows="4"
                                        style={{ resize: 'vertical' }}
                                        placeholder="กรอกรายละเอียดปัญหา/งานซ่อม..."
                                    ></textarea>
                                </div>
                                </div>
                            </div>

                <hr style={{ border: '3px solidrgb(71, 71, 71)' }} />

            </div>

            <div className='d-flex justify-content-end me-4'>
                <button className='btn btn-success ms-3'>บันทึก</button>
            </div>

        </div >
    );
}


export default CreateDevice;
