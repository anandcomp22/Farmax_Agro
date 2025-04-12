import React, { useState } from 'react';
import { MapPin, Ruler, Droplets, Sprout } from 'lucide-react';
import { FarmerInfo } from '../types';

interface Props {
  onSubmit: (info: FarmerInfo) => void;
}

export const FarmerInfoForm: React.FC<Props> = ({ onSubmit }) => {
  const [info, setInfo] = useState<FarmerInfo>({
    location: '',
    landSize: 0,
    soilType: '',
    waterSource: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(info);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-green-700">Tell us about your farm</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
              <MapPin className="text-green-600" size={20} />
              Location
            </label>
            <input
              type="text"
              value={info.location}
              onChange={(e) => setInfo({ ...info, location: e.target.value })}
              placeholder="Enter your village/district"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
              <Ruler className="text-green-600" size={20} />
              Land Size (acres)
            </label>
            <input
              type="number"
              value={info.landSize || ''}
              onChange={(e) => setInfo({ ...info, landSize: Number(e.target.value) })}
              placeholder="Enter land size in acres"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
              <Sprout className="text-green-600" size={20} />
              Soil Type
            </label>
            <select
              value={info.soilType}
              onChange={(e) => setInfo({ ...info, soilType: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select soil type</option>
              <option value="Black">Black Soil</option>
              <option value="Red">Red Soil</option>
              <option value="Sandy">Sandy Soil</option>
              <option value="Loamy">Loamy Soil</option>
              <option value="Clay">Clay Soil</option>
            </select>
          </div>
          <div>
            <label className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
              <Droplets className="text-green-600" size={20} />
              Water Source
            </label>
            <select
              value={info.waterSource}
              onChange={(e) => setInfo({ ...info, waterSource: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select water source</option>
              <option value="Well">Well</option>
              <option value="Canal">Canal</option>
              <option value="Rain">Rainwater</option>
              <option value="River">River</option>
              <option value="Borewell">Borewell</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mt-4"
        >
          Get Personalized Recommendations
        </button>
      </form>
    </div>
  );
};