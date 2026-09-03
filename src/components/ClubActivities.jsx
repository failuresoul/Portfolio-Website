const clubActivities = [
  {
    role: 'Assistant General Secretary',
    organization: 'KMinds — KUET Mind & Intelligence Society',
    period: '2023 – Present',
    icon: '🧠',
    color: '#7c3aed',
    category: 'Leadership',
    desc: 'Serving as Assistant General Secretary of KMinds, the AI/ML focused student society at KUET. Coordinating society events, workshops, and knowledge-sharing sessions on machine learning, artificial intelligence, and cognitive computing.',
    tags: ['Leadership', 'AI/ML', 'Event Management', 'Community Building']
  },
  {
    role: 'Batch Representative',
    organization: 'Hack Batch — KUET CSE Batch 22',
    period: '2022 – Present',
    icon: '🚀',
    color: '#06b6d4',
    category: 'Representation',
    desc: 'Elected Batch Representative for the Hack Batch (CSE Batch 22) at KUET. Representing the batch in departmental activities, coordinating hackathons, team building events, and fostering technical collaboration within the batch.',
    tags: ['Batch Rep', 'Hackathons', 'Team Building', 'Coordination']
  },
  {
    role: 'Assistant Contest Manager',
    organization: 'SGIPC — KUET Inter-University Programming Contest',
    period: '2023 – Present',
    icon: '⚖️',
    color: '#f59e0b',
    category: 'Contest Organizing',
    desc: 'Assisting in organizing and managing programming contests at KUET, including problem set preparation, judge system coordination, and contestant management. Working to ensure smooth conduct of competitive programming events.',
    tags: ['Contest Management', 'Competitive Programming', 'Problem Setting', 'Judge System']
  }
]

const categoryColors = {
  'Leadership': { bg: 'rgba(124, 58, 237, 0.15)', border: 'rgba(124, 58, 237, 0.4)', text: '#a855f7' },
  'Representation': { bg: 'rgba(6, 182, 212, 0.15)', border: 'rgba(6, 182, 212, 0.4)', text: '#06b6d4' },
  'Contest Organizing': { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.4)', text: '#f59e0b' }
}

export default function ClubActivities() {
  return (
    <section className="section club-section" id="clubs">
      <div className="container">
        <span className="section-tag">Beyond Academics</span>
        <h2 className="section-title">
          Club & <span className="gradient-text">Activities</span>
        </h2>
        <p className="section-subtitle">
          Leadership roles, community building, and competitive programming — shaping skills beyond the classroom.
        </p>

        <div className="club-grid">
          {clubActivities.map((activity, i) => {
            const catColor = categoryColors[activity.category]
            return (
              <div key={i} className="club-card" style={{ '--club-color': activity.color }}>
                {/* Top accent line */}
                <div className="club-card-accent" style={{ background: `linear-gradient(90deg, ${activity.color}, transparent)` }} />

                <div className="club-card-top">
                  <div className="club-icon-wrap" style={{ background: `${activity.color}20`, border: `1px solid ${activity.color}40` }}>
                    <span className="club-icon">{activity.icon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      className="club-category-badge"
                      style={{ background: catColor.bg, border: `1px solid ${catColor.border}`, color: catColor.text }}
                    >
                      {activity.category}
                    </div>
                    <span className="club-period">📅 {activity.period}</span>
                  </div>
                </div>

                <h3 className="club-role">{activity.role}</h3>
                <p className="club-org" style={{ color: activity.color }}>
                  🏛️ {activity.organization}
                </p>
                <p className="club-desc">{activity.desc}</p>

                <div className="club-tags">
                  {activity.tags.map((tag, j) => (
                    <span key={j} className="club-tag" style={{ background: `${activity.color}15`, color: activity.color, borderColor: `${activity.color}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
