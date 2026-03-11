const Projects = () => {
  const projects = [
    {
      title: 'C.E.R.A. — Clinical Equipment Retrieval Assistant',
      subtitle: 'Clinical AI System for Biomedical Engineering Workflows',
      image: '/images/cera.png',
      imagePosition: 'right',
      sections: [
        {
          label: 'Problem',
          value: 'Biomedical and clinical engineers rely on hundreds of pages of manufacturer service manuals to troubleshoot ICU ventilators. Critical information such as error codes, repair procedures, and safety warnings is difficult to locate quickly, increasing equipment downtime and operational risk.',
        },
        {
          label: 'Engineering Approach',
          value: 'Developed an enterprise-grade Retrieval-Augmented Generation (RAG) system designed as a clinical engineering workflow assistant. Built hybrid semantic + keyword retrieval pipelines to accurately identify error codes and part numbers, implemented structured parsing of ventilator manuals, designed context-aware prompt routing to maintain device-specific troubleshooting accuracy, and converted technical documentation into structured diagnostic workflows and procedural checklists.',
        },
        {
          label: 'Safety & Validation',
          value: 'Implemented risk-management guardrails inspired by FDA and ISO 14971 principles. Automatically extracts and prioritizes WARNING / CAUTION / DANGER safety statements. Prevents cross-device instruction errors through device-aware validation logic. Ensures traceability by citing source manuals during response generation.',
        },
        {
          label: 'Impact',
          value: 'Reduced manual documentation search time for troubleshooting workflows. Enabled automated CMMS-ready maintenance documentation generation. Demonstrated safe application of AI within clinical engineering environments.',
        },
      ],
      technologies: ['Python', 'LlamaIndex', 'Google Gemini 1.5 Flash', 'ChromaDB', 'LlamaParse', 'BAAI/bge-small-en-v1.5', 'Streamlit'],
      engineeringSkills: [
        'System Architecture Design',
        'Clinical Workflow Engineering',
        'Risk Analysis (ISO 14971 Concepts)',
        'Safety-Critical AI Design',
        'Information Retrieval System Design',
        'Human Factors Consideration',
        'Technical Traceability & Documentation',
      ],
    },
    {
      title: 'Emotion-Aware Tactile Feedback System for Deaf Users',
      subtitle: 'Closed-Loop Wearable Neurotechnology System',
      image: '/images/tactile-feedback.png',
      imagePosition: 'left',
      sections: [
        {
          label: 'Problem',
          value: 'Deaf users experience limited emotional perception during live acoustic events due to lack of sensory translation of sound-based emotional cues.',
        },
        {
          label: 'Engineering Approach',
          value: 'Designed a closed-loop wearable biofeedback system integrating EEG sensing with adaptive haptic feedback. System architecture included real-time EEG acquisition using Muse headband, signal processing pipelines computing Frontal Alpha Asymmetry and Theta/Beta Ratio, and adaptive vibration control translating emotional states into tactile feedback.',
        },
        {
          label: 'Validation & Experimentation',
          value: 'Developed experimental evaluation workflows, analyzed physiological and interaction data to assess responsiveness, and iteratively refined feedback mapping based on user engagement metrics.',
        },
        {
          label: 'Impact',
          value: 'Demonstrated feasibility of emotion-aware assistive neurotechnology. Advanced human-centered wearable system design for accessibility applications.',
        },
      ],
      technologies: ['Python', 'EEG (Muse)', 'Max/MSP', 'Haptic Hardware', 'LSL', 'Biosignal Analysis'],
      engineeringSkills: [
        'Closed-Loop Control System Design',
        'Biosignal Processing & Feature Engineering',
        'Experimental Design & Validation',
        'Human-Centered Engineering',
        'Real-Time System Integration',
        'Physiological Data Interpretation',
      ],
    },
    {
      title: 'CAPTAVATE — Wearable EEG Device Prototype',
      subtitle: 'Design Verification & Validation Project',
      image: '/images/eeg.png',
      imagePosition: 'right',
      sections: [
        {
          label: 'Objective',
          value: 'Develop and validate an EEG-based wearable system capable of detecting attention states for neurofeedback applications.',
        },
        {
          label: 'Engineering Work',
          value: 'Executed design verification testing on attention-detection algorithms, correlated predicted vs observed outputs to validate system accuracy, built validation datasets and performed statistical analysis in MATLAB, and supported prototype development lifecycle activities.',
        },
        {
          label: 'Quality & Documentation',
          value: 'Authored validation reports following Good Documentation Practices (GDP) and created structured technical documentation supporting traceability.',
        },
        {
          label: 'Engineering Outcome',
          value: 'Verified algorithm performance for real-time neurofeedback use. Demonstrated understanding of medical device V&V workflows.',
        },
      ],
      technologies: ['MATLAB', 'EEG Signal Processing', 'Algorithm V&V', 'Neurofeedback Systems', 'GDP Documentation'],
      engineeringSkills: [
        'Design Verification & Validation (V&V)',
        'Test Protocol Development',
        'Statistical Performance Evaluation',
        'Algorithm Validation Methodology',
        'Medical Device Documentation (GDP)',
        'Requirements Verification',
      ],
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
      <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#1E293B' }}>
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="text-sm font-medium mb-6" style={{ color: '#2563EB' }}>
          {project.subtitle}
        </p>
      )}
      <div className="mb-6">
        {project.sections.map((s, i) => (
          <CaseStudy key={i} label={s.label} value={s.value} />
        ))}
      </div>
      {project.engineeringSkills && (
        <div className="mb-6">
          <span className="font-bold text-sm" style={{ color: '#1E293B' }}>Engineering Skills Applied:</span>
          <ul className="mt-2 space-y-1">
            {project.engineeringSkills.map((skill, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#2563EB' }} />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
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
