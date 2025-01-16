import React from 'react';
import { Users, BookOpen, Award, Globe2 } from 'lucide-react';

const stats = [
  { id: 1, name: 'Active Students', value: '50K+', icon: Users },
  { id: 2, name: 'Total Courses', value: '1,200+', icon: BookOpen },
  { id: 3, name: 'Expert Instructors', value: '300+', icon: Award },
  { id: 4, name: 'Countries', value: '150+', icon: Globe2 },
];

export default function Statistics() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="mt-3">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}