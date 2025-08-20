
// src/pages/TravelAdvice.jsx
import React from "react";

const adviceSections = [
  {
    id: 1,
    title: "Visa & Entry Requirements",
    description:
      "Check visa requirements before traveling. Most tourists need an Electronic Travel Authorization (ETA) for Sri Lanka. Apply online to avoid delays at the airport.",
    link: "https://eta.gov.lk/slvisa/",
  },
  {
    id: 2,
    title: "Health & Safety",
    description:
      "Bring travel insurance, stay hydrated, and use mosquito repellents in tropical areas. Emergency numbers and hospitals are available in major cities.",
    link: "https://wwwnc.cdc.gov/travel",
  },
  {
    id: 3,
    title: "Transport & Getting Around",
    description:
      "Use trains for scenic routes like Kandy to Ella, buses for budget travel, and tuk-tuks for short rides. Book intercity train tickets online in advance.",
    link: "https://www.seat61.com/SriLanka.htm",
  },
  {
    id: 4,
    title: "Money & Budgeting",
    description:
      "The local currency is the Sri Lankan Rupee (LKR). ATMs are widely available, and card payments work in major towns. Keep cash for rural areas.",
    link: "https://www.xe.com/currency/lkr-sri-lankan-rupee",
  },
  {
    id: 5,
    title: "Cultural Etiquette",
    description:
      "Dress modestly when visiting temples, remove shoes before entering, and avoid public displays of affection. Respect local customs.",
    link: "https://www.lonelyplanet.com/sri-lanka",
  },
  {
    id: 6,
    title: "Packing Essentials",
    description:
      "Bring light clothes for tropical weather, a raincoat during monsoon season, sunscreen, and power adapters (Type D/M/G plugs).",
    link: "https://www.tripsavvy.com/packing-list-for-asia-4158109",
  },
];

function TravelAdvice() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Travel Advice
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Get essential travel tips to make your journey safe, comfortable, and
        unforgettable. From visas to cultural etiquette, here’s everything you
        need to know before traveling.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {adviceSections.map((section) => (
          <div
            key={section.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{section.description}</p>
            <a
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelAdvice;
