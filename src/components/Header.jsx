import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  // Track active submenus by ID or name
  const [activeSubmenu, setActiveSubmenu] = useState(null); 
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobileMenu = () => {
    const newState = !mobileMenuOpen;
    setMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <>
      <a href="#maincon" className="skip" tabIndex="0">Skip to Main Content</a>
      <header>
        {/* Desktop Left Nav */}
        <nav className="nav-left" aria-label="Left navigation" style={{ display: 'flex' }}>
          <Link to="/reminder#coffee" className="donate-link">Tip A Coffee☕</Link>
          <Link to="/">Home</Link>
          
          <div className="nav-dropdown">
            <a className="dropdown-toggle" tabIndex="0">Places <span className="arrow">▼</span></a>
            <div className="dropdown-menu">
              <Link to="/reminder#all" className="all-destinations">All Destinations</Link>
              
              {/* Example Submenu - Repeat for others */}
              <div className="dropdown-submenu">
                <a className="submenu-toggle">New York <span className="arrow-right">›</span></a>
                <div className="submenu-content">
                  <Link to="/reminder#nyc">New York City</Link>
                  <Link to="/reminder#ithaca">Ithaca</Link>
                </div>
              </div>
              
              <div className="dropdown-submenu">
                <a className="submenu-toggle">Michigan <span className="arrow-right">›</span></a>
                <div className="submenu-content">
                  <Link to="/reminder#annarbor">Ann Arbor</Link>
                  <Link to="/north-michigan">North Michigan</Link>
                </div>
              </div>
              {/* ... Add other desktop submenus here ... */}
            </div>
          </div>
        </nav>

        <Link to="/" className="logo">
          <img src="/Shirley_Travel_Journal/images/logo.png" alt="Logo" />
        </Link>

        <nav className="nav-right">
          <a href="/#gallery">Photography</a>
          <Link to="/about">About Me</Link>
        </nav>

        {/* Burger Icon */}
        <div 
          className={`burger ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          tabIndex="0"
        >
          <span></span><span></span><span></span>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo"><img src="/Shirley_Travel_Journal/images/logo.png" alt="Logo" /></div>
          <div className="close-menu" onClick={toggleMobileMenu}>✕</div>
        </div>
        
        <nav className="mobile-nav">
          <Link to="/">Home</Link>
          
          <div className={`mobile-dropdown ${mobileDropdownOpen ? 'active' : ''}`}>
            <a 
              className="mobile-dropdown-toggle" 
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Places <span className="arrow">▼</span>
            </a>
            
            <div className="mobile-dropdown-menu">
              <Link to="/reminder#all" className="all-destinations">All Destinations</Link>
              
              {/* Mobile Submenu: New York */}
              <div className={`mobile-submenu ${activeSubmenu === 'NY' ? 'active' : ''}`}>
                <a className="mobile-submenu-toggle" onClick={() => toggleSubmenu('NY')}>
                  New York <span className="arrow">▼</span>
                </a>
                <div className="mobile-submenu-content">
                  <Link to="/reminder#nyc">NYC</Link>
                </div>
              </div>

               {/* Mobile Submenu: Michigan */}
               <div className={`mobile-submenu ${activeSubmenu === 'MI' ? 'active' : ''}`}>
                <a className="mobile-submenu-toggle" onClick={() => toggleSubmenu('MI')}>
                  Michigan <span className="arrow">▼</span>
                </a>
                <div className="mobile-submenu-content">
                  <Link to="/north-michigan">North Michigan</Link>
                </div>
              </div>

            </div>
          </div>
          
          <Link to="/about">About Me</Link>
        </nav>
      </div>
    </>
  );
}
