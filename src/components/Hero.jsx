const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: '#E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 whitespace-nowrap" style={{ color: '#1E293B' }}>
              Hi, I Am <span style={{ color: '#1E293B' }}>Prajwal Mohan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{ color: '#2563EB' }}>
              Biomedical Engineer & Data Scientist
            </h2>
            <p className="text-base md:text-lg mb-4" style={{ color: '#1E293B' }}>
              Biomedical engineer committed to advancing healthcare through thoughtful design and engineering precision.
            </p>
            <p className="text-base md:text-lg mb-8" style={{ color: '#1E293B' }}>
              Striving to make every innovation a step toward better patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ backgroundColor: '#2563EB', color: '#F8FAFC' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1D4ED8'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563EB'}
              >
                View Projects
              </a>
              <a
                href="/Prajwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 text-center"
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
                📥 View Resume
              </a>
            </div>
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
