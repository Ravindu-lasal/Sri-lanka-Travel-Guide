
import React from 'react'
import { Link } from "react-router-dom";
import journeyImg from '/journey.jpg'; // Assuming you have an image for the journey guide

function TripSteps() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div>
          <img
            src={journeyImg}
            alt="Travel Journey Guide"
            className="rounded-2xl shadow-lg object-cover w-full h-96"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Step-by-Step Travel Journey Guide
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            From planning your first day to enjoying your last sunset, our guide 
            takes you through every step of your Sri Lanka adventure. 
            Learn how to book packages, find destinations, get travel tips, 
            and make the most out of your journey with ease.
          </p>
          <Link
            to="/journey-guide"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            Read Full Guide →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TripSteps