import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';

// 1. 在这里定义数据（或者从其他文件 import 进来）
const homeSlidesData = [
  { 
    id: 0, 
    img: '/Shirley_Travel_Journal/images/cover.jpg', 
    title: 'Travel Journal', 
    meta1: "Shirley's", 
    meta2: "Always", 
    status: "On the Road" 
  },
  { 
    id: 1, 
    img: '/Shirley_Travel_Journal/images/zion_cover.jpg', 
    title: 'The West', 
    meta1: "Explore", 
    meta2: "Vast", 
    status: "City and Nature" 
  },
  { 
    id: 2, 
    img: '/Shirley_Travel_Journal/images/seattle_cover.jpg', 
    title: 'Seattle Views', 
    meta1: "Discover", 
    meta2: "Journey", 
    status: "Pacific Northwest" 
  },
  { 
    id: 3, 
    img: '/Shirley_Travel_Journal/images/nm_cover.jpg', 
    title: 'North Michigan', 
    meta1: "Explore", 
    meta2: "Beach", 
    status: "Great Lakes Escape" 
  },
];

export default function Home() {
  return (
    <main id="maincon">
      
      {/* 2. 将数据作为 prop 传给组件 */}
      <HeroSlider slides={homeSlidesData} />

      {/* 下面保持原样不变 */}
      <div id="places">
        <a href="#NY" tabIndex={0}>
          <div className="icon-title-container">
            <div className="clock">
              <img src="/Shirley_Travel_Journal/images/NY.png" alt="NY Logo" />
            </div>
            <div className="country">New York</div>
          </div>
        </a>
        <a href="#FL" tabIndex={0}>
          <div className="icon-title-container">
            <div className="clock">
              <img src="/Shirley_Travel_Journal/images/FL.png" alt="FL Logo" />
            </div>
            <div className="country">Florida</div>
          </div>
        </a>

        <a href="#PA" tabIndex={0}>
          <div className="icon-title-container">
            <div className="clock">
              <img src="/Shirley_Travel_Journal/images/PA.png" alt="PA Logo" />
            </div>
            <div className="country">Pennsylvania</div>
          </div>
        </a>

        <a href="#WA" tabIndex={0}>
          <div className="icon-title-container">
            <div className="clock">
              <img src="/Shirley_Travel_Journal/images/WA.png" alt="WA Logo" />
            </div>
            <div className="country">Washington</div>
          </div>
        </a>

        <a href="#AZ" tabIndex={0}>
          <div className="icon-title-container">
            <div className="clock">
              <img src="/Shirley_Travel_Journal/images/AZ.png" alt="AZ Logo" />
            </div>
            <div className="country">Arizona</div>
          </div>
        </a>

        <a href="#MI" tabIndex={0}>
          <div className="icon-title-container">
            <div className="clock">
              <img src="/Shirley_Travel_Journal/images/MI.png" alt="MI Logo" />
            </div>
            <div className="country">Michigan</div>
          </div>
        </a>
      </div>

      <section id="gallery">
        <div className="gallery-container">
          <h1 tabIndex={0}>Explore the World</h1>
          <h2 className="subtitle" tabIndex={0}>Discover amazing destinations around the globe</h2>

          <div className="gallery-grid">

            <div className="card" id="NY" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/NYC_cover.jpg" alt="NYC Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>NYC, New York</h3>
                <p className="description">Welcome to the Skyscraper National Park.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore New York City (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/ithaca_cover.jpg" alt="Ithaca Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Ithaca, New York</h3>
                <p className="description">A place that carry my Cornell memories</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Ithaca (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/syracuse_cover.JPG" alt="Syracuse cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Syracuse, New York</h3>
                <p className="description">Green city on St. Patrick's Day.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Syracuse (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" id="FL" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/miami_cover.jpg" alt="Miami Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Miami, Florida</h3>
                <p className="description">Tropical paradise.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Miami (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/las_vegas_cover.jpg" alt="Las Vegas Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Pacific</div>
                <h3>Las Vegas, Nevada</h3>
                <p className="description">Las Vegas is a neon oasis, where the night never sleeps and dreams shimmer like desert stars.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Las Vegas (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/zion_cover.jpg" alt="Zion Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Zion, Utah</h3>
                <p className="description">Zion is a cathedral carved by time, where red cliffs rise like prayers to the heavens.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Zion (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/bryce_cover.jpg" alt="Bryce Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Bryce, Utah</h3>
                <p className="description">Bryce is a symphony of stone, where crimson spires sing beneath the endless sky.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Bryce (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/hanksville.jpg" alt="Hanksville Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Hanksville, Utah</h3>
                <p className="description">Hanksville, with its desolate, otherworldly expanse of rugged red mesas and pale, cratered badlands, feels like a forgotten fragment of the moon, quietly cradled in the heart of Earth’s desert.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Hanksville (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" id="AZ" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/monument_valley.jpg" alt="Monument Valley Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Monument Valley, Arizona</h3>
                <p className="description">Monument Valley rises like a dreamscape of towering sandstone monoliths, their fiery hues and sculpted silhouettes painting an eternal dance of shadow and light against the vast desert sky.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Monument Valley (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/antelope_cover.jpg" alt="Antelope Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Antelope, Arizona</h3>
                <p className="description">Antelope Canyon is nature's poetry carved in stone, where sunlight weaves golden threads through narrow sandstone corridors, whispering secrets of time.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Antelope (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/grand_cover.jpg" alt="Grand Canyon Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Grand Canyon, Arizona</h3>
                <p className="description">The Grand Canyon is Earth’s open diary, each layer a chapter, each shadow a verse, and every sunrise a testament to the infinite artistry of nature.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Grand Canyon (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/sedona_cover.jpg" alt="Sedona Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Sedona, Arizona</h3>
                <p className="description">Sedona is a symphony of red rocks and sacred stillness, where the earth hums with ancient energy and the sunsets ignite the soul.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Sedona (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/shiprock_cover.jpg" alt="Shiprock Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Mountain</div>
                <h3>Shiprock, New Mexico</h3>
                <p className="description">Shiprock stands like a solitary cathedral of stone, rising from the desert floor with an air of ancient mystery, a timeless sentinel of Navajo legend and spirit.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Shiprock (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" id="PA" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/phi_cover.jpg" alt="Philadelphia Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Philadelphia, Pennsylvania</h3>
                <p className="description">Philadelphia, the City of Brotherly Love, stands as a timeless tapestry where cobblestone streets whisper the echoes of revolution, and the skyline rises with the promise of progress; a place where history and hope intertwine, painting a portrait of resilience, liberty, and unyielding spirit.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Philadelphia (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/DC_cover.jpg" alt="DC Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Washington DC</h3>
                <p className="description">Washington, D.C., the heart of a nation, pulses with the weight of history and the promise of democracy; its grand monuments and marble avenues stand as eternal witnesses to the ideals of freedom, while the Potomac flows quietly, carrying the dreams of generations past and yet to come.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Washington DC (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" id="WA" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/seattle_cardcover.jpg" alt="Seattle Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Pacific</div>
                <h3>Seattle, Washington</h3>
                <p className="description">Seattle, cradled between emerald forests and the shimmering Puget Sound, is a city where mist kisses mountain peaks and innovation dances beneath rain-soaked skies, a place where nature and ambition converge in a symphony of serenity and possibility.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Seattle (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/wheat_cover.jpg" alt="Wheat Field Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Pacific</div>
                <h3>Wheat Field, Washington</h3>
                <p className="description">In Washington’s golden wheat fields, the earth rolls like a quiet ocean, where the wind whispers secrets to the sun and time drifts as softly as the shifting grains.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Wheat Field (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" id="MI" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/aa_cover.jpg" alt="Ann Arbor Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Ann Arbor, Michigan</h3>
                <p className="description">An arbor is a living poem, where vines weave emerald canopies and sunlight filters through in golden whispers, inviting stillness and the soft embrace of nature’s sanctuary.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Ann Arbor (Coming Soon)">Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/nm_cardcover.jpg" alt="North Michigan Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>North Michigan, Michigan</h3>
                <p className="description">Northern Michigan is a land where sapphire lakes kiss endless forests, and the air carries the scent of pine and possibility, a quiet haven where nature's beauty feels boundless and eternal.</p>
                <Link to="/north-michigan" className="read-more" tabIndex={0}>Explore →</Link>
              </div>
            </div>

            <div className="card" tabIndex={0}>
              <div className="card-image">
                <img src="/Shirley_Travel_Journal/images/columbus_cover.jpg" alt="Columbus Cover" />
              </div>
              <div className="card-content">
                <div className="location-tag">Eastern</div>
                <h3>Columbus, Ohio</h3>
                <p className="description">Columbus hums with the energy of discovery, where innovation meets Midwest charm, and its streets weave a story of growth, resilience, and the quiet ambition of a city reaching for tomorrow.</p>
                <Link to="/reminder" className="read-more" tabIndex={0} title="Coming Soon!" aria-label="Explore Columbus (Coming Soon)">Explore →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
