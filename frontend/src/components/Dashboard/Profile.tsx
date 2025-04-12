import React from 'react';
import { User, Mail, MapPin, Ruler, Droplets, Sprout } from 'lucide-react';
import { FarmerInfo } from '../../types';

interface ProfileProps {
  user: FarmerInfo | null;
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
  if (!user) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <User className="text-green-600" />
          Farmer Profile
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{user.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Ruler className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Land Size</p>
                <p className="font-medium">{user.landSize} acres</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Sprout className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Soil Type</p>
                <p className="font-medium">{user.soilType}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Droplets className="text-green-600" />
              <div>
                <p className="text-sm text-gray-500">Water Source</p>
                <p className="font-medium">{user.waterSource}</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Account Summary</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Member Since</p>
                <p className="font-medium">March 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Crops Managed</p>
                <p className="font-medium">5 crops</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Activity</p>
                <p className="font-medium">Today at 2:30 PM</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};