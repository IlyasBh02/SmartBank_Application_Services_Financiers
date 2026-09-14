window.SmartBank = window.SmartBank || {};

window.SmartBank.renderProfileView = function() {
  const user = window.SmartBank.security ? window.SmartBank.security.getCurrentUser() : null;

  const name = user?.name || 'Utilisateur';
  const email = user?.email || 'email@exemple.fr';
  const phone = user?.phone || '+33 6 12 34 56 78';
  const address = user?.address || '12 Rue de la Paix, 75002 Paris';

  const initials = name
    .split(' ')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2) || 'SB';

  return `
    <main class="container">
      <div style="margin-bottom: 25px;">
        <h2>Profil & Informations Utilisateur</h2>
        <p>Gérez vos informations personnelles et votre sécurité de compte</p>
      </div>

      <div class="profile-card">
        <div class="profile-avatar">${initials}</div>
        <div class="profile-details">
          <h2>${name}</h2>
          <p><strong>Statut du compte :</strong> <span class="badge badge-success">Actif</span></p>
          <p><strong>Membre depuis :</strong> Septembre 2026</p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
        
        <section class="transactions-section">
          <h3>Modifier mes Informations</h3>
          <form id="profile-info-form" style="margin-top: 15px;">
            <div class="form-group">
              <label for="profile-email">Adresse E-mail</label>
              <input type="email" id="profile-email" class="form-control" value="${email}" required />
            </div>

            <div class="form-group">
              <label for="profile-phone">Numéro de Téléphone</label>
              <input type="tel" id="profile-phone" class="form-control" value="${phone}" />
            </div>

            <div class="form-group">
              <label for="profile-address">Adresse Postale</label>
              <input type="text" id="profile-address" class="form-control" value="${address}" />
            </div>

            <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Enregistrer les modifications</button>
          </form>
        </section>

        <section class="transactions-section">
          <h3>Sécurité & Mot de Passe</h3>
          <form id="profile-password-form" style="margin-top: 15px;">
            <div class="form-group">
              <label for="current-password">Mot de passe actuel</label>
              <input type="password" id="current-password" class="form-control" placeholder="••••••••" />
            </div>

            <div class="form-group">
              <label for="new-password">Nouveau mot de passe</label>
              <input type="password" id="new-password" class="form-control" placeholder="••••••••" minlength="8" />
            </div>

            <div class="form-group">
              <label for="confirm-password">Confirmer le nouveau mot de passe</label>
              <input type="password" id="confirm-password" class="form-control" placeholder="••••••••" minlength="8" />
            </div>

            <button type="submit" class="btn btn-outline" style="margin-top: 10px;">Changer mon mot de passe</button>
          </form>
        </section>

      </div>
    </main>
  `;
};