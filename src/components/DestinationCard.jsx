import React from 'react'
import { Link } from "react-router-dom";
import destinations from '../data/destinations'; // Assuming you have a data file with destination info

function DestinationCard() {

  return (
     <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Destinations
        </h2>
        <p className="text-gray-600 mb-10">
          Explore the most loved places in Sri Lanka for your next adventure.
        </p>

        {/* Grid of Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">{place.name}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {place.description}
                </p>
                <Link
                  to={`/destinations/${place.id}`}
                  className="mb-0 inline-block text-yellow-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            to="/destinations"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DestinationCard