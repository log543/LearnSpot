import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <Lightbulb className="h-8 w-8 text-gray-800" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Learn Spot</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Browse Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Teach</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">My Learning</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Sign in</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}