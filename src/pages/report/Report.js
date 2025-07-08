import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header';


function Report() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/Report')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);



  return (
    <div>
      <Header />

      <div className='m-4'>
        <h4>รายงาน</h4>
      </div>
      <hr style={{ border: '3px solidrgb(71, 71, 71)', marginLeft: '1%', marginRight: '1%' }} />

      <div className='d-flex flex-column'>
        <div className='d-flex flex-wrap justify-content-center'>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }} onClick={() => navigate('/pages/report/WorkInfo')}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>ข้อมูลการทำงาน</h5>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-emoji-kiss" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M12.493 13.368a7 7 0 1 1 2.489-4.858c.344.033.68.147.975.328a8 8 0 1 0-2.654 5.152 9 9 0 0 1-.81-.622m-3.731-3.22a13 13 0 0 0-1.107.318.5.5 0 1 1-.31-.95c.38-.125.802-.254 1.192-.343.37-.086.78-.153 1.103-.108.16.022.394.085.561.286.188.226.187.497.131.705a1.9 1.9 0 0 1-.31.593q-.115.16-.275.343.16.186.276.347c.142.197.256.397.31.595.055.208.056.479-.132.706-.168.2-.404.262-.563.284-.323.043-.733-.027-1.102-.113a15 15 0 0 1-1.191-.345.5.5 0 1 1 .31-.95c.371.12.761.24 1.109.321q.264.062.446.084a6 6 0 0 0-.502-.584.5.5 0 0 1 .002-.695 5.5 5.5 0 0 0 .5-.577 5 5 0 0 0-.448.082Zm.766-.087-.003-.001-.003-.001zm.002 1.867-.006.001zM6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8m2.757-.563a.5.5 0 0 0 .68-.194.93.93 0 0 1 .813-.493c.339 0 .645.19.813.493a.5.5 0 0 0 .874-.486A1.93 1.93 0 0 0 10.25 5.75c-.73 0-1.356.412-1.687 1.007a.5.5 0 0 0 .194.68M14 9.828c1.11-1.14 3.884.856 0 3.422-3.884-2.566-1.11-4.562 0-3.421Z" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>ประเมินความพึงพอใจ</h5>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>ทะเบียนอุปกรณ์</h5>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>จำนวนอุปกรณ์</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex flex-wrap justify-content-center'>
          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-calendar-week" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>สรุปจำนวนงานซ่อม</h5>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>สถิติการซ่อมบำรุง</h5>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>ความเร่งด่วน</h5>
              </div>
            </div>
          </div>

          <div className="card col-lg-2 mt-4 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
            <div style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0', height: '20px' }}></div>
            <div className='d-flex justify-content-center m-4'>
              <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                </div>
                <div className='d-flex justify-content-center'>
                  <p>รายงาน</p>
                </div>
                <h5>ผู้ใช้งานระบบ</h5>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}


export default Report;
