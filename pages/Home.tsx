import React from 'react';
import { Hero } from '../components/Hero';
import { VenturesGrid } from '../components/VenturesGrid';
import { Process } from '../components/Process';
import { TechStack } from '../components/TechStack';

export const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <VenturesGrid />
      <Process />
      <TechStack />
    </div>
  );
};