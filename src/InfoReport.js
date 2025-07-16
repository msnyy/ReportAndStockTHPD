import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './pages/header';

function InfoReport() {
  const [msg, setMsg] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchType, setSearchType] = useState('วันที่แจ้งซ่อม');
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setStartDate(e.target.value);
  };

  const renderSearchBar = () => {
    if (searchType === 'วันที่แจ้งซ่อม') {
      return (
        <>
          <div>
            <form>
              <div className='d-flex m-4'>
                <div>
                  <label className="form-label">ค้นหาจาก</label>
                  <select className="form-select" name="type_repair">
                    <option value="">วันที่แจ้งซ่อม</option>
                    <option value="">วันที่ดำเนินการ</option>
                    <option value="">วันที่สำเร็จ</option>
                  </select>
                </div>

                <div style={{ marginLeft: '5%' }}>
                  <label className="form-label">วันที่</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control" />
                </div>

                <div style={{ marginLeft: '5%' }}>
                  <label className="form-label">ถึง</label>
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control" />
                </div>

                <div style={{ marginLeft: '5%' }}>
                  <label className='form-label'>ชื่อผู้แจ้ง</label>
                  <input type='text' className='form-control' />
                </div>

                <div style={{ marginLeft: '5%' }}>
                  <label className='form-label'>ผู้ดำเนินการ</label>
                  <input type='text' className='form-control' />
                </div>

              </div>
            </form>
          </div>
          <div className='m-4'>
            <form>
              <div className='d-flex flex-row'>
                <div>
                  <label className="form-label">สถานะ</label>
                  <select className="form-select" name="type_repair">
                    <option value="">สถานะ</option>
                    <option value="">วันที่ดำเนินการ</option>
                    <option value="">วันที่สำเร็จ</option>
                  </select>
                </div>

                <div>
                  <button className='btn btn-success ms-3' style={{ marginTop: '40%' }}>ค้นหา</button>
                </div>
              </div>
            </form>
          </div>
        </>
      );
    }
    return <div className='m-4'>
      <form>
        <div className='d-flex flex-row'>
          <div>
            <label className="form-label">สถานะ</label>
            <select className="form-select" name="type_repair">
              <option value="">สถานะ</option>
              <option value="">วันที่ดำเนินการ</option>
              <option value="">วันที่สำเร็จ</option>
            </select>
          </div>

          <div>
            <button className='btn btn-success ms-3' style={{ marginTop: '40%' }}>ค้นหา</button>
          </div>
        </div>
      </form>
    </div>
  };

  useEffect(() => {
    fetch('http://localhost:3001/InfoReport')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div className='d-flex flex-column'>
      <Header />

      <div className='d-flex justify-content-between'>
        <div>
          <h4 className='m-4'>ข้อมูลงานซ่อม</h4>
        </div>
        <div className='d-flex flex-column p-4'>
          <div className='d-flex justify-content-end'>
            <button className='btn' style={{ backgroundColor: '#13730A', color: 'white' }}>+ เพิ่มข้อมูล</button>
          </div>
          <div className='d-flex flex-row'>
            <div className='mt-3'>
              <p>สถานะงานที่ค้างอยู่ :</p>
            </div>
            <button className='btn' style={{ color: '#FF3806' }}>แจ้งซ่อม</button>
            <button className='btn' style={{ color: '#0AA1FF' }}>รอตรวจสอบ</button>
            <button className='btn' style={{ color: '#1700E5' }}>ดำเนินการอยู่</button>
            <button className='btn' style={{ color: '#480065' }}>ส่งซ่อม/เคลม</button>
            <button className='btn' style={{ color: '#004AE9' }}>ยังไม่ประเมินความพึงพอใจ</button>
          </div>
        </div>
      </div>

      <div>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('วันที่แจ้งซ่อม')}>ค้นหา วันที่แจ้งซ่อม</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ชื่ออุปกรณ์')}>ค้นหา ชื่ออุปกรณ์</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('เลขที่แจ้งซ่อม')}>ค้นหา เลขที่แจ้งซ่อม</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ประเภทงานซ่อม')}>ค้นหา ประเภทงานซ่อม</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ปัญหา')}>ค้นหา ปัญหา/งานซ่อม</button>
      </div>
      <div style={{ marginTop: '10px' }}>{renderSearchBar()}</div>



      <div className='d-flex justify-content-around' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
        <p className='mt-2'>วันที่แจ้งซ่อม</p>
        <p className='mt-2'>ชื่อผู้แจ้ง</p>
        <p className='mt-2'>ประเภทงานซ่อม</p>
        <p className='mt-2'>ปัญหา/งานซ่อม</p>
        <p className='mt-2'>สาเหตุ/วิธีแก้</p>
        <p className='mt-2'>ผู้ดำเนินการ</p>
        <p className='mt-2'>สถานะ</p>
      </div>

    </div>

  );

}
export default InfoReport;