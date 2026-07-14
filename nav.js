(function () {
  const LINKS = [
    { href: 'index.html',         icon: '⌂', label: 'Panel główny' },
    { href: 'przepisy.html',      icon: '☕', label: 'Przepisy' },
    { href: 'wrzuc_paragon.html', icon: '🧾', label: 'Wrzuć paragon' },
  ];

  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const style = document.createElement('style');
  style.textContent = `
    #nav-toggle {
      position: fixed;
      top: 14px;
      right: 16px;
      z-index: 1000;
      background: #1a1814;
      border: 1px solid #2e2a22;
      border-radius: 6px;
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      cursor: pointer;
      padding: 0;
    }
    #nav-toggle span {
      display: block;
      width: 18px;
      height: 2px;
      background: #8a8070;
      border-radius: 2px;
      transition: all 0.25s;
    }
    #nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #f5a623; }
    #nav-toggle.open span:nth-child(2) { opacity: 0; }
    #nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #f5a623; }

    #nav-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 998;
    }
    #nav-overlay.open { display: block; }

    #nav-drawer {
      position: fixed;
      top: 0;
      right: -260px;
      width: 240px;
      height: 100%;
      background: #141210;
      border-left: 1px solid #2e2a22;
      z-index: 999;
      transition: right 0.25s ease;
      padding: 20px 0 40px;
      display: flex;
      flex-direction: column;
    }
    #nav-drawer.open { right: 0; }

    #nav-drawer .nav-logo {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      color: #f5a623;
      letter-spacing: 4px;
      padding: 10px 20px 20px;
      border-bottom: 1px solid #2e2a22;
      margin-bottom: 12px;
    }

    #nav-drawer a {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      text-decoration: none;
      color: #8a8070;
      font-family: 'Courier Prime', monospace;
      font-size: 14px;
      letter-spacing: 1px;
      transition: all 0.15s;
      border-left: 3px solid transparent;
    }
    #nav-drawer a:hover {
      color: #e8e0d0;
      background: #1a1814;
    }
    #nav-drawer a.active {
      color: #f5a623;
      border-left-color: #f5a623;
      background: #1a1814;
    }
    #nav-drawer a .nav-icon { font-size: 18px; width: 24px; text-align: center; }
  `;
  document.head.appendChild(style);

  // Toggle button
  const btn = document.createElement('button');
  btn.id = 'nav-toggle';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML = '<span></span><span></span><span></span>';

  // Overlay
  const overlay = document.createElement('div');
  overlay.id = 'nav-overlay';

  // Drawer
  const drawer = document.createElement('div');
  drawer.id = 'nav-drawer';
  drawer.innerHTML = `<div class="nav-logo">Piętro Cafe</div>` +
    LINKS.map(l => {
      const active = currentPage === l.href.split('/').pop() ? ' class="active"' : '';
      return `<a href="${l.href}"${active}><span class="nav-icon">${l.icon}</span>${l.label}</a>`;
    }).join('');

  document.body.appendChild(overlay);
  document.body.appendChild(drawer);
  document.body.appendChild(btn);

  function open() {
    btn.classList.add('open');
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
  function close() {
    btn.classList.remove('open');
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }

  btn.addEventListener('click', () => btn.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
})();
