const projects = [
  {
    name: 'JudgeMate',
    emoji: '⚖️',
    description: 'A self-hosted competitive programming judge platform built with Laravel 12. Supports C++, Python & Java submissions, async judging via queue workers, role-based access (Admin/ProblemSetter/Contestant), contests with live scoreboards, badge awards, and external contest sync from Codeforces, AtCoder & CodeChef.',
    tech: ['Laravel 12', 'PHP', 'MySQL', 'Queue', 'Blade', 'REST API'],
    stars: 1,
    github: 'https://github.com/failuresoul/JudgeMate',
    gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b6e 100%)',
    featured: true
  },
  {
    name: 'FitConnectPro',
    emoji: '💪',
    description: 'Full-stack fitness & health tracking platform with ML-driven activity recognition and personalized workout recommendations. Features real-time metric tracking, calorie expenditure calculations, and progress analytics.',
    tech: ['Python', 'React', 'Machine Learning', 'Data Analytics', 'REST API'],
    stars: 1,
    github: 'https://github.com/failuresoul',
    gradient: 'linear-gradient(135deg, #0a2e1e 0%, #1e3a5f 100%)',
    featured: true
  },
  {
    name: 'CampusHive',
    emoji: '🏫',
    description: 'A full-stack academic management web platform built with React + Node.js + Socket.io. Features three role-based portals (Admin, Teacher, Student), lecture file uploads, a lab report grading system (LabTrack), real-time live quizzes, study circles, and a Lost & Found portal.',
    tech: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Express'],
    stars: 0,
    github: 'https://github.com/failuresoul/CampusHive',
    gradient: 'linear-gradient(135deg, #0a2a1e 0%, #0a1a2e 100%)',
    featured: true
  },
  {
    name: 'GarmentGuard DB',
    emoji: '👔',
    description: 'A comprehensive database management system for garment industry operations. Built with PHP/Laravel for managing inventory, production tracking, quality control records, and supply chain data.',
    tech: ['PHP', 'Laravel', 'MySQL', 'SQL'],
    stars: 0,
    github: 'https://github.com/failuresoul/GarmentGuard_DB',
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2e1a0a 100%)',
    featured: true
  },
  {
    name: 'Portfolio Website',
    emoji: '🌐',
    description: 'Modern, high-performance personal portfolio built with React and Vite. Features an interactive 28-node dynamic constellation star map of skills, light/dark dual theme engine, smooth scroll transitions, and clean responsive layouts.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS3', 'Canvas API'],
    stars: 0,
    github: 'https://github.com/failuresoul/Portfolio-Website',
    gradient: 'linear-gradient(135deg, #1e1035 0%, #0d1b3e 100%)',
    featured: true
  },
  {
    name: 'Sylhet Association of KUET',
    emoji: '🤝',
    description: 'Official community platform and management portal for the Sylhet Association of KUET. Facilitates student community connection, regional member directory, event announcements, and collaborative student welfare initiatives.',
    tech: ['Web Development', 'JavaScript', 'Database', 'Community Portal'],
    stars: 0,
    github: 'https://github.com/failuresoul',
    gradient: 'linear-gradient(135deg, #0a251a 0%, #14352a 100%)',
    featured: true
  },
  {
    name: 'Tiny Computer (CPU Design)',
    emoji: '💻',
    description: 'A miniature computer designed and implemented from first principles using NOT, AND, and OR logic gates. Features a complete Arithmetic Logic Unit (ALU), Booth\'s multiplication algorithm implementation, and digital computer architecture.',
    tech: ['Digital Logic', 'ALU', 'Booth Algorithm', 'Computer Architecture'],
    stars: 0,
    github: 'https://github.com/failuresoul/Tiny_Computer',
    gradient: 'linear-gradient(135deg, #1f1a10 0%, #3a2e15 100%)',
    featured: true
  },
  {
    name: 'Churn Prediction (ANN)',
    emoji: '🧠',
    description: 'Deep Learning customer churn prediction model built using Artificial Neural Networks (ANN). Features exploratory data analysis, data normalization, dropout regularization, and binary classification optimization on real banking data.',
    tech: ['Python', 'TensorFlow', 'Keras', 'ANN', 'Pandas', 'Scikit-learn'],
    stars: 1,
    github: 'https://github.com/failuresoul/Churn-Prediction-by-using-ANN',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
    featured: true
  },
  {
    name: 'Niryo Robot',
    emoji: '🤖',
    description: 'Python-based control system for the Niryo One/Ned robotic arm. Implements automated pick-and-place sequences, precision movement control via pyniryo SDK, and real-time feedback. Developed as part of a robotics engineering project.',
    tech: ['Python', 'pyniryo', 'ROS', 'OpenCV', 'Automation'],
    stars: 1,
    github: 'https://github.com/failuresoul/Niryo-Robot',
    gradient: 'linear-gradient(135deg, #0a1a3e 0%, #1a0a2e 100%)',
    featured: true
  }
]

function ProjectBanner({ project }) {
  return (
    <div
      className="project-card-banner"
      style={{ background: project.gradient }}
    >
      <div style={{
        fontSize: '72px',
        filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))',
        animation: 'float 6s ease-in-out infinite'
      }}>
        {project.emoji}
      </div>
      {project.stars > 0 && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          background: 'rgba(245, 158, 11, 0.2)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '50px',
          fontSize: '12px',
          color: '#f59e0b',
          fontWeight: 600
        }}>
          ⭐ {project.stars}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header matching About Me, Education & Skills */}
        <div className="projects-header-top reveal-on-scroll">
          <h2 className="projects-section-big-title">Featured Projects</h2>
          <p className="projects-section-sub">
            Real-world applications ranging from competitive programming judges to robotics control systems
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.name} className={`project-card reveal-on-scroll delay-${(i % 3) + 1}`}>
              <ProjectBanner project={project} />

              <div className="project-card-body">
                <div className="project-card-top">
                  <h3 className="project-name">{project.name}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/failuresoul"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Repositories →
          </a>
        </div>
      </div>
    </section>
  )
}
