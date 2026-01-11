import React, { useEffect } from 'react';
import DaysGallery from '../components/DaysGallery';

export default function NorthMichigan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ 路径修复：定义基础路径
  // 如果你的图片在 public/Shirley_Travel_Journal/images/ 下，请保持这个前缀
  // 如果图片直接在 public/images/ 下，请把前缀改为 '/images/'
  const IMG_PATH = '/Shirley_Travel_Journal/images/'; 

  const michiganData = [
    {
      dayLabel: "Day 1",
      image: `${IMG_PATH}day1-1.jpg`,
      // 将内容拆分为数组，以匹配 HTML 中的 li.location 和 li.highlight
      content: [
        { type: "location", text: "Our Thrilling Adventure at SkyBridge Michigan" },
        { type: "highlight", text: "If you're looking for an unforgettable travel experience that combines breathtaking views, a touch of adventure, and a unique engineering marvel, then SkyBridge Michigan at Boyne Mountain Resort should definitely be on your bucket list. Recently, we had the chance to visit this incredible destination, and it was nothing short of magical. Here’s a glimpse into our day at the world’s longest timber-towered suspension bridge!" },
        { type: "location", text: "The Ride Up" },
        { type: "highlight", text: "To reach the SkyBridge, we hopped on the resort’s chairlift, which took us on a relaxing ride up the mountain. The views from the lift were already incredible — rolling hills, dense forests, and even a glimpse of the bridge itself in the distance. It was the perfect way to set the tone for what was to come." }
      ]
    },
    {
      dayLabel: "Day 2",
      image: `${IMG_PATH}day2.jpg`,
      content: [
        { type: "location", text: "Exploring the Majestic Tahquamenon Falls" },
        { type: "highlight", text: "If you’re searching for a serene yet awe-inspiring travel destination surrounded by natural beauty, Tahquamenon Falls in Michigan’s Upper Peninsula is a must-visit. Known as one of the largest waterfalls east of the Mississippi, this stunning location offers a perfect mix of adventure and tranquility. Recently, we had the pleasure of exploring this natural wonder, and it was an experience we’ll never forget. Here’s a peek into our day at this iconic spot!" },
        { type: "location", text: "The Journey to the Falls" },
        { type: "highlight", text: "Our adventure began with a scenic drive through the Upper Peninsula’s dense forests, which were alive with vibrant colors during the fall season. Upon arriving at Tahquamenon Falls State Park, we were greeted by the soothing sound of rushing water and the fresh, earthy scent of the woods. The short walk to the falls was an experience in itself, with well-maintained trails that meandered through the lush forest." }
      ]
    },
    {
      dayLabel: "Day 3",
      image: `${IMG_PATH}day3.jpg`,
      content: [
        { type: "location", text: "Discovering the Charm of Houghton, Michigan" },
        { type: "highlight", text: "Nestled in Michigan’s Upper Peninsula, Houghton is a hidden gem that offers a perfect blend of natural beauty, rich history, and outdoor adventure. Known as the gateway to the Keweenaw Peninsula, this charming town is surrounded by stunning landscapes and the sparkling waters of Portage Lake. Recently, we spent a day exploring Houghton, and it was an unforgettable experience. Here’s a glimpse into our adventure in this picturesque town!" },
        { type: "location", text: "A Stroll Through Downtown Houghton" },
        { type: "highlight", text: "Our day began with a leisurely stroll through Houghton’s historic downtown. The quaint streets are lined with unique shops, cozy cafes, and restaurants, all set against the backdrop of the iconic Portage Lake Lift Bridge. We couldn’t resist stopping for a coffee at one of the local spots while soaking in the vibrant energy of the town." }
      ]
    },
    {
      dayLabel: "Day 4",
      image: `${IMG_PATH}day4.jpg`,
      content: [
        { type: "location", text: "Exploring the Beauty of Porcupine Mountains" },
        { type: "highlight", text: "If you’re craving an escape into untouched wilderness, the Porcupine Mountains in Michigan’s Upper Peninsula are the perfect destination. Known as their rugged beauty, this state park is a haven for hikers, nature lovers, and adventure seekers alike. Here’s a quick look at our visit!" },
        { type: "location", text: "Hiking to Lake of the Clouds" },
        { type: "highlight", text: "Our day started with a hike to the stunning Lake of the Clouds overlook. The view from the top was absolutely breathtaking, with the shimmering lake surrounded by dense forests and rolling hills. It’s a scene that feels straight out of a postcard." }
      ]
    }
  ];

  return (
    <main id="maincon">
      <h1 className="section-title" tabIndex={0}>North Michigan</h1>
      <p className="section-subtitle" tabIndex={0}>Explore each day of my unforgettable adventure</p>
      
      <div className="map-container" aria-label="Map showing the route of the North Michigan road trip">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m74!1m12!1m3!1d2896419.0595712536!2d-89.54459404415947!3d44.85141784411513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m59!3e0!4m3!3m2!1d42.2955225!2d-83.7140028!4m5!1s0x4d4aa1df1009346d%3A0xc3efe5a7aeafc3a4!2sSkyBridge%20Michigan!3m2!1d45.163774!2d-84.9318806!4m5!1s0x4d358b3940a9ad83%3A0xeac771ab20cc7a7a!2sMackinaw%20City%2C%20MI!3m2!1d45.777498699999995!2d-84.72714649999999!4m5!1s0x4d49ba83da5f2177%3A0x1305ac725c8585bd!2sTahquamenon%20Falls%20State%20Park!3m2!1d46.6053783!2d-85.2019773!4m5!1s0x4d4ec3f59bef320b%3A0xe480b3c31e71eb18!2sPictured%20Rocks%20National%20Lakeshore!3m2!1d46.568775599999995!2d-86.3186376!4m5!1s0x4d5a83ab442ba0eb%3A0xca056ee77d4c790c!2sCopper%20Harbor%2C%20MI!3m2!1d47.468311299999996!2d-87.8903203!4m5!1s0x4d50c830dcb62d85%3A0xbe72cbcecc04ef7d!2sHoughton%2C%20MI!3m2!1d47.121133099999994!2d-88.5694182!4m5!1s0x4d563412b67f1f75%3A0x1fc884b8e48c222a!2sPorcupine%20Mountains!3m2!1d46.7759417!2d-89.7350566!4m5!1s0x52a9dbfa1a616aa1%3A0x9eb8d80cfa5ca8d1!2sCopper%20Peak!3m2!1d46.5987594!2d-90.08695809999999!4m5!1s0x4d4c19e475b4fc33%3A0x6bdc192aabd3705e!2sKitch-iti-kipi%2C%20Sawmill%20Road%2C%20Manistique%2C%20MI!3m2!1d46.004149999999996!2d-86.3819556!5e0!3m2!1sen!2sus!4v1763180493372!5m2!1sen!2sus"
          style={{ border: 0, width: '100%', height: '450px' }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Michigan Road Trip Route Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section id="days-gallery">
        <div className="gallery-container">
          <DaysGallery days={michiganData} />
        </div>
      </section>
    </main>
  );
}
