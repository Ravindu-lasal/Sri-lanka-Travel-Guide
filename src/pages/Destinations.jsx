import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    id: 1,
    name: "Sigiriya Rock Fortress",
    image: "https://images.unsplash.com/photo-1587474086315-8f94c8b1fef7",
    description: "Ancient rock fortress with stunning views and history.",
    details:
      "Sigiriya, also known as Lion Rock, is an ancient rock fortress and UNESCO World Heritage site. It offers panoramic views and showcases frescoes, gardens, and unique architecture.",
  },
  {
    id: 2,
    name: "Ella",
    image: "https://images.unsplash.com/photo-1609501671386-f1f1b5f9f57c",
    description: "Scenic mountain village famous for train rides and hikes.",
  },
  {
    id: 3,
    name: "Galle Fort",
    image: "https://images.unsplash.com/photo-1596546302519-2c14f6c8f3fa",
    description: "Colonial-era fort by the sea, filled with culture & cafes.",
  },
  {
    id: 4,
    name: "Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1611683135561-6bdb6e2f8d64",
    description: "Tea country with cool weather and breathtaking landscapes.",
  },
  {
    id: 5,
    name: "Mirissa Beach",
    image: "https://images.unsplash.com/photo-1523484482532-3f46e7e3315b",
    description: "Tropical beach paradise, great for surfing & whale watching.",
  },
];

function Destinations() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 mt-16">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Top Destinations</h1>
        <p className="text-gray-600 mt-2">
          Discover the most beautiful places to visit in Sri Lanka.
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">
                {dest.name}
              </h3>
              <p className="text-gray-600 mt-2">{dest.description}</p>
              <Link
                to={`/destinations/${dest.id}`}
                className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;
export { destinations };
