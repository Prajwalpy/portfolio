const EngineeringApproach = () => {
  const steps = [
    'Define clinical or user needs',
    'Identify technical constraints',
    'Develop rapid prototypes',
    'Validate through experimentation',
    'Iterate using measurable outcomes',
  ];

  return (
    <section id="approach" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            Engineering Approach
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#475569' }}>
            I approach biomedical problems using systems engineering principles, combining technical
            rigor with human-centered design.
          </p>
        </div>

        <div className="mt-16">
          <ul className="flex flex-col gap-4 max-w-xl mx-auto">
          {steps.map((step, index) => (
            <li
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: '#2563EB', color: '#F8FAFC' }}
              >
                {index + 1}
              </span>
              <span className="text-base font-medium" style={{ color: '#1E293B' }}>
                {step}
              </span>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EngineeringApproach;
