import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './pages/header';

function ITReport() {
  const [msg, setMsg] = useState('');
  const [searchType, setSearchType] = useState('');
  const navigate = useNavigate();

  const renderSearchBar = () => {
    if (searchType === 'หมวดหมู่') {
      return (
        <div className='m-4'>
          <form>
            <div className='d-flex'>
              <div>
                <select className="form-select">
                  <option value="">หมวดหมู่อุปกรณ์</option>
                  <option value="computer">Computer</option>
                  <option value="printer">Printer</option>
                </select>
              </div>

              <div style={{ marginLeft: '1%' }}>
                <select className="form-select">
                  <option value="">หน่วยงาน/แผนก</option>
                  <option value="hr">HR</option>
                  <option value="it">IT</option>
                </select>
              </div>

              <div style={{ marginLeft: '1%' }}>
                <select className="form-select">
                  <option value="">สถานะอุปกรณ์</option>
                  <option value="active">ใช้งานอยู่</option>
                  <option value="repair">ส่งซ่อม</option>
                </select>
              </div>

              <div>
                <button className='btn btn-success ms-3'>ค้นหา</button>
              </div>
            </div>
          </form>
        </div>
      );
    }

    if (searchType === 'รหัสอุปกรณ์') {
      return (
        <div className='m-4'>
          <form>
            <div className='d-flex'>
              <div>
                <select className="form-select">
                  <option value="">ชื่ออุปกรณ์</option>
                  <option value="pc1">PC-1</option>
                  <option value="printer1">Printer-1</option>
                </select>
              </div>

              <div style={{ marginLeft: '1%' }}>
                <select className="form-select">
                  <option value="">สถานะ</option>
                  <option value="working">ปกติ</option>
                  <option value="broken">เสีย</option>
                </select>
              </div>

              <div>
                <button className='btn btn-success ms-3'>ค้นหา</button>
              </div>
            </div>
          </form>
        </div>
      );
    }

    return (
      <div className='m-4'>
        <form>
          <div className='d-flex'>
            <div>
              <label className="form-label">สถานะ</label>
              <select className="form-select">
                <option value="">สถานะ</option>
                <option value="pending">รอตรวจสอบ</option>
                <option value="done">เสร็จสิ้น</option>
              </select>
            </div>

            <div>
              <button className='btn btn-success ms-3' style={{ marginTop: '40%' }}>ค้นหา</button>
            </div>
          </div>
        </form>
      </div>
    );
  };


  useEffect(() => {
    fetch('http://localhost:3001/ITReport')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div className='d-flex flex-column'>

      <Header />

      <div className='d-flex justify-content-between'>
        <div>
          <h4 className='m-4'>อุปกรณ์</h4>
        </div>
        <div className='d-flex flex-column p-4'>
          <div className='d-flex justify-content-end'>
            <button className='btn' style={{ backgroundColor: '#13730A', color: 'white' }}>+ เพิ่มอุปกรณ์</button>
          </div>
        </div>

      </div>

      <hr style={{ border: '3px solidrgb(71, 71, 71)', marginLeft: '1%', marginRight: '1%' }} />

      <div>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('รหัสอุปกรณ์')}>ค้นหา รหัสอุปกรณ์</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ชื่ออุปกรณ์')}>ค้นหา ชื่ออุปกรณ์</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('หมวดหมู่')}>ค้นหา หมวดหมู่ และ หน่วยงาน</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ประเภทอุปกรณ์')}>ค้นหา ประเภทอุปกรณ์</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ชื่อผู้ใช้งาน')}>ค้นหา ชื่อผู้ใช้งาน</button>
      </div>
      <div style={{ marginTop: '10px' }}>{renderSearchBar()}</div>

      <div className='d-flex justify-content-end me-5'>
        <p>ใช้งานได้ปกติ</p>
        <p className='ms-4'>อุปกรณ์ส่วนกลาง</p>
        <p className='ms-4'>เลิกใช้งาน</p>
        <p className='ms-4'>ทั้งหมด</p>
      </div>

      <div>
        <btn className='btn btn-danger mb-4 ms-4'>ลบรายการที่เลือก</btn>
      </div>

      <div className='d-flex justify-content-around' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
        <p className='mt-2'>รหัสอุปกรณ์</p>
        <p className='mt-2'>ชื่ออุปกรณ์</p>
        <p className='mt-2'>ยี่ห้อ/รุ่น</p>
        <p className='mt-2'>หน่วยงาน/แผนก</p>
        <p className='mt-2'>ผู้ใช้งาน/สถานที่ตั้ง</p>
        <p className='mt-2'>การรับประกัน</p>
        <p className='mt-2'>ราคา</p>
      </div>

    </div>

  );

}
export default ITReport;