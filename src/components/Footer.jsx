export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div className="footer-content">
        <p>
          &copy; <span id="year">{currentYear}</span> Shirley's Travel Journal. All Rights Reserved.
        </p>
        
        {/* 如果你原版有社交媒体链接，可以在这里添加 */}
        <div className="social-links">
           {/* 例如: <a href="...">Instagram</a> */}
        </div>
      </div>
    </footer>
  );
}


const styles = {
  footer: {
    backgroundColor: 'rgba(26, 29, 32, 0.95)', 
    color: 'rgba(255, 255, 255, 0.6)',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: 'auto', 
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  }
};
