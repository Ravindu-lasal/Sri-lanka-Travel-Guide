// src/data/packageDetails.js
export const packageDetails = [
  {
    id: 1,
    name: "Budget Explorer",
    duration: "5 Days / 4 Nights",
    price: "USD 350",
    coverImage: "https://images.unsplash.com/photo-1565708097881-bbf5b2c821b9",
    overview:
      "A compact, affordable journey through Sri Lanka’s cultural heart and hill country with curated activities and budget stays.",
    inclusions: [
      "Airport pickup & drop",
      "Accommodation (3★ or equivalent)",
      "Daily breakfast",
      "Train tickets (2nd class reserved) Kandy → Ella",
      "All transfers in AC vehicle"
    ],
    exclusions: [
      "International airfare",
      "Lunch & dinner (unless stated)",
      "Entrance fees to attractions",
      "Personal expenses & tips"
    ],
    days: [
      {
        day: 1,
        title: "Arrive Colombo → Kandy",
        summary: "Airport pickup, Pinnawala stop (optional), Kandy city walk, Temple of the Tooth.",
        activities: [
          "Meet & greet at CMB airport",
          "Optional: Pinnawala Elephant Orphanage",
          "Kandy Lake & local market walk",
          "Evening cultural dance show"
        ],
        hotel: { name: "Oak Ray City Hotel (3★)", link: "#", notes: "Standard double room" },
        meals: "Breakfast",
      },
      {
        day: 2,
        title: "Kandy → Ella (Scenic Train)",
        summary: "Tea country views and the most scenic train ride in Sri Lanka.",
        activities: [
          "Transfer to Peradeniya/Kandy railway station",
          "Train to Ella (reserved seats)",
          "Little Adam’s Peak sunset"
        ],
        hotel: { name: "Ella Mount Relax Cottage (3★)", link: "#", notes: "Mountain view room" },
        meals: "Breakfast",
      },
      {
        day: 3,
        title: "Ella Highlights",
        summary: "Nine Arches Bridge, Ravana Falls, cafes and viewpoints.",
        activities: [
          "Nine Arches Bridge (morning photos)",
          "Ravana Falls",
          "Free time: cafes & viewpoints"
        ],
        hotel: { name: "Ella Mount Relax Cottage (3★)", link: "#", notes: "Same hotel" },
        meals: "Breakfast",
      },
      {
        day: 4,
        title: "Ella → Bentota/Mirissa (Beach)",
        summary: "Transfer to the coast for beach time and sunset.",
        activities: [
          "Road transfer via southern expressway",
          "Beach time & optional water sports"
        ],
        hotel: { name: "Mirissa Bay Resort (3★)", link: "#", notes: "Beachfront room (subject to availability)" },
        meals: "Breakfast",
      },
      {
        day: 5,
        title: "Departure",
        summary: "Return to Colombo or airport transfer.",
        activities: [
          "Optional: Galle Fort stop",
          "Airport drop (CMB) for departure"
        ],
        hotel: null,
        meals: "Breakfast",
      },
    ],
    helpfulLinks: [
      { name: "Train Seat Reservations", url: "https://eservices.railway.gov.lk" },
      { name: "Airport Taxi (PickMe)", url: "https://pickme.lk" },
      { name: "Sri Lanka Tourism", url: "https://www.srilanka.travel/" }
    ],
  },
  {
    id: 2,
    name: "Luxury Escape",
    duration: "7 Days / 6 Nights",
    price: "USD 1200",
    coverImage: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    overview:
      "Indulgent stays, private transfers, curated dining, and spa time across hill country and golden beaches.",
    inclusions: [
      "Airport fast-track & private transfers",
      "5★ hotels or boutique villas",
      "Daily breakfast + two special dinners",
      "Licensed chauffeur-guide"
    ],
    exclusions: ["International airfare", "Lunch (most days)", "Personal expenses & tips"],
    days: [
      {
        day: 1,
        title: "Arrive Colombo → Negombo",
        summary: "Fast-track arrival, sunset by the lagoon, seafood dinner.",
        activities: ["Meet & greet", "Negombo sunset cruise (optional)"],
        hotel: { name: "Jetwing Blue (5★)", link: "#", notes: "Deluxe room" },
        meals: "Breakfast, Dinner",
      },
      // ...add Day 2–7 similarly
    ],
    helpfulLinks: [
      { name: "SriLankan Airlines", url: "https://www.srilankan.com" },
      { name: "Boutique Stays (Relais & Châteaux)", url: "https://www.relaischateaux.com/" }
    ],
  },
];
