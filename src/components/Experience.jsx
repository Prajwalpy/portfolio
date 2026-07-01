const Experience = () => {
  const experiences = [
    {
      role: 'Quality and Validation Engineer',
      org: 'adidas–ASU Center for Engagement Science, Arizona State University',
      period: 'Jan 2026 - Present',
      bullets: [
        'Authored a 7-document Design History File (VVP, SRS, FTP, FTR, FMEA, RTM, Design Change Package) aligned to ISO 13485, ISO 14971:2019, IEC 62304, and 21 CFR Part 820.',
        'Identified a test failure during functional verification; raised a formal Nonconformance Report (NCR) with root cause analysis and authored a Design Change Request (DCR) with full safety rationale.',
        'Drove NCR resolution through PI approval, corrective change oversight, and re-execution of testing to formal closure.',
        'Led a 10-failure-mode FMEA per ISO 14971:2019; updated risk documentation following the design change.',
        'Defined system requirements across 5 subsystems, achieving full bidirectional traceability from requirements to test results via RTM.',
        'Supported an IRB-approved human-subject study with zero adverse events.',
      ],
    },
    {
      role: 'Health Systems Strategy Analyst',
      org: 'ASU Health, Arizona State University',
      period: 'Jan 2025 – Dec 2025',
      bullets: [
        'Supported federal grant proposal development and contributed to ethical AI governance frameworks with ASU\'s Dean of Technology.',
        'Coordinated Grand Rounds programming and contributed to health systems policy analysis across clinical and research units.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            Experience
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#475569' }}>
            Quality engineering, regulatory compliance, and health systems strategy across academic research and clinical environments.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1E293B' }}>
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium mt-1" style={{ color: '#2563EB' }}>
                    {exp.org}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 text-sm font-semibold px-4 py-1.5 rounded-full self-start"
                  style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8' }}
                >
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: '#475569' }}>
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: '#2563EB' }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;