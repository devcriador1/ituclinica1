
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Exams from './components/Exams';
import OccupationalMedicine from './components/OccupationalMedicine';
// FIX: Replaced TeamSection with OurTeam to display the list of doctors.
import OurTeam from './components/OurTeam';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AiChat from './components/AiChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Specialties />
        <Exams />
        <OccupationalMedicine />
        <OurTeam />
        <BlogSection />
        <Testimonials />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
};

export default App;
