import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import Statistics from './components/Statistics';
import InstructorCTA from './components/InstructorCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Statistics />
        <FeaturedCourses />
        <InstructorCTA />
        <Testimonials />
        <PricingPlans />
      </main>
      <Footer />
    </div>
  );
}

export default App;