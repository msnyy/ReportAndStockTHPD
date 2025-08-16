import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// ตรงนี้ไว้กำหนดลิ้งค์แต่ละหน้า ว่าหน้านี้ๆให้เชื่อมกับหน้าไหน
import App from './App';
import ReportUser from './ReportUser';
import ITReport from './pages/device/ITReport';
import InfoReport from './pages/job/InfoReport';
import Report from './pages/report/Report';
import Home from './pages/Home';
import Setting from './Setting';
import Profile from './Profile';
import WorkInfo from './pages/report/WorkInfo';
import Survey from './pages/report/survey';
import DeviceReg from './pages/report/DeviceReg';
import DeviceCount from './pages/report/DeviceCount';
import RepairSum from './pages/report/RepairSum';
import Stats from './pages/report/Stats';
import Urgency from './pages/report/Urgency';
import UserList from './pages/report/UserList';
import CreateJob from './pages/job/CreateJob';
import EditJob from './pages/job/EditJob';
import CreateDevice from './pages/device/CreateDevice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ReportUser" element={<ReportUser />} />
      <Route path="/pages/device/ITReport" element={<ITReport />} />
      <Route path="/pages/job/InfoReport" element={<InfoReport />} />
      <Route path="/pages/report/Report" element={<Report />} />
      <Route path="/pages/Home" element={<Home />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/pages/report/WorkInfo" element={<WorkInfo />} />
      <Route path="/pages/report/Survey" element={<Survey />} />
      <Route path="/pages/report/DeviceReg" element={<DeviceReg />} />
      <Route path="/pages/report/DeviceCount" element={<DeviceCount />} />
      <Route path="/pages/report/RepairSum" element={<RepairSum />} />
      <Route path="/pages/report/Stats" element={<Stats />} />
      <Route path="/pages/report/Urgency" element={<Urgency />} />
      <Route path="/pages/report/UserList" element={<UserList />} />
      <Route path="/pages/job/CreateJob" element={<CreateJob />} />
      <Route path="/pages/job/EditJob" element={<EditJob />} />
      <Route path="/pages/device/CreateDevice" element={<CreateDevice />} />
    </Routes>
  </BrowserRouter>
);
