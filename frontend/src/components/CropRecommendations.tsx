import React from 'react';
import { Sprout, Droplets } from 'lucide-react';
import { CropRecommendation } from '../types';

const mockCrops: CropRecommendation[] = [
  { name: 'गेहूं (Wheat)', waterRequirement: 450, season: 'रबी (Winter)', marketRate: 1800 },
  { name: 'धान (Rice)', waterRequirement: 900, season: 'खरीफ (Monsoon)', marketRate: 2000 },
  { name: 'मक्का (Maize)', waterRequirement: 500, season: 'जायद (Summer)', marketRate: 1600 },
];

export const CropRecommendations: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
        <Sprout className="text-green-500" />
        फसल की सलाह (Crop Advice)
      </h2>

      <div className="grid gap-6">
        {mockCrops.map((crop) => (
          <div key={crop.name} className="border-2 border-green-100 rounded-lg p-4 hover:bg-green-50 transition-colors">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-green-800">{crop.name}</h3>
              <span className="text-green-600 font-bold text-lg">₹{crop.marketRate}/क्विंटल</span>
            </div>
            <div className="mt-3 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-2">
                <Droplets className="text-blue-500" />
                <span>{crop.waterRequirement}mm पानी की आवश्यकता</span>
              </div>
              <span className="text-gray-600">मौसम: {crop.season}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};