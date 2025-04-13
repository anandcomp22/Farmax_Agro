import React from 'react';
import { format } from 'date-fns';
import { Cloud, Droplets, Thermometer, Sun } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WeatherData } from '../types';



const mockWeatherData: WeatherData[] = Array.from({ length: 7 }, (_, i) => ({
  date: format(new Date().setDate(new Date().getDate() + i), 'MMM dd'),
  temp: 20 + Math.random() * 10,
  humidity: 50 + Math.random() * 30,
  rainfall: Math.random() * 20,
  description: ['Sunny', 'Partly Cloudy', 'Rainy'][Math.floor(Math.random() * 3)]
}));

export const WeatherForecast: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-700">
        <Cloud className="text-blue-500" />
        मौसम की जानकारी (Weather Info)
      </h2>
      
      <div className="mb-6 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockWeatherData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#ff7300" name="तापमान (°C)" />
            <Line type="monotone" dataKey="rainfall" stroke="#8884d8" name="वर्षा (mm)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
        {mockWeatherData.map((day) => (
          <div key={day.date} className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="font-semibold">{day.date}</p>
            <div className="flex flex-col items-center gap-2 mt-2">
              {day.description === 'Sunny' && <Sun className="text-yellow-500" size={24} />}
              {day.description === 'Partly Cloudy' && <Cloud className="text-gray-500" size={24} />}
              {day.description === 'Rainy' && <Droplets className="text-blue-500" size={24} />}
              <div className="flex items-center gap-1">
                <Thermometer className="w-4 h-4" />
                <span className="text-lg">{day.temp.toFixed(1)}°C</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};