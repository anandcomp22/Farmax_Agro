import React, { useState } from 'react';
import { ClipboardList, Plus, Calendar, Ruler, FileText } from 'lucide-react';
import { CropRecord } from '../../types';
import { format } from 'date-fns';

export const CropRecords: React.FC = () => {
  const [records, setRecords] = useState<CropRecord[]>([
    {
      id: '1',
      name: 'Wheat',
      plantingDate: '2024-01-15',
      harvestDate: '2024-05-15',
      area: 2.5,
      status: 'growing',
      notes: 'Regular irrigation needed'
    },
    {
      id: '2',
      name: 'Rice',
      plantingDate: '2023-06-01',
      harvestDate: '2023-09-15',
      area: 3,
      status: 'harvested',
      notes: 'Good yield despite late monsoon'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <ClipboardList className="text-green-600" />
            Crop Records
          </h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Plus size={20} />
            Add Record
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Crop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Area
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{record.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} className="text-green-600" />
                      <span>
                        {format(new Date(record.plantingDate), 'MMM d, yyyy')} -
                        {format(new Date(record.harvestDate), 'MMM d, yyyy')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Ruler size={16} className="text-green-600" />
                      <span>{record.area} acres</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${record.status === 'growing' ? 'bg-green-100 text-green-800' : ''}
                      ${record.status === 'harvested' ? 'bg-blue-100 text-blue-800' : ''}
                      ${record.status === 'failed' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText size={16} className="text-green-600" />
                      <span>{record.notes}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};