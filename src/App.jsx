import React from 'react'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from "./components/Workflow";
import Pricing from './components/Pricing';
import Testimonials from './components/testimonials';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </>
  );
}; 

export default App;
