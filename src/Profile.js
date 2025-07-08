import React, { useState, useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './pages/header'; 

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
        <Header />

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