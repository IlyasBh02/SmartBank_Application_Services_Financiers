import './storage/storage.js';
import './security/security.js';
import './auth/auth.js';
import './components/Navbar.js';
import './components/DashboardView.js';
import './components/TransactionsView.js';
import './components/AuthView.js';
import './components/SimulatorView.js';
import './components/OffersView.js';
import './components/ProfileView.js';
import './router/router.js';

document.addEventListener('DOMContentLoaded', () => {
  if (window.SmartBank && window.SmartBank.storage && window.SmartBank.storage.init) {
    window.SmartBank.storage.init();
  }
  if (window.SmartBank && window.SmartBank.handleRouting) {
    window.SmartBank.handleRouting();
    window.addEventListener('popstate', window.SmartBank.handleRouting);
  }
});
