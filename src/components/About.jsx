import profileImg from '../assets/profile.jpg'

const highlights = [
  {
    icon: '🏆',
    title: 'Competitive Programmer',
    desc: 'Active on Codeforces, AtCoder & CodeChef'
  },
  {
    icon: '🤖',
    title: 'Robotics Enthusiast',
    desc: 'Niryo robot arm control with Python & ROS'
  },
  {
    icon: '💻',
    title: 'Full-Stack Builder',
    desc: 'React, Node.js, Laravel — end-to-end projects'
  },
  {
    icon: '🎓',
    title: 'CS Student',
    desc: 'Passionate about algorithms & system design'
  }
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-container">
            <div className="about-img-accent" />
            <div className="about-img-inner">
              <img src={profileImg} alt="Md. Nayeem Islam" className="about-img" />
              <div className="about-img-overlay" />
              <div className="about-img-border" />
            </div>
            <div className="about-img-accent-2" />
          </div>

          {/* Content */}
          <div className="about-content">
            <span className="section-tag">Who I Am</span>
            <h2 className="section-title">Turning Ideas Into <span className="gradient-text">Reality</span></h2>

            <p className="about-description">
              I'm <strong style={{ color: 'var(--text-primary)' }}>Md. Nayeem Islam</strong>, a passionate Computer Science student 
              and developer with a love for building things that matter. I thrive at the intersection of 
              competitive programming, full-stack development, and robotics.
            </p>

            <p className="about-description">
              Whether it's architecting a scalable web platform, controlling a robot arm with Python, 
              or optimizing algorithms for a competitive programming judge — I bring curiosity and 
              dedication to everything I do.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div key={h.title} className="about-highlight">
                  <div className="about-highlight-icon">{h.icon}</div>
                  <div className="about-highlight-text">
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/failuresoul"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                🐙 GitHub Profile
              </a>
              <a href="#contact" className="btn-secondary">
                Let's Talk →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
