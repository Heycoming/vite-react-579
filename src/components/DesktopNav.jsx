import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { destinations } from '../data/destinations';

export default function DesktopNav({ mobileMenuOpen, toggleMobileMenu }) {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return 'now';
    if (path !== '/' && location.pathname.startsWith(path)) return 'now';
    return '';
  };

  return (
    <header>
      <nav className="nav-left" aria-label="Left navigation">
        <Link to="/reminder#coffee" className="donate-link" tabIndex="0" title="Coming Soon!" aria-label="Tip A Coffee (Coming Soon)">Tip A Coffee☕</Link>
        <Link to="/" tabIndex="0" className={isActive('/')}>Home</Link>
        
        <div className="nav-dropdown">
          <a className="dropdown-toggle" tabIndex="0">Places <span className="arrow">▼</span></a>
          <div className="dropdown-menu">
            <Link to="/reminder#all" className="all-destinations" tabIndex="0" title="Coming Soon!">All Destinations</Link>

            {destinations.map((dest, index) => (
              <div className="dropdown-submenu" key={index}>
                <a className="submenu-toggle" tabIndex="0">
                  {dest.region} 
                  <span className="arrow-right">{dest.items.length > 0 ? '›' : ''}</span>
                </a>
                
                {dest.items.length > 0 && (
                  <div className="submenu-content">
                    {dest.items.map((city, cityIndex) => (
                      <Link 
                        key={cityIndex} 
                        to={city.path} 
                        title={city.path.includes('reminder') ? "Coming Soon!" : ""}
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
      </nav>

      <Link to="/" className="logo" tabIndex="0">
        <img src="/Shirley_Travel_Journal/images/logo.png" alt="Logo" />
      </Link>

      <nav className="nav-right" aria-label="Right navigation">
        <a href="/Shirley_Travel_Journal/#gallery" tabIndex="0">Photography</a>
        <Link to="/about" tabIndex="0" className={isActive('/about')}>About Me</Link>
      </nav>

      <div 
        className={`burger ${mobileMenuOpen ? 'active' : ''}`} 
        tabIndex="0" 
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
