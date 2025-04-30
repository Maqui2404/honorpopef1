// src/app/page.js
import Hero from '../components/Hero';
import BiographySection from '../components/BiographySection';
import WorksSection from '../components/WorksSection';
import QuotesSection from '../components/QuotesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <BiographySection />
      <WorksSection />
      <QuotesSection />
    </>
  );
}