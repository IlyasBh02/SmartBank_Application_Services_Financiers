window.SmartBank = window.SmartBank || {};

window.SmartBank.renderDashboardView = function () {
  const currentUser = window.SmartBank.security ? window.SmartBank.security.getCurrentUser() : null;

  const formattedBalance = Number(currentUser?.balance).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '€';
  return `
    <main class="container">
      <div style="margin-bottom: 25px;">
        <h2>Bienvenue, ${currentUser?.name || 'Utilisateur'}</h2>
        <p>Aperçu en temps réel de vos comptes et mouvements récents</p>
      </div>

      <div class="dashboard-grid">
        <div class="account-card primary-card">
          <div class="account-type">Compte Courant Principal</div>
          <div class="account-number">${currentUser?.accountNumber || 'N° de Compte non disponible'}</div>
          <div class="account-balance">${formattedBalance}</div>
        </div>

        <div class="account-card">
          <div class="account-type">Livret Épargne</div>
          <div class="account-number">N° de Compte : 300020050123</div>
          <div class="account-balance">12 850,50 €</div>
        </div>
      </div>

      <section class="transactions-section">
        <div class="transactions-header">
          <h3>Historique des Transactions Récentes</h3>
        </div>

        <table class="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Motif</th>
              <th>Montant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>07/09/2026</td>
              <td>Virement reçu — Prélèvement Employeur</td>
              <td class="amount-positive">+2 600,00 €</td>
            </tr>
            <tr>
              <td>06/09/2026</td>
              <td>Abonnement Tech & Cloud Security</td>
              <td class="amount-negative">-49,99 €</td>
            </tr>
            <tr>
              <td>04/09/2026</td>
              <td>Supermarché Carrefour Express</td>
              <td class="amount-negative">-84,20 €</td>
            </tr>
            <tr>
              <td>01/09/2026</td>
              <td>Bonus fidélité SmartBank</td>
              <td class="amount-positive">+15,00 €</td>
            </tr>
          </tbody>
        </table>

        <div style="text-align: center; margin-top: 20px;">
          <a href="/transactions" class="btn btn-outline">Voir tout l'historique</a>
        </div>
      </section>
    </main>
  `;
};
