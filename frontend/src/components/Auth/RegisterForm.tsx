import React, { useState } from 'react';
import { Sprout, Mail, Lock, MapPin, Ruler, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FarmerInfo } from '../../types';

interface RegisterFormProps {
  onRegister: (info: Omit<FarmerInfo, 'id'>) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState<Omit<FarmerInfo, 'id'>>({
    email: '',
    password: '',
    location: '',
    landSize: 0,
    soilType: '',
    waterSource: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://www.thedailyscrumnews.com/wp-content/uploads/2024/08/capitalresincorporation-297795-hands-cupping-soil-image1.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-green-700/80">
            <div className="flex flex-col justify-center h-full px-12 text-white">
              <h1 className="text-6xl font-bold mb-6">Join Farmax Agro</h1>
              <p className="text-xl">Start your journey towards smarter and more efficient farming</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gradient-to-br from-white via-green-50 to-green-100">
        <div className="w-full max-w-2xl animate-fade-in">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Sprout size={48} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Create your account</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your village/district"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="landSize" className="block text-sm font-medium text-gray-700">
                  Land Size (acres)
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Ruler className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="landSize"
                    type="number"
                    required
                    value={formData.landSize || ''}
                    onChange={(e) => setFormData({ ...formData, landSize: Number(e.target.value) })}
                    className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter land size"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="soilType" className="block text-sm font-medium text-gray-700">
                  Soil Type
                </label>
                <select
                  id="soilType"
                  required
                  value={formData.soilType}
                  onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                <label htmlFor="waterSource" className="block text-sm font-medium text-gray-700">
                  Water Source
                </label>
                <select
                  id="waterSource"
                  required
                  value={formData.waterSource}
                  onChange={(e) => setFormData({ ...formData, waterSource: e.target.value })}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:scale-[1.02]"
            >
              Create Account
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-green-600 hover:text-green-500 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};