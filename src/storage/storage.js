window.SmartBank = window.SmartBank || {};
window.SmartBank.storage = {};

window.SmartBank.storage.get = function(key) {
    try{
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Erreur de lecture de la clé "${key}":`, error);
        return null;
    }
};

window.SmartBank.storage.set = function(key, data){
    try {
        localStorage.setItem(key, JSON.stringify(data));
    }
    catch (error){
        console.error(`Erreur d'écriture de la clé "${key}":`, error);
    }
};

window.SmartBank.storage.remove = function(key) {
    localStorage.removeItem(key);
};

window.SmartBank.storage.init = function() {
    const SB = window.SmartBank.storage;

    if(!SB.get('smartbank_users')){
        SB.set('smartbank_users', []);
    }

    if(!SB.get('smartbank_simulations')) {
        SB.set('smartbank_simulations', []);
    }
};