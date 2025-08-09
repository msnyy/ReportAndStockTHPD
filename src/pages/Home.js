import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
// import axios from 'axios'; // ใช้ตอนเชื่อมต่อ API จริง
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto';

function Home() {
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const [counts, setCounts] = useState({
        'แจ้งซ่อม': 0,
        'รอตรวจสอบ': 0,
        'ดำเนินการ': 0,
        'ส่งซ่อม/เคลม': 0,
        'สำเร็จ': 0,
        'ยกเลิก': 0
    });

    // const [chartData, setChartData] = useState({}); // กราฟ

    // useEffect(() => {
    //     // ดึงข้อมูลจำนวนงานซ่อมจากหลังบ้าน
    //     axios.get('http://localhost:5000/api/status-count')
    //         .then(res => setCounts(res.data))
    //         .catch(err => console.error(err));

    //     // ดึงข้อมูลกราฟ
    //     axios.get('http://localhost:5000/api/statistics')
    //         .then(res => {
    //             setChartData({
    //                 labels: res.data.map(d => d.type),
    //                 datasets: [{
    //                     label: 'จำนวนงานซ่อม',
    //                     data: res.data.map(d => d.count),
    //                     backgroundColor: '#FC4D20'
    //                 }]
    //             });
    //         })
    //         .catch(err => console.error(err));
    // }, []);

    const statusColors = {
        'แจ้งซ่อม': '#FF3806',
        'รอตรวจสอบ': '#0AA1FF',
        'ดำเนินการ': '#1700E5',
        'ส่งซ่อม/เคลม': '#480065',
        'สำเร็จ': '#007308',
        'ยกเลิก': '#F80C0C'
    };

    return (
        <div>
            <Header />

            <div className='m-4'>
                <h3>หน้าหลัก</h3>

                <hr style={{ border: '3px solidrgb(71, 71, 71)' }} />

                <div className='m-4'>
                    <p>ข้อมูลงานซ่อม</p>
                    <div className='d-flex'>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" defaultChecked />ทั้งหมด
                            <label className="form-check-label" htmlFor="radio1"></label>
                        </div>
                        <div className="form-check ms-3">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" />เดือนปัจจุบัน
                            <label className="form-check-label" htmlFor="radio2"></label>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-between m-4'>
                    {Object.keys(statusColors).map(status => (
                        <div key={status} style={{ textAlign: 'center' }}>
                            <div className='d-flex justify-content-center' style={{ width: '50px', height: '50px', borderRadius: '50%', background: statusColors[status],  alignItems: 'center', color: '#fff', fontWeight: 'bold', margin: '0 auto'}}>
                                {counts[status]}
                            </div>
                            <h5 className='mt-2'>{status}</h5>
                        </div>
                    ))}
                </div>

                <div className='mt-5'>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{ border: '1px solid #ccc', minHeight: '200px' }}>
                                <h6 className='p-1' style={{backgroundColor: '#8B6D6D8A'}}>สถานะงานซ่อม แยกตามผู้ดำเนินการ</h6>
                                <div className='p-4'>
                                    {/* ใส่ข้อมูลกราฟ */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style={{ border: '1px solid #ccc', minHeight: '200px' }}>
                                <h6 className='p-1' style={{backgroundColor: '#8B6D6D8A'}}>สรุปสถานะงานซ่อม</h6>
                                <div className='p-4'>
                                    {/* ใส่ข้อมูลกราฟ */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-6">
                            <div style={{ border: '1px solid #ccc', minHeight: '200px'}}>
                                <h6 className='p-1' style={{backgroundColor: '#8B6D6D8A'}}>สถิติการซ่อมแยกตามประเภทงานซ่อม</h6>
                                <div className='p-4'>
                                    {/* ใส่ข้อมูลกราฟ */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div style={{ border: '1px solid #ccc', minHeight: '200px'}}>
                                <h6 className='p-1' style={{backgroundColor: '#8B6D6D8A'}}>สถิติการซ่อมแยกตามหมวดหมู่อุปกรณ์</h6>
                                <div className='p-4'>
                                    {/* ใส่ข้อมูลกราฟ */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
