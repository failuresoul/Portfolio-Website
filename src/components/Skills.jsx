const skillGroups = [
  {
    icon: '🧠',
    color: 'rgba(124, 58, 237, 0.15)',
    title: 'AI, ML, NLP & LLMs',
    desc: 'Deep Learning, NLP, VLMs & GenAI',
    tags: ['NLP', 'LLMs', 'VLMs', 'Artificial Neural Networks', 'PyTorch / TensorFlow', 'HuggingFace', 'OpenCV']
  },
  {
    icon: '⚛️',
    color: 'rgba(6, 182, 212, 0.15)',
    title: 'Frontend',
    desc: 'Building responsive & beautiful UIs',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Socket.io Client']
  },
  {
    icon: '🛠️',
    color: 'rgba(124, 58, 237, 0.15)',
    title: 'Backend',
    desc: 'Scalable server-side solutions',
    tags: ['Node.js', 'Express.js', 'Laravel 12', 'PHP', 'REST APIs', 'Queue Workers']
  },
  {
    icon: '🗄️',
    color: 'rgba(245, 158, 11, 0.15)',
    title: 'Databases',
    desc: 'Data modeling & management',
    tags: ['MySQL', 'PostgreSQL', 'SQLite', 'Eloquent ORM', 'Migrations']
  },
  {
    icon: '🐍',
    color: 'rgba(34, 197, 94, 0.15)',
    title: 'Python & Robotics',
    desc: 'Automation, robots & scripting',
    tags: ['Python 3', 'pyniryo', 'ROS', 'OpenCV', 'Automation', 'PySerial']
  },
  {
    icon: '⚔️',
    color: 'rgba(239, 68, 68, 0.15)',
    title: 'Competitive Programming',
    desc: 'Algorithms & data structures',
    tags: ['C++17', 'STL', 'Graph Theory', 'DP', 'Binary Search', 'Segment Tree']
  },
  {
    icon: '🔧',
    color: 'rgba(168, 85, 247, 0.15)',
    title: 'DevOps & Tools',
    desc: 'Workflow & deployment',
    tags: ['Git', 'GitHub', 'Linux', 'Docker (basic)', 'Nginx', 'Composer']
  }
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A versatile toolkit spanning frontend, backend, databases, robotics, and competitive programming.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.title} className={`skill-card reveal-scale delay-${(i % 3) + 1}`}>
              <div className="skill-card-header">
                <div
                  className="skill-icon"
                  style={{ background: group.color }}
                >
                  {group.icon}
                </div>
                <div>
                  <h3>{group.title}</h3>
                  <p className="skill-card-desc">{group.desc}</p>
                </div>
              </div>
              <div className="skill-tags">
                {group.tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
