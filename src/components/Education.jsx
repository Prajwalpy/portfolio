const Education = () => {
  const degrees = [
    {
      degree: 'M.S. Biomedical Engineering',
      school: 'Arizona State University',
      location: 'Tempe, AZ',
      date: 'December 2025',
      note: 'Focus: Medical device systems, biosignal processing, wearable technology',
    },
    {
      degree: 'B.E. Biotechnology',
      school: 'RV College of Engineering',
      location: 'Bengaluru, India',
      date: 'May 2022',
      note: 'Wet lab: ELISA, HPLC, cell culture, PCR, fermentation, gel electrophoresis',
    },
  ];

  return (
    <section id="education" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-bold leading-snug" style={{ color: '#1E293B' }}>
                  {edu.degree}
                </h3>
                <span
                  className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8' }}
                >
                  {edu.date}
                </span>
              </div>
              <p className="text-sm font-semibold mb-1" style={{ color: '#2563EB' }}>
                {edu.school} · {edu.location}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {edu.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;