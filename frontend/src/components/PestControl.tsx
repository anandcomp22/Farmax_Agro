import React from 'react';
import { Bug, AlertTriangle, Info } from 'lucide-react';
import { PestAlert } from '../types';

const mockPests: PestAlert[] = [
  {
    id: '1',
    type: 'माहू (Aphids)',
    severity: 'high',
    treatment: 'नीम का तेल या कीटनाशक साबुन का छिड़काव'
  },
  {
    id: '2',
    type: 'पत्ती धब्बा (Leaf Spot)',
    severity: 'medium',
    treatment: 'कॉपर आधारित फफूंदनाशक'
  }
];

export const PestControl: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-red-700">
        <Bug className="text-red-500" />
        कीट नियंत्रण (Pest Control)
      </h2>

      <div className="space-y-4">
        {mockPests.map((pest) => (
          <div key={pest.id} className="border-2 border-red-100 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className={`
                ${pest.severity === 'high' ? 'text-red-500' : ''}
                ${pest.severity === 'medium' ? 'text-yellow-500' : ''}
                ${pest.severity === 'low' ? 'text-green-500' : ''}
              `} />
              <h3 className="text-lg font-semibold">{pest.type}</h3>
              <span className={`
                px-3 py-1 rounded-full text-sm font-medium
                ${pest.severity === 'high' ? 'bg-red-100 text-red-800' : ''}
                ${pest.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' : ''}
                ${pest.severity === 'low' ? 'bg-green-100 text-green-800' : ''}
              `}>
                {pest.severity === 'high' ? 'उच्च जोखिम' : pest.severity === 'medium' ? 'मध्यम जोखिम' : 'कम जोखिम'}
              </span>
            </div>
            <div className="flex items-start gap-2 text-gray-700">
              <Info size={20} className="text-blue-500 mt-1" />
              <p>उपचार: {pest.treatment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};