// const slidesData = [
//   { id: 0, img: '/images/cover.jpg', title: 'Travel Journal', meta1: "Shirley's", meta2: "Always", status: "On the Road" },
//   { id: 1, img: '/images/zion_cover.jpg', title: 'The West', meta1: "Explore", meta2: "Vast", status: "City and Nature" },
//   { id: 2, img: '/images/seattle_cover.jpg', title: 'Seattle Views', meta1: "Discover", meta2: "Journey", status: "Pacific Northwest" },
//   { id: 3, img: '/images/nm_cover.jpg', title: 'North Michigan', meta1: "Explore", meta2: "Beach", status: "Great Lakes Escape" },
// ];

import { useState, useEffect } from 'react';

// 接收 slides 作为参数，默认为空数组防止报错
export default function HeroSlider({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 如果没有传入数据，不渲染任何内容
  if (!slides || slides.length === 0) {
    return null; 
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]); // 依赖项改为 slides.length

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
            {/* 保持原有的换行逻辑：将标题中的空格替换为换行符 */}
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
