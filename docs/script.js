// --- Theme Toggle ---
    const THEME_KEY = 'theme-preference';
    const html = document.documentElement;
    const toggle = document.getElementById('theme-toggle');

    function getStoredTheme() {
      return localStorage.getItem(THEME_KEY);
    }

    function setTheme(theme) {
      if (theme === 'dark' || theme === 'light') {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
      } else {
        html.removeAttribute('data-theme');
        localStorage.removeItem(THEME_KEY);
      }
    }

    function getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Initialize: apply stored preference or follow system
    const stored = getStoredTheme();
    if (stored) {
      setTheme(stored);
    }

    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || (stored ? stored : getSystemTheme());
      setTheme(current === 'dark' ? 'light' : 'dark');
    });

    // Listen for system theme changes (only when no manual preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!getStoredTheme()) {
        html.removeAttribute('data-theme');
      }
    });
    // --- Scroll Entry Animations ---
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- Prompt Gallery ---
    const grid = document.getElementById('prompt-grid');

    PROMPTS.forEach((prompt, i) => {
      const card = document.createElement('div');
      card.className = 'prompt-card reveal';
      card.style.transitionDelay = `${i * 80}ms`;
      card.setAttribute('data-file', prompt.file);
      card.onclick = () => openModal(prompt.file, prompt.name);

      card.innerHTML = `
        <div class="prompt-card__header">
          <span class="prompt-card__name">${prompt.name}</span>
          <span class="tag tag--${prompt.tagClass.replace('tag-', '')}">${prompt.tag}</span>
        </div>
        <div class="prompt-card__preview">${prompt.preview}</div>
        <div class="prompt-card__desc">${prompt.desc}</div>
      `;

      grid.appendChild(card);
    });

    // Observe newly created prompt cards
    document.querySelectorAll('.prompt-card.reveal').forEach(el => observer.observe(el));

    // --- Modal ---
    function openModal(file, name) {
      const overlay = document.getElementById('modal-overlay');
      const title = document.getElementById('modal-title');
      const code = document.getElementById('modal-code');

      title.textContent = name + ' — ' + file;
      code.textContent = PS1_CODE[file] || '// Source not available';

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal(e) {
      if (e && e.target !== document.getElementById('modal-overlay') && !e.target.classList.contains('modal__close')) return;
      document.getElementById('modal-overlay').classList.remove('active');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // --- Accordion ---
    function toggleAccordion(trigger) {
      const item = trigger.closest('.accordion__item');
      const content = item.querySelector('.accordion__content');
      const isOpen = item.getAttribute('data-open') === 'true';

      if (isOpen) {
        content.style.maxHeight = '0';
        item.setAttribute('data-open', 'false');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        item.setAttribute('data-open', 'true');
      }
    }

    // --- Copy Code ---
    function copyCode(btn) {
      const pre = btn.closest('.code-block').querySelector('pre');
      const text = pre.textContent;

      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = original; }, 1500);
      });
    }

    // --- Copy Modal Code ---
    function copyModalCode() {
      const code = document.getElementById('modal-code');
      const btn = document.getElementById('modal-copy');
      const text = code.textContent;

      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = original; }, 1500);
      });
    }

    // --- Smooth scroll for nav links ---
    document.querySelectorAll('.nav__links a').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });