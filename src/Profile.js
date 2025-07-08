import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();
    const [Password, setPassword] = useState('');

    const renderUser = () => {
        if (Password === "password") {
            return (
            <div className='d-flex flex-column m-4 w-25'>
        <form>
            <label className="form-label">รหัสผ่านเดิม</label>
            <input className="form-control mb-2" type="text" name="OldPassword" />
            {/* {errors.description && <div className="text-danger">{errors.description}</div>} onChange={handleChange} */}

            <label className="form-label">รหัสผ่านใหม่</label>
            <input className="form-control mb-2" type="text" name="Newpassword" />

            <label className="form-label">ยืนยันหรัสผ่าน</label>
            <input className="form-control mb-2" type="text" name="ConfirmPassword" />
        </form>

        <button className='btn btn-danger mt-3'>บันทึก</button>
      </div>
        );
        }

        return (
            <div className='d-flex flex-column m-4 w-25'>
        <form>
            <label className="form-label">ชื่อ-นามสกุล</label>
            <input className="form-control mb-2" type="text" name="name" />
            {/* {errors.description && <div className="text-danger">{errors.description}</div>} onChange={handleChange} */}

            <label className="form-label">ตำแหน่ง</label>
            <input className="form-control mb-2" type="text" name="position" />

            <label className="form-label">E-mail</label>
            <input className="form-control mb-2" type="text" name="email" />

            <label className="form-label">เบอร์โทร</label>
            <input className="form-control mb-2" type="text" name="phone" />
        </form>

        <button className='btn btn-danger mt-3'>บันทึก</button>
      </div>
        );
    }

    return(
        <div>
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

      <div>
        <h4 className='m-3'>ข้อมูลส่วนตัว</h4>
        <hr style={{border: '3px solidrgb(71, 71, 71)', marginLeft:'1%', marginRight:'1%' }} />
      </div>

      <div className='m-4'>
        <button className='btn btn-outline-danger' onClick={() => setPassword('user')}>ข้อมูลส่วนตัว</button>
        <button className='btn btn-outline-danger ms-3' onClick={() => setPassword('password')}>เปลี่ยนหรัสผ่าน</button>
      </div> 
      <div>{renderUser()}</div>
      </div>
    );
}

export default Profile;