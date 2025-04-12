import React, { useState } from 'react';
import { MessageCircle, Send, Sprout } from 'lucide-react';
import { Language } from '../types';

interface ChatbotProps {
  language: Language;
}

export const Chatbot: React.FC<ChatbotProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center gap-2"
        >
          <MessageCircle />
          <span className="hidden md:inline">{language === 'en' ? 'Need Help?' : 'सहायता चाहिए?'}</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-96 h-[500px] flex flex-col">
          <div className="p-4 bg-green-500 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sprout />
              <h3 className="font-bold">Farmax Agro</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white text-xl">&times;</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-green-50 rounded-lg p-3 mb-4">
              {language === 'en' ? (
                "Hello! I'm your Farmax Agro assistant. How can I help you today?"
              ) : (
                "नमस्ते! मैं आपका फारमैक्स एग्रो सहायक हूं। मैं आपकी कैसे मदद कर सकता हूं?"
              )}
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={language === 'en' ? "Type your message..." : "अपना संदेश यहाँ लिखें..."}
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};