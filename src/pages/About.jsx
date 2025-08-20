// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Intro */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We’re here to make your travel experience smoother, safer, and more
          inspiring. From planning to booking, from adventure tips to travel
          safety — we guide you every step of the way.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
          alt="Travel Mission"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple: to help travelers explore the world with
            confidence and convenience. We provide trusted travel resources,
            detailed guides, and step-by-step planning tools — so that your trip
            is unforgettable for the right reasons.
          </p>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-6 text-center">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2">Step-by-Step Guides</h3>
            <p className="text-gray-600">
              Detailed journey guides with planning tools, booking links, and
              day-to-day travel itineraries.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2">Travel Advice</h3>
            <p className="text-gray-600">
              Safety tips, best times to travel, cultural etiquette, and
              money-saving hacks from real experiences.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2">Local Connections</h3>
            <p className="text-gray-600">
              Information about transport, institutions, emergency hotlines, and
              local insights for stress-free journeys.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-yellow-50 rounded-2xl p-10 text-center shadow-md">
        <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We’re not just a travel website — we’re your personal travel companion.
          Our platform combines curated travel content, real-world resources, and
          user-friendly design to give you everything you need in one place.
          Whether you’re booking a dream vacation or looking for emergency help,
          we’re with you every step of the journey.
        </p>
      </div>
    </div>
  );
}

export default About;
