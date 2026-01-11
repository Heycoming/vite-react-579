import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MobileNav({ isOpen, onClose }) {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setMobileDropdownOpen(false);
      setActiveSubmenu(null);
    }
  }, [isOpen]);

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
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

        <div className="mobile-dropdown">
          <a 
            href="#" 
            className="mobile-dropdown-toggle" 
            tabIndex="0" 
            onClick={(e) => { e.preventDefault(); setMobileDropdownOpen(!mobileDropdownOpen); }}
            title="Coming Soon!"
          >
            Places <span className="arrow">▼</span>
          </a>
          
          <div className={`mobile-dropdown-menu ${mobileDropdownOpen ? 'active' : ''}`} style={{ display: mobileDropdownOpen ? 'block' : 'none' }}>
            <Link to="/reminder#mobile-all" className="all-destinations" tabIndex="0" onClick={onClose}>All Destinations</Link>

            {/* 1. New York */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('NY')}>
                New York <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'NY' ? 'active' : ''}`} style={{ display: activeSubmenu === 'NY' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-nyc" onClick={onClose}>New York City</Link>
                <Link to="/reminder#mobile-ithaca" onClick={onClose}>Ithaca</Link>
                <Link to="/reminder#mobile-syracuse" onClick={onClose}>Syracuse</Link>
              </div>
            </div>

            {/* 2. Florida */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('FL')}>
                Florida <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'FL' ? 'active' : ''}`} style={{ display: activeSubmenu === 'FL' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-miami" onClick={onClose}>Miami</Link>
              </div>
            </div>

            {/* 3. Nevada */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('NV')}>
                Nevada <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'NV' ? 'active' : ''}`} style={{ display: activeSubmenu === 'NV' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-vegas" onClick={onClose}>Las Vegas</Link>
              </div>
            </div>

            {/* 4. Utah */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('UT')}>
                Utah <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'UT' ? 'active' : ''}`} style={{ display: activeSubmenu === 'UT' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-zion" onClick={onClose}>Zion</Link>
                <Link to="/reminder#mobile-bryce" onClick={onClose}>Bryce</Link>
                <Link to="/reminder#mobile-hanksville" onClick={onClose}>Hanksville</Link>
              </div>
            </div>

            {/* 5. Arizona */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('AZ')}>
                Arizona <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'AZ' ? 'active' : ''}`} style={{ display: activeSubmenu === 'AZ' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-monument" onClick={onClose}>Monument Valley</Link>
                <Link to="/reminder#mobile-antelope" onClick={onClose}>Antelope</Link>
                <Link to="/reminder#mobile-grandcanyon" onClick={onClose}>Grand Canyon</Link>
                <Link to="/reminder#mobile-sedona" onClick={onClose}>Sedona</Link>
              </div>
            </div>

            {/* 6. New Mexico */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('NM')}>
                New Mexico <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'NM' ? 'active' : ''}`} style={{ display: activeSubmenu === 'NM' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-shiprock" onClick={onClose}>Shiprock</Link>
              </div>
            </div>

            {/* 7. Pennsylvania */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('PA')}>
                Peninsula <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'PA' ? 'active' : ''}`} style={{ display: activeSubmenu === 'PA' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-philly" onClick={onClose}>Philadelphia</Link>
              </div>
            </div>

            {/* 8. Washington DC */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0">Washington DC <span className="arrow">▼</span></a>
            </div>

            {/* 9. Washington State */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('WA')}>
                Washington <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'WA' ? 'active' : ''}`} style={{ display: activeSubmenu === 'WA' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-seattle" onClick={onClose}>Seattle</Link>
                <Link to="/reminder#mobile-wheat" onClick={onClose}>Wheat Field</Link>
              </div>
            </div>

            {/* 10. Michigan */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('MI')}>
                Michigan <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'MI' ? 'active' : ''}`} style={{ display: activeSubmenu === 'MI' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-annarbor" onClick={onClose}>Ann Arbor</Link>
                <Link to="/NorthMichigan" onClick={onClose}>North Michigan</Link>
              </div>
            </div>

            {/* 11. Ohio */}
            <div className="mobile-submenu">
              <a className="mobile-submenu-toggle" tabIndex="0" onClick={() => toggleSubmenu('OH')}>
                Ohio <span className="arrow">▼</span>
              </a>
              <div className={`mobile-submenu-content ${activeSubmenu === 'OH' ? 'active' : ''}`} style={{ display: activeSubmenu === 'OH' ? 'block' : 'none' }}>
                <Link to="/reminder#mobile-columbus" onClick={onClose}>Columbus</Link>
              </div>
            </div>

          </div>
        </div>

        <a href="/#gallery" tabIndex="0" onClick={onClose}>Photography</a>
        <Link to="/about" tabIndex="0" onClick={onClose}>About Me</Link>
        <Link to="/reminder#mobile-coffee" className="mobile-donate" tabIndex="0" onClick={onClose}>Tip A Coffee☕</Link>
      </nav>
    </div>
  );
}
