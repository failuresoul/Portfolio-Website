function printResume() {
  // Force desktop-width viewport so mobile/tablet prints like a laptop
  const viewportMeta = document.querySelector('meta[name="viewport"]')
  const originalContent = viewportMeta ? viewportMeta.content : 'width=device-width, initial-scale=1.0'

  if (viewportMeta) {
    viewportMeta.content = 'width=1200, initial-scale=1.0'
  }

  // Small delay to let the browser reflow at the new width before printing
  setTimeout(() => {
    window.print()
    // Restore original viewport after print dialog opens
    setTimeout(() => {
      if (viewportMeta) {
        viewportMeta.content = originalContent
      }
    }, 1500)
  }, 300)
}

export default function Resume({ onBack }) {
  return (
    <div className="cv-page">
      {/* ── Sticky Action Bar (no-print) ── */}
      <div className="cv-action-bar no-print">
        <button className="cv-back-btn" onClick={onBack}>
          ← Back to Portfolio
        </button>
        <div className="cv-action-right">
          <button className="cv-print-btn" onClick={printResume}>
            ⬇ Download PDF
          </button>
        </div>
      </div>

      {/* ── CV Paper (A4, multi-page aware) ── */}
      <div className="cv-paper" id="resume-content">

        {/* ══ NAME & CONTACT ══ */}
        <div className="cv-header">
          <h1 className="cv-name">Nurul Absar Shadik</h1>
          <div className="cv-contacts">
            <span>
              <a href="mailto:nurulabsarshadik65@gmail.com">nurulabsarshadik65@gmail.com</a>
            </span>
            <span>
              <a href="tel:+8801746109666">+880 1746-109666</a>
            </span>
            <span>Lalon Shah Hall, KUET, Khulna, Bangladesh</span>
          </div>
        </div>

        {/* ══ SUMMARY ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Summary</h2>
          <hr className="cv-rule" />
          <p className="cv-skill-line">
            Computer Science undergraduate at Khulna University of Engineering &amp; Technology with a strong foundation in
            full-stack web development, machine learning, and competitive programming. Proven ability to design and ship
            end-to-end systems, from a fully self-hosted competitive programming judge to real-time academic management
            platforms and production-grade deep learning models. Recognized for translating complex problems into clean,
            efficient, and maintainable software solutions.
          </p>
        </div>

        {/* ══ PROFILES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Profiles</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line">
              <strong>GitHub:</strong> <a href="https://github.com/failuresoul" target="_blank" rel="noopener noreferrer">github.com/failuresoul</a>
              &emsp;<strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nurul-absar-shadik-01143b373/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nurul-absar-shadik</a>
              &emsp;<strong>Kaggle:</strong> <a href="https://www.kaggle.com/nurulabsarshadik" target="_blank" rel="noopener noreferrer">kaggle.com/nurulabsarshadik</a>
            </p>
            <p className="cv-skill-line">
              <strong>Codeforces:</strong> <a href="https://codeforces.com/profile/failure_soul" target="_blank" rel="noopener noreferrer">codeforces.com/profile/failure_soul</a>
              &emsp;<strong>CodeChef:</strong> <a href="https://www.codechef.com/users/failure_soul" target="_blank" rel="noopener noreferrer">codechef.com/users/failure_soul</a>
              &emsp;<strong>LeetCode:</strong> <a href="https://leetcode.com/u/ajolbelai_absar/" target="_blank" rel="noopener noreferrer">leetcode.com/u/ajolbelai_absar</a>
            </p>
          </div>
        </div>

        {/* ══ EDUCATION ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Education</h2>
          <hr className="cv-rule" />

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Khulna University of Engineering &amp; Technology (KUET)</strong>
              <span className="cv-entry-date">Oct 2023 – Expected 2027</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">B.Sc. in Computer Science &amp; Engineering</em>
              <em className="cv-entry-sub cv-right">CGPA 3.64 / 4.00</em>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Jalalabad Cantonment Public School &amp; College</strong>
              <span className="cv-entry-date">2020 – 2022</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Higher Secondary Certificate (HSC) — Science Group</em>
              <em className="cv-entry-sub cv-right">GPA 5.00 / 5.00</em>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Rukeya Khatun Lyceum School</strong>
              <span className="cv-entry-date">2018 – 2020</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Secondary School Certificate (SSC) — Science Group</em>
              <em className="cv-entry-sub cv-right">GPA 5.00 / 5.00 · General Scholarship</em>
            </div>
          </div>
        </div>

        {/* ══ TECHNICAL SKILLS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Technical Skills</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line">
              <strong>Languages:</strong> C++, Python, JavaScript (ES6+), PHP, SQL, HTML, CSS
            </p>
            <p className="cv-skill-line">
              <strong>Frameworks &amp; Libraries:</strong> React.js, Node.js, Express.js, Laravel, Socket.io, Vite
            </p>
            <p className="cv-skill-line">
              <strong>Machine Learning:</strong> TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Matplotlib
            </p>
            <p className="cv-skill-line">
              <strong>Databases:</strong> MySQL, PostgreSQL, Eloquent ORM
            </p>
            <p className="cv-skill-line">
              <strong>Tools &amp; Platforms:</strong> Git, GitHub, Linux, Docker, VS Code, Kaggle, npm, Composer
            </p>
            <p className="cv-skill-line">
              <strong>Concepts:</strong> Data Structures &amp; Algorithms, OOP, REST APIs, JWT Auth, Queue Workers, CI/CD
            </p>
          </div>
        </div>

        {/* ══ PROJECTS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Projects</h2>
          <hr className="cv-rule" />

          {/* JudgeMate */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">JudgeMate — Competitive Programming Judge</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/JudgeMate" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Laravel 12, PHP, MySQL, Queue Workers, REST API</p>
            <ul className="cv-bullets">
              <li>Engineered a self-hosted online judge supporting C++, Python, and Java, with asynchronous code evaluation across isolated, sandboxed queue workers.</li>
              <li>Designed role-based access control (Admin / Problem Setter / Contestant) with real-time scoreboards and automated contest syncing from Codeforces, AtCoder, and CodeChef.</li>
            </ul>
          </div>

          {/* FitConnectPro */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">FitConnectPro — Fitness &amp; Health Android App</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Java, Android Studio, Firebase</p>
            <ul className="cv-bullets">
              <li>Developed a fitness and health tracking Android application built with Java in Android Studio, using Firebase as the real-time backend database.</li>
              <li>Implemented workout logging, user profiles, and health metric tracking with Firebase Authentication and Cloud Firestore for secure, synchronized data.</li>
            </ul>
          </div>

          {/* CampusHive */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">CampusHive — Academic Management Platform</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/CampusHive" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">React, Node.js, Express.js, Socket.io, MySQL, JWT</p>
            <ul className="cv-bullets">
              <li>Architected a full-stack academic management platform with three role-based portals (Admin, Teacher, Student), secured with JWT and powered by real-time Socket.io communication.</li>
              <li>Built LabTrack for lab report grading, a live in-class quiz engine, study circles, and a lost-and-found portal.</li>
            </ul>
          </div>

          {/* Churn Prediction */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Customer Churn Prediction Using ANN</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Churn-Prediction-by-using-ANN" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Python, TensorFlow, Keras, Scikit-learn, Pandas</p>
            <ul className="cv-bullets">
              <li>Built an artificial neural network to predict customer churn on a real-world banking dataset, reaching strong validation accuracy through dropout regularization and feature engineering.</li>
              <li>Documented the complete ML lifecycle — exploratory data analysis, training, evaluation, and prediction — as a modular, reproducible pipeline.</li>
            </ul>
          </div>

          {/* Niryo Robot */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Niryo Robotic Arm Control System</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Niryo-Robot" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Python, pyniryo SDK, ROS, OpenCV</p>
            <ul className="cv-bullets">
              <li>Developed control software for the Niryo robotic arm using the pyniryo SDK with ROS integration, achieving reliable precision motor control and task automation.</li>
              <li>Integrated OpenCV-based object detection for camera-assisted manipulation with real-time contour tracking and pick-and-place workflows.</li>
            </ul>
          </div>

          {/* Tiny Computer */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Tiny Computer (CPU Design)</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Tiny_Computer" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Digital Logic, ALU, Booth's Algorithm, Computer Architecture</p>
            <ul className="cv-bullets">
              <li>Designed and implemented a miniature computer from first principles using NOT, AND, and OR logic gates.</li>
              <li>Built a complete Arithmetic Logic Unit (ALU) with support for Booth's multiplication algorithm and basic arithmetic operations.</li>
            </ul>
          </div>

          {/* Sylhet Association */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Sylhet Association of KUET — Community Portal</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Web Development, JavaScript, Database, Community Portal</p>
            <ul className="cv-bullets">
              <li>Built an official community platform for the Sylhet Association of KUET, facilitating student connection, a regional member directory, and event announcements.</li>
              <li>Enabled collaborative student welfare initiatives through a structured management portal.</li>
            </ul>
          </div>

          {/* Portfolio Website */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Personal Portfolio Website</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Portfolio-Website" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">React, Vite, JavaScript, CSS3, Canvas API</p>
            <ul className="cv-bullets">
              <li>Developed a high-performance personal portfolio with an interactive constellation star map of skills, a light/dark theme engine, and smooth scroll transitions.</li>
            </ul>
          </div>

          {/* GarmentGuard */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">GarmentGuard DB — Industry Database System</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/GarmentGuard_DB" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">PHP, Laravel, MySQL, SQL Stored Procedures</p>
            <ul className="cv-bullets">
              <li>Designed a normalized relational database for garment industry management, covering inventory, production tracking, and quality control workflows.</li>
              <li>Implemented stored procedures, views, and triggers with a Laravel backend for consistent, streamlined data management.</li>
            </ul>
          </div>
        </div>

        {/* ══ ACHIEVEMENTS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Achievements</h2>
          <hr className="cv-rule" />
          <ul className="cv-bullets">
            <li><strong>2nd Runner-Up (3rd Place)</strong>, <strong>First Byte Datathon</strong> — placed 3rd overall in a data science / ML datathon competition.</li>
            <li><strong>First Runner-Up</strong>, <strong>Sentiment Analysis Competition by MoonLab</strong> — ranked 1st runner-up in an NLP-based sentiment analysis contest.</li>
            <li><strong>Codeforces</strong> — Max Rating 1185 &nbsp;·&nbsp; <strong>CodeChef</strong> — 2-Star.</li>
          </ul>
        </div>

        {/* ══ CLUB & ACTIVITIES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Club &amp; Activities</h2>
          <hr className="cv-rule" />

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">KMiNDs — KUET Machine Intelligence &amp; Data Science Community</strong>
              <span className="cv-entry-date">2026 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Assistant General Secretary · Organizing Committee</em>
            </div>
            <ul className="cv-bullets">
              <li>Driving workshops, AI study circles, competitive machine learning sessions, and data science community initiatives.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">HACK — Hardware Acceleration Club of KUET</strong>
              <span className="cv-entry-date">2026 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Batch Representative (2K22) · Organizing Committee</em>
            </div>
            <ul className="cv-bullets">
              <li>Coordinating embedded hardware events, robotics acceleration, and Arduino/microcontroller sessions with technical collaboration.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">SGIPC — Special Group Interested in Programming Contest</strong>
              <span className="cv-entry-date">2026 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Assistant Contest Manager · Organizing Committee</em>
            </div>
            <ul className="cv-bullets">
              <li>Coordinating judge systems, contest logistics, test case verification, live scoreboards, and contestant support.</li>
            </ul>
          </div>
        </div>

        {/* ══ LANGUAGES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Languages</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line"><strong>Bengali</strong> — Native &nbsp;|&nbsp; <strong>English</strong> — Professional Working Proficiency &nbsp;|&nbsp; <strong>Hindi</strong> — Conversational</p>
          </div>
        </div>

        {/* ══ HOBBIES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Hobbies &amp; Interests</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line">Badminton, Playing Football, Watching Football, FIFA / Video Games</p>
          </div>
        </div>

      </div>
    </div>
  )
}
