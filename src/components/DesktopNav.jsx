import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function DesktopNav({ mobileMenuOpen, toggleMobileMenu }) {
  const location = useLocation();

  // 辅助函数：判断当前路径是否激活
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return 'now';
    if (path !== '/' && location.pathname.startsWith(path)) return 'now';
    return '';
  };

  return (
    <header>
      {/* Desktop Left Navigation */}
      <nav className="nav-left" aria-label="Left navigation">
        <Link to="/reminder#coffee" className="donate-link" tabIndex="0" title="Coming Soon!" aria-label="Tip A Coffee (Coming Soon)">Tip A Coffee☕</Link>
        <Link to="/" tabIndex="0" className={isActive('/')}>Home</Link>
        
        <div className="nav-dropdown">
          <a className="dropdown-toggle" tabIndex="0">Places <span className="arrow">▼</span></a>
          <div className="dropdown-menu">
            <Link to="/reminder#all" className="all-destinations" tabIndex="0" title="Coming Soon!">All Destinations</Link>

            {/* 1. New York */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">New York <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#nyc" title="Coming Soon!">New York City</Link>
                <Link to="/reminder#ithaca" title="Coming Soon!">Ithaca</Link>
                <Link to="/reminder#syracuse" title="Coming Soon!">Syracuse</Link>
              </div>
            </div>

            {/* 2. Florida */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Florida <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#miami" title="Coming Soon!">Miami</Link>
              </div>
            </div>

            {/* 3. Nevada */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Nevada <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#vegas" title="Coming Soon!">Las Vegas</Link>
              </div>
            </div>

            {/* 4. Utah */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Utah <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#zion" title="Coming Soon!">Zion</Link>
                <Link to="/reminder#bryce" title="Coming Soon!">Bryce</Link>
                <Link to="/reminder#hanksville" title="Coming Soon!">Hanksville</Link>
              </div>
            </div>

            {/* 5. Arizona */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Arizona <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#monument" title="Coming Soon!">Monument Valley</Link>
                <Link to="/reminder#antelope" title="Coming Soon!">Antelope</Link>
                <Link to="/reminder#grandcanyon" title="Coming Soon!">Grand Canyon</Link>
                <Link to="/reminder#sedona" title="Coming Soon!">Sedona</Link>
              </div>
            </div>

            {/* 6. New Mexico */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">New Mexico <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#shiprock" title="Coming Soon!">Shiprock</Link>
              </div>
            </div>

            {/* 7. Pennsylvania */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Pennsylvania <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#philly" title="Coming Soon!">Philadelphia</Link>
              </div>
            </div>

            {/* 8. Washington DC (注意：原HTML中DC没有子菜单内容) */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Washington DC <span className="arrow-right"></span></a>
            </div>

            {/* 9. Washington State */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Washington <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#seattle" title="Coming Soon!">Seattle</Link>
                <Link to="/reminder#wheat" title="Coming Soon!">Wheat Field</Link>
              </div>
            </div>

            {/* 10. Michigan */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Michigan <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#annarbor" title="Coming Soon!">Ann Arbor</Link>
                <Link to="/NorthMichigan">North Michigan</Link>
              </div>
            </div>

            {/* 11. Ohio */}
            <div className="dropdown-submenu">
              <a className="submenu-toggle" tabIndex="0">Ohio <span className="arrow-right">›</span></a>
              <div className="submenu-content">
                <Link to="/reminder#columbus" title="Coming Soon!">Columbus</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Logo */}
      <Link to="/" className="logo" tabIndex="0">
        <img src="/Shirley_Travel_Journal/images/logo.png" alt="Logo" />
      </Link>

      {/* Desktop Right Navigation */}
      <nav className="nav-right" aria-label="Right navigation">
        <a href="/#gallery" tabIndex="0">Photography</a>
        <Link to="/about" tabIndex="0" className={isActive('/about')}>About Me</Link>
      </nav>

      {/* Burger Icon */}
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
