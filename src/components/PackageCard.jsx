import React from 'react'
import { Link } from "react-router-dom";


const packages = [
  {
    id: 1,
    name: "3 Days Hill Country Adventure",
    price: "$250",
    duration: "3 Days",
    highlights: ["Kandy Temple", "Ella Train Ride", "Nine Arches Bridge"],
  },
  {
    id: 2,
    name: "7 Days Sri Lanka Explorer",
    price: "$800",
    duration: "7 Days",
    highlights: ["Sigiriya Rock", "Polonnaruwa Ruins", "Galle Fort", "Mirissa Beach"],
  },
  {
    id: 3,
    name: "10 Days Cultural + Beach Tour",
    price: "$1200",
    duration: "10 Days",
    highlights: ["Anuradhapura", "Dambulla Caves", "Nuwara Eliya", "Unawatuna Beach"],
  },
];

function PackageCard() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Popular Travel Plan
        </h2>
        <p className="text-gray-600 mb-10">
          Choose from handpicked itineraries to explore Sri Lanka with ease.
        </p>

        {/* Package Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-gray-500 text-sm">{pkg.duration}</p>
              <ul className="mt-3 text-left text-gray-600 space-y-1">
                {pkg.highlights.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
              <p className="mt-4 text-lg font-bold">{pkg.price}</p>
              <Link
                to={`/packages/${pkg.id}`}
                className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full font-medium transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            to="/packages"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PackageCard
