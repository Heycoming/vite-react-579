import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 路由变化时关闭菜单，并恢复滚动
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
      
      {/* 桌面端导航 (包含汉堡按钮) */}
      <DesktopNav 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />

      {/* 移动端侧边栏 */}
      <MobileNav 
        isOpen={mobileMenuOpen} 
        onClose={toggleMobileMenu} 
      />
    </>
  );
}
