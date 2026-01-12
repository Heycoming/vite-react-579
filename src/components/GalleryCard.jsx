import { Link } from 'react-router-dom';

export default function GalleryCard({ data }) {
  return (
    <div className="card" id={data.id || undefined} tabIndex={0}>
      <div className="card-image">
        <img src={data.img} alt={`${data.title} Cover`} />
      </div>
      <div className="card-content">
        <div className="location-tag">{data.tag}</div>
        <h3>{data.title}</h3>
        <p className="description">{data.desc}</p>
        
        <Link 
          to={data.link} 
          className="read-more" 
          tabIndex={0} 
          title={data.isComingSoon ? "Coming Soon!" : ""}
          aria-label={data.isComingSoon ? `Explore ${data.title} (Coming Soon)` : `Explore ${data.title}`}
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}
