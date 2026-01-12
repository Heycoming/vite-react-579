import { useState, useEffect } from 'react';

export default function DaysGallery({ days }) {
  const [activeIndex, setActiveIndex] = useState(null);

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
    e.stopPropagation();
    setActiveIndex(null);
  };

  const handleCardKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleExpand(index);
    }
  };

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
        const isAnimOut = activeIndex !== null && !isActive;
        const isAnimIn = activeIndex === null;

        return (
          <div
            key={index}
            className={`day-slide ${isActive ? 'active' : ''} ${isAnimOut ? 'anim-out' : ''} ${isAnimIn ? 'anim-in' : ''}`}
            onClick={() => handleExpand(index)}
            onKeyDown={(e) => handleCardKeyDown(e, index)}
            tabIndex={0}
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
              <h2 className="day-title" data-title={day.dayLabel}>
                {day.dayLabel}
              </h2>

              <ul className="day-info">
                {day.content.map((item, i) => (
                  <li
                    key={i}
                    className={item.type}
                    tabIndex={isActive ? 0 : -1}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="btn-close"
              onClick={handleClose}
              onKeyDown={handleCloseKeyDown}
              tabIndex={isActive ? 0 : -1}
              title="Close"
              role="button"
            >
            </div>
          </div>
        );
      })}
    </div>
  );
}
