import React, { useEffect, useState } from 'react';

function ReportUser() {
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({
    type_repair: '',
    type_problem: '',
    NameDevice: '',
    Urgency: '',
    description: '',
    IDAnydesk: '',
    NameUser: '',
    phone: '',
    image: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.phone.trim()) newErrors.phone = 'กรุณากรอกเบอร์โทร';
    else if (!/^[0-9]+$/.test(form.phone)) newErrors.phone = 'ต้องเป็นตัวเลขเท่านั้น';
    else if (!form.IDAnydesk.trim()) newErrors.IDAnydesk = 'กรุณากรอกเลข ID';
    else if (!/^[0-9]+$/.test(form.IDAnydesk)) newErrors.IDAnydesk = 'ต้องเป็นตัวเลขเท่านั้น';
    else if (!form.NameUser.trim()) newErrors.NameUser = 'กรุณากรอกชื่อผู้แจ้ง';
    else if (!form.description.trim()) newErrors.description = 'กรุณาระบุรายละเอียด';
    else if (!form.type_repair) newErrors.type_repair = 'กรุณาเลือกประเภทงานซ่อม';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch('http://localhost:3001/api/report', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      alert(data.message);

    } catch (err) {
      alert('เกิดข้อผิดพลาด');
      console.error(err);
    }
  };

  // useEffect(() => {
  //   fetch('http://localhost:3001/api/report')
  //     .then((res) => res.json())
  //     .then((data) => setMsg(data.message));
  // }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      <div className="card col-lg-5 mt-5 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>

        <h3 className="p-2 text-white" style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0' }}>
          แจ้งปัญหางานซ่อม/งานซ่อม
        </h3>

        <div className="container p-4 card-body">
          <form>
            <label className="form-label">ประเภทงานซ่อม</label>
            <select className="form-select mb-2" name="type_repair" onChange={handleChange}>
              <option value="">เลือกประเภทงานซ่อม</option>
              <option value="hardware">Hardware</option>
              <option value="software">Software</option>
            </select>
            {errors.type_repair && <div className="text-danger">{errors.type_repair}</div>}

            <label className="form-label">ประเภทปัญหา</label>
            <select className="form-select mb-3" name="type_problem" onChange={handleChange}>
              <option value="">เลือกประเภทปัญหา</option>
              <option value="จอไม่ติด">จอไม่ติด</option>
              <option value="เปิดไม่ติด">เปิดไม่ติด</option>
            </select>
            {errors.type_problem && <div className="text-danger">{errors.type_problem}</div>}

            <label className="form-label">ชื่ออุปกรณ์</label>
            <input className="form-control mb-2" type="text" name="NameDevice" onChange={handleChange} />

            <label className="form-label">ความเร่งด่วน</label>
            <select className="form-select mb-2" name="Urgency" onChange={handleChange}>
              <option value="">เลือกความเร่งด่วน</option>
              <option value="">ปกติ</option>
              <option value="ด่วน">ด่วน</option>
              <option value="ด่วนมาก">ด่วนมาก</option>
            </select>
            {errors.Urgency && <div className="text-danger">{errors.Urgency}</div>}
          </form>
        </div>
      </div>

      <div className="card col-lg-5 mt-5 mx-3" style={{ boxShadow: '0 4px 10px rgba(0,0,0,0.15)', borderRadius: '10px' }}>
        <h3 className="p-2 text-white" style={{ backgroundColor: '#BD0C0F', borderRadius: '10px 10px 0 0' }}>
          ปัญหา/งานซ่อม
        </h3>
        <div className="container p-4 card-body">
          <form>
            <label className="form-label">รายละเอียด</label>
            <input className="form-control mb-2" type="text" name="description" onChange={handleChange} />
            {errors.description && <div className="text-danger">{errors.description}</div>}

            <label className="form-label">ID Anydesk</label>
            <input className="form-control mb-2" type="text" name="IDAnydesk" value={form.IDAnydesk} onChange={handleChange} />
            {errors.IDAnydesk && <div className="text-danger">{errors.IDAnydesk}</div>}

            <label className="form-label">ผู้แจ้ง</label>
            <input className="form-control mb-2" type="text" name="NameUser" onChange={handleChange} />
            {errors.NameUser && <div className="text-danger">{errors.NameUser}</div>}

            <label className="form-label">เบอร์โทร</label>
            <input className="form-control mb-2" type="text" name="phone" value={form.phone} onChange={handleChange} />
            {errors.phone && <div className="text-danger">{errors.phone}</div>}

            <label className="form-label">รูปปัญหา (ถ้ามี)</label>
            <input className="form-control mb-4" type="file" name="image" onChange={handleChange} />

            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-danger w-50" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default ReportUser;
