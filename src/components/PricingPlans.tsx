import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Access to free courses',
      'Basic course materials',
      'Community forum access',
      'Email support',
      'Course completion certificates'
    ],
    cta: 'Start Learning',
    popular: false
  },
  {
    name: 'Pro',
    price: '$15/month',
    features: [
      'All Basic features',
      'Unlimited access to all courses',
      'Downloadable resources',
      'Priority support',
      'Ad-free experience',
      'Offline viewing'
    ],
    cta: 'Go Pro',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'All Pro features',
      'Custom learning paths',
      'Team management',
      'API access',
      'Analytics dashboard',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that best fits your learning goals
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-green-600 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 border border-gray-200'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-green-500 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-4xl font-bold tracking-tight">{plan.price}</p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  className={`w-full rounded-lg px-4 py-2 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-white text-green-600 hover:bg-gray-50'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}