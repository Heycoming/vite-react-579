import { useState, useEffect } from 'react';

const slidesData = [
  { id: 0, img: '/image/cover.jpg', title: 'Travel Journal', meta1: "Shirley's", meta2: "Always", status: "On the Road" },
  { id: 1, img: '/image/zion_cover.jpg', title: 'The West', meta1: "Explore", meta2: "Vast", status: "City and Nature" },
  { id: 2, img: '/image/seattle_cover.jpg', title: 'Seattle Views', meta1: "Discover", meta2: "Journey", status: "Pacific Northwest" },
  { id: 3, img: '/image/nm_cover.jpg', title: 'North Michigan', meta1: "Explore", meta2: "Beach", status: "Great Lakes Escape" },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);

  return (
    <section id="slider">
      <div className="slider-inner">
        {slidesData.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slider-content ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="meta">{slide.meta1}</div>
            <h2 dangerouslySetInnerHTML={{ __html: slide.title.replace(' ', '<br>') }}></h2>
            <div className="meta">{slide.meta2}</div>
            <div className="slide-status">{slide.status}</div>
          </div>
        ))}
      </div>

      <div className="image-slider">
        <ul>
          {slidesData.map((slide, index) => (
            <li key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.img} alt={slide.title} />
            </li>
          ))}
        </ul>
        <a className="prev" onClick={prevSlide}>prev</a>
        <a className="next" onClick={nextSlide}>next</a>
      </div>
    </section>
  );
}
