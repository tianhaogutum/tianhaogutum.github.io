---
layout: page
permalink: /blog/
title: blogs
description: Thoughts, insights, and technical explorations in AI, Machine Learning, and beyond.
nav: true
nav_order: 5
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---

<div class="blog-header">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="blog-intro text-center mb-5">
          <h1 class="blog-title">{{ page.title | capitalize }}</h1>
          <p class="blog-description">{{ page.description }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Blog Search -->
<div class="blog-search mb-4">
  <div class="search-container">
    <input type="text" id="blog-search" placeholder="Search posts..." class="form-control">
    <i class="fas fa-search search-icon"></i>
  </div>
</div>

<!-- Categories and Tags Filter -->
<div class="blog-filters mb-4">
  <div class="filter-section">
    <h5>Categories:</h5>
    <div class="filter-tags" id="category-filters">
      {% assign categories = site.posts | map: 'categories' | join: ',' | split: ',' | uniq | sort %}
      <button class="filter-btn active" data-category="all">All</button>
      {% for category in categories %}
        {% unless category == "" %}
          <button class="filter-btn" data-category="{{ category }}">{{ category | capitalize }}</button>
        {% endunless %}
      {% endfor %}
    </div>
  </div>
  
  <div class="filter-section mt-3">
    <h5>Tags:</h5>
    <div class="filter-tags" id="tag-filters">
      {% assign tags = site.posts | map: 'tags' | join: ',' | split: ',' | uniq | sort %}
      <button class="filter-btn active" data-tag="all">All</button>
      {% for tag in tags %}
        {% unless tag == "" %}
          <button class="filter-btn" data-tag="{{ tag }}">{{ tag | capitalize }}</button>
        {% endunless %}
      {% endfor %}
    </div>
  </div>
</div>

<!-- Blog Posts -->
<div class="blog-posts" id="posts-container">
  {% if paginator %}
    {% assign posts = paginator.posts %}
  {% else %}
    {% assign posts = site.posts %}
  {% endif %}
  
  {% for post in posts %}
    <article class="blog-post-card" 
             data-categories="{{ post.categories | join: ' ' }}" 
             data-tags="{{ post.tags | join: ' ' }}"
             data-title="{{ post.title | downcase }}"
             data-content="{{ post.content | strip_html | downcase }}">
      <div class="post-header">
        {% if post.featured %}
          <div class="featured-badge">
            <i class="fas fa-star"></i> Featured
          </div>
        {% endif %}
        
        <div class="post-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%B %d, %Y" }}
          </time>
          {% if post.categories.size > 0 %}
            <span class="separator">•</span>
            {% for category in post.categories %}
              <span class="category">{{ category | capitalize }}</span>
            {% endfor %}
          {% endif %}
        </div>
      </div>
      
      <div class="post-content">
        <h2 class="post-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        
        {% if post.description %}
          <p class="post-description">{{ post.description }}</p>
        {% else %}
          <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        {% endif %}
        
        {% if post.tags.size > 0 %}
          <div class="post-tags">
            {% for tag in post.tags %}
              <span class="tag">{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
      
      <div class="post-footer">
        <a href="{{ post.url | relative_url }}" class="read-more">
          Read More <i class="fas fa-arrow-right"></i>
        </a>
        {% if post.external_source %}
          <span class="external-source">
            <i class="fas fa-external-link-alt"></i> {{ post.external_source }}
          </span>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>

<!-- Pagination -->
{% if paginator %}
  <div class="pagination-wrapper">
    <nav aria-label="Blog pagination">
      <ul class="pagination justify-content-center">
        {% if paginator.previous_page %}
          <li class="page-item">
            <a class="page-link" href="{{ paginator.previous_page_path | relative_url }}">
              <i class="fas fa-chevron-left"></i> Previous
            </a>
          </li>
        {% endif %}
        
        {% for page in (1..paginator.total_pages) %}
          {% if page == paginator.page %}
            <li class="page-item active">
              <span class="page-link">{{ page }}</span>
            </li>
          {% elsif page == 1 %}
            <li class="page-item">
              <a class="page-link" href="{{ '/blog/' | relative_url }}">{{ page }}</a>
            </li>
          {% else %}
            <li class="page-item">
              <a class="page-link" href="{{ site.paginate_path | relative_url | replace: ':num', page }}">{{ page }}</a>
            </li>
          {% endif %}
        {% endfor %}
        
        {% if paginator.next_page %}
          <li class="page-item">
            <a class="page-link" href="{{ paginator.next_page_path | relative_url }}">
              Next <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        {% endif %}
      </ul>
    </nav>
  </div>
{% endif %}

<!-- Blog Archive Link -->
<div class="blog-archive text-center mt-5">
  <a href="{{ '/blog/archive/' | relative_url }}" class="btn btn-outline-primary">
    <i class="fas fa-archive"></i> View All Posts Archive
  </a>
</div>

<style>
.blog-header {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  padding: 60px 20px;
  margin-bottom: 40px;
}

.blog-title {
  font-size: 3rem;
  font-weight: 300;
  color: var(--global-text-color);
  margin-bottom: 15px;
  text-transform: capitalize;
}

.blog-description {
  font-size: 1.2rem;
  color: var(--global-text-color-light);
  margin: 0;
}

.blog-search {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-container {
  position: relative;
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--global-text-color-light);
}

#blog-search {
  padding: 12px 45px 12px 15px;
  border: 2px solid var(--global-divider-color);
  border-radius: 25px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

#blog-search:focus {
  border-color: var(--global-theme-color);
  box-shadow: 0 0 0 0.2rem rgba(var(--global-theme-color), 0.25);
}

