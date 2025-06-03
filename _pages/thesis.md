---
layout: page
permalink: /thesis/
title: thesis
nav: true
nav_order: 3
description: >
  My Bachelor's thesis exploring cutting-edge research in computer science and machine learning. 
  A comprehensive academic work demonstrating theoretical knowledge and practical application.
---

<!-- Thesis Hero Section -->
<div class="thesis-hero">
  <div class="hero-content text-center">
    <h1 class="hero-title">Bachelor's Thesis 📚</h1>
    <p class="hero-subtitle">Academic Research in Computer Science</p>
    <div class="hero-badge">
      <span class="degree-badge">BSc Computer Science • TUM</span>
    </div>
  </div>
</div>

<!-- Thesis Overview -->
<div class="thesis-overview">
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="thesis-content">
        <h2>🎯 Research Overview</h2>
        <p class="lead">
          This thesis represents the culmination of my undergraduate studies in Computer Science at the Technical University of Munich. 
          The work focuses on <strong>[Your Thesis Topic]</strong>, exploring innovative approaches to solve complex computational problems 
          through rigorous research methodology and practical implementation.
        </p>
        
        <div class="thesis-details">
          <div class="detail-grid">
            <div class="detail-item">
              <h4>🏛️ Institution</h4>
              <p>Technical University of Munich (TUM)</p>
            </div>
            <div class="detail-item">
              <h4>📅 Completion Date</h4>
              <p>January 2025</p>
            </div>
            <div class="detail-item">
              <h4>🎓 Degree</h4>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <div class="detail-item">
              <h4>⭐ Grade</h4>
              <p>Excellent (1.0 - 1.3)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Thesis Content Sections -->
<div class="thesis-sections">
  <h2 class="section-title">📖 Thesis Structure</h2>
  
  <div class="section-card">
    <div class="section-header">
      <h3>🔬 Abstract</h3>
    </div>
    <div class="section-content">
      <p>
        [Your thesis abstract goes here - A concise summary of your research problem, methodology, key findings, and conclusions. 
        This should be 150-300 words highlighting the significance and impact of your work.]
      </p>
    </div>
  </div>

  <div class="section-card">
    <div class="section-header">
      <h3>🎯 Research Objectives</h3>
    </div>
    <div class="section-content">
      <ul class="objectives-list">
        <li>Primary objective: [Main research goal]</li>
        <li>Secondary objective: [Supporting research goal]</li>
        <li>Methodology validation: [Approach verification]</li>
        <li>Practical application: [Real-world implementation]</li>
      </ul>
    </div>
  </div>

  <div class="section-card">
    <div class="section-header">
      <h3>⚙️ Methodology</h3>
    </div>
    <div class="section-content">
      <div class="methodology-grid">
        <div class="method-item">
          <h5>📊 Data Collection</h5>
          <p>Description of data sources and collection methods</p>
        </div>
        <div class="method-item">
          <h5>🔧 Implementation</h5>
          <p>Technical frameworks and tools utilized</p>
        </div>
        <div class="method-item">
          <h5>📈 Analysis</h5>
          <p>Statistical and computational analysis approaches</p>
        </div>
        <div class="method-item">
          <h5>✅ Validation</h5>
          <p>Testing and validation procedures</p>
        </div>
      </div>
    </div>
  </div>

  <div class="section-card">
    <div class="section-header">
      <h3>🏆 Key Findings</h3>
    </div>
    <div class="section-content">
      <div class="findings-list">
        <div class="finding-item">
          <h5>📋 Finding 1</h5>
          <p>[Description of your first major finding]</p>
        </div>
        <div class="finding-item">
          <h5>📋 Finding 2</h5>
          <p>[Description of your second major finding]</p>
        </div>
        <div class="finding-item">
          <h5>📋 Finding 3</h5>
          <p>[Description of your third major finding]</p>
        </div>
      </div>
    </div>
  </div>

  <div class="section-card">
    <div class="section-header">
      <h3>🔮 Future Work</h3>
    </div>
    <div class="section-content">
      <p>
        [Discuss potential extensions of your research, limitations encountered, and suggestions for future investigations 
        that could build upon your work.]
      </p>
    </div>
  </div>
</div>

<!-- Download Section -->
<div class="thesis-download">
  <div class="download-card">
    <h3>📄 Access Thesis</h3>
    <p>Full thesis document available for academic review</p>
    <div class="download-buttons">
      <a href="{{ 'thesis.pdf' | prepend: 'assets/pdf/' | relative_url }}" target="_blank" class="btn btn-primary">
        <i class="fa-solid fa-download"></i> Download PDF
      </a>
      <a href="#" class="btn btn-secondary">
        <i class="fa-solid fa-external-link"></i> View Abstract
      </a>
    </div>
  </div>
</div>

<style>
/* Thesis Page Styles */
.thesis-hero {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  padding: 80px 40px;
  margin-bottom: 60px;
  position: relative;
  overflow: hidden;
}

.thesis-hero::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  background: var(--brand-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--global-text-color-light);
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.degree-badge {
  background: var(--brand-accent);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  z-index: 2;
}

.thesis-overview {
  margin: 60px 0;
}

.thesis-content {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-card);
}

html[data-theme="dark"] .thesis-content {
  background: rgba(31, 41, 55, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.detail-item {
  text-align: center;
  padding: 20px;
  background: rgba(var(--brand-accent), 0.1);
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.detail-item:hover {
  transform: translateY(-5px);
}

.detail-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--brand-accent);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 50px;
  background: var(--brand-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.thesis-sections {
  margin: 80px 0;
}

.section-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 35px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-card);
}

.section-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

html[data-theme="dark"] .section-card {
  background: rgba(31, 41, 55, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-header h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--brand-accent);
  margin-bottom: 20px;
}

.objectives-list {
  list-style: none;
  padding: 0;
}

.objectives-list li {
  padding: 12px 0;
  border-bottom: 1px solid rgba(var(--brand-accent), 0.2);
  font-size: 1.1rem;
}

.objectives-list li:last-child {
  border-bottom: none;
}

.methodology-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.method-item {
  background: rgba(var(--brand-accent), 0.1);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.method-item:hover {
  transform: scale(1.05);
}

.method-item h5 {
  font-weight: 600;
  color: var(--brand-accent);
  margin-bottom: 10px;
}

.findings-list {
  display: grid;
  gap: 20px;
}

.finding-item {
  background: rgba(var(--brand-accent), 0.05);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid var(--brand-accent);
}

.finding-item h5 {
  font-weight: 600;
  color: var(--brand-accent);
  margin-bottom: 10px;
}

.thesis-download {
  margin: 80px 0;
  text-align: center;
}

.download-card {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  padding: 50px 40px;
  margin: 0 auto;
  max-width: 600px;
}

.download-card h3 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--brand-accent);
}

.download-buttons {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: var(--brand-accent);
  color: white;
}

.btn-primary:hover {
  background: var(--brand-accent);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  color: white;
  text-decoration: none;
}

.btn-secondary {
  background: rgba(var(--brand-accent), 0.1);
  color: var(--brand-accent);
  border: 2px solid var(--brand-accent);
}

.btn-secondary:hover {
  background: var(--brand-accent);
  color: white;
  transform: translateY(-2px);
  text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .thesis-hero {
    padding: 60px 20px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .methodology-grid {
    grid-template-columns: 1fr;
  }
  
  .thesis-content,
  .section-card,
  .download-card {
    padding: 25px 20px;
  }
  
  .download-buttons {
    flex-direction: column;
    align-items: center;
  }
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
</style> 