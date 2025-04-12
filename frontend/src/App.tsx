import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm } from './components/Auth/LoginForm';
import { RegisterForm } from './components/Auth/RegisterForm';
import { Sidebar } from './components/Navigation/Sidebar';
import { Dashboard } from './components/Dashboard/Dashboard';
import { CropScan } from './components/Dashboard/CropScan';
import { CropRecords } from './components/Dashboard/CropRecords';
import { MarketRates } from './components/Dashboard/MarketRates';
import { WeatherDashboard } from './components/Dashboard/WeatherDashboard';
import { Profile } from './components/Dashboard/Profile';
import { AuthState, FarmerInfo } from './types';

function App() {
  const [auth, setAuth] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const handleLogin = async (email: string, password: string) => {
    // TODO: Implement actual authentication
    setAuth({
      isAuthenticated: true,
      user: {
        email,
        location: 'Sample Location',
        landSize: 5,
        soilType: 'Black',
        waterSource: 'Well'
      }
    });
  };

  const handleRegister = async (info: Omit<FarmerInfo, 'id'>) => {
    // TODO: Implement actual registration
    setAuth({
      isAuthenticated: true,
      user: info
    });
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      user: null
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-pattern">
        {auth.isAuthenticated ? (
          <div className="flex">
            <Sidebar onLogout={handleLogout} />
            <main className="flex-1 ml-64 p-8 page-container">
              <Routes>
                <Route path="/dashboard" element={<Dashboard user={auth.user} />} />
                <Route path="/crop-scan" element={<CropScan />} />
                <Route path="/crop-records" element={<CropRecords />} />
                <Route path="/market" element={<MarketRates />} />
                <Route path="/weather" element={<WeatherDashboard />} />
                <Route path="/profile" element={<Profile user={auth.user} />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        ) : (
          <div className="page-container">
            <Routes>
              <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;