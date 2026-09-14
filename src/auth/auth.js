window.SmartBank = window.SmartBank || {};
window.SmartBank.auth = {};

window.SmartBank.auth.initAuthEvents = function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', window.SmartBank.auth.handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', window.SmartBank.auth.handleRegister);
    }
};

window.SmartBank.auth.handleRegister = async function(e) {
    e.preventDefault();
    
    const SB_STORAGE = window.SmartBank.storage;
    const SB_SECURITY = window.SmartBank.security;

    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;
    const passwordConfirmation = document.getElementById('reg-password-confirm').value;

    if (!name || !email || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    if (password !== passwordConfirmation) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }

    const users = SB_STORAGE.get('smartbank_users') || [];
    
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        alert('Un compte existe déjà avec cet email.');
        return;
    }

    const passwordHash = await SB_SECURITY.hashPassword(password);

    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        passwordHash: passwordHash,
        accountNumber: 'FR76' + Math.floor(1000000000 + Math.random() * 9000000000),
        balance: 50,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    SB_STORAGE.set('smartbank_users', users);

    SB_SECURITY.setCurrentUser(newUser);
    window.SmartBank.navigateTo('/dashboard');
};

window.SmartBank.auth.handleLogin = async function(e) {
    e.preventDefault();

    const SB_STORAGE = window.SmartBank.storage;
    const SB_SECURITY = window.SmartBank.security;

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    const users = SB_STORAGE.get('smartbank_users') || [];
    const passwordHash = await SB_SECURITY.hashPassword(password);

    const user = users.find(u => u.email === email && u.passwordHash === passwordHash);

    if (!user) {
        alert('Email ou mot de passe incorrect.');
        return;
    }

    SB_SECURITY.setCurrentUser(user);
    window.SmartBank.navigateTo('/dashboard');
};