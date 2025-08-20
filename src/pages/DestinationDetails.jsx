import React from "react";
import { useParams, Link } from "react-router-dom";
import { destinations } from "./Destinations";

function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Destination Not Found</h2>
        <Link
          to="/destinations"
          className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-96 object-cover rounded-2xl shadow-lg"
      />
      <div className="mt-8">
        <h1 className="text-4xl font-bold text-gray-900">{destination.name}</h1>
        <p className="text-gray-600 mt-4 text-lg">{destination.details}</p>

        <div className="mt-6">
          <Link
            to="/destinations"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            ← Back to Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DestinationDetails;
