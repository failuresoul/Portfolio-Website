import profileImg from '../assets/profile.jpg'

const highlights = [
  {
    icon: '🏆',
    title: 'Competitive Programmer',
    desc: 'Active on Codeforces, AtCoder & CodeChef'
  },
  {
    icon: '🤖',
    title: 'AI/ML Researcher',
    desc: 'ANN, Deep Learning, NLP & Generative AI'
  },
  {
    icon: '💻',
    title: 'Full-Stack Builder',
    desc: 'React, Node.js, Laravel — end-to-end projects'
  },
  {
    icon: '🎓',
    title: 'CS Student at KUET',
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
              <img src={profileImg} alt="Nurul Absar Shadik" className="about-img" />
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
              I'm <strong style={{ color: 'var(--text-primary)' }}>Nurul Absar Shadik</strong>, a 3rd-year CSE student at KUET
              and developer passionate about AI research and building things that matter. I thrive at the intersection of 
              machine learning, full-stack development, and competitive programming.
            </p>

            <p className="about-description">
              Whether it's training neural networks for churn prediction, architecting a scalable web platform, 
              controlling a robot arm with Python, or crafting efficient algorithms for competitive programming — 
              I bring curiosity and dedication to everything I do.
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
