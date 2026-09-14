window.SmartBank = window.SmartBank || {};
window.SmartBank.security = {};

const SESSION_KEY = 'smartbank_session';

window.SmartBank.security.hashPassword = async function(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};

window.SmartBank.security.getCurrentUser = function() {
    return window.SmartBank.storage ? window.SmartBank.storage.get(SESSION_KEY) : null;
};

window.SmartBank.security.setCurrentUser = function(user) {
    if (window.SmartBank.storage) {
        window.SmartBank.storage.set(SESSION_KEY, user);
    }
};

window.SmartBank.security.logout = function() {
    if (window.SmartBank.storage) {
        window.SmartBank.storage.remove(SESSION_KEY);
    }
};

window.SmartBank.security.authGuard = function(currentPath) {
    const currentUser = window.SmartBank.security.getCurrentUser();
    const publicRoutes = ['/login', '/register'];

    if (!publicRoutes.includes(currentPath) && !currentUser) {
        return false;
    }
    return true;
};