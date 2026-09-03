const projects = [
  {
    name: 'JudgeMate',
    emoji: '⚖️',
    description: 'A self-hosted competitive programming judge platform built with Laravel 12. Supports C++, Python & Java submissions, async judging via queue workers, role-based access (Admin/ProblemSetter/Contestant), contests with live scoreboards, badge awards, and external contest sync from Codeforces, AtCoder & CodeChef.',
    tech: ['Laravel 12', 'PHP', 'MySQL', 'Queue', 'Blade', 'REST API'],
    techColors: ['#ff6b6b', '#8c78f0', '#00c9a7', '#feca57', '#54a0ff', '#ff9f43'],
    stars: 1,
    github: 'https://github.com/failuresoul/JudgeMate',
    gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b6e 100%)',
    featured: true
  },
  {
    name: 'CampusHive',
    emoji: '🏫',
    description: 'A full-stack academic management web platform built with React + Node.js + Socket.io. Features three role-based portals (Admin, Teacher, Student), lecture file uploads, a lab report grading system (LabTrack), real-time live quizzes, study circles, and a Lost & Found portal.',
    tech: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Express'],
    techColors: ['#61dafb', '#68a063', '#010101', '#00c9a7', '#f0db4f'],
    stars: 0,
    github: 'https://github.com/failuresoul/CampusHive',
    gradient: 'linear-gradient(135deg, #0a2a1e 0%, #0a1a2e 100%)',
    featured: true
  },
  {
    name: 'Niryo Robot',
    emoji: '🤖',
    description: 'Python-based control system for the Niryo One/Ned robotic arm. Implements automated pick-and-place sequences, precision movement control via pyniryo SDK, and real-time feedback. Developed as part of a robotics engineering project.',
    tech: ['Python', 'pyniryo', 'ROS', 'OpenCV', 'Automation'],
    techColors: ['#3572A5', '#ff6b35', '#22314e', '#ff6b6b', '#54a0ff'],
    stars: 1,
    github: 'https://github.com/failuresoul/Niryo-Robot',
    gradient: 'linear-gradient(135deg, #0a1a3e 0%, #1a0a2e 100%)',
    featured: true
  },
  {
    name: 'GarmentGuard DB',
    emoji: '👔',
    description: 'A comprehensive database management system for garment industry operations. Built with PHP/Laravel for managing inventory, production tracking, quality control records, and supply chain data.',
    tech: ['PHP', 'Laravel', 'MySQL', 'SQL'],
    techColors: ['#8892bf', '#ff2d20', '#00c9a7', '#f29111'],
    stars: 0,
    github: 'https://github.com/failuresoul/GarmentGuard_DB',
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2e1a0a 100%)',
    featured: false
  },
  {
    name: 'Problem Solving',
    emoji: '🧠',
    description: 'A curated collection of competitive programming solutions in C++. Covers algorithms like Dynamic Programming, Graph Theory, Binary Search, Segment Trees, and more from platforms like Codeforces, AtCoder, and CodeChef.',
    tech: ['C++17', 'STL', 'Algorithms', 'Data Structures'],
    techColors: ['#00599c', '#f34b7d', '#54a0ff', '#feca57'],
    stars: 0,
    github: 'https://github.com/failuresoul/Problem-Solving',
    gradient: 'linear-gradient(135deg, #1a0a0a 0%, #2e0a0a 100%)',
    featured: false
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
    <section className="section" id="projects">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 0' }}>
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real-world applications ranging from competitive programming judges to robotics control systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.name} className="project-card">
              <ProjectBanner project={project} />

              <div className="project-card-body">
                <div className="project-card-top">
                  <h3 className="project-name">{project.name}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className="project-tech"
                      style={{
                        color: project.techColors[i] || 'var(--text-secondary)',
                        background: `${project.techColors[i]}15`,
                        border: `1px solid ${project.techColors[i]}30`
                      }}
                    >
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
                    🐙 GitHub
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
