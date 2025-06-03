---
layout: page
title: projects
permalink: /projects/
description: A showcase of my technical projects, research work, and innovations in Computer Science and Machine Learning.
nav: true
nav_order: 2
display_categories: [work, fun, research]
horizontal: false
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

<!-- Projects Filter -->
<div class="project-filter mb-4">
  <div class="text-center">
    <button class="btn btn-outline-primary active" data-filter="all">All Projects</button>
    <button class="btn btn-outline-primary" data-filter="work">Professional Work</button>
    <button class="btn btn-outline-primary" data-filter="research">Research</button>
    <button class="btn btn-outline-primary" data-filter="fun">Personal Projects</button>
  </div>
</div>

<!-- Project Statistics -->
<div class="project-stats mb-5">
  <div class="row">
    <div class="col-md-3 text-center">
      <div class="stat-card">
        <h3 class="stat-number">15+</h3>
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
        <p class="stat-label">Research Papers</p>
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

<!-- Projects Grid -->
<div class="projects">
  {% if site.enable_project_categories and page.display_categories %}
    <!-- Display categorized projects -->
    {% for category in page.display_categories %}
      <a id="{{ category }}" href=".#{{ category }}">
        <h2 class="category">{{ category }}</h2>
      </a>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "importance" %}
      <!-- Generate cards for each project -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row">
          {% for project in sorted_projects %}
            {% include projects_horizontal.liquid %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="row">
        {% for project in sorted_projects %}
          {% include projects.liquid %}
        {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
    <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="row">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
      </div>
    {% endif %}
  {% endif %}
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
          <i class="fab fa-docker"></i>
          <span>Docker</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-robot"></i>
          <span>AI/ML</span>
        </div>
        <div class="tech-item">
          <i class="fab fa-git-alt"></i>
          <span>Git</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-database"></i>
          <span>Databases</span>
        </div>
        <div class="tech-item">
          <i class="fab fa-linux"></i>
          <span>Linux</span>
        </div>
        <div class="tech-item">
          <i class="fas fa-cloud"></i>
          <span>Cloud Computing</span>
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

.project-filter button {
  margin: 0 10px 10px 10px;
  border-radius: 25px;
  padding: 10px 25px;
  border: 2px solid var(--brand-accent);
  transition: all 0.3s ease;
}

.project-filter button.active,
.project-filter button:hover {
  background: var(--brand-accent);
  color: white;
  transform: translateY(-2px);
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

.category {
  background: var(--brand-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  margin: 40px 0 30px 0;
  text-transform: capitalize;
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
  
  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
  }
  
  .featured-tech {
    padding: 30px 20px;
  }
}
</style>
