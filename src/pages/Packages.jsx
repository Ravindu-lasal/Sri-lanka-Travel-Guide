// src/pages/Packages.jsx
import React from "react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    name: "Budget Explorer",
    price: "USD 350",
    duration: "5 Days / 4 Nights",
    description:
      "Perfect for budget travelers! Covers Colombo, Kandy, and Nuwara Eliya with affordable stays.",
    image: "https://images.unsplash.com/photo-1565708097881-bbf5b2c821b9",
    features: [
      "3-Star Hotels",
      "City Tours",
      "Breakfast Included",
      "Airport Transfer",
    ],
  },
  {
    id: 2,
    name: "Luxury Escape",
    price: "USD 1200",
    duration: "7 Days / 6 Nights",
    description:
      "A luxurious experience across Colombo, Kandy, Nuwara Eliya, and Bentota beaches with 5-star stays.",
    image: "https://images.unsplash.com/photo-1519821172141-b5d8e2aa6f4d",
    features: ["5-Star Resorts", "Private Car", "All Meals", "Spa & Wellness"],
  },
  {
    id: 3,
    name: "Adventure Trek",
    price: "USD 800",
    duration: "6 Days / 5 Nights",
    description:
      "For adventure lovers! Includes hiking in Ella, rafting in Kitulgala, and a safari in Yala.",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    features: [
      "Guided Hiking",
      "Safari Jeep",
      "Adventure Sports",
      "Camping Option",
    ],
  },
  {
    id: 4,
    name: "Romantic Honeymoon",
    price: "USD 950",
    duration: "6 Days / 5 Nights",
    description:
      "Specially crafted for couples! Romantic stays in Ella & Bentota with candlelight dinners.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    features: [
      "Couple Resorts",
      "Private Dinners",
      "Beach Sunset Tours",
      "Spa Treatments",
    ],
  },
  {
    id: 5,
    name: "Family Fun Package",
    price: "USD 700",
    duration: "6 Days / 5 Nights",
    description:
      "A family-friendly package including Colombo, Pinnawala Elephant Orphanage, and Bentota beaches.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    features: [
      "Family Hotels",
      "Zoo & Wildlife Tours",
      "Beach Activities",
      "Kids Discounts",
    ],
  },
];

function Packages() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Travel Packages
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Choose from our carefully crafted packages – whether you’re on a
          budget, seeking luxury, or planning a honeymoon, we’ve got something
          for everyone.
        </p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {pkg.name}
              </h2>
              <p className="text-gray-600 mt-2">{pkg.description}</p>
              {/* Features */}
              <ul className="mt-4 text-sm text-gray-700 space-y-1">
                {pkg.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
              {/* Price & Duration */}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  {pkg.price}
                </span>
                <span className="text-sm text-gray-500">{pkg.duration}</span>
              </div>

              <Link
                to={`/packages/${pkg.id}`}
                className="mt-4 w-full inline-block text-center bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;
