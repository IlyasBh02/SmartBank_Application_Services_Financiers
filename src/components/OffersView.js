window.SmartBank = window.SmartBank || {};

window.SmartBank.renderOffersView = function () {
  return `
    <main class="container">
      <div style="margin-bottom: 25px;">
        <h2>Offres Financières & Ventes Flash</h2>
        <p>Découvrez nos opportunités exclusives à durée limitée réservées aux membres SmartBank</p>
      </div>

      <div class="flash-cards-container" style="display: flex; flex-direction: column; gap: 20px;">
        
        <div class="flash-banner">
          <div class="flash-content">
            <h2>Vente Flash : Taux Prêt Conso à 1.99%</h2>
            <p>Un taux exceptionnel limité pour concrétiser vos projets perso sans attendre.</p>
            <button class="btn btn-primary" style="margin-top: 15px; background-color: var(--warning-color); color: #0f172a; border: none; font-weight: 700;">
              Souscrire au taux 1.99%
            </button>
          </div>
          
          <div class="flash-timer">
            <div class="timer-box">
              <div class="timer-num">04</div>
              <div class="timer-label">Heures</div>
            </div>
            <div class="timer-num" style="color: white;">:</div>
            <div class="timer-box">
              <div class="timer-num">18</div>
              <div class="timer-label">Minutes</div>
            </div>
            <div class="timer-num" style="color: white;">:</div>
            <div class="timer-box">
              <div class="timer-num">42</div>
              <div class="timer-label">Secondes</div>
            </div>
          </div>
        </div>

        <div class="flash-banner" style="background: linear-gradient(135deg, #065f46, #0f172a);">
          <div class="flash-content">
            <h2 style="color: #6ee7b7;">Crédit Auto Électrique à 0.99%</h2>
            <p>Financer l'achat de votre véhicule propre avec des mensualités allégées.</p>
            <button class="btn btn-primary" style="margin-top: 15px; background-color: #6ee7b7; color: #065f46; border: none; font-weight: 700;">
              Profiter de l'offre 0.99%
            </button>
          </div>
          
          <div class="flash-timer">
            <div class="timer-box">
              <div class="timer-num" style="color: #6ee7b7;">12</div>
              <div class="timer-label">Heures</div>
            </div>
            <div class="timer-num" style="color: white;">:</div>
            <div class="timer-box">
              <div class="timer-num" style="color: #6ee7b7;">45</div>
              <div class="timer-label">Minutes</div>
            </div>
            <div class="timer-num" style="color: white;">:</div>
            <div class="timer-box">
              <div class="timer-num" style="color: #6ee7b7;">10</div>
              <div class="timer-label">Secondes</div>
            </div>
          </div>
        </div>

        <div class="flash-banner" style="background: linear-gradient(135deg, #1e40af, #0f172a);">
          <div class="flash-content">
            <h2 style="color: #93c5fd;">Livret Épargne Boosté à 5.00%</h2>
            <p>Boostez vos économies pendant 3 mois avec un rendement garanti et disponibilité totale.</p>
            <button class="btn btn-primary" style="margin-top: 15px; background-color: #93c5fd; color: #1e40af; border: none; font-weight: 700;">
              Booster mon épargne
            </button>
          </div>
          
          <div class="flash-timer">
            <div class="timer-box">
              <div class="timer-num" style="color: #93c5fd;">01</div>
              <div class="timer-label">Jour</div>
            </div>
            <div class="timer-num" style="color: white;">:</div>
            <div class="timer-box">
              <div class="timer-num" style="color: #93c5fd;">08</div>
              <div class="timer-label">Heures</div>
            </div>
            <div class="timer-num" style="color: white;">:</div>
            <div class="timer-box">
              <div class="timer-num" style="color: #93c5fd;">30</div>
              <div class="timer-label">Minutes</div>
            </div>
          </div>
        </div>

      </div>
    </main>
  `;
};
