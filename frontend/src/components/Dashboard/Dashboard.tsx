import React from 'react';
import { FarmerInfo } from '../../types';
import { Sprout, Sun, CloudRain, TrendingUp } from 'lucide-react';

interface DashboardProps {
  user: FarmerInfo | null;
}

export const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.email?.split('@')[0]}
        </h1>
        <p className="text-gray-600 mt-2">
          Location: {user?.location} | Land Size: {user?.landSize} acres | Soil Type: {user?.soilType}
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Sprout className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-600">Current Crop</p>
              <p className="text-lg font-semibold">Wheat</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Sun className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-sm text-gray-600">Temperature</p>
              <p className="text-lg font-semibold">24°C</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <CloudRain className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-600">Rainfall</p>
              <p className="text-lg font-semibold">2.5 mm</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <TrendingUp className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-600">Crop Health</p>
              <p className="text-lg font-semibold">Good</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-sm text-gray-600">Today</p>
            <p className="text-gray-900">Crop scan completed</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-gray-600">Yesterday</p>
            <p className="text-gray-900">Weather alert: Light rain expected</p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4">
            <p className="text-sm text-gray-600">2 days ago</p>
            <p className="text-gray-900">Market prices updated</p>
          </div>
        </div>
      </div>
    </div>
  );
};