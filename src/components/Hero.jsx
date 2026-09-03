import profileImg from '../assets/profile.jpg'

export default function Hero({ onViewResume }) {
  return (
    <section className="hero" id="home">
      <div className="grid-bg" />
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />

      <div className="container">
        <div className="hero-inner">
          {/* Left Content */}
          <div>
            <div className="hero-badge">
              <span className="dot" />
              Available for Opportunities
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text">Md. Nayeem</span>
              <br />
              Islam
            </h1>

            <p className="hero-subtitle">
              Full-Stack Developer & Competitive Programmer passionate about
              building scalable systems, solving hard problems, and exploring robotics.
            </p>

            <div className="hero-tags">
              {['React', 'Laravel', 'Node.js', 'C++', 'Python', 'Socket.io'].map(tag => (
                <span key={tag} className="hero-tag">
                  <span className="tag-dot" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>
              <button className="btn-secondary" onClick={onViewResume}>
                📄 My Resume
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">5+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">3+</div>
                <div className="hero-stat-label">Languages</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">∞</div>
                <div className="hero-stat-label">Problems Solved</div>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-glow" />
              <div className="hero-image-ring" />
              <div className="hero-image-ring-2" />
              <img
                src={profileImg}
                alt="Md. Nayeem Islam - Full Stack Developer"
                className="hero-img"
              />

              <div className="hero-floating-badge hero-floating-badge-1">
                <span className="floating-icon">⚡</span>
                Full-Stack Dev
              </div>

              <div className="hero-floating-badge hero-floating-badge-2">
                <span className="floating-icon">🤖</span>
                Robotics & AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
