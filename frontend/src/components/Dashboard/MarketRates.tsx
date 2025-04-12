import React from 'react';
import { TrendingUp, TrendingDown, Minus, Search } from 'lucide-react';
import { MarketPrice } from '../../types';

const mockPrices: MarketPrice[] = [
  {
    id: '1',
    cropName: 'Wheat',
    price: 2200,
    market: 'Central Market',
    date: '2024-03-15',
    trend: 'up'
  },
  {
    id: '2',
    cropName: 'Rice',
    price: 3100,
    market: 'Regional Hub',
    date: '2024-03-15',
    trend: 'down'
  },
  {
    id: '3',
    cropName: 'Maize',
    price: 1800,
    market: 'Local Market',
    date: '2024-03-15',
    trend: 'stable'
  }
];

export const MarketRates: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <TrendingUp className="text-green-600" />
          Market Rates
        </h1>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search crops..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Crop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Market
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price (₹/quintal)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockPrices.map((price) => (
                <tr key={price.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{price.cropName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{price.market}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">₹{price.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {price.trend === 'up' && <TrendingUp className="text-green-600" size={20} />}
                      {price.trend === 'down' && <TrendingDown className="text-red-600" size={20} />}
                      {price.trend === 'stable' && <Minus className="text-gray-600" size={20} />}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{new Date(price.date).toLocaleDateString()}</div>
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