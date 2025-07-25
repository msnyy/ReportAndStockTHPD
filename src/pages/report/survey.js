import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';


function Survey() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchType, setSearchType] = useState('ประเมินความพึงพอใจ');
  const today = new Date().toISOString().split('T')[0];

  //   useEffect(() => {
  //     fetch('http://localhost:3001/login')
  //       .then((res) => res.json())
  //       .then((data) => setMsg(data.message));
  //   }, []);

  const handleChange = (e) => {
    setStartDate(e.target.value);
  };

  const renderSearchBar = () => {
    if (searchType === 'ประเมินความพึงพอใจ') {
      return (
        <div>
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
                <label className="form-label">วันที่แจ้งซ่อม</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
              </div>

              <div style={{ marginLeft: '2%', width: '20%' }}>
                <label className="form-label">ถึง</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
              </div>

              <div style={{ marginLeft: '2%', width: '20%' }}>
                <label className="form-label">ชื่อผู้แจ้ง</label>
                <select className="form-select flex-fill" name="type_repair">
                  <option value="">วันที่แจ้งซ่อม</option>
                  <option value="">วันที่ดำเนินการ</option>
                  <option value="">วันที่สำเร็จ</option>
                </select>
              </div>
            </div>
          </form>

          <div className='mt-3'>
            <form>
              <div className='d-flex flex-row'>
                <div style={{ width: '20%' }}>
                  <label className="form-label">สถานะ</label>
                  <select className="form-select flex-fill" name="Urgency" onChange={handleChange}>
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
                </div>

              </div>
            </form>
          </div>

          <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
            <p className='mt-2'>เลขที่แจ้งซ่อม</p>
            <p className='mt-2'>วันที่แจ้งซ่อม</p>
            <p className='mt-2'>ชื่อผู้แจ้ง</p>
            <p className='mt-2'>ผู้ดำเนินการ</p>
            <p className='mt-2'>วันที่ประเมิน</p>
            <p className='mt-2'>ผลประเมิน</p>
            <p className='mt-2'>ข้อเสนอแนะ</p>
          </div>

        </div>
      );
    } if (searchType === 'สรุปผลการประเมิน') {
      return (
        <div>
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
                <label className="form-label">วันที่แจ้งซ่อม</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} max={today} className="form-control flex-fill" />
              </div>

              <div style={{ marginLeft: '2%', width: '20%' }}>
                <label className="form-label">ถึง</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} min={startDate || undefined} max={today} className="form-control flex-fill" />
              </div>

              <div className='ms-4 d-flex align-items-end'>
                <button className='btn btn-success'>ค้นหา</button>
              </div>
            </div>
          </form>

          <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
            <p className='mt-2'>ลำดับ</p>
            <p className='mt-2'>ผู้ดำเนินการ</p>
            <p className='mt-2'>จำนวนทั้งหมด</p>
            <p className='mt-2'>จำนวนงานที่ได้รับการประเมิน</p>
            <p className='mt-2'>ระดับความพึงพอใจโดยเฉลี่ย</p>
            <p className='mt-2'>ผลประเมินความพึงพอใจโดยเฉลี่ย</p>
          </div>
        </div>
      );
    } return (
      <div>
        <div className='mt-4' style={{ width: '10%' }}>
          <form>
            <div>
              <label className="form-label">เลือกปี</label>
              <select className="form-select flex-fill" name="type_repair">
                {/* <option value="">วันที่แจ้งซ่อม</option>
                <option value="">วันที่ดำเนินการ</option>
                <option value="">วันที่สำเร็จ</option> */}
              </select>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-around mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
          <p className='mt-2'>เดือน</p>
          <p className='mt-2'>สรุปคะแนนเฉลี่ยรวม</p>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Header />
      <div className='m-4'>
        <h4>ประเมินความพึงพอใจ</h4>

        <div className='mt-4'>
          <button className='btn btn-outline-danger' onClick={() => setSearchType('ประเมินความพึงพอใจ')}>ประเมินความพึงพอใจ</button>
          <button className='btn btn-outline-danger ms-3' onClick={() => setSearchType('สรุปผลการประเมิน')}>สรุปผลการประเมินความพึงพอใจ</button>
          <button className='btn btn-outline-danger ms-3' onClick={() => setSearchType('สรุปคะแนนเฉลี่ยรวม')}>สรุปคะแนนเฉลี่ยรวม</button>
        </div>

        <div style={{ marginTop: '10px' }}>{renderSearchBar()}</div>
      </div>
    </div>
  );
}


export default Survey;
