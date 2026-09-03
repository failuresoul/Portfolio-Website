import { useState } from 'react'

const contactItems = [
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/failuresoul',
    href: 'https://github.com/failuresoul'
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'failuresoul@example.com',
    href: 'mailto:failuresoul@example.com'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bangladesh',
    href: null
  }
]

const socialLinks = [
  { icon: '🐙', href: 'https://github.com/failuresoul', label: 'GitHub' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to internships, collaborations, and exciting projects. Let's build something amazing together!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left - Info */}
          <div>
            <div className="contact-info">
              {contactItems.map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-item-text">
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Find me online:
              </p>
              <div className="social-links">
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={s.label}
                    title={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn-submit"
              style={{
                background: sent
                  ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                  : 'var(--gradient-hero)'
              }}
            >
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
