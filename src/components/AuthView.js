window.SmartBank = window.SmartBank || {};

window.SmartBank.renderAuthView = function (isRegisterMode = false) {
  if (isRegisterMode) {
    return `
      <main class="auth-page-wrapper">
        <div class="auth-card">
          <div class="auth-logo-wrapper">
            <img src="/assets/logo.jpg" alt="SmartBank Logo" class="auth-logo-img" />
          </div>

          <div class="auth-header">
            <h2>Inscription</h2>
            <p>Rejoignez l'expérience bancaire 100% digitale</p>
          </div>

          <form id="register-form">

            <div class="form-group">
              <label for="reg-name">Nom complet</label>
              <input type="text" id="reg-name" class="form-control" placeholder="Jean Dupont" required />
            </div>

            <div class="form-group">
              <label for="reg-email">Adresse e-mail</label>
              <input type="email" id="reg-email" class="form-control" placeholder="nom@exemple.fr" required />
            </div>

            <div class="form-group">
              <label for="reg-password">Mot de passe</label>
              <input type="password" id="reg-password" class="form-control" placeholder="8 caractères minimum" minlength="8" required />
            </div>

            <div class="form-group">
              <label for="reg-password-confirm">Confirmer le mot de passe</label>
              <input type="password" id="reg-password-confirm" class="form-control" placeholder="••••••••" minlength="8" required />
            </div>

            <button type="submit" class="btn btn-primary auth-submit-btn">Créer mon compte</button>
          </form>

          <div class="auth-footer">
            <p class="auth-footer-text">
              Déjà inscrit ? <a href="/login" class="auth-link">Se connecter</a>
            </p>
          </div>
        </div>
      </main>
    `;
  }

  return `
    <main class="auth-page-wrapper">
      <div class="auth-card">
        <div class="auth-logo-wrapper">
          <img src="/assets/logo.jpg" alt="SmartBank Logo" class="auth-logo-img" />
        </div>

        <div class="auth-header">
          <h2>Connexion</h2>
          <p>Gérez vos comptes et vos opérations en toute sécurité</p>
        </div>

        <form id="login-form">
          <div class="form-group">
            <label for="login-email">Adresse e-mail</label>
            <input type="email" id="login-email" class="form-control" placeholder="nom@exemple.fr" required />
          </div>

          <div class="form-group">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <label for="login-password" style="margin-bottom: 0;">Mot de passe</label>
              <a href="#" class="auth-forgot-link">Mot de passe oublié ?</a>
            </div>
            <input type="password" id="login-password" class="form-control" placeholder="••••••••" required />
          </div>

          <button type="submit" class="btn btn-primary auth-submit-btn">Se connecter</button>
        </form>

        <div class="auth-footer">
          <p class="auth-footer-text">
            Nouveau chez SmartBank ? <a href="/register" class="auth-link">Créer un compte</a>
          </p>
        </div>
      </div>
    </main>
  `;
};
