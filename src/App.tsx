import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import MainBoard from './components/MainBoard/MainBoard';

import './App.css';

function App() {
  return (
  <div className="dashboard">
    <div className="dashboard-header">
      <b>Network Service Mesh Dashboard</b>
    </div>
    <MainBoard></MainBoard>
    <div className="dashboard-footer">
      Copyright © 2023 The Network Service Mesh authors
    </div>
  </div>
  );
}

export default App;
