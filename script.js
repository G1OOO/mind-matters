document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('preferredLang', lang);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('preferredLang') || 'ka';
    const nextLang = currentLang === 'ka' ? 'en' : 'ka';
    applyLanguage(nextLang);
}

applyLanguage(localStorage.getItem('preferredLang') || 'ka');

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});