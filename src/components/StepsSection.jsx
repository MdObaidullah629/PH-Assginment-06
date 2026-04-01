import { HiOutlineUser, HiOutlineCube, HiOutlineRocketLaunch } from "react-icons/hi2";

const StepsSection = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: <HiOutlineUser className="text-4xl text-[#9538E2]" />,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: <HiOutlineCube className="text-4xl text-[#9538E2]" />,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: <HiOutlineRocketLaunch className="text-4xl text-[#9538E2]" />,
    },
  ];

  return (
    <section className="bg-[#F9F9FB] py-24">
      <div className="container mx-auto px-4 md:px-12 text-center">
        {/* Title & Subtitle */}
        <h2 className="text-4xl md:text-5xl font-black text-[#1A1919] mb-4">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-16">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 relative group border border-gray-50">
              {/* Step Number Badge */}
              <div className="absolute top-6 right-6 bg-[#9538E2] text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold shadow-lg shadow-purple-200">
                {step.id}
              </div>

              {/* Icon Circle */}
              <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-extrabold text-[#1A1919] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;