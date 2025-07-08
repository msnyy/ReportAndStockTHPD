import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const [msg, setMsg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/login')
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  const handleLogin = () => {
    if (username === 'Home') {
      navigate('/Home');
    } else {
      navigate('/ReportUser');
    }
  };

  

  return (
    <div>
      <div className="d-flex justify-content-center mt-5 mb-3">
        <img src="/LoGo-PNG-2500Pixel.png" alt="Logo" className='w-25'/>
      </div>

      <div className="d-flex justify-content-center">
        <div className="card col-sm-6 col-md-4 col-lg-8 mt-3 w-50" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)' }}>
          <div className="d-flex justify-content-center mt-4">
          <h3>ระบบแจ้งซ่อมออนไลน์</h3>
          </div>
          <div className="container p-4 card-body">
            <form>
              <div className="mb-4">
                <label htmlFor="Username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>

            <div className="submit d-flex justify-content-center">
              <button
                type="button"
                className="btn mt-5 mb-5 w-25"
                style={{ backgroundColor: '#BD0C0F', color: 'white' }}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
