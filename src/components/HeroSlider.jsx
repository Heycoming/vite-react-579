import { useState, useEffect } from 'react';

export default function HeroSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!slides || slides.length === 0) {
    return null; 
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="slider">
      <div className="slider-inner">
        {slides.map((slide, index) => (
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
          {slides.map((slide, index) => (
            <li key={slide.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.img} alt={slide.title} />
            </li>
          ))}
        </ul>
        <a className="prev" onClick={prevSlide} style={{cursor: 'pointer'}}>prev</a>
        <a className="next" onClick={nextSlide} style={{cursor: 'pointer'}}>next</a>
      </div>
    </section>
  );
}
