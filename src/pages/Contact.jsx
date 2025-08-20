// src/pages/Contact.jsx
import React from "react";

const contactData = [
  {
    category: "Emergency & Hotlines",
    items: [
      { name: "Police Emergency Hotline", number: "119" },
      { name: "Ambulance / Fire & Rescue", number: "110" },
      { name: "Tourist Police Hotline", number: "011-2421052" },
      { name: "General Emergency", number: "112" },
    ],
  },
  {
    category: "Tourist Assistance",
    items: [
      {
        name: "Sri Lanka Tourism Hotline",
        number: "1912",
        website: "https://www.sltda.gov.lk/",
      },
      {
        name: "Tourist Information Centre (Colombo)",
        number: "+94 11 242 6903",
      },
      {
        name: "Tourist Police (Head Office, Colombo)",
        number: "+94 11 242 1052",
      },
    ],
  },
  {
    category: "Hospitals (Major Cities)",
    items: [
      { name: "National Hospital Colombo", number: "+94 11 269 1111" },
      { name: "Kandy General Hospital", number: "+94 81 222 2261" },
      { name: "Galle Karapitiya Teaching Hospital", number: "+94 91 223 2560" },
    ],
  },
  {
    category: "Airlines & Transport",
    items: [
      { name: "SriLankan Airlines", number: "+94 11 777 1979", website: "https://www.srilankan.com/" },
      { name: "Colombo International Airport", number: "+94 11 225 2861" },
      { name: "Sri Lanka Railways", number: "+94 11 243 4215", website: "http://www.railway.gov.lk" },
    ],
  },
  {
    category: "Embassies (Colombo)",
    items: [
      { name: "US Embassy", number: "+94 11 249 8500", website: "https://lk.usembassy.gov/" },
      { name: "UK High Commission", number: "+94 11 539 0639", website: "https://www.gov.uk/world/organisations/british-high-commission-colombo" },
      { name: "Australian High Commission", number: "+94 11 246 3200", website: "https://srilanka.embassy.gov.au/" },
    ],
  },
];

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Contact & Help Center
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        If you need urgent assistance during your travel in Sri Lanka, here are
        the official hotlines, institutions, and emergency contacts to help you.
      </p>

      <div className="space-y-10">
        {contactData.map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-yellow-700 mb-4">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-2"
                >
                  <div>
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex space-x-4 mt-2 sm:mt-0">
                    <span className="text-gray-600">{item.number}</span>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Website
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
