import HeroSlider from '../components/HeroSlider';
import GalleryCard from '../components/GalleryCard';
import { homeSlidesData, placesIcons, galleryCards } from '../data/destinations';

export default function Home() {
  return (
    <main id="maincon">
      
      <HeroSlider slides={homeSlidesData} />

      <div id="places">
        {placesIcons.map((icon) => (
          <a key={icon.id} href={`#${icon.id}`} tabIndex={0}>
            <div className="icon-title-container">
              <div className="clock">
                <img src={icon.img} alt={`${icon.id} Logo`} />
              </div>
              <div className="country">{icon.name}</div>
            </div>
          </a>
        ))}
      </div>

      <section id="gallery">
        <div className="gallery-container">
          <h1 tabIndex={0}>Explore the World</h1>
          <h2 className="subtitle" tabIndex={0}>Discover amazing destinations around the globe</h2>

          <div className="gallery-grid">
            {galleryCards.map((card, index) => (
              <GalleryCard key={index} data={card} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
