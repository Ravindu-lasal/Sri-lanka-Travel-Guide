// src/pages/PackageDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { packageDetails } from "../data/packages";

function AccordionDay({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 hover:bg-gray-100 transition"
        aria-expanded={open}
      >
        <div className="text-left">
          <p className="text-sm text-gray-500">Day {item.day}</p>
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <p className="text-gray-600 mt-1">{item.summary}</p>
        </div>
        <span className="ml-4 text-gray-500 text-2xl leading-none">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-2 bg-white">
          {item.activities?.length ? (
            <>
              <h4 className="font-semibold mt-2">Activities</h4>
              <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                {item.activities.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </>
          ) : null}

          {item.hotel ? (
            <>
              <h4 className="font-semibold mt-4">Hotel</h4>
              <p className="text-gray-700">
                <a href={item.hotel.link || "#"} className="underline" target="_blank" rel="noreferrer">
                  {item.hotel.name}
                </a>{item.hotel.notes ? ` — ${item.hotel.notes}` : ""}
              </p>
            </>
          ) : null}

          {item.meals ? (
            <>
              <h4 className="font-semibold mt-4">Meals</h4>
              <p className="text-gray-700">{item.meals}</p>
            </>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default function PackageDetails() {
  const { id } = useParams();
  const pkg = packageDetails.find(p => String(p.id) === String(id));

  if (!pkg) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold">Package not found</h1>
        <Link to="/packages" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600">
          Back to Packages
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero / Banner */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img src={pkg.coverImage} alt={pkg.name} className="w-full h-64 md:h-96 object-cover" />
      </div>

      {/* Heading + Meta */}
      <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{pkg.name}</h1>
          <p className="text-gray-600 mt-3">{pkg.overview}</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5 shadow">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Duration</span>
            <span className="font-semibold">{pkg.duration}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-gray-600">Price</span>
            <span className="font-semibold text-green-600">{pkg.price}</span>
          </div>
          <Link
            to={`/book?packageId=${pkg.id}`}
            className="mt-4 block text-center bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition"
          >
            Book This Package
          </Link>
        </div>
      </div>

      {/* Helpful Links */}
      {pkg.helpfulLinks?.length ? (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Reference & Booking Links</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {pkg.helpfulLinks.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {/* Itinerary */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Day-by-Day Itinerary</h2>
        <div className="mt-4 space-y-4">
          {pkg.days.map((d) => <AccordionDay key={d.day} item={d} />)}
        </div>
      </div>

      {/* Inclusions / Exclusions */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">What’s Included</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            {pkg.inclusions.map((inc, i) => <li key={i}>{inc}</li>)}
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow">
          <h3 className="text-xl font-semibold">What’s Not Included</h3>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            {pkg.exclusions.map((exc, i) => <li key={i}>{exc}</li>)}
          </ul>
        </div>
      </div>

      {/* Back / CTA */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/packages" className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-lg">
          ← Back to Packages
        </Link>
        <Link
          to={`/book?packageId=${pkg.id}`}
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg font-semibold"
        >
          Continue to Booking
        </Link>
      </div>
    </section>
  );
}
