import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sprout,
  Camera,
  ClipboardList,
  TrendingUp,
  Cloud,
  LogOut,
  User
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/dashboard', icon: <Sprout size={24} />, label: 'Dashboard' },
    { path: '/crop-scan', icon: <Camera size={24} />, label: 'Crop Scan' },
    { path: '/crop-records', icon: <ClipboardList size={24} />, label: 'Crop Records' },
    { path: '/market', icon: <TrendingUp size={24} />, label: 'Market Rates' },
    { path: '/weather', icon: <Cloud size={24} />, label: 'Weather' },
    { path: '/profile', icon: <User size={24} />, label: 'Profile' },
  ];

  return (
    <div className="h-screen w-64 glass-effect fixed left-0 top-0 z-50">
      <div className="flex items-center gap-2 p-6 border-b border-gray-200">
        <Sprout className="text-green-600" size={32} />
        <span className="text-xl font-bold text-gray-800">Farmax Agro</span>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={item.path} className="sidebar-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover-scale ${
                  isActive(item.path)
                    ? 'bg-green-50 text-green-600 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 hover-scale"
        >
          <LogOut size={24} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};