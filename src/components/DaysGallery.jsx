import { useState, useEffect } from 'react';

export default function DaysGallery({ days }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // 全局监听 ESC 键
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExpand = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation(); // 阻止冒泡，防止触发 handleExpand
    setActiveIndex(null);
  };

  // 键盘支持：在卡片上按 Enter 或 Space 展开
  const handleCardKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleExpand(index);
    }
  };

  // 键盘支持：在关闭按钮上按 Enter 或 Space 关闭
  const handleCloseKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setActiveIndex(null);
    }
  };

  return (
    <div id="days-container">
      {days.map((day, index) => {
        const isActive = activeIndex === index;
        // 如果有任意一个被激活，且当前不是激活状态 -> anim-out
        // 如果没有任何一个被激活 -> anim-in (恢复默认显示)
        const isAnimOut = activeIndex !== null && !isActive;
        const isAnimIn = activeIndex === null; 

        return (
          <div 
            key={index}
            className={`day-slide ${isActive ? 'active' : ''} ${isAnimOut ? 'anim-out' : ''} ${isAnimIn ? 'anim-in' : ''}`}
            onClick={() => handleExpand(index)}
            onKeyDown={(e) => handleCardKeyDown(e, index)}
            tabIndex={0} // 让 div 可聚焦
            role="button"
            aria-expanded={isActive}
            style={{ cursor: isActive ? 'default' : 'pointer' }}
          >
            <div 
              className="day-image" 
              style={{ backgroundImage: `url(${day.image})` }}
            ></div>
            
            <div className="day-overlay"></div>
            
            <div className="day-content">
              {/* 注意：这里用 h2 配合 CSS */}
              <h2 className="day-title" data-title={day.dayLabel}>
                {day.dayLabel}
              </h2>
              
              {/* 内容区域 */}
              <ul className="day-info">
                {/* 渲染 content 数组，这样可以支持多段文字 */}
                {day.content.map((item, i) => (
                  <li 
                    key={i} 
                    className={item.type} // 'location' or 'highlight'
                    tabIndex={isActive ? 0 : -1} // 只有激活时才可聚焦内容
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ 关键修复：btn-close 必须在 day-content 外面，但在 day-slide 里面 */}
            <div 
              className="btn-close" 
              onClick={handleClose}
              onKeyDown={handleCloseKeyDown}
              tabIndex={isActive ? 0 : -1}
              title="Close"
              role="button"
            >
              {/* 如果 CSS 用的是伪元素显示叉号，这里可以是空的；或者手动加个 ✕ */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
