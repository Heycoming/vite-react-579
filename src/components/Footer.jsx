import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; <span id="year">{currentYear}</span> Shirley's Travel Journal. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/reminder#footer-coffee" title="Coming Soon!" aria-label="Tip A Coffee (Coming Soon)">Tip A Coffee</Link>
      </div>
    </footer>
  );
}