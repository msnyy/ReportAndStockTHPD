import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';

function InfoReport() {
  const [msg, setMsg] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [searchType, setSearchType] = useState('วันที่แจ้งซ่อม');
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setStartDate(e.target.value);
  };
// ข้อมูลทดลอง
  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        date: '2025-08-01',
        reporter: 'สมชาย',
        type: 'ปัญหาอุปกรณ์',
        issue: 'เครื่องพิมพ์เสีย',
        solution: 'เปลี่ยนตลับหมึก',
        operator: 'วิศวกร A',
        status: 'ดำเนินการอยู่',
      },
      {
        id: 2,
        date: '2025-08-02',
        reporter: 'สมศรี',
        type: 'ปัญหาโปรแกรม',
        issue: 'ระบบล่ม',
        solution: '',
        operator: '',
        status: 'แจ้งซ่อม',
      },
    ];
    setMsg(fakeData);
  }, []);

  const [counts, setCounts] = useState({
    'แจ้งซ่อม': 0,
    'รอตรวจสอบ': 0,
    'ดำเนินการ': 0,
    'ส่งซ่อม/เคลม': 0,
    'สำเร็จ': 0,
    'ยกเลิก': 0
});

const statusColors = {
  'แจ้งซ่อม': '#FF3806',
  'รอตรวจสอบ': '#0AA1FF',
  'ดำเนินการ': '#1700E5',
  'ส่งซ่อม/เคลม': '#480065',
  'สำเร็จ': '#007308',
  'ยกเลิก': '#F80C0C'
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
                  <select className="form-select" name="type_repair">
                    <option value="">-</option>
                  </select>
                </div>

                <div style={{ marginLeft: '5%' }}>
                  <label className='form-label'>ผู้ดำเนินการ</label>
                  <select className="form-select" name="type_repair">
                    <option value="">-</option>
                  </select>
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
                    <option value="">-</option>
                    <option value="">แจ้งซ่อม</option>
                    <option value="">รอตรวจสอบ</option>
                    <option value="">ดำเนินการอยู่</option>
                    <option value="">ส่งซ่อม/เคลม</option>
                    <option value="">ยังไม่ได้ประเมินความพึงพอใจ </option>
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
    } else if (searchType === 'ชื่อผู้แจ้ง') {
      return (
        <div className='m-4'>
          <form>
            <div className='d-flex flex-row'>
              <div>
                <select className="form-select" name="type_repair">
                  <option value="">ค้นหา</option>
                </select>
              </div>

              <div>
                <button className='btn btn-success ms-3'>ค้นหา</button>
              </div>
            </div>
          </form>
        </div>
      );
    } else if (searchType === 'เลขที่แจ้งซ่อม') {
      return (<div className='m-4'>
        <form>
          <div className='d-flex flex-row'>
            <div>
              <select className="form-select" name="type_repair">
                <option value="">ค้นหา</option>
              </select>
            </div>

            <div>
              <button className='btn btn-success ms-3'>ค้นหา</button>
            </div>
          </div>
        </form>
      </div>
      );
    } else if (searchType === 'ประเภทงานซ่อม') {
      return (<div className='m-4'>
        <form>
          <div className='d-flex flex-row'>
            <div>
              <select className="form-select" name="type_repair">
                <option value="">ประเภทงานซ่อม</option>
                <option value="">ปัญหาอุปกรณ์</option>
                <option value="">ปัญหาโปรแกรม</option>
              </select>
            </div>

            <div>
              <button className='btn btn-success ms-3'>ค้นหา</button>
            </div>
          </div>
        </form>
      </div>
      );
    } return <div className='m-4'>
      <form>
        <div className='d-flex flex-row'>
          <div>
            <select className="form-select" name="type_repair">
              <option value="">ค้นหา</option>
            </select>
          </div>

          <div>
            <button className='btn btn-success ms-3'>ค้นหา</button>
          </div>
        </div>
      </form>
    </div>
  };


  // useEffect(() => {
  //   fetch('http://localhost:3001/InfoReport')
  //     .then((res) => res.json())
  //     .then((data) => setMsg(data.message));
  // }, []);


  return (
    <div className='d-flex flex-column'>
      <Header />

      <div className='d-flex justify-content-between'>
        <div>
          <h4 className='m-4'>ข้อมูลงานซ่อม</h4>
        </div>
        <div className='d-flex flex-column p-4'>
          <div className='d-flex justify-content-end'>
            <button className='btn' style={{ backgroundColor: '#13730A', color: 'white' }} onClick={() => navigate('/pages/job/CreateJob')}>+ เพิ่มข้อมูล</button>
          </div>
          <div className='d-flex flex-row'>
            <div className='mt-3'>
              <p>สถานะงานที่ค้างอยู่ :</p>
            </div>
            <div className='d-flex justify-content-between ms-3'>
                    {Object.keys(statusColors).map(status => (
                        <div key={status} className='d-flex align-items-center m-2' style={{whiteSpace: 'nowrap'}}>
                          <p className='mt-2'>{status}</p>
                            <div className='d-flex justify-content-center ms-1' style={{ width: '20px', height: '20px', borderRadius: '50%', background: statusColors[status],alignItems: 'center', color: '#fff', margin: '0 auto'}}>
                                {counts[status]}
                            </div>
                            
                        </div>
                    ))}
                </div>
          </div>
        </div>
      </div>

      <div>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('วันที่แจ้งซ่อม')}>ค้นหา วันที่แจ้งซ่อม</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ชื่อผู้แจ้ง')}>ค้นหา ชื่อผู้แจ้ง</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('เลขที่แจ้งซ่อม')}>ค้นหา เลขที่แจ้งซ่อม</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ประเภทงานซ่อม')}>ค้นหา ประเภทงานซ่อม</button>
        <button className='btn btn-outline-danger' style={{ marginLeft: '1%' }} onClick={() => setSearchType('ปัญหา')}>ค้นหา ปัญหา/งานซ่อม</button>
      </div>
      <div style={{ marginTop: '10px' }}>{renderSearchBar()}</div>


      <div className='row text-center' style={{ backgroundColor: '#8B6D6D8A', height: '40px' }}>
        <div className='col'><p className='mt-2'>วันที่แจ้งซ่อม</p></div>
        <div className='col'><p className='mt-2'>ชื่อผู้แจ้ง</p></div>
        <div className='col'><p className='mt-2'>ประเภทงานซ่อม</p></div>
        <div className='col'><p className='mt-2'>ปัญหา/งานซ่อม</p></div>
        <div className='col'><p className='mt-2'>สาเหตุ/วิธีแก้</p></div>
        <div className='col'><p className='mt-2'>ผู้ดำเนินการ</p></div>
        <div className='col'><p className='mt-2'>สถานะ</p></div>
        <div className='col'><p className='mt-2'>การจัดการ</p></div>
      </div>

      {msg.map((row, index) => (
        <div key={row.id}>
          <div className='row text-center align-items-center p-2'>
            <div className='col'>{row.date}</div>
            <div className='col'>{row.reporter}</div>
            <div className='col'>{row.type}</div>
            <div className='col'>{row.issue}</div>
            <div className='col'>{row.solution || '-'}</div>
            <div className='col'>{row.operator || '-'}</div>
            <div className='col'>{row.status}</div>
            <div className='col'>
              {row.reporter && (
                <button className='btn btn-warning btn-sm me-2' onClick={() => alert(`ดูรายละเอียด ID: ${row.id}`)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-stars" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
                <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194z"/>
              </svg></button>
              )}
              {row.reporter && (
                <button className='btn btn-danger btn-sm' onClick={() => alert(`แก้ไข ID: ${row.id}`)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
              </svg></button>
              )}
            </div>
          </div>
          {index !== msg.length - 1 && <hr className="m-0" />}
        </div>
      ))}
    </div>

  );

}
export default InfoReport;