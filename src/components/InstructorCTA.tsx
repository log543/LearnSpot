import React from 'react';
import { Trophy, Users, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Reach Millions',
    description: 'Share your knowledge with our global community of eager learners.'
  },
  {
    icon: DollarSign,
    title: 'Earn Revenue',
    description: 'Generate income through our revenue sharing program and course sales.'
  },
  {
    icon: Trophy,
    title: 'Build Your Brand',
    description: 'Establish yourself as an expert in your field and grow your professional network.'
  }
];

export default function InstructorCTA() {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Become an Instructor
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Join our community of expert instructors and share your knowledge with learners worldwide.
              Turn your expertise into impact and income.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50">
                Start Teaching Today
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <dl className="space-y-10">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-white">
                        {benefit.title}
                      </dt>
                      <dd className="mt-2 text-base text-gray-300">
                        {benefit.description}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}