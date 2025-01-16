import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "Learn Spot transformed my career. The quality of courses and instructors is unmatched. I went from a complete beginner to a professional developer in just 6 months.",
    author: "Sarah Mitchell",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    content: "The platform's flexibility allowed me to learn at my own pace while working full-time. The practical projects and hands-on approach made learning both enjoyable and effective.",
    author: "Michael Chang",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    content: "As an instructor, I'm impressed by the platform's reach and the engagement from students. It's rewarding to see my courses making a real impact on people's lives.",
    author: "Emily Rodriguez",
    role: "Course Creator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of satisfied learners who have transformed their lives through our platform
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-8">
              <div className="relative">
                <svg
                  className="absolute -top-4 -left-4 h-8 w-8 text-gray-200 transform -rotate-180"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg text-gray-600">{testimonial.content}</p>
              </div>
              <div className="mt-6 flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}