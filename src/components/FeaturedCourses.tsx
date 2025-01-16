import React, { useState } from 'react';

const categories = [
  { id: 'all', name: 'All Courses' },
  { id: 'tech', name: 'Technology' },
  { id: 'business', name: 'Business' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'personal', name: 'Personal Development' }
];

const courses = {
  tech: [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 15430,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      rating: 4.9,
      students: 12250,
      price: 94.99,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Python for Machine Learning",
      instructor: "Alex Turner",
      rating: 4.8,
      students: 9840,
      price: 99.99,
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Mobile App Development with React Native",
      instructor: "Jessica Lee",
      rating: 4.7,
      students: 7250,
      price: 84.99,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ],
  business: [
    {
      id: 5,
      title: "Financial Management Essentials",
      instructor: "Robert Williams",
      rating: 4.9,
      students: 11320,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Start Your Own Business",
      instructor: "Emma Davis",
      rating: 4.8,
      students: 8940,
      price: 89.99,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 7,
      title: "Project Management Professional",
      instructor: "David Clark",
      rating: 4.9,
      students: 13450,
      price: 94.99,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 8,
      title: "Business Analytics & Intelligence",
      instructor: "Sophie Anderson",
      rating: 4.7,
      students: 6780,
      price: 84.99,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ],
  design: [
    {
      id: 9,
      title: "UI/UX Design Essentials",
      instructor: "David Wilson",
      rating: 4.9,
      students: 10840,
      price: 84.99,
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 10,
      title: "Graphic Design Masterclass",
      instructor: "Lisa Brown",
      rating: 4.8,
      students: 9230,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 11,
      title: "3D Modeling and Animation",
      instructor: "Mark Thompson",
      rating: 4.9,
      students: 5670,
      price: 99.99,
      image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 12,
      title: "Digital Illustration for Beginners",
      instructor: "Anna Martinez",
      rating: 4.7,
      students: 4890,
      price: 69.99,
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ],
  marketing: [
    {
      id: 13,
      title: "Digital Marketing Masterclass",
      instructor: "Emily Parker",
      rating: 4.7,
      students: 8920,
      price: 79.99,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 14,
      title: "Social Media Marketing Strategy",
      instructor: "Chris Morgan",
      rating: 4.8,
      students: 7340,
      price: 74.99,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 15,
      title: "Content Marketing & SEO",
      instructor: "Rachel Green",
      rating: 4.9,
      students: 6230,
      price: 84.99,
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 16,
      title: "Email Marketing Automation",
      instructor: "Tom Wilson",
      rating: 4.8,
      students: 5120,
      price: 69.99,
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ],
  personal: [
    {
      id: 17,
      title: "Mindfulness and Meditation",
      instructor: "Sarah Miller",
      rating: 4.9,
      students: 12340,
      price: 59.99,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 18,
      title: "Public Speaking Mastery",
      instructor: "James Wilson",
      rating: 4.8,
      students: 8920,
      price: 74.99,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 19,
      title: "Time Management Essentials",
      instructor: "Linda Chen",
      rating: 4.7,
      students: 6780,
      price: 64.99,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 20,
      title: "Creative Writing Workshop",
      instructor: "Michael Scott",
      rating: 4.8,
      students: 5430,
      price: 69.99,
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ]
};

export default function FeaturedCourses() {
  const [activeCategory, setActiveCategory] = useState('tech');

  const getDisplayCourses = () => {
    return courses[activeCategory as keyof typeof courses] || courses.tech;
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Courses</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hand-picked courses by our experts to help you get started
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex justify-center space-x-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Course Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {getDisplayCourses().map((course) => (
            <div key={course.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{course.instructor}</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-lg font-bold text-gray-900">${course.price}</span>
                  <button className="mt-3 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}