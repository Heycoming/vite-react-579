import HeroSlider from '../components/HeroSlider';

export default function Home() {
  return (
    <main id="maincon">
      <HeroSlider />
      
      <div id="places">
        {/* Copy your Places Grid HTML here, change class to className */}
        <a href="#NY">
          <div className="icon-title-container">
            {/* ... content ... */}
          </div>
        </a>
        {/* ... repeat for other icons ... */}
      </div>

      <section id="gallery">
        <div className="gallery-container">
          <h1>Photography</h1>
          <div className="gallery-grid">
             {/* Copy your Card HTML here */}
             <div className="card">
                <div className="card-image"><img src="/image/some_image.jpg" /></div>
                <div className="card-content">
                  <h3>Location Name</h3>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
