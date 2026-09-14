window.SmartBank = window.SmartBank || {};

window.SmartBank.navigateTo = function (path) {
  window.history.pushState(null, '', path);
  window.SmartBank.handleRouting();
};

window.SmartBank.handleRouting = function () {
  const root = document.getElementById('root');
  if (!root) return;

  let currentPath = window.location.pathname;
  if (currentPath === '/' || currentPath === '/public/' || currentPath.endsWith('/index.html')) {
    currentPath = '/dashboard';
  }

  const SB = window.SmartBank;

  const routes = {
    '/': SB.renderDashboardView,
    '/dashboard': SB.renderDashboardView,
    '/login': () => SB.renderAuthView(false),
    '/register': () => SB.renderAuthView(true),
    '/simulator': SB.renderSimulatorView,
    '/offers': SB.renderOffersView,
    '/profile': SB.renderProfileView,
    '/transactions': SB.renderTransactionsView
  };

  const publicRoutes = ['/login', '/register'];
  const isAuthPage = publicRoutes.includes(currentPath);
  const currentUser = SB.security ? SB.security.getCurrentUser() : null;

  if (!currentUser && !isAuthPage) {
    window.SmartBank.navigateTo('/login');
    return;
  }

  const renderView = routes[currentPath] || renderNotFoundView;
  const navbarHTML = isAuthPage ? '' : SB.renderNavbar(currentPath);

  root.innerHTML = `
    ${navbarHTML}
    ${renderView()}
  `;

  if (isAuthPage && SB.auth && SB.auth.initAuthEvents) {
    SB.auth.initAuthEvents();
  }

  if (currentPath === '/simulator' && SB.initSimulatorEvents) {
    SB.initSimulatorEvents();
  }
  window.SmartBank.attachLinkListeners();
};

window.SmartBank.attachLinkListeners = function () {
  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.dataset.logout === 'true' && window.SmartBank.security) {
        window.SmartBank.security.logout();
      }
      const path = this.getAttribute('href');
      window.SmartBank.navigateTo(path);
    });
  });
};

function renderNotFoundView() {
  return `
    <main class="container" style="text-align: center; padding: 60px 20px;">
      <h1 style="font-size: 72px; color: var(--primary-color); margin-bottom: 10px;">404</h1>
      <h2 style="margin-bottom: 25px;">Page non trouvée</h2>
      <a href="/dashboard" class="btn btn-primary">Retourner au Dashboard</a>
    </main>
  `;
}