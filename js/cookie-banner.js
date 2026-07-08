// Cookie / privacy banner GDPR minimale
(function() {
  const KEY = 'wood_cookie_ok';

  function loadAnalytics() {
    if (window.woodAnalyticsLoaded) return;
    window.woodAnalyticsLoaded = true;
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-NZ84LTJ8C5';
    s.async = true;
    document.head.appendChild(s);
    s.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-NZ84LTJ8C5');
    };
  }

  const savedChoice = localStorage.getItem(KEY);
  if (savedChoice === 'all') {
    loadAnalytics();
    return;
  }
  if (savedChoice === 'minimal') return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div class="cookie-inner">
      <p class="cookie-text">
        Questo sito usa cookie tecnici e Google Analytics per migliorare l'esperienza.
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
      </p>
      <div class="cookie-actions">
        <button id="cookie-decline">Solo necessari</button>
        <button id="cookie-accept">Accetta</button>
      </div>
    </div>`;
  document.body.appendChild(banner);

  setTimeout(() => banner.classList.add('visible'), 300);

  document.getElementById('cookie-accept').addEventListener('click', () => {
    localStorage.setItem(KEY, 'all');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
    loadAnalytics();
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem(KEY, 'minimal');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  });

})();
