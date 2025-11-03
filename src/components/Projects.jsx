const Projects = () => {
  const projects = [
    {
      title: 'Emotion-Aware Tactile Feedback for Deaf Users',
      description: 'Developed a wearable system that combines EEG analysis with haptic feedback to help deaf users experience emotional cues in real time. Built with Python and Max/MSP to enhance accessibility through adaptive biofeedback.',
      tags: ['Python', 'EEG', 'Haptic Feedback', 'Librosa'],
      image: "/images/tactile-feedback.png",
      imagePosition: 'right',
    },
    {
      title: 'Simulated Brain MRI Phantom Analysis',
      description: 'Adigital brain phantom was simulated using MATLAB and the Modified Shepp-Logan model to analyze MRI image reconstruction and signal accuracy. Proton Density (PD) and T2 maps were generated and processed to create multiple noisy T2-weighted images, followed by voxel-wise curve fitting to evaluate estimation accuracy.',
      tags: ['MATLAB', 'Image Processing', 'MRI', 'Data Analysis'],
      image: "/images/MRI.jpeg",
      imagePosition: 'left',
    },
    {
      title: 'EEG Device Prototype Development',
      description: 'Engineered and validated an EEG headset prototype using AutoCAD and Python for precise signal acquisition. Focused on ergonomic design, device testing, and data reliability in neurotechnology applications.',
      tags: ['Python', 'Tableau', 'AutoCAD', '3D Modeling'],
      image: "/images/eeg.png",
      imagePosition: 'right',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#E5E7EB' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#1E293B' }}>
            Project I Have Made
          </h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                project.imagePosition === 'left' ? '' : ''
              }`}
            >
              {/* Text Content - Left Side */}
              {project.imagePosition === 'right' && (
                <div className="text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E293B' }}>
                    {project.title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-base md:text-lg" style={{ color: '#1E293B' }}>
                    {project.description}
                  </p>
                </div>
              )}

              {/* Image/Preview */}
              <div className={`relative ${project.imagePosition === 'left' ? 'order-first' : ''}`}>
                <div className="relative group">
                  {/* Blue border frame */}
                  <div className="rounded-2xl p-4 border-4" style={{ backgroundColor: '#F1F5F9', borderColor: '#2563EB' }}>
                    <div className="rounded-xl overflow-hidden aspect-video flex items-center justify-center" style={{ backgroundColor: '#E5E7EB' }}>
                      {project.image.startsWith('/') ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-9xl">{project.image}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content - Right Side */}
              {project.imagePosition === 'left' && (
                <div className="text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1E293B' }}>
                    {project.title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-base md:text-lg" style={{ color: '#1E293B' }}>
                    {project.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
