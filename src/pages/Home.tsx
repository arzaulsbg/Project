import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, Wifi, Brain } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
          Learn Anything, Anywhere
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Your personal AI tutor that works online and offline to help you learn and understand any subject.
        </p>
        <div className="mt-8">
          <button
            onClick={() => navigate('/question')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Search className="mr-2 h-5 w-5" />
            Ask a Question
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">Comprehensive Learning</h3>
          <p className="mt-2 text-gray-600">Access a wide range of subjects and topics with detailed explanations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Wifi className="h-8 w-8 text-blue-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">Offline Access</h3>
          <p className="mt-2 text-gray-600">Continue learning even without an internet connection.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Brain className="h-8 w-8 text-blue-600" />
          <h3 className="mt-4 text-lg font-medium text-gray-900">AI-Powered</h3>
          <p className="mt-2 text-gray-600">Get intelligent responses tailored to your learning style.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;