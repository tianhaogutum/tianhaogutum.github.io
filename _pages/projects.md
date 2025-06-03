---
layout: page
title: projects
permalink: /projects/
description: A showcase of my technical projects, research work, and innovations in Computer Science and Machine Learning.
nav: true
nav_order: 2
---

<div class="projects-intro">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="intro-content text-center mb-5">
        <h2 class="mb-4">🚀 My Projects & Research</h2>
        <p class="lead">
          Explore my journey through various technical projects, research initiatives, and innovative solutions. 
          From machine learning applications to system optimizations, each project represents a step forward in my quest to push the boundaries of technology.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Project Statistics -->
<div class="project-stats mb-5">
  <div class="row">
    <div class="col-md-3 text-center">
      <div class="stat-card">
        <h3 class="stat-number">6+</h3>
        <p class="stat-label">Projects Completed</p>
      </div>
    </div>
    <div class="col-md-3 text-center">
      <div class="stat-card">
        <h3 class="stat-number">5+</h3>
        <p class="stat-label">Technologies Mastered</p>
      </div>
    </div>
    <div class="col-md-3 text-center">
      <div class="stat-card">
        <h3 class="stat-number">3</h3>
        <p class="stat-label">Research Areas</p>
      </div>
    </div>
    <div class="col-md-3 text-center">
      <div class="stat-card">
        <h3 class="stat-number">2+</h3>
        <p class="stat-label">Years Experience</p>
      </div>
    </div>
  </div>
</div>

