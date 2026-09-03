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
              Available for Opportunities & Research
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="gradient-text">Nurul Absar</span>
              <br />
              Shadik
            </h1>

            <div className="hero-headline">
              <strong>CSE Student at KUET · AI/ML Researcher · Full-Stack Developer</strong>
            </div>

            <p className="hero-subtitle">
              Exploring <strong>Artificial Intelligence, Machine Learning, Generative AI, and Robotics</strong> while building intelligent, scalable, and impactful systems.
            </p>

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
                <div className="hero-stat-num">400+</div>
                <div className="hero-stat-label">Problems Solved</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">20+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">8+</div>
                <div className="hero-stat-label">Languages</div>
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
                alt="Nurul Absar Shadik - AI/ML Researcher & Full Stack Developer"
                className="hero-img"
              />

              <div className="hero-floating-badge hero-floating-badge-1">
                <span className="floating-icon">🧠</span>
                AI/ML Researcher
              </div>

              <div className="hero-floating-badge hero-floating-badge-2">
                <span className="floating-icon">🤖</span>
                AI / ML Enthusiast
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
