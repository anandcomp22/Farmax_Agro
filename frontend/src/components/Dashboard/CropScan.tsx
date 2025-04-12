import React, { useState } from 'react';
import { Camera, Upload, RefreshCw } from 'lucide-react';

export const CropScan: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simulate analysis - would be replaced with actual API call
    setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Crop Health Scanner</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload or Take a Photo</h2>
          <div className="flex gap-4">
            <label className="flex-1">
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors cursor-pointer">
                <div className="text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Upload image</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </label>
            
            <div className="flex-1">
              <button className="w-full h-full flex items-center justify-center border-2 border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
                <div className="text-center">
                  <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Take photo</p>
                  <p className="text-xs text-gray-500 mt-1">Use device camera</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className="space-y-6">
            <div className="relative border rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="Selected crop"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <button
              onClick={handleAnalyze}
              disabled={analyzing}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 flex items-center justify-center gap-2"
            >
              {analyzing ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Analyze Image'
              )}
            </button>
          </div>
        )}

        {!selectedImage && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-center text-gray-600">
              Upload or take a photo of your crop to analyze its health status
            </p>
          </div>
        )}
      </div>
    </div>
  );
};