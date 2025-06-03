document.addEventListener('DOMContentLoaded', function() {
    // 获取所有语言切换项
    const langLinks = document.querySelectorAll('.language-switcher .dropdown-item');
    // 维护支持的语言代码
    const supportedLangs = ['en', 'de', 'zh-Hans', 'zh-Hant'];

    // 页面slug白名单（如有新页面请补充）
    const pageSlugs = ['about', 'projects', 'blogs', 'research', 'index', ''];

    // 获取当前路径和slug
    function getCurrentSlug() {
        // /en/about/ => ['','en','about','']
        const parts = window.location.pathname.split('/').filter(Boolean);
        // parts[0] = lang, parts[1] = slug
        if (parts.length >= 2 && supportedLangs.includes(parts[0])) {
            return parts[1];
        } else if (parts.length === 1 && supportedLangs.includes(parts[0])) {
            return 'index';
        } else if (parts.length === 0) {
            return 'index';
        } else {
            return parts[parts.length-1];
        }
    }

    function getCurrentLang() {
        const parts = window.location.pathname.split('/').filter(Boolean);
        if (parts.length > 0 && supportedLangs.includes(parts[0])) {
            return parts[0];
        }
        return 'en';
    }

    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetLang = this.getAttribute('data-lang');
            const currentSlug = getCurrentSlug();
            let targetUrl = `/${targetLang}/`;
            if (currentSlug && currentSlug !== 'index' && pageSlugs.includes(currentSlug)) {
                targetUrl += `${currentSlug}/`;
            }
            // 记忆用户选择
            localStorage.setItem('preferred_language', targetLang);
            // 先尝试跳转到目标页面
            fetch(targetUrl, {method: 'HEAD'}).then(resp => {
                if (resp.ok) {
                    window.location.href = targetUrl;
                } else {
                    window.location.href = `/${targetLang}/`;
                }
            }).catch(() => {
                window.location.href = `/${targetLang}/`;
            });
        });
    });

    // 自动跳转到用户偏好语言（仅在首页时）
    const storedLang = localStorage.getItem('preferred_language');
    if (storedLang && supportedLangs.includes(storedLang)) {
        const currentLang = getCurrentLang();
        if (currentLang !== storedLang) {
            // 只在首页自动跳转
            const slug = getCurrentSlug();
            if (slug === 'index') {
                window.location.href = `/${storedLang}/`;
            }
        }
    }
}); 