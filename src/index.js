import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import ReportUser from './ReportUser';
import ITReport from './ITReport';
import InfoReport from './InfoReport';
import Report from './pages/report/Report';
import Home from './Home';
import Setting from './Setting';
import Profile from './Profile';
import WorkInfo from './pages/report/WorkInfo';
import Survey from './pages/report/survey';
import DeviceReg from './pages/report/DeviceReg';
import DeviceCount from './pages/report/DeviceCount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ReportUser" element={<ReportUser />} />
      <Route path="/ITReport" element={<ITReport />} />
      <Route path="/InfoReport" element={<InfoReport />} />
      <Route path="/pages/report/Report" element={<Report />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Setting" element={<Setting />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/pages/report/WorkInfo" element={<WorkInfo />} />
      <Route path="/pages/report/Survey" element={<Survey />} />
      <Route path="/pages/report/DeviceReg" element={<DeviceReg />} />
      <Route path="/pages/report/DeviceCount" element={<DeviceCount />} />
    </Routes>
  </BrowserRouter>
);
