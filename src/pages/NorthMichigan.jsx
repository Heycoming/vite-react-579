import DaysGallery from '../components/DaysGallery';

export default function NorthMichigan() {
  const michiganData = [
    {
      dayLabel: "Day 01",
      location: "Sleeping Bear Dunes",
      stay: "Traverse City Airbnb",
      description: "Climbed the dune climb, scenic drive through Pierce Stocking.",
      image: "/image/day1.jpg" 
    },
    {
      dayLabel: "Day 02",
      location: "Mackinac Island",
      stay: "St. Ignace Hotel",
      description: "Biked around the island (8.2 miles), tried the famous fudge.",
      image: "/image/day2.jpg"
    },
    {
      dayLabel: "Day 03",
      location: "Pictured Rocks",
      stay: "Munising Cabin",
      description: "Boat tour along the colorful cliffs and Miners Castle overlook.",
      image: "/image/day3.jpg"
    },
    
  ];

  return (
    <main id="maincon">
      <DaysGallery 
        title="North Michigan" 
        days={michiganData} 
      />
    </main>
  );
}