<!-- Main Projects -->
<div class="projects-grid">
  
  <!-- Bachelor Thesis -->
  <div class="project-card featured">
    <div class="project-header">
      <div class="project-image">
        <img src="{{ 'assets/img/drone2.png' | relative_url }}" alt="Drone Swarm Testing" class="img-fluid">
      </div>
      <div class="project-meta">
        <span class="project-date">May 2024 - Oct 2024</span>
        <span class="project-category">Bachelor Thesis</span>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">Effectiveness of Search-Based Testing on a Deep Reinforcement-Learned Controller</h3>
      <p class="project-description">
        My bachelor thesis explores the application of decentralized control systems for drone swarms using deep reinforcement learning (DRL). 
        This research combines search-based testing with scenario-based testing to identify edge cases in autonomous drone controllers.
      </p>
      <div class="project-highlights">
        <h5>Key Achievements:</h5>
        <ul>
          <li>Implemented decentralized DRL controllers for drone swarms using OpenAI's PPO algorithm</li>
          <li>Developed metaheuristic search techniques for scenario-based testing</li>
          <li>Achieved over 500% improvement in efficiency compared to traditional random testing</li>
          <li>Created the OpenSBT framework for structured evaluation and reproducibility</li>
        </ul>
      </div>
      <div class="project-tech">
        <span class="tech-tag">Deep Reinforcement Learning</span>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Genetic Algorithms</span>
        <span class="tech-tag">Drone Control</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/tianhaogutum/bachelorthesis" target="_blank" class="btn btn-primary">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
    </div>
  </div>

  <!-- Network Laboratory Internship -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-image">
        <img src="{{ 'assets/img/iLabX-Logo.jpg' | relative_url }}" alt="iLabX Network Laboratory" class="img-fluid">
      </div>
      <div class="project-meta">
        <span class="project-date">Feb 2024 - Mar 2024</span>
        <span class="project-category">Network Internship</span>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">Bachelor Internship - Network & Internet Laboratory</h3>
      <p class="project-description">
        Intensive one-month internship developing code for the OSI model's network layer using CISCO equipment. 
        Built a fully functional Internet environment within a virtual lab, implementing essential protocols and network configurations.
      </p>
      <div class="project-highlights">
        <h5>Technical Areas Covered:</h5>
        <ul>
          <li>Internet Protocol (IP): IPv4/IPv6, subnetting, routing protocols</li>
          <li>TCP/UDP: Data reliability, congestion control, stateful communication</li>
          <li>DNS and Web Servers: DNS setup, HTTPS configuration</li>
          <li>Network Security: NAT, DNS64/NAT64, Firewall implementation</li>
        </ul>
      </div>
      <div class="project-tech">
        <span class="tech-tag">CISCO</span>
        <span class="tech-tag">TCP/IP</span>
        <span class="tech-tag">DNS</span>
        <span class="tech-tag">Network Security</span>
      </div>
    </div>
  </div>

  <!-- Computer Architecture Project -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-image">
        <img src="{{ 'assets/img/gamma2.png' | relative_url }}" alt="Gamma Correction" class="img-fluid">
      </div>
      <div class="project-meta">
        <span class="project-date">Dec 2023 - Mar 2024</span>
        <span class="project-category">Computer Architecture</span>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">High Precision Computation with C and Assembly</h3>
      <p class="project-description">
        Four-month internship focused on reimplementing gamma correction and grayscale conversion algorithms. 
        Conducted extensive optimization using C and Assembly, achieving 1:1 accuracy with standard library results through Taylor series implementation.
      </p>
      <div class="project-highlights">
        <h5>Optimization Techniques:</h5>
        <ul>
          <li>Local and global algorithm optimizations for image processing</li>
          <li>SIMD acceleration for performance enhancement</li>
          <li>Mathematical analysis using Taylor series for high precision</li>
          <li>Modular implementation with parameterized design</li>
        </ul>
      </div>
      <div class="project-tech">
        <span class="tech-tag">C Programming</span>
        <span class="tech-tag">Assembly</span>
        <span class="tech-tag">SIMD</span>
        <span class="tech-tag">Image Processing</span>
      </div>
      <div class="project-links">
        <a href="https://github.com/tianhaogutum/gamma_correction_optimization" target="_blank" class="btn btn-primary">
          <i class="fab fa-github"></i> View Code
        </a>
      </div>
    </div>
  </div>

  <!-- SQL Database Project -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-meta">
        <span class="project-date">2023</span>
        <span class="project-category">Database Systems</span>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">SQL Database Management System</h3>
      <p class="project-description">
        Comprehensive 10-week database course project covering essential database concepts and practical implementation. 
        Focused on schema design, query optimization, and transaction management.
      </p>
      <div class="project-highlights">
        <h5>Core Components:</h5>
        <ul>
          <li>Database schema design for efficiency and data integrity</li>
          <li>Advanced data querying and optimization techniques</li>
          <li>Transaction management and conflict resolution</li>
          <li>Performance tuning and indexing strategies</li>
        </ul>
      </div>
      <div class="project-tech">
        <span class="tech-tag">SQL</span>
        <span class="tech-tag">Database Design</span>
        <span class="tech-tag">Query Optimization</span>
        <span class="tech-tag">Transaction Management</span>
      </div>
    </div>
  </div>

  <!-- Flight Search Engine -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-meta">
        <span class="project-date">May 2022 - Sep 2022</span>
        <span class="project-category">Full Stack Development</span>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">Full Stack Flight Search Engine</h3>
      <p class="project-description">
        Led a 5-member team in building a comprehensive flight search platform using modern web technologies. 
        Applied Agile development methodologies including SCRUM and various design patterns.
      </p>
      <div class="project-highlights">
        <h5>Technical Implementation:</h5>
        <ul>
          <li>Responsive frontend with React, HTML, and CSS</li>
          <li>Robust backend with Java and Spring Boot</li>
          <li>Integration with Lufthansa's official API for real-time flight data</li>
          <li>Applied design patterns including Abstract Factory</li>
        </ul>
      </div>
      <div class="project-tech">
        <span class="tech-tag">React</span>
        <span class="tech-tag">Java</span>
        <span class="tech-tag">Spring Boot</span>
        <span class="tech-tag">REST API</span>
      </div>
    </div>
  </div>

  <!-- Unbiased AI Search Engine -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-meta">
        <span class="project-date">Nov 2023 - Feb 2024</span>
        <span class="project-category">AI Research</span>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">Unbiased Browsing Engine with Generative AI</h3>
      <p class="project-description">
        Led a 3-member team to develop an AI-powered search engine designed to mitigate ideological bias in search results. 
        Focused on creating more balanced and fair AI-generated content through advanced filtering mechanisms.
      </p>
      <div class="project-highlights">
        <h5>Innovation Features:</h5>
        <ul>
          <li>Large language model integration for bias detection</li>
          <li>Advanced filtering and re-ranking mechanisms</li>
          <li>Prompt engineering for balanced content generation</li>
          <li>Enhanced fairness in politically sensitive topics</li>
        </ul>
      </div>
      <div class="project-tech">
        <span class="tech-tag">Large Language Models</span>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Bias Mitigation</span>
        <span class="tech-tag">NLP</span>
      </div>
    </div>
  </div>

