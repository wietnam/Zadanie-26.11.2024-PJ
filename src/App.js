import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Activity from './components/Activity';
import Medicine from './components/Medicine';
import Doctors from './components/Doctors';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Activity />
      <Medicine />
      <Doctors />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
