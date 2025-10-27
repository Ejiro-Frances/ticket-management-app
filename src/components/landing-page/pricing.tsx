import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "per month",
    features: [
      "Up to 3 agents",
      "1,000 tickets/month",
      "Basic reporting",
      "Email support",
      "5 integrations",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "per month",
    features: [
      "Up to 10 agents",
      "5,000 tickets/month",
      "Advanced reporting",
      "Priority support",
      "Unlimited integrations",
      "Custom workflows",
      "SLA management",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited agents",
      "Unlimited tickets",
      "Custom analytics",
      "Dedicated support",
      "Custom integrations",
      "Advanced security",
      "API access",
      "Custom training",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team's needs. All plans include our
            core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-8 ${
                plan.highlighted ? "ring-2 ring-blue-500 relative" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
