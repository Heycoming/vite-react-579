import { useState } from 'react';

// 去掉了 title prop，因为标题在父组件里写了
export default function DaysGallery({ days }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleExpand = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation(); 
    setActiveIndex(null);
  };

  // ❌ 删除外层的 <section id="days-gallery">
  // ✅ 直接返回 id="days-container"
  return (
    <div id="days-container">
      {days.map((day, index) => {
        const isActive = activeIndex === index;
        const isOtherActive = activeIndex !== null && !isActive;
        
        return (
          <div 
            key={index}
            className={`day-slide ${isActive ? 'active' : ''} ${isOtherActive ? 'anim-out' : ''}`}
            onClick={() => handleExpand(index)}
            // 加上这个 style 确保未激活时鼠标是手型
            style={{ cursor: isActive ? 'default' : 'pointer' }}
          >
            <div 
              className="day-image" 
              style={{ backgroundImage: `url(${day.image})` }}
            ></div>
            
            <div className="day-overlay"></div>
            
            <div className="day-content">
              <div className="day-title" data-title={day.dayLabel}>
                {day.dayLabel}
              </div>
              
              <ul className={`day-info ${isActive ? 'show' : ''}`}>
                <li><span className="location">Location:</span> {day.location}</li>
                <li><span className="location">Stay:</span> {day.stay}</li>
                <li className="desc">{day.description}</li>
              </ul>

              <div 
                className="btn-close" 
                onClick={handleClose}
                title="Close"
              >
                ✕
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
