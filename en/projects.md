---
layout: page
title: Projects
permalink: /en/projects/
lang: en
---

{% assign lang = site.data.languages.en %}

<div class="projects-section">
  <h1 class="mb-4">{{ lang.projects.title }}</h1>
  <p class="lead mb-5">{{ lang.projects.subtitle }}</p>

  <div class="row">
    {% for project in lang.projects.list %}
    <div class="col-md-6 mb-4">
      <div class="project-card">
        <h3 class="project-title">{{ project.name }}</h3>
        <p class="project-time text-muted">{{ project.period }}</p>
        <p class="project-desc">{{ project.description }}</p>
        {% if project.link %}
        <a href="{{ project.link }}" class="project-link" target="_blank">{{ lang.projects.view_more }}</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<style>
.projects-section {
  padding: 2rem 0;
}

.project-card {
  background: var(--global-bg-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1.5rem;
  height: 100%;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.project-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 6px 16px rgba(0,0,0,0.13);
}
.project-title {
  font-size: 1.25rem;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}
.project-time {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}
.project-desc {
  flex: 1 1 auto;
  margin-bottom: 1rem;
}
.project-link {
  color: var(--global-theme-color);
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.2s;
}
.project-link:hover {
  color: var(--global-hover-color);
}
@media (max-width: 768px) {
  .projects-section {
    padding: 1rem 0;
  }
  .project-card {
    padding: 1rem;
  }
}
</style> 