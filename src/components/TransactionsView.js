window.SmartBank = window.SmartBank || {};

window.SmartBank.renderTransactionsView = function() {
  return `
    <main class="container">
      <div style="margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
        <div>
          <h2>Historique Complet des Transactions</h2>
          <p>Consultez la liste intégrale de vos mouvements bancaires</p>
        </div>
        <a href="/dashboard" class="btn btn-outline">← Retour au Dashboard</a>
      </div>

      <section class="transactions-section">
        <div class="transactions-header">
          <div class="filter-tabs">
            <button class="filter-btn active">Toutes</button>
            <button class="filter-btn">Dépenses</button>
            <button class="filter-btn">Revenus</button>
          </div>
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
            <tr>
              <td>28/08/2026</td>
              <td>Règlement Facture Électricité TotalEnergies</td>
              <td class="amount-negative">-112,50 €</td>
            </tr>
            <tr>
              <td>25/08/2026</td>
              <td>Restaurant Le Jardin Paris</td>
              <td class="amount-negative">-65,00 €</td>
            </tr>
            <tr>
              <td>20/08/2026</td>
              <td>Remboursement Assurance Santé</td>
              <td class="amount-positive">+42,80 €</td>
            </tr>
            <tr>
              <td>15/08/2026</td>
              <td>Station Service TotalEnergies</td>
              <td class="amount-negative">-70,00 €</td>
            </tr>
            <tr>
              <td>10/08/2026</td>
              <td>Achat en ligne Fnac.com</td>
              <td class="amount-negative">-129,99 €</td>
            </tr>
            <tr>
              <td>05/08/2026</td>
              <td>Virement Interbancaire Reçu</td>
              <td class="amount-positive">+350,00 €</td>
            </tr>
          </tbody>
        </table>

        <div class="pagination-bar">
          <button class="btn btn-outline pagination-btn" disabled>← Précédent</button>
          
          <div class="pagination-numbers">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
          </div>

          <button class="btn btn-outline pagination-btn">Suivant →</button>
        </div>
      </section>
    </main>
  `;
};
