import React from "react";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$29",
    description:
      "Ideal for startups and small businesses looking get started essential IT services.",
    features: ["Access to basic AI tools", "Email support", "10,000 API calls"],
    highlight: false,
  },
  {
    name: "Standard Plan",
    price: "$79",
    description:
      "Perfect for growing businesses that require additional features and support.",
    features: [
      "Everything in Basic",
      "Advanced analytics",
      "24/7 Support",
      "100,000 API calls",
    ],
    highlight: true,
  },
  {
    name: "Premium Plan",
    price: "$199",
    description:
      "Tailored for larger enterprises with complex IT needs and stringent security.",
    features: [
      "Everything in Standard",
      "Dedicated AI engineer",
      "Unlimited API calls",
      "Custom integration support",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold text-sm uppercase">
          Our Pricing Plan
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Flexible Plans for Every Business
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-6 rounded-xl shadow-lg border ${
              plan.highlight
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-gray-50 text-gray-800 border-gray-200"
            } transition-all hover:shadow-xl`}
          >
            {/* Top: title, price, description */}
            <div>
              {plan.highlight && (
                <div className="absolute -mt-8 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-1">
                {plan.price}
                <span className="text-base font-medium"> /month</span>
              </p>
              <p className="text-sm mb-4">{plan.description}</p>
            </div>

            {/* Middle: feature list */}
            <ul
              className={`flex-grow space-y-2 text-sm ${
                plan.highlight ? "text-white/90" : "text-gray-700"
              }`}
            >
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2 text-lg">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bottom: button */}
            <button
              className={`mt-6 w-full py-3 rounded-md font-semibold transition-all ${
                plan.highlight
                  ? "bg-white text-blue-700 hover:bg-blue-100"
                  : "bg-blue-700 text-white hover:bg-blue-800"
              }`}
            >
              Buy Now →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
