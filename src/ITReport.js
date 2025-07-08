import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return(
    <div className='d-flex flex-column'>
      <div className='d-flex justify-content-between p-2 pt-3' style={{backgroundColor:'#BD0C0F' , color: 'white'}}>
        <h3>ระบบแจ้งซ่อมออนไลน์</h3>
        <div className='d-flex flex-row-reverse'>
          <div>
            <button className='btn' style={{color:'white'}} onClick={() => navigate('/Profile')}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-square" viewBox="0 0 20 20">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg></button>
          </div>

          <div>
          <button className='btn' style={{color:'white'}} onClick={() => navigate('/Setting')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 20 20">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
          </svg>ตั้งค่า</button>  
          </div>
          
          <div>
            <button className='btn' style={{color:'white'}} onClick={() => navigate('/Report')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 20 22">
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
            </svg>รายงาน</button>
          </div>

          <div>
            <button className='btn' style={{color:'white'}} onClick={() => navigate('/ITReport')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-display-fill" viewBox="0 0 20 20">
            <path d="M6 12q0 1-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75Q10 13 10 12h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2z"/>
            </svg>อุปกรณ์</button>
          </div>
          

          <div>
            <button className='btn' style={{color:'white'}} onClick={() => navigate('/InfoReport')}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>ข้อมูลงานซ่อม</button>
          </div>
          
          <div>
          <button className='btn' style={{color:'white'}} onClick={() => navigate('/Home')}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 20 23">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
          </svg>หน้าหลัก</button>
          </div>  
        </div>
      </div>

      <div className='d-flex justify-content-between'>
          <div>
            <h4 className='m-4'>อุปกรณ์</h4>
          </div>
          <div className='d-flex flex-column p-4'>
          <div className='d-flex justify-content-end'>
            <button className='btn' style={{backgroundColor:'#13730A', color:'white'}}>+ เพิ่มอุปกรณ์</button>
          </div>
          </div>
          
        </div>

        <hr style={{border: '3px solidrgb(71, 71, 71)', marginLeft:'1%', marginRight:'1%' }} />

        <div>
          <button className='btn btn-outline-danger' style={{marginLeft:'1%'}} onClick={() => setSearchType('รหัสอุปกรณ์')}>ค้นหา รหัสอุปกรณ์</button>
          <button className='btn btn-outline-danger' style={{marginLeft:'1%'}} onClick={() => setSearchType('ชื่ออุปกรณ์')}>ค้นหา ชื่ออุปกรณ์</button>
          <button className='btn btn-outline-danger' style={{marginLeft:'1%'}} onClick={() => setSearchType('หมวดหมู่')}>ค้นหา หมวดหมู่ และ หน่วยงาน</button>
          <button className='btn btn-outline-danger' style={{marginLeft:'1%'}} onClick={() => setSearchType('ประเภทอุปกรณ์')}>ค้นหา ประเภทอุปกรณ์</button>
          <button className='btn btn-outline-danger' style={{marginLeft:'1%'}} onClick={() => setSearchType('ชื่อผู้ใช้งาน')}>ค้นหา ชื่อผู้ใช้งาน</button>
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

          <div className='d-flex justify-content-around' style={{backgroundColor:'#8B6D6D8A', height:'40px'}}>
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