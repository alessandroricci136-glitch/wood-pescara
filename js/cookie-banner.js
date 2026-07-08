// Cookie / privacy banner GDPR minimale
(function() {
  const KEY = 'wood_cookie_ok';
  if (localStorage.getItem(KEY)) return;

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
    // Abilita Analytics
    window.woodAnalyticsEnabled = true;
    loadAnalytics();
  });

  document.getElementById('cookie-decline').addEventListener('click', () => {
    localStorage.setItem(KEY, 'minimal');
    banner.classList.remove('visible');
    setTimeout(() => banner.remove(), 400);
  });

  function loadAnalytics() {
    if (!window.woodAnalyticsEnabled) return;
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-MN0HB8FVN0';
    s.async = true;
    document.head.appendChild(s);
    s.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-MN0HB8FVN0');
    };
  }

  // Se aveva già accettato in sessione precedente
  if (localStorage.getItem(KEY) === 'all') {
    window.woodAnalyticsEnabled = true;
    loadAnalytics();
  }
})();
