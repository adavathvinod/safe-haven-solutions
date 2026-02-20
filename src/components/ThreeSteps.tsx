const steps = [
  {
    number: "01",
    title: "SELECT SERVICE",
    description: "Choose a large selection of safety netting.",
    color: "bg-pink-500",
  },
  {
    number: "02",
    title: "CONTACT US",
    description: "You can contact us via phone, Whatsapp, or email with your needs.",
    color: "bg-green-700",
  },
  {
    number: "03",
    title: "SERVICE INSTALLATION",
    description: "Your safety nets will be installed at the preference site by our experienced team.",
    color: "bg-blue-700",
  },
];

const ThreeSteps = () => {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-center mb-12">
          Service in Three Easy Steps
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <path d="M0 12H32M32 12L22 2M32 12L22 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {/* Diamond card */}
              <div
                className={`${step.color} w-44 h-44 md:w-48 md:h-48 rotate-45 flex items-center justify-center rounded-2xl shadow-lg`}
              >
                <div className="-rotate-45 text-center text-white p-4">
                  <span className="text-3xl font-extrabold block">{step.number}</span>
                  <h3 className="text-sm font-bold mt-1 uppercase">{step.title}</h3>
                  <p className="text-xs mt-2 leading-tight">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeSteps;
