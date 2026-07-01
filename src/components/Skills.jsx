const Skills = () => {
  const groups = [
    {
      title: 'Regulatory & Quality Systems',
      description: 'Standards and frameworks applied across device development, quality documentation, and compliance.',
      fullWidth: true,
      items: [
        'ISO 13485:2016',
        'ISO 14971:2019 — Risk Management',
        'IEC 62304 — Software Lifecycle',
        '21 CFR Part 820 — Quality System Regulation',
        '21 CFR Part 11 — Electronic Records',
        '21 CFR Part 803 — MDR',
        'Design History File (DHF)',
        'CAPA Management',
        'NCR / DCR — Nonconformance & Design Change',
        'FMEA',
        'Root Cause Analysis',
        'Design Controls',
        'Change Control',
        'Good Documentation Practices (GDP)',
        'Audit Readiness',
      ],
    },
    {
      title: 'Verification & Validation',
      description: 'End-to-end V&V execution from test planning through formal closure.',
      fullWidth: false,
      items: [
        'V&V Planning (VVP)',
        'Test Protocol Development (FTP / FTR)',
        'Requirements Traceability (RTM)',
        'Functional Verification Testing',
        'IQ / OQ / PQ Concepts',
        'Statistical Analysis',
        'MATLAB',
        'Minitab',
        'IRB-Approved Human-Subject Studies',
      ],
    },
    {
      title: 'Engineering & Technical Stack',
      description: 'Tools and platforms used across QMS development, biomedical systems, and data workflows.',
      fullWidth: false,
      items: [
        'Python',
        'Next.js / TypeScript / PostgreSQL',
        'Prisma ORM',
        'Google Gemini AI',
        'EEG / Biosignal Processing',
        'Wearable Medical Devices',
        'Real-Time Data Streaming (LSL)',
        'Git & GitHub',
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
            Regulatory compliance, quality systems, and V&V execution across medical device development and QMS engineering.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Full-width top card */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300">
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