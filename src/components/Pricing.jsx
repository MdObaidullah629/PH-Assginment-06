const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1919] mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-16">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-[32px] border transition-all duration-300 ${
                plan.isPopular
                  ? "bg-[#9538E2] text-white border-[#9538E2] shadow-2xl shadow-purple-200 scale-105 z-10"
                  : "bg-[#F9F9FB] border-gray-100 hover:shadow-xl text-left"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-extrabold mb-2 ${plan.isPopular ? "text-white" : "text-[#1A1919]"}`}>
                {plan.name}
              </h3>
              <p className={`mb-8 font-medium ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>
                {plan.desc}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-lg ${plan.isPopular ? "text-purple-100" : "text-gray-400"}`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium">
                    <span className={plan.isPopular ? "text-purple-200" : "text-[#9538E2]"}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                  plan.isPopular
                    ? "bg-white text-[#9538E2] hover:bg-gray-100"
                    : "bg-[#9538E2] text-white hover:bg-[#7b2dbb]"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;