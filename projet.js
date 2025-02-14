const plusButton = document.querySelector('#plusButton');
const plusValue = document.querySelector('#inc-value');
const minusButton = document.querySelector('#minusButton');
const minusValue = document.querySelector('#dec-value');
const resetButton = document.querySelector('#resetButton');
const clicZone = document.querySelector('#zone-clic');
const notification = document.querySelector('#notification');
const notificationText = document.querySelector('#notification-text');
const counter = document.querySelector('#counter');
const maxValue= document.querySelector('#high-limit');
const minValue = document.querySelector('#low-limit');

let clicksCounter = 0;

function toAdd(){
  clicksCounter += Number(plusValue.value);
  verifyLimits();
}

function toRemove(){
  clicksCounter -= minusValue.value;
  verifyLimits();
}

/* Fonction de vérification des limites */
function verifyLimits(){
  counter.classList.remove('limite-atteinte');
  if(clicksCounter >= Number(maxValue.value)){
    clicksCounter = Number(maxValue.value);
    showNotification(`Limite haute (${maxValue.value}) atteinte`);
  }
  if(clicksCounter <= Number(minValue.value)){
    clicksCounter = Number(minValue.value);
    showNotification(`Limite basse (${minValue.value}) atteinte`);
  }
  counter.textContent = clicksCounter;
}

/* Fonction pour afficher notifications */
function showNotification(text){
  notificationText.textContent = text;
  counter.classList.add('limite-atteinte');
  notification.classList.add('show-notification');
  setTimeout(function() {
    notification.classList.remove('show-notification');
  },3000);
}

/* Fonctionnalité d'incrémentation */
plusButton.addEventListener('click', toAdd);

/* Fonctionnalité de décrémentation */
minusButton.addEventListener('click', toRemove);

/* Fonctionnalité d'incrémentation par bouton gauche dans zone de clic */
clicZone.addEventListener('click', toAdd);

/* Fonctionnalité de décrémentation par bouton droit dans zone de clic */
clicZone.addEventListener('contextmenu', function(evenement){
  evenement.preventDefault();
  toRemove();
});

/* Fonctionnalité de reset */
resetButton.addEventListener('click', function() {
  clicksCounter = 0;
  verifyLimits();
});