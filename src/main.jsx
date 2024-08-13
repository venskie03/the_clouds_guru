import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TempDashboard from './layout/TempDashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
    <Routes> 
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<TempDashboard />} />
    </Routes> 
  </Router>
  </StrictMode>,
)
