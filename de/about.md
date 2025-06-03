---
layout: page
title: Über Mich
permalink: /de/about/
lang: de
---

{% assign lang = site.data.languages.de %}

<div class="about-section">
  <h1 class="mb-4">{{ lang.about.title }}</h1>
  <p class="lead mb-5">{{ lang.about.subtitle }}</p>

  <div class="row">
    <div class="col-lg-8">
      <div class="education-section mb-5">
        <h2 class="mb-4">{{ lang.about.education.title }}</h2>
        
        <div class="education-item mb-4">
          <h3>{{ lang.about.education.tum.degree }}</h3>
          <p class="text-muted">{{ lang.about.education.tum.period }}</p>
          <p>{{ lang.about.education.tum.details }}</p>
        </div>

        <div class="education-item">
          <h3>{{ lang.about.education.fudan.degree }}</h3>
          <p class="text-muted">{{ lang.about.education.fudan.period }}</p>
          <p>{{ lang.about.education.fudan.details }}</p>
        </div>
      </div>

      <div class="experience-section mb-5">
        <h2 class="mb-4">{{ lang.about.experience.title }}</h2>
        
        <div class="experience-item mb-4">
          <h3>{{ lang.about.experience.ilabx.role }}</h3>
          <p class="text-muted">{{ lang.about.experience.ilabx.period }}</p>
          <p>{{ lang.about.experience.ilabx.details }}</p>
        </div>

        <div class="experience-item">
          <h3>{{ lang.about.experience.gamma.role }}</h3>
          <p class="text-muted">{{ lang.about.experience.gamma.period }}</p>
          <p>{{ lang.about.experience.gamma.details }}</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4">
      <div class="skills-section mb-5">
        <h2 class="mb-4">{{ lang.about.skills.title }}</h2>
        
        <div class="skill-category mb-4">
          <h3>{{ lang.about.skills.programming }}</h3>
          <ul class="list-unstyled">
            <li>Python</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div class="skill-category mb-4">
          <h3>{{ lang.about.skills.frameworks }}</h3>
          <ul class="list-unstyled">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>React</li>
            <li>Spring Boot</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>{{ lang.about.skills.languages }}</h3>
          <p>{{ lang.about.skills.languages_list }}</p>
        </div>
      </div>

      <div class="interests-section">
        <h2 class="mb-4">{{ lang.about.interests.title }}</h2>
        <p>{{ lang.about.interests.interests_list }}</p>
      </div>
    </div>
  </div>
</div>

<style>
.about-section {
  padding: 2rem 0;
}

.education-item, .experience-item {
  padding: 1.5rem;
  background: var(--global-bg-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.education-item:hover, .experience-item:hover {
  transform: translateY(-5px);
}

.skills-section, .interests-section {
  padding: 1.5rem;
  background: var(--global-bg-color);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-category h3 {
  font-size: 1.1rem;
  color: var(--global-theme-color);
  margin-bottom: 1rem;
}

.skill-category ul li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .about-section {
    padding: 1rem 0;
  }
  
  .education-item, .experience-item {
    padding: 1rem;
  }
}
</style> 