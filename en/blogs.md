---
layout: page
title: Blogs
permalink: /en/blogs/
lang: en
---

{% assign lang = site.data.languages.en %}

<div class="blogs-section">
  <h1 class="mb-4">{{ lang.blogs.title }}</h1>
  <p class="lead mb-5">{{ lang.blogs.subtitle }}</p>

  <div class="row">
    {% for blog in lang.blogs.list %}
    <div class="col-md-6 mb-4">
      <div class="blog-card">
        <h3 class="blog-title">{{ blog.title }}</h3>
        <p class="blog-time text-muted">{{ blog.date }}</p>
        <p class="blog-desc">{{ blog.description }}</p>
        {% if blog.link %}
        <a href="{{ blog.link }}" class="blog-link" target="_blank">{{ lang.blogs.read_more }}</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<style>
.blogs-section {
  padding: 2rem 0;
}

.blog-card {
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
.blog-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 6px 16px rgba(0,0,0,0.13);
}
.blog-title {
  font-size: 1.15rem;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}
.blog-time {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
}
.blog-desc {
  flex: 1 1 auto;
  margin-bottom: 1rem;
}
.blog-link {
  color: var(--global-theme-color);
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.2s;
}
.blog-link:hover {
  color: var(--global-hover-color);
}
@media (max-width: 768px) {
  .blogs-section {
    padding: 1rem 0;
  }
  .blog-card {
    padding: 1rem;
  }
}
</style> 