import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { question, answer } = location.state || { question: '', answer: null };

  if (!answer) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">No answer available</h2>
          <button
            onClick={() => navigate('/question')}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Ask another question
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Question
      </button>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-medium text-gray-900">Your Question:</h3>
        <p className="mt-2 text-gray-600">{question}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Answer</h2>
        <p className="text-gray-700 mb-6 whitespace-pre-line">{answer.explanation}</p>

        {answer.resources && answer.resources.length > 0 && (
          <div className="border-t pt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              <BookOpen className="inline-block mr-2 h-5 w-5" />
              Additional Resources
            </h3>
            <ul className="space-y-2">
              {answer.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;