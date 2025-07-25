import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';

function Stats() {
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [type, setType] = useState('ประเภทงานซ่อม');
    const [searchType, setSearchType] = useState('ประเภทงานซ่อม')

    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        setStartDate(e.target.value);
    };

    const typeName = () => {
        if (type === 'ประเภทงานซ่อม') {
            return <h4>ประเภทงานซ่อม</h4>;
        } else if (type === 'ประเภทปัญหา') {
            return <h4>ประเภทปัญหา</h4>;
        } else if (type === 'หมวดหมู่อุปกรณ์') {
            return <h4>หมวดหมู่อุปกรณ์</h4>;
        } else if (type === 'หน่วยงาน / แผนก') {
            return <h4>หน่วยงาน / แผนก</h4>;
        }
        return <h4>ผู้ดำเนินการ</h4>;
    };

    const renderSearchBar = () => {
        if (searchType === 'ประเภทงานซ่อม') {
            return (
                <div>
                    <div className='d-flex mt-4'>
                        <div style={{ width: '20%' }}>
                            <label className="form-label">วันที่แจ้งซ่อม</label>
                            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
                        </div>

                        <div style={{ marginLeft: '2%', width: '20%' }}>
                            <label className="form-label">ถึง</label>
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
                        </div>

                        <div className='d-flex align-items-end ms-3'>
                            <button className='btn btn-success'>ค้นหา</button>
                        </div>
                    </div>

                    <div className='card mt-4 p-5'></div>

                    <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                        <p className='mt-2'>ลำดับ</p>
                        <p className='mt-2'>ประเภทงานซ่อม</p>
                        <p className='mt-2'>จำนวน</p>
                        <p className='mt-2'>รายละเอียด</p>
                    </div>
                </div>
            );
        } else if (type === 'ประเภทปัญหา') {
            return <div>
                <div className='d-flex mt-4'>
                    <div style={{ width: '20%' }}>
                        <label className="form-label">วันที่แจ้งซ่อม</label>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
                    </div>

                    <div style={{ marginLeft: '2%', width: '20%' }}>
                        <label className="form-label">ถึง</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
                    </div>

                    <div className='d-flex align-items-end ms-3'>
                        <button className='btn btn-success'>ค้นหา</button>
                    </div>
                </div>

                <div className='card mt-4 p-5'></div>

                <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                    <p className='mt-2'>ลำดับ</p>
                    <p className='mt-2'>ประเภทงานซ่อม</p>
                    <p className='mt-2'>จำนวน</p>
                    <p className='mt-2'>รายละเอียด</p>
                </div>
            </div>;
        } else if (type === 'หมวดหมู่อุปกรณ์') {
            return <div>
                <div className='d-flex mt-4'>
                    <div style={{ width: '20%' }}>
                        <label className="form-label">วันที่แจ้งซ่อม</label>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
                    </div>

                    <div style={{ marginLeft: '2%', width: '20%' }}>
                        <label className="form-label">ถึง</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
                    </div>

                    <div className='d-flex align-items-end ms-3'>
                        <button className='btn btn-success'>ค้นหา</button>
                    </div>
                </div>

                <div className='card mt-4 p-5'></div>

                <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                    <p className='mt-2'>ลำดับ</p>
                    <p className='mt-2'>ประเภทปัญหา</p>
                    <p className='mt-2'>จำนวน</p>
                    <p className='mt-2'>รายละเอียด</p>
                </div>
            </div>;
        } else if (type === 'หน่วยงาน / แผนก') {
            return <div>
                <div className='d-flex mt-4'>
                    <div style={{ width: '20%' }}>
                        <label className="form-label">วันที่แจ้งซ่อม</label>
                        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
                    </div>

                    <div style={{ marginLeft: '2%', width: '20%' }}>
                        <label className="form-label">ถึง</label>
                        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
                    </div>

                    <div className='d-flex align-items-end ms-3'>
                        <button className='btn btn-success'>ค้นหา</button>
                    </div>
                </div>

                <div className='card mt-4 p-5'></div>

                <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                    <p className='mt-2'>ลำดับ</p>
                    <p className='mt-2'>หมวดหมู่อุปกรณ์</p>
                    <p className='mt-2'>จำนวน</p>
                    <p className='mt-2'>รายละเอียด</p>
                </div>
            </div>;
        } return <div>
            <div className='d-flex mt-4'>
                <div style={{ width: '20%' }}>
                    <label className="form-label">วันที่แจ้งซ่อม</label>
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
                </div>

                <div style={{ marginLeft: '2%', width: '20%' }}>
                    <label className="form-label">ถึง</label>
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
                </div>

                <form>
                    <div className='d-flex flex-row'>
                        <div className='ms-3'>
                            <label className="form-label">หน่วยงาน / แผนก</label>
                            <select className="form-select mb-2 flex-fill" name="Urgency">
                                <option value="">--หน่วยงาน / แผนก--</option>
                                {/* <option value="">ปกติ</option>
                                    <option value="ด่วน">ด่วน</option>
                                    <option value="ด่วนมาก">ด่วนมาก</option> */}
                            </select>
                        </div>

                        <div className='ms-4' style={{ marginTop: '11.5%' }}>
                            <button className='btn btn-success'>ค้นหา</button>
                        </div>

                    </div>
                </form>
            </div>
            
                <div className='card mt-4 p-5'></div>

                <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                    <p className='mt-2'>ผู้ดำเนินการ</p>
                    <p className='mt-2'>แจ้งซ่อม</p>
                    <p className='mt-2'>รอตรวจสอบ</p>
                    <p className='mt-2'>ดำเนินการ</p>
                    <p className='mt-2'>ส่งซ่อม / เคลม</p>
                    <p className='mt-2'>สำเร็จ</p>
                    <p className='mt-2'>ยกเลิก</p>
                </div>
        </div>;
    };

    return (
        <div>
            <Header />

            <div className='m-4'>
                <div className='d-flex'>
                    <h4>สถิติการซ่อมบำรุง :</h4>
                    <div className='ms-3'>{typeName()}</div>
                </div>

                <div className='mt-4'>
                    <button className='btn btn-outline-danger' onClick={() => { setType('ประเภทงานซ่อม'); setSearchType('ประเภทงานซ่อม'); }}>ประเภทงานซ่อม</button>
                    <button className='btn btn-outline-danger ms-3' onClick={() => { setType('ประเภทปัญหา'); setSearchType('ประเภทปัญหา'); }}>ประเภทปัญหา</button>
                    <button className='btn btn-outline-danger ms-3' onClick={() => { setType('หมวดหมู่อุปกรณ์'); setSearchType('หมวดหมู่อุปกรณ์'); }}>หมวดหมู่อุปกรณ์</button>
                    <button className='btn btn-outline-danger ms-3' onClick={() => { setType('หน่วยงาน / แผนก'); setSearchType('หน่วยงาน / แผนก'); }}>หน่วยงาน / แผนก</button>
                    <button className='btn btn-outline-danger ms-3' onClick={() => { setType('ผู้ดำเนินการ'); setSearchType('ผู้ดำเนินการ'); }}>ผู้ดำเนินการ</button>
                </div>

                <div>{renderSearchBar()}</div>



            </div>
        </div>
    );
}

export default Stats;
