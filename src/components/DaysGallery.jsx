import { useState } from 'react';

// 接收两个 props: 
// 1. title: 页面大标题 (例如 "North Michigan")
// 2. days: 一个包含所有天数信息的数组
export default function DaysGallery({ title, days }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleExpand = (index) => {
    // 如果点击的是当前已经展开的，则不做操作或者关闭（根据你的交互需求）
    // 这里设置为：点击新的展开，点击旧的不变（或者你可以设置为 toggle）
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation(); // 防止冒泡触发 handleExpand
    setActiveIndex(null); // 关闭所有展开项，回到初始状态
  };

  return (
    <section id="days-gallery">
      <div className="section-title">{title}</div>
      
      <div id="days-container">
        {days.map((day, index) => {
          const isActive = activeIndex === index;
          // 如果有任意一个被激活，且当前这个不是被激活的，添加 anim-out 样式让其变暗/缩小
          const isOtherActive = activeIndex !== null && !isActive;
          
          return (
            <div 
              key={index}
              className={`day-slide ${isActive ? 'active' : ''} ${isOtherActive ? 'anim-out' : ''}`}
              onClick={() => handleExpand(index)}
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
                
                {/* 只有在 active 状态下才显示详细内容，或者配合 CSS 的 opacity 动画 */}
                <ul className={`day-info ${isActive ? 'show' : ''}`}>
                  <li><span className="location">Location:</span> {day.location}</li>
                  <li><span className="location">Stay:</span> {day.stay}</li>
                  <li className="desc">{day.description}</li>
                </ul>

                {/* 关闭按钮 */}
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
    </section>
  );
}
