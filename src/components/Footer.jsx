export default function Footer({ onViewResume }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">&lt;Shadik /&gt;</span>

          <p className="footer-text">
            © 2026 Nurul Absar Shadik · Built with React + Vite ⚡
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <button
              onClick={onViewResume}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: '14px', fontFamily: 'inherit', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent-secondary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              Resume
            </button>
            <a href="https://github.com/failuresoul" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
