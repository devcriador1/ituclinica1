
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Exams from './components/Exams';
import DriverExamsSection from './components/DriverExamsSection';
import OccupationalMedicine from './components/OccupationalMedicine';
import AestheticsSection from './components/AestheticsSection';
// Replaced OurTeam with TeamSection to display the article about the team.
import TeamSection from './components/TeamSection';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactForm from './components/ContactForm';
import PreSchedulingForm from './components/PreSchedulingForm'; // Using the improved form
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
        <DriverExamsSection />
        <AestheticsSection />
        <OccupationalMedicine />
        <TeamSection />
        <Testimonials />
        <FaqSection />
        <PreSchedulingForm />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
};

export default App;
