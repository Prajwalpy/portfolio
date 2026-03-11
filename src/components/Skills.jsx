const Skills = () => {
  const groups = [
    {
      title: 'Core Engineering Capabilities',
      description: 'Foundational biomedical engineering competencies applied across research, prototyping, and clinical technology development.',
      fullWidth: true,
      items: [
        'Biosignal Processing (EEG)',
        'Neurotechnology Systems',
        'Wearable Medical Devices',
        'Human-Centered Design',
        'Closed-Loop System Design',
        'Physiological Signal Acquisition',
        'Medical Device Verification & Validation',
        'Algorithm Development',
      ],
    },
    {
      title: 'Technical Stack',
      description: 'Software tools and frameworks used in biomedical engineering systems and real-time data workflows.',
      fullWidth: false,
      items: [
        'Python',
        'MATLAB',
        'Signal Processing',
        'Real-Time Data Streaming (LSL)',
        'System Integration',
        'Max/MSP',
        'Muse EEG',
        'LSL Bridge',
        'Git & GitHub',
      ],
    },
    {
      title: 'Engineering Methods',
      description: 'Structured engineering practices applied throughout the design, testing, and documentation lifecycle.',
      fullWidth: false,
      items: [
        'Experimental Design',
        'Prototype Development',
        'Data Analysis',
        'Technical Documentation',
        'Good Documentation Practices (GDP)',
        'Design Verification Testing',
        'Statistical Analysis',
      ],
    },
  ];

  const Chip = ({ label }) => (
    <span
      className="px-3 py-1 rounded-full text-sm font-medium border hover:scale-105 transition cursor-default"
      style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', borderColor: '#BFDBFE' }}
    >
      {label}
    </span>
  );

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            Skills
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#475569' }}>
            Experience across biosignal systems, real-time physiological data pipelines, and wearable medical device prototyping.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Full-width top card */}
          <div
            className="lg:col-span-2 p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold mb-1 text-slate-800">
              {groups[0].title}
            </h3>
            <p className="text-sm mb-4 text-slate-500">
              {groups[0].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {groups[0].items.map((skill, i) => <Chip key={i} label={skill} />)}
            </div>
          </div>

          {/* Two half-width cards */}
          {groups.slice(1).map((group, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-1 text-slate-800">
                {group.title}
              </h3>
              <p className="text-sm mb-4 text-slate-500">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => <Chip key={i} label={skill} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
