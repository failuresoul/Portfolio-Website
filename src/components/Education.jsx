const educationData = [
  {
    level: 'University',
    icon: '🎓',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Khulna University of Engineering & Technology (KUET)',
    location: 'Khulna, Bangladesh',
    period: '2023 – Present',
    grade: 'Ongoing · Batch 22',
    color: '#7c3aed'
  },
  {
    level: 'College (HSC)',
    icon: '🏫',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Jalalabad Cantonment Public School and College',
    location: 'Sylhet, Bangladesh',
    period: '2020 – 2022',
    grade: 'GPA 5.00 / 5.00 · Science Group',
    color: '#06b6d4'
  },
  {
    level: 'School (SSC)',
    icon: '📚',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Rukeya Khatun Lyceum School',
    location: 'Barlekha, Moulvibazar',
    period: '2018 – 2020',
    grade: 'GPA 5.00 / 5.00 · General Scholarship',
    color: '#f59e0b'
  }
]

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        {/* Top Prominent Section Header (matching About Me section) */}
        <div className="education-header-top reveal-on-scroll">
          <h2 className="education-section-big-title">Education</h2>
          <p className="education-section-sub">Academic journey &amp; scholastic milestones</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, i) => (
            <div key={i} className={`education-item reveal-on-scroll delay-${i + 1}`}>
              {/* Timeline connector */}
              <div className="edu-connector">
                <div className="edu-dot" style={{ background: edu.color, boxShadow: `0 0 16px ${edu.color}80` }}>
                  <span className="edu-dot-icon">{edu.icon}</span>
                </div>
                {i < educationData.length - 1 && (
                  <div className="edu-line" />
                )}
              </div>

              {/* Card */}
              <div className="education-card">
                <div className="education-card-header">
                  <div className="edu-level-badge" style={{ background: `${edu.color}20`, color: edu.color, borderColor: `${edu.color}40` }}>
                    {edu.level}
                  </div>
                  <span className="edu-period">{edu.period}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">
                  <span className="edu-inst-icon">🏛️</span>
                  <span>{edu.institution}</span>
                </div>
                <div className="edu-location">
                  <span>📍 {edu.location}</span>
                  <span className="edu-grade-badge" style={{ background: `${edu.color}20`, color: edu.color }}>
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