.blog-filters {
  margin-bottom: 30px;
}

.filter-section h5 {
  font-weight: 600;
  color: var(--global-text-color);
  margin-bottom: 10px;
}

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-btn {
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  color: var(--global-text-color);
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--global-theme-color);
  color: white;
  border-color: var(--global-theme-color);
}

.blog-posts {
  display: grid;
  gap: 30px;
}

.blog-post-card {
  background: var(--global-card-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 15px;
  padding: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.blog-post-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--global-hover-shadow);
}

.featured-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(45deg, #ffd700, #ffed4a);
  color: #333;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.post-meta {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.post-meta .separator {
  margin: 0 8px;
}

.post-meta .category {
  background: var(--global-theme-color);
  color: white;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
}

.post-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.post-title a {
  color: var(--global-text-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.post-title a:hover {
  color: var(--global-theme-color);
}

.post-description,
.post-excerpt {
  color: var(--global-text-color-light);
  line-height: 1.6;
  margin-bottom: 15px;
}

.post-tags {
  margin: 15px 0;
}

.post-tags .tag {
  background: rgba(var(--global-theme-color), 0.1);
  color: var(--global-theme-color);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-right: 8px;
  margin-bottom: 5px;
  display: inline-block;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--global-divider-color);
}

.read-more {
  color: var(--global-theme-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: var(--global-theme-color);
  transform: translateX(5px);
}

.external-source {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}

.pagination-wrapper {
  margin: 50px 0 30px 0;
}

.pagination .page-link {
  color: var(--global-theme-color);
  border-color: var(--global-divider-color);
  padding: 10px 15px;
}

.pagination .page-item.active .page-link {
  background-color: var(--global-theme-color);
  border-color: var(--global-theme-color);
}

.blog-archive {
  padding: 30px 0;
  border-top: 1px solid var(--global-divider-color);
}

/* Responsive */
@media (max-width: 768px) {
  .blog-title {
    font-size: 2.5rem;
  }
  
  .blog-header {
    padding: 40px 20px;
  }
  
  .filter-tags {
    justify-content: center;
  }
  
  .post-footer {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}

/* Dark mode adjustments */
html[data-theme="dark"] .blog-post-card {
  background: var(--global-card-bg-color);
  border-color: var(--global-divider-color);
}

html[data-theme="dark"] .filter-btn {
  background: var(--global-card-bg-color);
  border-color: var(--global-divider-color);
  color: var(--global-text-color);
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('blog-search');
  const posts = document.querySelectorAll('.blog-post-card');
  const categoryFilters = document.querySelectorAll('[data-category]');
  const tagFilters = document.querySelectorAll('[data-tag]');
  
  let activeCategory = 'all';
  let activeTag = 'all';
  
  // Search functionality
  searchInput.addEventListener('input', function() {
    filterPosts();
  });
  
  // Category filter
  categoryFilters.forEach(button => {
    button.addEventListener('click', function() {
      categoryFilters.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.dataset.category;
      filterPosts();
    });
  });
  
  // Tag filter
  tagFilters.forEach(button => {
    button.addEventListener('click', function() {
      tagFilters.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeTag = this.dataset.tag;
      filterPosts();
    });
  });
  
  function filterPosts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    posts.forEach(post => {
      const title = post.dataset.title;
      const content = post.dataset.content;
      const categories = post.dataset.categories;
      const tags = post.dataset.tags;
      
      const matchesSearch = searchTerm === '' || 
                           title.includes(searchTerm) || 
                           content.includes(searchTerm);
      
      const matchesCategory = activeCategory === 'all' || 
                             categories.includes(activeCategory);
      
      const matchesTag = activeTag === 'all' || 
                        tags.includes(activeTag);
      
      if (matchesSearch && matchesCategory && matchesTag) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  }
});
</script> 