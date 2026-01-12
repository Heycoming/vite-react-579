import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from '../data/destinations';

export default function MobileNav({ isOpen, onClose }) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setMobileDropdownOpen(false);
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  const toggleSubmenu = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  const togglePlaces = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="mobile-menu-header">
        <div className="logo" tabIndex="0">
          <img src="/Shirley_Travel_Journal/images/logo.png" alt="Logo" />
        </div>
        <div className="close-menu" tabIndex="0" onClick={onClose}>✕</div>
      </div>
      
      <nav className="mobile-nav">
        <Link to="/" tabIndex="0" onClick={onClose}>Home</Link>

        <div className={`mobile-dropdown ${mobileDropdownOpen ? 'active' : ''}`}>
          <a 
            href="#" 
            className="mobile-dropdown-toggle" 
            tabIndex="0" 
            onClick={togglePlaces}
            title="Destinations"
          >
            Places <span className="arrow">▼</span>
          </a>
          
          <div 
            className={`mobile-dropdown-menu ${mobileDropdownOpen ? 'active' : ''}`} 
            style={{ display: mobileDropdownOpen ? 'block' : 'none' }}
          >
            <Link to="/reminder#mobile-all" className="all-destinations" tabIndex="0" onClick={onClose}>All Destinations</Link>

            {destinations.map((dest) => (
              <div 
                className={`mobile-submenu ${activeSubmenu === dest.id ? 'active' : ''}`} 
                key={dest.id}
              >
                <a 
                  className="mobile-submenu-toggle" 
                  tabIndex="0" 
                  onClick={(e) => toggleSubmenu(e, dest.id)}
                >
                  {dest.region} <span className="arrow">▼</span>
                </a>
                
                {dest.items.length > 0 && (
                  <div 
                    className={`mobile-submenu-content ${activeSubmenu === dest.id ? 'active' : ''}`} 
                    style={{ display: activeSubmenu === dest.id ? 'block' : 'none' }}
                  >
                    {dest.items.map((city, index) => (
                      <Link 
                        key={index} 
                        to={city.mobilePath || city.path}
                        onClick={onClose}
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        <a 
          href="/Shirley_Travel_Journal/#gallery" 
          tabIndex="0" 
          onClick={onClose}
        >
          Photography
        </a>
        
        <Link to="/about" tabIndex="0" onClick={onClose}>About Me</Link>
        <Link to="/reminder#mobile-coffee" className="mobile-donate" tabIndex="0" onClick={onClose}>Tip A Coffee☕</Link>
      </nav>
    </div>
  );
}
