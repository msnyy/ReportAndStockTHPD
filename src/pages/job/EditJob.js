import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';


function EditJob() {
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

      <div className='m-4'>
        <h4>เพิ่มข้อมูล งานซ่อม</h4>
        <hr style={{ border: '3px solidrgb(71, 71, 71)', marginTop: '2%' }} />

        <div className='d-flex justify-content-around mt-4'>

          <div className='flex-fill'>
            <div className='d-flex alignItems-center' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
              <p className='mt-2 ms-3'>ข้อมูลผู้แจ้ง</p>
            </div>

            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '15%' }}>วันที่แจ้งซ่อม</label>
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
            <div className='d-flex justify-content-around mt-4'>
              <label className='form-label' style={{ width: '15%' }}>ชื่อผู้แจ้ง</label>
              <div className='flex-fill'>
                <input type='text' className='form-control' />
              </div>
            </div>
          </div>

          <div className='flex-fill mx-4'>
            <div className='d-flex alignItems-center' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
              <p className='mt-2 ms-3'>ข้อมูลผู้แจ้ง</p>
            </div>

            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '20%' }}>วันที่ดำเนินการ</label>
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
            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '20%' }}>วันที่คาดว่าจะแล้วเสร็จ</label>
              <div className='flex-fill'>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || undefined}
                  max={today}
                  className="form-control"
                />
              </div>

            </div>
            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '20%' }}>ผู้ดำเนินการ (1)</label>
              <div className='flex-fill'>
                <select className="form-select" name="type_repair">
                  <option value="">สถานะ</option>
                  <option value="processing">วันที่ดำเนินการ</option>
                  <option value="completed">วันที่สำเร็จ</option>
                </select>
              </div>
            </div>
            <div className='d-flex justify-content-around mt-4'>
              <label className='form-label' style={{ width: '20%' }}>ผู้ดำเนินการ (2)</label>
              <div className='flex-fill'>
                <input type='text' className='form-control' />
              </div>
            </div>

          </div>
        </div>


        <div className='d-flex justify-content-around'>
          <div className='flex-fill'>
            <div className='d-flex alignItems-center mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
              <p className='mt-2 ms-3'>ข้อมูลผู้แจ้ง</p>
            </div>
            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '20%' }}>ประเภทงานซ่อม</label>
              <div className='flex-fill'>
                <select className="form-select" name="type_repair">
                  <option value="">สถานะ</option>
                  <option value="processing">วันที่ดำเนินการ</option>
                  <option value="completed">วันที่สำเร็จ</option>
                </select>
              </div>
            </div>

            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '20%' }}>ประเภทปัญหา</label>
              <div className='flex-fill'>
                <select className="form-select" name="type_repair">
                  <option value="">สถานะ</option>
                  <option value="processing">วันที่ดำเนินการ</option>
                  <option value="completed">วันที่สำเร็จ</option>
                </select>
              </div>
            </div>

            <div className='d-flex justify-content-around mt-4'>
              <label className='form-label' style={{ width: '20%' }}>ชื่ออุปกรณ์</label>
              <div className='flex-fill'>
                <input type='text' className='form-control' />
              </div>
            </div>

            <div className='d-flex justify-content-around mt-4'>
              <label className="form-label" style={{ width: '20%' }}>ความเร่งด่วน</label>
              <div className='flex-fill'>
                <select className="form-select" name="type_repair">
                  <option value="">สถานะ</option>
                  <option value="processing">วันที่ดำเนินการ</option>
                  <option value="completed">วันที่สำเร็จ</option>
                </select>
              </div>
            </div>

            <div className='mt-4'>
              <label className='form-label'>รายละเอียดปัญหา/งานซ่อม</label>
              <div className='flex-fill'>
                <textarea
                  className='form-control mt-2'
                  rows="4"
                  style={{ resize: 'vertical' }}
                  placeholder="กรอกรายละเอียดปัญหา/งานซ่อม..."
                ></textarea>
              </div>
              <div className='d-flex mt-3'>
                <label className="form-label" style={{ width: '15%' }}>แทรกไฟล์</label>
                <input className="form-control" type="file" name="image" onChange={handleChange} />
              </div>
            </div>

          </div>

          <div className='flex-fill mx-4 mt-4'  style={{width:'28%'}}>
            <div>
              <div className='d-flex alignItems-center' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                <p className='mt-2 ms-3'>ข้อมูลผู้แจ้ง</p>
              </div>

              <div className='d-flex justify-content-around mt-4'>
                <label className="form-label" style={{ width: '15%' }}>วันที่สำเร็จ</label>
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
                <label className='form-label'>สาเหตุ/วิธีแก้ไข</label>
                <div className='flex-fill'>
                  <textarea
                    className='form-control mt-2'
                    rows="4"
                    style={{ resize: 'vertical' }}
                    placeholder="กรอกรายละเอียดปัญหา/งานซ่อม..."
                  ></textarea>
                </div>
                <div className='d-flex mt-3'>
                  <label className="form-label" style={{ width: '15%' }}>แทรกไฟล์</label>
                  <input className="form-control" type="file" name="image" onChange={handleChange} />
                </div>

              </div>
            </div>

            <div className='flex-fill mt-4'>
              <div className='d-flex alignItems-center mt-4' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
                <p className='mt-2 ms-3'>ข้อมูลผู้แจ้ง</p>
              </div>
              <div className='d-flex mt-4'>
                <label className="form-label" style={{ width: '10%' }}>สถานะ</label>
                <div className='flex-fill'>
                  <select className="form-select" name="type_repair">
                    <option value="">สถานะ</option>
                    <option value="processing">วันที่ดำเนินการ</option>
                    <option value="completed">วันที่สำเร็จ</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='d-flex justify-content-end mx-4'>
            <button className='btn btn-success ms-3'>บันทึก</button>
          </div>
      </div>
    </div>
  );
}


export default EditJob;
