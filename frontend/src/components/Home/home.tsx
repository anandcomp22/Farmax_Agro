import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sprout, Sun, Camera, Database,
  ChevronRight, Leaf, CloudRain, Wind, Thermometer, BarChart3
} from 'lucide-react';

export const Home: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Sun className="text-yellow-500 animate-spin-slow" size={40} />,
      title: "Smart Weather Predictions",
      description: "AI-powered weather forecasting with 95% accuracy for better crop planning"
    },
    {
      icon: <Camera className="text-blue-500 animate-pulse" size={40} />,
      title: "Advanced Disease Detection",
      description: "Real-time crop disease identification using computer vision technology"
    },
    {
      icon: <Database className="text-green-500 animate-bounce-slow" size={40} />,
      title: "Digital Crop Management",
      description: "Comprehensive digital records for better farm management decisions"
    }
  ];

  const stats = [
    { icon: <Leaf />, value: "100+", label: "Farmers" },
    { icon: <CloudRain />, value: "95%", label: "Forecast Accuracy" },
    { icon: <BarChart3 />, value: "30%", label: "Yield Increase" }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="https://player.vimeo.com/external/384761655.sd.mp4?s=383040d91befe4137c1ed5d530047d7c8cac7319&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8 animate-slide-down">
              <Sprout className="text-green-400" size={40} />
              <h2 className="text-2xl font-bold text-white">Farmax Agro</h2>
            </div>
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight animate-slide-down">
              Transform Your Farm with
              <span className="text-green-400"> AI-Powered</span> Agriculture
            </h1>
            <p className="text-xl text-gray-200 mb-12 animate-slide-up opacity-0" 
               style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Harness the power of artificial intelligence and real-time data analytics to maximize your crop yields 
              and make smarter farming decisions.
            </p>
            <div className="flex gap-6 animate-fade-in opacity-0 mb-10" 
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <Link 
                    to="/register" 
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-medium 
                    transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                        Start Your Journey
                        <ChevronRight size={20} />
                </Link>

                <Link 
                    to="/login" 
                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full 
                    font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                        Sign In
                </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20
                           transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-green-400">{stat.icon}</div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-green-900 to-green-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-on-scroll">
              Intelligent Farming Solutions
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto animate-on-scroll">
              Experience the future of agriculture with our comprehensive suite of smart farming tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 cursor-pointer
                           transform transition-all duration-300 hover:scale-105
                           ${activeFeature === index ? 'border-2 border-green-400' : 'border border-white/20'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-green-100">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative h-[600px] rounded-2xl overflow-hidden animate-float">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Smart Farming"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: <Thermometer />, value: "24°C", label: "Temperature" },
                    { icon: <CloudRain />, value: "65%", label: "Humidity" },
                    { icon: <Wind />, value: "12km/h", label: "Wind" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-green-400 mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-green-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8 animate-on-scroll">
              Ready to Revolutionize Your Farming?
            </h2>
            <p className="text-xl mb-12 animate-on-scroll">
              Join thousands of farmers who are already using Farmax Agro to improve their yields
              and make data-driven decisions.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-green-800 px-8 py-4 rounded-full
                       font-medium hover:bg-gray-100 transition-all duration-300 transform
                       hover:scale-105 hover:shadow-xl animate-bounce-slow gap-2"
            >
              Get Started Now
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sprout size={32} className="text-green-400 animate-spin-slow" />
                <span className="text-2xl font-bold">Farmax Agro</span>
              </div>
              <p className="text-gray-400">
                Empowering farmers with smart technology for sustainable agriculture
              </p>
            </div>
            {[
              {
                title: "Solutions",
                items: ["Weather Predictions", "Disease Detection", "Crop Management", "Market Analysis"]
              },
              {
                title: "Company",
                items: ["About Us", "Blog", "Careers", "Contact"]
              },
              {
                title: "Support",
                items: ["Help Center", "Documentation", "API Status", "Community"]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Farmax Agro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};