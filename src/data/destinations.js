export const destinations = [
  {
    region: "New York",
    id: "NY",
    items: [
      { name: "New York City", path: "/reminder#nyc", mobilePath: "/reminder#mobile-nyc" },
      { name: "Ithaca", path: "/reminder#ithaca", mobilePath: "/reminder#mobile-ithaca" },
      { name: "Syracuse", path: "/reminder#syracuse", mobilePath: "/reminder#mobile-syracuse" },
    ]
  },
  {
    region: "Florida",
    id: "FL",
    items: [
      { name: "Miami", path: "/reminder#miami", mobilePath: "/reminder#mobile-miami" },
    ]
  },
  {
    region: "Nevada",
    id: "NV",
    items: [
      { name: "Las Vegas", path: "/reminder#vegas", mobilePath: "/reminder#mobile-vegas" },
    ]
  },
  {
    region: "Utah",
    id: "UT",
    items: [
      { name: "Zion", path: "/reminder#zion", mobilePath: "/reminder#mobile-zion" },
      { name: "Bryce", path: "/reminder#bryce", mobilePath: "/reminder#mobile-bryce" },
      { name: "Hanksville", path: "/reminder#hanksville", mobilePath: "/reminder#mobile-hanksville" },
    ]
  },
  {
    region: "Arizona",
    id: "AZ",
    items: [
      { name: "Monument Valley", path: "/reminder#monument", mobilePath: "/reminder#mobile-monument" },
      { name: "Antelope", path: "/reminder#antelope", mobilePath: "/reminder#mobile-antelope" },
      { name: "Grand Canyon", path: "/reminder#grandcanyon", mobilePath: "/reminder#mobile-grandcanyon" },
      { name: "Sedona", path: "/reminder#sedona", mobilePath: "/reminder#mobile-sedona" },
    ]
  },
  {
    region: "New Mexico",
    id: "NM",
    items: [
      { name: "Shiprock", path: "/reminder#shiprock", mobilePath: "/reminder#mobile-shiprock" },
    ]
  },
  {
    region: "Pennsylvania",
    id: "PA",
    items: [
      { name: "Philadelphia", path: "/reminder#philly", mobilePath: "/reminder#mobile-philly" },
    ]
  },
  {
    region: "Washington DC",
    id: "DC",
    items: []
  },
  {
    region: "Washington",
    id: "WA",
    items: [
      { name: "Seattle", path: "/reminder#seattle", mobilePath: "/reminder#mobile-seattle" },
      { name: "Wheat Field", path: "/reminder#wheat", mobilePath: "/reminder#mobile-wheat" },
    ]
  },
  {
    region: "Michigan",
    id: "MI",
    items: [
      { name: "Ann Arbor", path: "/reminder#annarbor", mobilePath: "/reminder#mobile-annarbor" },
      { name: "North Michigan", path: "/NorthMichigan", mobilePath: "/NorthMichigan" }, // 真实链接
    ]
  },
  {
    region: "Ohio",
    id: "OH",
    items: [
      { name: "Columbus", path: "/reminder#columbus", mobilePath: "/reminder#mobile-columbus" },
    ]
  },
];

