// Hero component
import React from "react";
import heroVideo from "/SriLanka.mp4";

function Hero() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (dark shade for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Discover Sri Lanka
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">
          From golden beaches to misty mountains – your journey starts here.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="/trip-planner"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Plan Your Trip
          </a>
          <a
            href="/destinations"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold shadow-lg border border-white/40 transition"
          >
            Explore Destinations
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
