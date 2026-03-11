const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-3" style={{ color: '#1E293B' }}>
              Prajwal Mohan
            </h1>
            <h2 className="text-lg md:text-xl font-semibold mb-6" style={{ color: '#2563EB' }}>
              Biomedical Engineer | Medical Technology &amp; Healthcare Systems
            </h2>
            <p className="text-base md:text-lg mb-8 leading-relaxed" style={{ color: '#1E293B' }}>
              I design and develop interdisciplinary healthcare technologies
              combining biosignal processing, wearable systems, and real-time
              engineering to create human-centered medical and assistive solutions.
            </p>
            <div className="flex flex-row gap-4 flex-wrap">
              <a
                href="https://www.linkedin.com/in/prajwal-m-52438b1a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ backgroundColor: '#2563EB', color: '#F8FAFC' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                🔗 LinkedIn
              </a>
              <a
                href="https://github.com/Prajwalpy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ backgroundColor: '#1E293B', color: '#F8FAFC' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1E293B'}
              >
                💻 GitHub
              </a>
              <a
                href="/Prajwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
                style={{ borderColor: '#2563EB', color: '#2563EB' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#2563EB';
                  e.currentTarget.style.color = '#F8FAFC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#2563EB';
                }}
              >
                📄 Resume
              </a>
            </div>
            <p className="text-sm md:text-base mt-6 italic" style={{ color: '#475569' }}>
              Open to Biomedical Engineering, Quality & Validation, R&D Medical Device,<br />
              and Healthcare Technology roles.
            </p>
          </div>

          {/* Right side - Image placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="aspect-square rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: '#2563EB' }}>
                <img 
                  src="/images/me.jpeg" 
                  alt="Prajwal Mohan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
