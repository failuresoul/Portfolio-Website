import profileImg from '../assets/profile.jpg'

function printResume() {
  window.print()
}

export default function Resume({ onBack }) {
  return (
    <div className="resume-page">
      <div className="container">
        {/* Header row with back button */}
        <div className="resume-header-row no-print">
          <button className="btn-secondary" onClick={onBack}>
            ← Back to Portfolio
          </button>
          <button className="btn-primary" onClick={printResume}>
            🖨️ Print / Download PDF
          </button>
        </div>

        <div className="resume-container" id="resume-content">
          {/* ── TOP HEADER ── */}
          <div className="resume-top">
            <div className="resume-top-inner">
              <img src={profileImg} alt="Md. Nayeem Islam" className="resume-avatar" />
              <div className="resume-name-block">
                <h1>Md. Nayeem Islam</h1>
                <p className="title">Full-Stack Developer · Competitive Programmer · Robotics Enthusiast</p>
                <div className="resume-contact-chips">
                  <span className="resume-chip">
                    🌐 <a href="https://github.com/failuresoul" target="_blank" rel="noopener noreferrer">github.com/failuresoul</a>
                  </span>
                  <span className="resume-chip">
                    📍 Bangladesh
                  </span>
                  <span className="resume-chip">
                    💼 Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── BODY ── */}
          <div className="resume-body">
            {/* ── MAIN COLUMN ── */}
            <div className="resume-main">

              {/* Summary */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Professional Summary</h2>
                <p className="resume-summary">
                  Motivated Computer Science student and full-stack developer with hands-on experience building
                  production-grade web applications, robotics control systems, and competitive programming tools.
                  Proficient in <strong style={{ color: 'var(--accent-secondary)' }}>React, Node.js, Laravel, Python, and C++</strong>.
                  Strong algorithmic thinking from competitive programming combined with real-world engineering
                  skills. Passionate about creating impactful software and solving challenging problems.
                </p>
              </div>

              {/* Experience */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Experience & Projects</h2>

                <div className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <p className="resume-exp-title">Backend Engineer — JudgeMate</p>
                      <p className="resume-exp-company">Competitive Programming Judge Platform</p>
                    </div>
                    <span className="resume-exp-period">Jul – Sep 2026</span>
                  </div>
                  <div className="resume-exp-desc">
                    <ul>
                      <li>Built a self-hosted online judge with Laravel 12 supporting C++, Python, and Java submissions evaluated asynchronously via queue workers</li>
                      <li>Implemented role-based access control (Admin / ProblemSetter / Contestant) with contest management and live scoreboards</li>
                      <li>Integrated external APIs to sync contests from Codeforces, AtCoder, and CodeChef; developed badge award system</li>
                      <li>Designed normalized database schema with Eloquent ORM for problem sets, submissions, and standings</li>
                    </ul>
                  </div>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <p className="resume-exp-title">Full-Stack Developer — CampusHive</p>
                      <p className="resume-exp-company">Academic Management Platform</p>
                    </div>
                    <span className="resume-exp-period">Jun – Jul 2026</span>
                  </div>
                  <div className="resume-exp-desc">
                    <ul>
                      <li>Architected full-stack academic platform with React frontend, Node.js/Express backend, and Socket.io for real-time features</li>
                      <li>Developed three role-based portals (Admin, Teacher, Student) with JWT authentication</li>
                      <li>Built LabTrack system for lab report submission and grading; integrated real-time live quiz engine</li>
                      <li>Implemented features: lecture file uploads, study circles, Lost & Found portal, and user/course management</li>
                    </ul>
                  </div>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <p className="resume-exp-title">Robotics Software Developer — Niryo Robot</p>
                      <p className="resume-exp-company">Robotic Arm Control System</p>
                    </div>
                    <span className="resume-exp-period">Jul – Sep 2026</span>
                  </div>
                  <div className="resume-exp-desc">
                    <ul>
                      <li>Developed Python control software for Niryo One/Ned robotic arm using pyniryo SDK and ROS integration</li>
                      <li>Programmed automated pick-and-place sequences with precision joint angle control and safety limits</li>
                      <li>Implemented OpenCV-based object detection for camera-assisted robotic manipulation tasks</li>
                    </ul>
                  </div>
                </div>

                <div className="resume-exp-item">
                  <div className="resume-exp-header">
                    <div>
                      <p className="resume-exp-title">Database Designer — GarmentGuard DB</p>
                      <p className="resume-exp-company">Industry Management System</p>
                    </div>
                    <span className="resume-exp-period">Jul 2026</span>
                  </div>
                  <div className="resume-exp-desc">
                    <ul>
                      <li>Designed normalized relational database for garment industry with MySQL covering inventory, production, and QC</li>
                      <li>Implemented stored procedures, views, triggers, and PHP/Laravel backend for data management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Summary */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Key Projects</h2>

                <div className="resume-project-item">
                  <p className="resume-project-name">
                    ⚖️ JudgeMate
                    <span style={{ fontSize: '11px', color: '#f59e0b' }}>⭐ 1 star</span>
                  </p>
                  <p className="resume-project-desc">
                    Self-hosted competitive programming judge with async code evaluation, role-based access, live scoreboards, and multi-platform contest sync.
                  </p>
                  <div className="resume-project-tech">
                    {['Laravel 12', 'PHP', 'MySQL', 'Queue Workers', 'Blade', 'REST API'].map(t => (
                      <span key={t} className="resume-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="resume-project-item">
                  <p className="resume-project-name">🏫 CampusHive</p>
                  <p className="resume-project-desc">
                    Full-stack academic platform with real-time quizzes, LabTrack grading system, and three role-based portals.
                  </p>
                  <div className="resume-project-tech">
                    {['React', 'Node.js', 'Socket.io', 'MySQL', 'Express'].map(t => (
                      <span key={t} className="resume-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="resume-project-item">
                  <p className="resume-project-name">
                    🤖 Niryo Robot
                    <span style={{ fontSize: '11px', color: '#f59e0b' }}>⭐ 1 star</span>
                  </p>
                  <p className="resume-project-desc">
                    Python-based robotic arm control with automated pick-and-place sequences and OpenCV object detection.
                  </p>
                  <div className="resume-project-tech">
                    {['Python', 'pyniryo', 'ROS', 'OpenCV'].map(t => (
                      <span key={t} className="resume-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* ── SIDEBAR ── */}
            <div className="resume-sidebar">

              {/* Technical Skills */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Technical Skills</h2>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Languages</p>
                  <div className="sidebar-skills-list">
                    {['C++17', 'Python 3', 'JavaScript', 'PHP', 'SQL', 'HTML/CSS'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Frontend</p>
                  <div className="sidebar-skills-list">
                    {['React.js', 'Socket.io', 'Vite', 'CSS3'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Backend</p>
                  <div className="sidebar-skills-list">
                    {['Node.js', 'Express.js', 'Laravel 12', 'REST APIs'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Databases</p>
                  <div className="sidebar-skills-list">
                    {['MySQL', 'PostgreSQL', 'Eloquent ORM'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Robotics</p>
                  <div className="sidebar-skills-list">
                    {['pyniryo SDK', 'ROS', 'OpenCV', 'Automation'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Tools & DevOps</p>
                  <div className="sidebar-skills-list">
                    {['Git', 'GitHub', 'Linux', 'Composer', 'npm'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Education</h2>

                <div className="sidebar-edu-item">
                  <div className="sidebar-edu-badge" style={{ background: 'rgba(124,58,237,0.2)', color: '#a855f7' }}>University</div>
                  <p className="sidebar-edu-degree">B.Sc. in Computer Science &amp; Engineering</p>
                  <p className="sidebar-edu-school">Khulna University of Engineering &amp; Technology (KUET)</p>
                  <p className="sidebar-edu-year">2022 – Present · Batch 22 · Ongoing</p>
                </div>

                <div className="sidebar-edu-item">
                  <div className="sidebar-edu-badge" style={{ background: 'rgba(6,182,212,0.2)', color: '#06b6d4' }}>College (HSC)</div>
                  <p className="sidebar-edu-degree">Higher Secondary Certificate (HSC)</p>
                  <p className="sidebar-edu-school">Notre Dame College, Dhaka</p>
                  <p className="sidebar-edu-year">2019 – 2021 · Science Group</p>
                </div>

                <div className="sidebar-edu-item">
                  <div className="sidebar-edu-badge" style={{ background: 'rgba(245,158,11,0.2)', color: '#f59e0b' }}>School (SSC)</div>
                  <p className="sidebar-edu-degree">Secondary School Certificate (SSC)</p>
                  <p className="sidebar-edu-school">Govt. Laboratory High School, Dhaka</p>
                  <p className="sidebar-edu-year">Up to 2019 · Science Group</p>
                </div>
              </div>

              {/* Club Activities */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Club Activities</h2>

                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🧠</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '12px', color: '#a855f7' }}>Assistant General Secretary</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>KMinds — KUET AI &amp; Intelligence Society</div>
                  </div>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🚀</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '12px', color: '#06b6d4' }}>Batch Representative</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Hack Batch — KUET CSE Batch 22</div>
                  </div>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">⚖️</span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '12px', color: '#f59e0b' }}>Assistant Contest Manager</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>SGIPC — KUET Programming Contest</div>
                  </div>
                </div>
              </div>

              {/* Competitive Programming */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Competitive Programming</h2>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Platforms</p>
                  <div className="sidebar-skills-list">
                    {['Codeforces', 'AtCoder', 'CodeChef', 'LeetCode'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="sidebar-skill-group">
                  <p className="sidebar-skill-title">Topics</p>
                  <div className="sidebar-skills-list">
                    {['Dynamic Programming', 'Graph Theory', 'Binary Search', 'Segment Tree', 'Math'].map(s => (
                      <span key={s} className="sidebar-skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Highlights</h2>

                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">⚖️</span>
                  <span>Built full competitive judge platform with async evaluation engine</span>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🤖</span>
                  <span>Developed real robotic arm automation with Python & ROS</span>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🏫</span>
                  <span>Full-stack platform with real-time Socket.io features</span>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🧠</span>
                  <span>Active competitive programmer focused on algorithms</span>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🌐</span>
                  <span>github.com/failuresoul — open source contributions</span>
                </div>
              </div>

              {/* Languages */}
              <div className="resume-mb">
                <h2 className="resume-section-title">Languages</h2>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🇧🇩</span>
                  <span>Bengali — Native</span>
                </div>
                <div className="sidebar-achievement">
                  <span className="sidebar-achievement-icon">🇬🇧</span>
                  <span>English — Professional</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
