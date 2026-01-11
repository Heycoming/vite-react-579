import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Reminder() {
  const location = useLocation();
  const [message, setMessage] = useState({ title: "Coming Soon", text: "This destination is being documented." });

  useEffect(() => {
    // 获取 URL 中的 hash (例如 #coffee)
    const hash = location.hash;

    switch(hash) {
      case '#coffee':
        setMessage({ 
          title: "Buy Me a Coffee ☕", 
          text: "The donation feature is on its way! Thank you for your support." 
        });
        break;
      case '#nyc':
        setMessage({ 
          title: "New York City 🍎", 
          text: "The Big Apple guide is currently being written." 
        });
        break;
      case '#ithaca':
        setMessage({ 
          title: "Ithaca is Gorges 🌊", 
          text: "Photos of waterfalls are being developed." 
        });
        break;
      default:
        setMessage({ 
          title: "Coming Soon 🚧", 
          text: "This section is under construction. Please check back later!" 
        });
    }
  }, [location]);

  return (
    <main id="maincon" style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>{message.title}</h1>
        <p style={styles.text}>{message.text}</p>
        
        <div style={styles.buttonGroup}>
          <Link to="/" className="donate-link" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

// 简单的内联样式，保证这个页面即使没有 CSS 也能居中显示
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh', // 占据大部分屏幕高度
    textAlign: 'center',
    padding: '20px'
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    padding: '40px',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '500px',
    width: '100%'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#ffd700' // 金色
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.8)'
  }
};
