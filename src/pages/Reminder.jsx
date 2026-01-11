import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Reminder() {
  const location = useLocation();
  
  // 默认状态：对应你 HTML 中的默认文本
  const [content, setContent] = useState({
    title: "Not Implemented",
    metaTop: "Coming Soon",
    metaBottom: "Under Construction",
    description: "This page is currently under construction."
  });

  useEffect(() => {
    const hash = location.hash;

    // 根据 Hash 改变显示的标题和描述
    switch(hash) {
      case '#coffee':
        setContent({
          title: "Tip A Coffee ☕",
          metaTop: "Support Me",
          metaBottom: "Coming Soon",
          description: "The donation feature is on its way! Thank you for your support."
        });
        break;
      case '#nyc':
        setContent({
          title: "New York City",
          metaTop: "Coming Soon",
          metaBottom: "The Big Apple",
          description: "The guide to NYC is currently being written. Stay tuned!"
        });
        break;
      case '#ithaca':
        setContent({
          title: "Ithaca",
          metaTop: "Coming Soon",
          metaBottom: "Gorges & Waterfalls",
          description: "Photos of the beautiful waterfalls are being developed."
        });
        break;
      // ... 你可以继续添加其他 case，比如 #miami, #vegas 等
      default:
        // 如果是其他未定义的 hash，或者没有 hash，保持默认
        setContent({
          title: "Not Implemented",
          metaTop: "Coming Soon",
          metaBottom: "Under Construction",
          description: "This page is currently under construction."
        });
    }
  }, [location]);

  return (
    <main id="maincon">
      {/* 复用 About 页面的 Hero 结构 */}
      <section id="about-hero">
        <div className="hero-content" tabIndex="0">
          <div className="meta">{content.metaTop}</div>
          <h1>{content.title}</h1>
          <div className="meta">{content.metaBottom}</div>
          
          <p className="tagline" style={{ marginTop: '20px' }}>
            {content.description}<br />
            Please visit my implemented pages:
          </p>
          
          {/* 底部导航链接 */}
          <p className="tagline" style={{ marginTop: '20px', fontSize: '18px' }}>
            <Link to="/" style={styles.link}>Home</Link> 
            &nbsp;•&nbsp; 
            <Link to="/north-michigan" style={styles.link}>North Michigan</Link> 
            &nbsp;•&nbsp; 
            <Link to="/about" style={styles.link}>About Me</Link>
          </p>
        </div>
        
        <div className="hero-image">
          {/* 确保图片路径正确 */}
          <img 
            src="/Shirley_Travel_Journal/images/cover.jpg" 
            alt="Page under construction" 
            style={{ filter: 'brightness(0.3)' }} 
          />
        </div>
      </section>
    </main>
  );
}

// 简单的样式对象，用于覆盖链接颜色，保持和 HTML 一致
// const styles = {
//   link: {
//     color: '#fff',
//     textDecoration: 'underline',
//     cursor: 'pointer'
//   }
// };
