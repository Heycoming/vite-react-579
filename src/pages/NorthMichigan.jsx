import React, { useEffect } from 'react';
import DaysGallery from '../components/DaysGallery';

export default function NorthMichigan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 根据你的 HTML 内容提取的数据
  const michiganData = [
    {
      dayLabel: "Day 1",
      location: "SkyBridge Michigan", // 对应 HTML 中的 location
      stay: "Boyne Mountain", // 这里我根据内容补充了一个 stay，或者你可以留空
      description: "If you're looking for an unforgettable travel experience that combines breathtaking views, a touch of adventure, and a unique engineering marvel, then SkyBridge Michigan at Boyne Mountain Resort should definitely be on your bucket list.",
      image: "/images/day1-1.jpg" 
    },
    {
      dayLabel: "Day 2",
      location: "Tahquamenon Falls",
      stay: "Upper Peninsula",
      description: "Known as one of the largest waterfalls east of the Mississippi, this stunning location offers a perfect mix of adventure and tranquility. The amber hue of the water, caused by tannins from cedar trees, added a unique touch to its beauty.",
      image: "/images/day2.jpg"
    },
    {
      dayLabel: "Day 3",
      location: "Houghton, Michigan",
      stay: "Houghton",
      description: "Nestled in Michigan’s Upper Peninsula, Houghton is a hidden gem that offers a perfect blend of natural beauty, rich history, and outdoor adventure. Known as the gateway to the Keweenaw Peninsula.",
      image: "/images/day3.jpg"
    },
    {
      dayLabel: "Day 4",
      location: "Porcupine Mountains",
      stay: "Ontonagon",
      description: "Known for their rugged beauty, this state park is a haven for hikers, nature lovers, and adventure seekers alike. Our day started with a hike to the stunning Lake of the Clouds overlook.",
      image: "/images/day4.jpg"
    }
  ];

  return (
    <main id="maincon">
      {/* 标题区域 */}
      <h1 className="section-title" tabIndex={0}>North Michigan</h1>
      <p className="section-subtitle" tabIndex={0}>Explore each day of my unforgettable adventure</p>
      
      {/* 地图区域 - 直接保留 iframe */}
      <div className="map-container" aria-label="Map showing the route of the North Michigan road trip">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m74!1m12!1m3!1d2896419.0595712536!2d-89.54459404415947!3d44.85141784411513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m59!3e0!4m3!3m2!1d42.2955225!2d-83.7140028!4m5!1s0x4d4aa1df1009346d%3A0xc3efe5a7aeafc3a4!2sSkyBridge%20Michigan!3m2!1d45.163774!2d-84.9318806!4m5!1s0x4d358b3940a9ad83%3A0xeac771ab20cc7a7a!2sMackinaw%20City%2C%20MI!3m2!1d45.777498699999995!2d-84.72714649999999!4m5!1s0x4d49ba83da5f2177%3A0x1305ac725c8585bd!2sTahquamenon%20Falls%20State%20Park!3m2!1d46.6053783!2d-85.2019773!4m5!1s0x4d4ec3f59bef320b%3A0xe480b3c31e71eb18!2sPictured%20Rocks%20National%20Lakeshore!3m2!1d46.568775599999995!2d-86.3186376!4m5!1s0x4d5a83ab442ba0eb%3A0xca056ee77d4c790c!2sCopper%20Harbor%2C%20MI!3m2!1d47.468311299999996!2d-87.8903203!4m5!1s0x4d50c830dcb62d85%3A0xbe72cbcecc04ef7d!2sHoughton%2C%20MI!3m2!1d47.121133099999994!2d-88.5694182!4m5!1s0x4d563412b67f1f75%3A0x1fc884b8e48c222a!2sPorcupine%20Mountains!3m2!1d46.7759417!2d-89.7350566!4m5!1s0x52a9dbfa1a616aa1%3A0x9eb8d80cfa5ca8d1!2sCopper%20Peak!3m2!1d46.5987594!2d-90.08695809999999!4m5!1s0x4d4c19e475b4fc33%3A0x6bdc192aabd3705e!2sKitch-iti-kipi%2C%20Sawmill%20Road%2C%20Manistique%2C%20MI!3m2!1d46.004149999999996!2d-86.3819556!5e0!3m2!1sen!2sus!4v1763180493372!5m2!1sen!2sus"
          style={{ border: 0, width: '100%', height: '450px' }} // 稍微调整样式以适应 React
          allowFullScreen="" 
          loading="lazy" 
          title="Michigan Road Trip Route Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Days Gallery Section */}
      <section id="days-gallery">
        <div className="gallery-container">
          <DaysGallery days={michiganData} />
        </div>
      </section>
    </main>
  );
}
