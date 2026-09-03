function printResume() {
  window.print()
}

export default function Resume({ onBack }) {
  return (
    <div className="cv-page">
      {/* ── Action Bar (no-print) ── */}
      <div className="cv-action-bar no-print">
        <button className="cv-back-btn" onClick={onBack}>← Back to Portfolio</button>
        <button className="cv-print-btn" onClick={printResume}>⬇ Download / Print PDF</button>
      </div>

      {/* ── CV Paper (A4, multi-page aware) ── */}
      <div className="cv-paper" id="resume-content">

        {/* ══ NAME & CONTACT ══ */}
        <div className="cv-header">
          <h1 className="cv-name">Nurul Absar Shadik</h1>
          <div className="cv-contacts">
            <span>
              <a href="https://linkedin.com/in/nurul-absar-shadik-01143b373" target="_blank" rel="noopener noreferrer">
                in linkedin/nurul-absar-shadik
              </a>
            </span>
            <span>
              <a href="https://github.com/failuresoul" target="_blank" rel="noopener noreferrer">
                ⌥ github.com/failuresoul
              </a>
            </span>
            <span>
              <a href="https://www.kaggle.com/nurulabsarshadik" target="_blank" rel="noopener noreferrer">
                📊 kaggle/nurulabsarshadik
              </a>
            </span>
            <span>📍 Khulna, Bangladesh</span>
          </div>
        </div>

        {/* ══ EDUCATION ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Education</h2>
          <hr className="cv-rule" />

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Khulna University of Engineering &amp; Technology (KUET)</strong>
              <span className="cv-entry-date">October 2022 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">B.Sc. in Computer Science &amp; Engineering — Batch 22</em>
              <em className="cv-entry-sub cv-right">(Ongoing)</em>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Jalalabad Cantonment Public School and College</strong>
              <span className="cv-entry-date">2020 – 2022</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Higher Secondary Certificate (HSC) — Science Group</em>
              <em className="cv-entry-sub cv-right">Sylhet, Bangladesh</em>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Rukeya Khatun Lyceum School</strong>
              <span className="cv-entry-date">Up to 2020</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Secondary School Certificate (SSC) — Science Group</em>
            </div>
          </div>
        </div>

        {/* ══ PROJECTS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Projects</h2>
          <hr className="cv-rule" />

          {/* JudgeMate */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">JudgeMate</strong>
                <span className="cv-proj-tech"> | Laravel 12, PHP, MySQL, Queue Workers, REST API</span>
              </span>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/JudgeMate" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>⭐ 1 star</a>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Built a self-hosted competitive programming judge supporting <strong>C++, Python, and Java</strong> submissions evaluated asynchronously via queue workers with isolated sandboxing.</li>
              <li>Implemented role-based access control (Admin / ProblemSetter / Contestant) with full contest management and live real-time scoreboards.</li>
              <li>Integrated external APIs to automatically sync contests from <strong>Codeforces</strong>, <strong>AtCoder</strong>, and <strong>CodeChef</strong>; developed badge award system for achievements.</li>
            </ul>
          </div>

          {/* CampusHive */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">CampusHive</strong>
                <span className="cv-proj-tech"> | React, Node.js, Express.js, Socket.io, MySQL, JWT</span>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Architected a full-stack academic management platform with three role-based portals (Admin, Teacher, Student) with <strong>JWT</strong> authentication and real-time features using <strong>Socket.io</strong>.</li>
              <li>Built LabTrack system for lab report submission and grading; integrated real-time live quiz engine and lecture file uploads.</li>
            </ul>
          </div>

          {/* Churn Prediction ANN */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">Churn Prediction using ANN</strong>
                <span className="cv-proj-tech"> | Python, TensorFlow/Keras, Jupyter Notebook, Pandas, Scikit-learn</span>
              </span>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Churn-Prediction-by-using-ANN" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>⭐ 1 star</a>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Built an <strong>Artificial Neural Network (ANN)</strong> model from scratch to predict customer churn, applied to real-world tabular banking dataset with data preprocessing pipelines.</li>
              <li>Explored deep learning classification with feature engineering, normalization, dropout regularization, and binary cross-entropy optimization achieving strong validation accuracy.</li>
              <li>Documented as a comprehensive ML learning project covering the full pipeline: EDA → model training → evaluation → prediction.</li>
            </ul>
          </div>

          {/* Fitness Tracker */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">Fitness Tracker App</strong>
                <span className="cv-proj-tech"> | Python, Machine Learning, Data Analysis</span>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Developed a fitness tracking application with ML-powered activity recognition and personalized workout/diet recommendations based on user metrics.</li>
              <li>Implemented calorie estimation, exercise logging, and progress visualization using data analytics and predictive modeling.</li>
            </ul>
          </div>

          {/* Tiny Computer / CPU */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">Tiny Computer (CPU Design)</strong>
                <span className="cv-proj-tech"> | Digital Logic, ALU, Booth's Algorithm, Computer Architecture</span>
              </span>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Tiny_Computer" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Designed and implemented a miniature computer from first principles using <strong>NOT, AND, OR gates</strong> — 2nd Year 1st Semester project at KUET.</li>
              <li>Built a complete <strong>ALU (Arithmetic Logic Unit)</strong> with support for Booth's multiplication algorithm and basic arithmetic operations.</li>
            </ul>
          </div>

          {/* Roll Counter */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">Roll Counter &amp; Attendance System</strong>
                <span className="cv-proj-tech"> | Python / C++, Algorithm Design</span>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Built an automated roll/attendance counter system with efficient data structures for managing student records and roll assignments.</li>
              <li>Implemented sorting, search, and report generation features for academic record management.</li>
            </ul>
          </div>

          {/* Niryo Robot */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">Niryo Robotic Arm Control System</strong>
                <span className="cv-proj-tech"> | Python, pyniryo SDK, ROS, OpenCV</span>
              </span>
              <span className="cv-entry-date">
                <a href="https://github.com/failuresoul/Niryo-Robot" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>⭐ 1 star</a>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Developed Python-based control software for the <strong>Niryo One/Ned</strong> robotic arm using pyniryo SDK with ROS integration for precision motor control.</li>
              <li>Implemented <strong>OpenCV</strong>-based object detection for camera-assisted robotic manipulation tasks with contour tracking.</li>
            </ul>
          </div>

          {/* GarmentGuard */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <span>
                <strong className="cv-entry-proj">GarmentGuard DB</strong>
                <span className="cv-proj-tech"> | MySQL, PHP, Laravel, SQL Stored Procedures</span>
              </span>
            </div>
            <ul className="cv-bullets">
              <li>Designed a normalized relational database for garment industry management covering inventory, production tracking, and quality control workflows.</li>
              <li>Implemented stored procedures, views, triggers, and a <strong>PHP/Laravel</strong> backend for streamlined data management.</li>
            </ul>
          </div>
        </div>

        {/* ══ CLUB ACTIVITIES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Club Activities</h2>
          <hr className="cv-rule" />

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">KMinds — KUET Mind &amp; Intelligence Society</strong>
              <span className="cv-entry-date">2023 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Assistant General Secretary</em>
              <em className="cv-entry-sub cv-right">Khulna, Bangladesh</em>
            </div>
            <ul className="cv-bullets">
              <li>Coordinating AI/ML workshops, seminars, and knowledge-sharing sessions as part of KUET's premier intelligence society.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Hack Batch — KUET CSE Batch 22</strong>
              <span className="cv-entry-date">2022 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Batch Representative</em>
              <em className="cv-entry-sub cv-right">Khulna, Bangladesh</em>
            </div>
            <ul className="cv-bullets">
              <li>Elected representative coordinating hackathons, team building events, and departmental communications for CSE Batch 22.</li>
            </ul>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">SGIPC — KUET Inter-University Programming Contest</strong>
              <span className="cv-entry-date">2023 – Present</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Assistant Contest Manager</em>
              <em className="cv-entry-sub cv-right">Khulna, Bangladesh</em>
            </div>
            <ul className="cv-bullets">
              <li>Assisting in organizing university-level programming contests including problem vetting, judge system coordination, and contestant management.</li>
            </ul>
          </div>
        </div>

        {/* ══ TECHNICAL SKILLS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Technical Skills</h2>
          <hr className="cv-rule" />

          <div className="cv-skills-block">
            <p className="cv-skill-line">
              <strong>Languages:</strong> C++17, Python 3, JavaScript (ES6+), PHP, SQL, HTML/CSS
            </p>
            <p className="cv-skill-line">
              <strong>AI / Machine Learning:</strong> TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Matplotlib, Jupyter Notebook
            </p>
            <p className="cv-skill-line">
              <strong>Frontend:</strong> React.js, Vite, Socket.io, CSS3
            </p>
            <p className="cv-skill-line">
              <strong>Backend:</strong> Node.js, Express.js, Laravel 12, REST APIs, Queue Workers
            </p>
            <p className="cv-skill-line">
              <strong>Databases:</strong> MySQL, PostgreSQL, Eloquent ORM
            </p>
            <p className="cv-skill-line">
              <strong>Robotics &amp; CV:</strong> pyniryo SDK, ROS, OpenCV, Python Automation
            </p>
            <p className="cv-skill-line">
              <strong>Tools:</strong> Git, GitHub, Linux, Composer, npm, VS Code, Kaggle
            </p>
            <p className="cv-skill-line">
              <strong>Competitive Programming:</strong> Codeforces, AtCoder, CodeChef, LeetCode — DP, Graph Theory, Binary Search, Segment Tree
            </p>
          </div>
        </div>

        {/* ══ LANGUAGES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Languages</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line"><strong>Bengali</strong> — Native &nbsp;|&nbsp; <strong>English</strong> — Professional Working Proficiency</p>
          </div>
        </div>

      </div>
    </div>
  )
}
