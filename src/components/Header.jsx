import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  return (
    <>
      <a href="#maincon" className="skip" tabIndex="0">Skip to Main Content</a>
      
      <DesktopNav 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />

      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={toggleMobileMenu} 
      />
    </>
  );
}
