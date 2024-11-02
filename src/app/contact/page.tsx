import Contact from '@/components/Contact/Contact';
import LpFooter from '@/components/LandingPage/LpFooter';
import React from 'react';

export default function Page() {
  // Inline styles for the background
  // Inline styles for the background
const backgroundStyle: React.CSSProperties = {
  position: 'static', // Fix the position to the viewport
  top: 0, // Align to the top
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: 'url("./contactPage/strands.png")', // Update with your image path
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  zIndex: -1, // Set to the lowest z-index to stay in the background
};


  return (
    <>
      <div style={backgroundStyle}></div> {/* Background div */}
      <Contact />
      <LpFooter />
    </>
  );
}