</div>

<!-- Featured Technologies Section -->
<div class="featured-tech mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <h3 class="text-center mb-4">🛠️ Technologies & Tools</h3>
      <div class="tech-grid">
        <div class="tech-item">
          <i class="fab fa-python"></i>
          <span>Python</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-brain"></i>
          <span>Machine Learning</span>
        </div>
        <div class="tech-item">
          <i class="fab fa-java"></i>
          <span>Java</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-robot"></i>
          <span>AI/ML</span>
        </div>
        <div class="tech-item">
          <i class="fab fa-react"></i>
          <span>React</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-database"></i>
          <span>SQL</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-microchip"></i>
          <span>C/Assembly</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-network-wired"></i>
          <span>Networking</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Call to Action -->
<div class="cta-section mt-5 text-center">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <h3>Interested in Collaboration?</h3>
      <p class="lead">
        I'm always open to discussing new projects, research opportunities, or innovative ideas. 
        Let's build something amazing together!
      </p>
      <a href="mailto:tianhao.gu@tum.de" class="btn btn-primary btn-lg">
        <i class="fas fa-envelope me-2"></i>Get In Touch
      </a>
    </div>
  </div>
</div>

<style>
.projects-intro {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  padding: 60px 20px;
  margin-bottom: 60px;
}

.project-stats {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 40px 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

html[data-theme="dark"] .project-stats {
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-card {
  padding: 20px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--brand-accent);
  margin-bottom: 10px;
}

.stat-label {
  font-weight: 500;
  color: var(--global-text-color-light);
  margin: 0;
}

.projects-grid {
  display: grid;
  gap: 40px;
  margin-bottom: 60px;
}

.project-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-card);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.project-card.featured {
  border-left: 5px solid var(--brand-accent);
}

html[data-theme="dark"] .project-card {
  background: rgba(31, 41, 55, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.project-image img {
  max-height: 60px;
  width: auto;
  border-radius: 10px;
}

.project-meta {
  text-align: right;
}

.project-date {
  display: block;
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.project-category {
  background: var(--brand-accent);
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--brand-accent);
  margin-bottom: 15px;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-highlights {
  margin: 20px 0;
}

.project-highlights h5 {
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--brand-accent);
}

.project-highlights ul {
  padding-left: 20px;
}

.project-highlights li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.project-tech {
  margin: 20px 0;
}

.tech-tag {
  display: inline-block;
  background: rgba(var(--brand-accent), 0.1);
  color: var(--brand-accent);
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 5px 5px 5px 0;
}

.project-links {
  margin-top: 20px;
}

.featured-tech {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

html[data-theme="dark"] .featured-tech {
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.tech-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

html[data-theme="dark"] .tech-item {
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-item i {
  font-size: 2rem;
  color: var(--brand-accent);
  margin-bottom: 10px;
}

.tech-item span {
  font-weight: 500;
  text-align: center;
}

.cta-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  padding: 60px 20px;
}

/* CSS Variables */
:root {
  --brand-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --brand-accent: #667eea;
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.15);
}

html[data-theme="dark"] {
  --brand-accent: #8b9cf4;
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.3);
  --shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.4);
}

@media (max-width: 768px) {
  .projects-intro, .cta-section {
    padding: 40px 20px;
  }
  
  .project-stats {
    padding: 30px 15px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .project-card {
    padding: 25px 20px;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .project-meta {
    text-align: left;
  }
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }
  
  .featured-tech {
    padding: 30px 20px;
  }
}
</style>
