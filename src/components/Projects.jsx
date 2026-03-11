const Projects = () => {
  const projects = [
    {
      title: 'Emotion-Aware Tactile Feedback for Deaf Users',
      image: '/images/tactile-feedback.png',
      imagePosition: 'right',
      sections: [
        {
          label: 'Problem',
          value: 'Deaf users lack access to the emotional content conveyed through sound, limiting their ability to experience affective cues in real-time environments.',
        },
        {
          label: 'Engineering Objective',
          value: 'Design a closed-loop wearable system that captures biosignals, infers emotional state, and delivers corresponding haptic feedback in real time.',
        },
        {
          label: 'My Role',
          value: 'Led end-to-end system development including EEG signal acquisition, emotion classification pipeline, and haptic actuator integration.',
        },
        {
          label: 'System Architecture',
          value: 'EEG headset → signal preprocessing via Python/LSL → emotion classifier → haptic driver in Max/MSP → wearable actuator array.',
        },
        {
          label: 'Methods / Core Capabilities',
          value: 'Band-power feature extraction from EEG channels, multi-class emotion classification, and real-time haptic pattern mapping per emotional state.',
        },
        {
          label: 'Safety & Validation',
          value: 'Tested with users in controlled sessions; emotion labeling validated against self-reported affective states using structured protocol.',
        },
        {
          label: 'Engineering Impact',
          value: 'Demonstrated that non-auditory emotional cues can be conveyed through tactile channels with measurable user recognition accuracy.',
        },
        {
          label: 'Skills Demonstrated',
          value: 'Biosignal processing, wearable systems, human-centered design, real-time data streaming, system integration.',
        },
      ],
      technologies: ['Python', 'EEG', 'Max/MSP', 'Haptic Feedback', 'Librosa', 'LSL'],
    },
    {
      title: 'C.E.R.A. — Clinical Equipment Retrieval Assistant',
      image: '/images/cera.png',
      imagePosition: 'left',
      sections: [
        {
          label: 'Problem',
          value: 'Healthcare staff spend significant time locating movable clinical equipment, causing delays in patient care and reducing operational efficiency across hospital units.',
        },
        {
          label: 'Engineering Objective',
          value: 'Develop an intelligent equipment retrieval assistant that tracks, locates, and routes clinical staff to equipment in real time within hospital environments.',
        },
        {
          label: 'My Role',
          value: 'Designed the full system architecture, developed the real-time tracking backend, and built the staff-facing retrieval interface.',
        },
        {
          label: 'System Architecture',
          value: 'Sensor layer (RFID/BLE tags on equipment) → edge aggregation nodes → centralized location backend → web interface for staff retrieval requests.',
        },
        {
          label: 'Methods / Core Capabilities',
          value: 'Real-time location triangulation, equipment status monitoring, and natural language query interface for equipment retrieval requests.',
        },
        {
          label: 'Safety & Validation',
          value: 'Validated against known equipment positions in a simulated ward layout; benchmarked false-positive retrieval rate and system response latency.',
        },
        {
          label: 'Engineering Impact',
          value: 'Reduced simulated equipment search time by over 60%; architecture designed for scalability across multi-floor hospital units.',
        },
        {
          label: 'Skills Demonstrated',
          value: 'Systems engineering, IoT integration, backend development, clinical workflow design, human-centered interface design.',
        },
      ],
      technologies: ['Python', 'RFID/BLE', 'Flask', 'React', 'PostgreSQL'],
    },
    {
      title: 'CAPTAVATE — EEG-Based Focus Aid Wearable',
      image: '/images/eeg.png',
      imagePosition: 'right',
      sections: [
        {
          label: 'Problem',
          value: 'Attention and focus disorders often lack real-time, objective feedback mechanisms that help users regulate cognitive engagement. Existing solutions provide delayed or subjective assessments rather than continuous physiological monitoring.',
        },
        {
          label: 'Engineering Objective',
          value: 'Develop and validate an EEG-based wearable prototype capable of detecting attention states and delivering real-time neurofeedback based on brain activity.',
        },
        {
          label: 'My Role',
          value: 'Performed design verification testing for attention-detection algorithms, evaluated algorithm accuracy using MATLAB signal analysis workflows, correlated predicted attention states against recorded EEG signals, and produced technical documentation supporting the device development lifecycle.',
        },
        {
          label: 'Methods & Engineering Work',
          value: 'EEG signal acquisition and preprocessing, attention-state prediction modeling, statistical comparison of actual vs. predicted outputs, and real-time neurofeedback validation testing.',
        },
        {
          label: 'Verification & Validation (V&V)',
          value: 'Conducted algorithm verification tests to assess prediction accuracy, quantified correlation between measured EEG signals and model outputs, and supported verification activities aligned with medical device development practices.',
        },
        {
          label: 'Documentation & Compliance',
          value: 'Authored validation reports following Good Documentation Practices (GDP), maintained traceable engineering records supporting development phases, and contributed to structured device lifecycle documentation.',
        },
        {
          label: 'Engineering Impact',
          value: 'Demonstrated feasibility of real-time attention detection using wearable EEG, supporting development of adaptive neurofeedback assistive technologies.',
        },
        {
          label: 'Skills Demonstrated',
          value: 'Medical Device Verification · Biosignal Analysis · Algorithm Validation · Technical Documentation · Neurotechnology',
        },
      ],
      technologies: ['MATLAB', 'EEG Signal Processing', 'Algorithm Verification', 'Neurofeedback Systems'],
    },
  ];

  const CaseStudy = ({ label, value }) => (
    <div className="mb-3">
      <span className="font-bold text-sm" style={{ color: '#1E293B' }}>{label}: </span>
      <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>{value}</span>
    </div>
  );

  const ProjectText = ({ project }) => (
    <div className="text-left">
      <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#1E293B' }}>
        {project.title}
      </h3>
      <div className="mb-6">
        {project.sections.map((s, i) => (
          <CaseStudy key={i} label={s.label} value={s.value} />
        ))}
      </div>
      <div>
        <span className="font-bold text-sm" style={{ color: '#1E293B' }}>Technical Stack: </span>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectImage = ({ project }) => (
    <div className="sticky top-24 self-start">
      <div className="relative group">
        <div className="rounded-2xl p-4 border-4" style={{ backgroundColor: '#F1F5F9', borderColor: '#2563EB' }}>
          <div className="rounded-xl overflow-hidden flex items-center justify-center p-2" style={{ backgroundColor: '#E5E7EB' }}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
            Projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#475569' }}>
            Engineering case studies across biomedical systems, wearable devices, and clinical technology.
          </p>
        </div>

        <div className="mt-16 space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              {project.imagePosition === 'right' ? (
                <>
                  <ProjectText project={project} />
                  <ProjectImage project={project} />
                </>
              ) : (
                <>
                  <ProjectImage project={project} />
                  <ProjectText project={project} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
