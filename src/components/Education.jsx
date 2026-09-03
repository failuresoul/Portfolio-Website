const educationData = [
  {
    level: 'University',
    icon: '🎓',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Khulna University of Engineering & Technology (KUET)',
    location: 'Khulna, Bangladesh',
    period: '2022 – Present',
    grade: 'Ongoing',
    color: '#7c3aed',
    highlights: [
      'Department of Computer Science & Engineering',
      'Batch 22 (Session 2022–2023)',
      'Active in competitive programming & club activities',
      'Working on AI/ML and full-stack development projects'
    ]
  },
  {
    level: 'College (HSC)',
    icon: '🏫',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Notre Dame College',
    location: 'Dhaka, Bangladesh',
    period: '2019 – 2021',
    grade: 'Science Group',
    color: '#06b6d4',
    highlights: [
      'Science Group with Mathematics',
      'Developed strong foundation in Physics & Mathematics',
      'Participated in academic competitions'
    ]
  },
  {
    level: 'School (SSC)',
    icon: '📚',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Govt. Laboratory High School',
    location: 'Dhaka, Bangladesh',
    period: 'Up to 2019',
    grade: 'Science Group',
    color: '#f59e0b',
    highlights: [
      'Science Group with Mathematics',
      'Class valedictorian participant',
      'Strong academic performance'
    ]
  }
]

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <span className="section-tag">Academic Journey</span>
        <h2 className="section-title">
          Education & <span className="gradient-text">Background</span>
        </h2>
        <p className="section-subtitle">
          From school foundations to university innovation — a path driven by curiosity.
        </p>

        <div className="education-timeline">
          {educationData.map((edu, i) => (
            <div key={i} className="education-item">
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

                <ul className="edu-highlights">
                  {edu.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
