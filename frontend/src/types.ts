export interface WeatherData {
  date: string;
  temp: number;
  humidity: number;
  rainfall: number;
  description: string;
}

export interface CropRecommendation {
  name: string;
  waterRequirement: number;
  season: string;
  marketRate: number;
}

export interface PestAlert {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high';
  treatment: string;
}

export interface FarmerInfo {
  id?: string;
  email: string;
  password?: string;
  location: string;
  landSize: number;
  soilType: string;
  waterSource: string;
}

export interface CropRecord {
  id: string;
  name: string;
  plantingDate: string;
  harvestDate: string;
  area: number;
  status: 'growing' | 'harvested' | 'failed';
  notes: string;
}

export interface MarketPrice {
  id: string;
  cropName: string;
  price: number;
  market: string;
  date: string;
  trend: 'up' | 'down' | 'stable';
}

export type Language = 'en' | 'hi';

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export interface AuthState {
  isAuthenticated: boolean;
  user: FarmerInfo | null;
}