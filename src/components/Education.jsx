const educationData = [
  {
    level: 'University',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Khulna University of Engineering & Technology (KUET)',
    location: 'Khulna, Bangladesh',
    period: '2023 – Present',
    grade: 'Ongoing · Batch 22'
  },
  {
    level: 'College (HSC)',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Jalalabad Cantonment Public School and College',
    location: 'Sylhet, Bangladesh',
    period: '2020 – 2022',
    grade: 'GPA 5.00 / 5.00 · Science Group'
  },
  {
    level: 'School (SSC)',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Rukeya Khatun Lyceum School',
    location: 'Barlekha, Moulvibazar',
    period: '2018 – 2020',
    grade: 'GPA 5.00 / 5.00 · General Scholarship'
  }
]

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        {/* Top Prominent Section Header */}
        <div className="education-header-top reveal-on-scroll">
          <h2 className="education-section-big-title">Education</h2>
          <p className="education-section-sub">Academic journey &amp; scholastic milestones</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, i) => (
            <div key={i} className={`education-item reveal-on-scroll delay-${i + 1}`}>
              {/* Clean Minimalist Timeline Connector */}
              <div className="edu-connector">
                <div className="edu-dot">
                  <span className="edu-dot-inner" />
                </div>
                {i < educationData.length - 1 && (
                  <div className="edu-line" />
                )}
              </div>

              {/* Clean Refined Card with Design Shade */}
              <div className="education-card">
                <div className="edu-card-top-shade" />
                <div className="education-card-header">
                  <div className="edu-level-badge">
                    {edu.level}
                  </div>
                  <span className="edu-period">📅 {edu.period}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">
                  <span className="edu-inst-icon">🏛️</span>
                  <span>{edu.institution}</span>
                </div>
                <div className="edu-location">
                  <span>📍 {edu.location}</span>
                  <span className="edu-grade-badge">
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
