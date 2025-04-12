import React from 'react';
import { Cloud, Droplets, Wind, Sun, Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockWeatherData = [
  { time: '6 AM', temperature: 22, humidity: 85, rainfall: 0 },
  { time: '9 AM', temperature: 24, humidity: 80, rainfall: 0 },
  { time: '12 PM', temperature: 28, humidity: 75, rainfall: 0 },
  { time: '3 PM', temperature: 30, humidity: 70, rainfall: 2 },
  { time: '6 PM', temperature: 27, humidity: 75, rainfall: 1 },
  { time: '9 PM', temperature: 25, humidity: 80, rainfall: 0 },
];

export const WeatherDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Cloud className="text-green-600" />
          Weather Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Temperature</p>
                <p className="text-2xl font-bold text-blue-800">28°C</p>
              </div>
              <Thermometer className="text-blue-600" size={24} />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Humidity</p>
                <p className="text-2xl font-bold text-green-800">75%</p>
              </div>
              <Droplets className="text-green-600" size={24} />
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600">Wind Speed</p>
                <p className="text-2xl font-bold text-yellow-800">12 km/h</p>
              </div>
              <Wind className="text-yellow-600" size={24} />
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">UV Index</p>
                <p className="text-2xl font-bold text-orange-800">6</p>
              </div>
              <Sun className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">Today's Forecast</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockWeatherData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="temperature"
                  stroke="#ff7300"
                  name="Temperature (°C)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="humidity"
                  stroke="#82ca9d"
                  name="Humidity (%)"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="rainfall"
                  stroke="#8884d8"
                  name="Rainfall (mm)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Weather Advisory</h2>
          <p className="text-gray-700">
            Light rainfall expected in the evening. Good conditions for crop growth.
            Consider light irrigation in the morning.
          </p>
        </div>
      </div>
    </div>
  );
};