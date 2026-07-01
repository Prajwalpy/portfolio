const Certifications = () => {
  const certs = [
    {
      title: 'Quality Management for Operational Excellence',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      url: 'https://www.linkedin.com/learning/certificates/3c3a1324c3fd32bcf9d6a121178467786014fe909d3f22a4a185bc3cb802c2c2',
      tag: 'Quality',
    },
    {
      title: 'Leading Quality in Patient Safety: Systems Thinking and Design',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      url: 'https://www.linkedin.com/learning/certificates/ab42597c96e3ff9974c816bb2a3964d947e46aa32225e6b35a76e5bc36b0a520',
      tag: 'Patient Safety',
    },
    {
      title: 'Six Sigma Yellow Belt',
      issuer: 'LinkedIn Learning',
      date: 'Jun 2026',
      url: 'https://www.linkedin.com/learning/certificates/7f3b2287718122b672bdf56ca7d287aa16e3ac0a5583128dfe5d5e169f2063e0',
      tag: 'Six Sigma',
    },
    {
      title: 'Spark Challenge Skill Badge: Project Management',
      issuer: 'Arizona State University',
      date: '2025',
      url: 'https://api.credid.asu.edu/v1/public/assertions/1069afc0-4ba9-46fa-8a35-878bc45f1995?email=pmohan12%40asu.edu',
      tag: 'ASU Badge',
    },
    {
      title: 'Spark Challenge Skill Badge: AI Architect',
      issuer: 'Arizona State University',
      date: '2025',
      url: 'https://api.credid.asu.edu/v1/public/assertions/62461a9d-ad09-4414-aef3-f36803da1e93?email=pmohan12%40asu.edu',
      tag: 'ASU Badge',
    },
  ];

  const tagColors = {
    'Quality':        { bg: '#EFF6FF', text: '#1D4ED8', border: '#BFDBFE' },
    'Patient Safety': { bg: '#F0FDF4', text: '#15803D', border: '#BBF7D0' },
    'Six Sigma':      { bg: '#FFF7ED', text: '#C2410C', border: '#FED7AA' },
    'ASU Badge':      { bg: '#FDF4FF', text: '#7E22CE', border: '#E9D5FF' },
  };

  return (
    <section id="certifications" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            Certifications
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#475569' }}>
            Verified credentials in quality management, patient safety, and process improvement.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => {
            const colors = tagColors[cert.tag];
            return (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0"
                      style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
                    >
                      {cert.tag}
                    </span>
                    {/* External link icon */}
                    <svg
                      className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: '#2563EB' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <h3 className="text-base font-semibold leading-snug mb-3" style={{ color: '#1E293B' }}>
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                  <span className="text-sm font-medium" style={{ color: '#475569' }}>{cert.issuer}</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded-md" style={{ backgroundColor: '#F1F5F9', color: '#64748B' }}>
                    {cert.date}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;