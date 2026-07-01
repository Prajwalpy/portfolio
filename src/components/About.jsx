const About = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/prajwalm-bme/',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      isImage: true
    },
    { 
      name: 'Github', 
      url: 'https://github.com/Prajwalpy',
      isSvg: true
    },
    { 
      name: 'Gmail', 
      url: 'mailto:prajwalm021299@gmail.com', 
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
      isImage: true
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            About Me
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed" style={{ color: '#1E293B' }}>
              I am a Quality and Validation Engineer with a foundation in{' '}
              <span className="font-semibold" style={{ color: '#2563EB' }}>biomedical engineering</span>,{' '}
              <span className="font-semibold" style={{ color: '#2563EB' }}>regulatory compliance</span>, and quality management systems for medical devices.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#1E293B' }}>
              My work spans{' '}
              <span className="font-semibold" style={{ color: '#2563EB' }}>Design History File authoring</span>,{' '}
              <span className="font-semibold" style={{ color: '#2563EB' }}>risk management per ISO 14971</span>, nonconformance and change control, and V&V execution applied hands-on across a full device development lifecycle.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#1E293B' }}>
              I also independently built{' '}
              <span className="font-semibold" style={{ color: '#2563EB' }}>TraceFlow AI</span>, a full-stack eQMS platform implementing ISO 13485, ISO 14971, IEC 62304, and 21 CFR Parts 820/803/11 demonstrating end-to-end understanding of regulatory requirements as enforced system logic.
            </p>
          </div>

          <div id="contact" className="rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-24 border border-slate-100" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1E293B' }}>Let's Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  style={{ backgroundColor: '#F1F5F9' }}
                >
                  {link.isSvg ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-8 h-8" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      style={{ color: '#1E293B' }}
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ) : (
                    <img 
                      src={link.iconUrl} 
                      alt={link.name}
                      className="w-8 h-8"
                    />
                  )}
                  <span className="font-semibold" style={{ color: '#1E293B' }}>{link.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="/Prajwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: '#2563EB', color: '#F8FAFC' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                📥 View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;