export const homeSlidesData = [
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

export const placesIcons = [
  { id: "NY", img: "/Shirley_Travel_Journal/images/NY.png", name: "New York" },
  { id: "FL", img: "/Shirley_Travel_Journal/images/FL.png", name: "Florida" },
  { id: "PA", img: "/Shirley_Travel_Journal/images/PA.png", name: "Pennsylvania" },
  { id: "WA", img: "/Shirley_Travel_Journal/images/WA.png", name: "Washington" },
  { id: "AZ", img: "/Shirley_Travel_Journal/images/AZ.png", name: "Arizona" },
  { id: "MI", img: "/Shirley_Travel_Journal/images/MI.png", name: "Michigan" },
];

export const galleryCards = [
  {
    id: "NY",
    img: "/Shirley_Travel_Journal/images/NYC_cover.jpg",
    tag: "Eastern",
    title: "NYC, New York",
    desc: "Welcome to the Skyscraper National Park.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/ithaca_cover.jpg",
    tag: "Eastern",
    title: "Ithaca, New York",
    desc: "A place that carry my Cornell memories",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/syracuse_cover.JPG",
    tag: "Eastern",
    title: "Syracuse, New York",
    desc: "Green city on St. Patrick's Day.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    id: "FL",
    img: "/Shirley_Travel_Journal/images/miami_cover.jpg",
    tag: "Eastern",
    title: "Miami, Florida",
    desc: "Tropical paradise.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/las_vegas_cover.jpg",
    tag: "Pacific",
    title: "Las Vegas, Nevada",
    desc: "Las Vegas is a neon oasis, where the night never sleeps and dreams shimmer like desert stars.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/zion_cover.jpg",
    tag: "Mountain",
    title: "Zion, Utah",
    desc: "Zion is a cathedral carved by time, where red cliffs rise like prayers to the heavens.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/bryce_cover.jpg",
    tag: "Mountain",
    title: "Bryce, Utah",
    desc: "Bryce is a symphony of stone, where crimson spires sing beneath the endless sky.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/hanksville.jpg",
    tag: "Mountain",
    title: "Hanksville, Utah",
    desc: "Hanksville, with its desolate, otherworldly expanse of rugged red mesas and pale, cratered badlands, feels like a forgotten fragment of the moon.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    id: "AZ",
    img: "/Shirley_Travel_Journal/images/monument_valley.jpg",
    tag: "Mountain",
    title: "Monument Valley, Arizona",
    desc: "Monument Valley rises like a dreamscape of towering sandstone monoliths painting an eternal dance of shadow and light.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/antelope_cover.jpg",
    tag: "Mountain",
    title: "Antelope, Arizona",
    desc: "Antelope Canyon is nature's poetry carved in stone, where sunlight weaves golden threads through narrow sandstone corridors.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/grand_cover.jpg",
    tag: "Mountain",
    title: "Grand Canyon, Arizona",
    desc: "The Grand Canyon is Earth’s open diary, each layer a chapter, each shadow a verse.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/sedona_cover.jpg",
    tag: "Mountain",
    title: "Sedona, Arizona",
    desc: "Sedona is a symphony of red rocks and sacred stillness, where the earth hums with ancient energy.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/shiprock_cover.jpg",
    tag: "Mountain",
    title: "Shiprock, New Mexico",
    desc: "Shiprock stands like a solitary cathedral of stone, rising from the desert floor with an air of ancient mystery.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    id: "PA",
    img: "/Shirley_Travel_Journal/images/phi_cover.jpg",
    tag: "Eastern",
    title: "Philadelphia, Pennsylvania",
    desc: "Philadelphia, the City of Brotherly Love, stands as a timeless tapestry where cobblestone streets whisper the echoes of revolution.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/DC_cover.jpg",
    tag: "Eastern",
    title: "Washington DC",
    desc: "Washington, D.C., the heart of a nation, pulses with the weight of history and the promise of democracy.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    id: "WA",
    img: "/Shirley_Travel_Journal/images/seattle_cardcover.jpg",
    tag: "Pacific",
    title: "Seattle, Washington",
    desc: "Seattle, cradled between emerald forests and the shimmering Puget Sound, is a city where mist kisses mountain peaks.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/wheat_cover.jpg",
    tag: "Pacific",
    title: "Wheat Field, Washington",
    desc: "In Washington’s golden wheat fields, the earth rolls like a quiet ocean, where the wind whispers secrets to the sun.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    id: "MI",
    img: "/Shirley_Travel_Journal/images/aa_cover.jpg",
    tag: "Eastern",
    title: "Ann Arbor, Michigan",
    desc: "An arbor is a living poem, where vines weave emerald canopies and sunlight filters through in golden whispers.",
    link: "/reminder",
    isComingSoon: true
  },
  {
    img: "/Shirley_Travel_Journal/images/nm_cardcover.jpg",
    tag: "Eastern",
    title: "North Michigan, Michigan",
    desc: "Northern Michigan is a land where sapphire lakes kiss endless forests, and the air carries the scent of pine and possibility.",
    link: "/NorthMichigan",
    isComingSoon: false
  },
  {
    img: "/Shirley_Travel_Journal/images/columbus_cover.jpg",
    tag: "Eastern",
    title: "Columbus, Ohio",
    desc: "Columbus hums with the energy of discovery, where innovation meets Midwest charm.",
    link: "/reminder",
    isComingSoon: true
  },
];

const IMG_PATH = '/Shirley_Travel_Journal/images/';

export const michiganData = [
  {
    dayLabel: "Day 1",
    image: `${IMG_PATH}day1-1.jpg`,
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