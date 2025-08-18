import React from "react";
import { Lightbulb, Train, Shield, UtensilsCrossed } from "lucide-react"; // icons

const tips = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Best Time to Visit",
    description:
      "Sri Lanka has two monsoon seasons. The west & south coasts are best from December to April, while the east coast is best from May to September.",
  },
  {
    id: 2,
    icon: <Train className="w-8 h-8 text-blue-500" />,
    title: "Transport Tips",
    description:
      "Trains offer scenic journeys (like Kandy to Ella). Tuk-tuks are common for short distances, but always agree on a price or use a meter.",
  },
  {
    id: 3,
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "Safety & Etiquette",
    description:
      "Sri Lanka is safe for travelers. Dress modestly at temples, remove shoes before entering, and be mindful of local customs.",
  },
  {
    id: 4,
    icon: <UtensilsCrossed className="w-8 h-8 text-red-500" />,
    title: "Food & Culture",
    description:
      "Try rice & curry, hoppers, and kottu roti. Street food is delicious but choose busy stalls for hygiene.",
  },
];

function TravelAdvice() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Travel Advice for Sri Lanka
        </h2>
        <p className="text-gray-600 mb-10">
          Useful tips to help you enjoy your journey with confidence.
        </p>

        {/* Tips Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-lg font-semibold">{tip.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelAdvice;
