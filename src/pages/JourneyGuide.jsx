// src/pages/JourneyGuide.jsx
import React from "react";
import { Link } from "react-router-dom";

const journeySteps = [
  {
    id: 1,
    title: "Arrival & Welcome",
    description:
      "Land at Bandaranaike International Airport. Get airport transfers, local SIM card, and first-day relaxation.",
    image: "https://images.unsplash.com/photo-1572451479554-1d9e31a5a4b3",
    links: [
      { name: "SriLankan Airlines", url: "https://www.srilankan.com" },
      { name: "Airport Taxi Booking", url: "https://pickme.lk" },
    ],
  },
  {
    id: 2,
    title: "Cultural Exploration",
    description:
      "Visit ancient cities like Anuradhapura, Polonnaruwa, and the iconic Sigiriya Rock Fortress.",
    image: "https://images.unsplash.com/photo-1600831636886-f1b46d6e5b92",
    links: [
      { name: "Department of Archaeology", url: "http://www.archaeology.gov.lk" },
      { name: "Cultural Triangle Tours", url: "https://www.srilankatravelandtourism.com" },
    ],
  },
  {
    id: 3,
    title: "Hill Country Adventure",
    description:
      "Take the famous train to Ella, visit tea plantations, waterfalls, and enjoy mountain views.",
    image: "https://images.unsplash.com/photo-1620891549021-8efb1d2e2fdd",
    links: [
      { name: "Sri Lanka Railways", url: "https://eservices.railway.gov.lk" },
      { name: "Scenic Train Tickets", url: "https://12go.asia/en/travel/colombo/ella" },
    ],
  },
  {
    id: 4,
    title: "Wildlife Safari",
    description:
      "Experience Yala or Udawalawe National Parks and witness elephants, leopards, and exotic birds.",
    image: "https://images.unsplash.com/photo-1584950015672-f10df5eaf9a5",
    links: [
      { name: "Yala Safari Booking", url: "https://www.yalasrilanka.lk" },
      { name: "Udawalawe Jeep Safari", url: "https://www.udawalawesafari.com" },
    ],
  },
  {
    id: 5,
    title: "Beach Relaxation",
    description:
      "Unwind on the golden beaches of Mirissa, Unawatuna, or Arugam Bay. Try surfing, diving, or whale watching.",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    links: [
      { name: "Surf Lessons in Mirissa", url: "https://www.surfschool.lk" },
      { name: "Whale Watching Tours", url: "https://www.mirissawhalewatching.com" },
    ],
  },
  {
    id: 6,
    title: "Farewell & Departure",
    description:
      "Return to Colombo for shopping, city tours, and your flight home with beautiful memories.",
    image: "https://images.unsplash.com/photo-1583240641670-5cb91861e6a6",
    links: [
      { name: "Colombo City Tour", url: "https://www.srilankacitytours.com" },
      { name: "Airport Transfer", url: "https://pickme.lk" },
    ],
  },
];

function JourneyGuide() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Step-by-Step Travel Journey Guide
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Plan your Sri Lankan adventure with this structured journey guide –
          from arrival to departure, we cover all the steps for a memorable trip.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-16">
        {journeySteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="lg:w-1/2">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900">
                {step.id}. {step.title}
              </h2>
              <p className="text-gray-600 mt-3">{step.description}</p>

              {/* Reference Links */}
              <div className="mt-4 space-x-3">
                {step.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link
          to="/destinations"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Explore Destinations →
        </Link>
      </div>
    </section>
  );
}

export default JourneyGuide;
