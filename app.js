const APPS = [
  { name: 'Varga Hub', icon: '🏠', desc: 'Contenitore centrale delle app Varga', repo: 'https://github.com/ionut290/Hub', appUrl: 'https://varga-hub.ionel.chatgpt.site' },
  { name: 'Varga Quiz', icon: '🧠', desc: 'Quiz, cultura generale e patente B', repo: 'https://github.com/ionut290/Quiz', appUrl: 'https://ionut290.github.io/Quiz/' },
  { name: 'Varga Marine / Naval', icon: '⚓️', desc: 'Navigazione e strumenti per il mare', repo: 'https://github.com/ionut290/Naval', appUrl: 'https://ionut290.github.io/Naval/' },
  { name: 'Varga Army', icon: '🎮', desc: 'Gioco strategico Varga Army', repo: 'https://github.com/ionut290/Varga-army', appUrl: 'https://ionut290.github.io/Varga-army/' },
  { name: 'Varga Spesa', icon: '🛒', desc: 'Assistente spesa e prezzi', repo: 'https://github.com/ionut290/spesa', appUrl: 'https://ionut290.github.io/spesa/' },
  { name: 'Varga Ride', icon: '🧭', desc: 'Mobilità e navigazione multimodale', repo: 'https://github.com/ionut290/VARGA-RIDE', appUrl: 'https://ionut290.github.io/VARGA-RIDE/' },
  { name: 'Hera App', icon: '🗺️', desc: 'Cantieri, impianti e manutenzione', repo: 'https://github.com/ionut290/hera-app', appUrl: 'https://ionut290.github.io/hera-app/' },
  { name: 'Varga Gestionale', icon: '📊', desc: 'Gestione operativa e dati', repo: 'https://github.com/ionut290/VARGA-GESTIONALE', appUrl: 'https://ionut290.github.io/VARGA-GESTIONALE/' },
  { name: 'Timbrature App', icon: '⏱️', desc: 'Timbrature e ore di lavoro', repo: 'https://github.com/ionut290/timbrature-app', appUrl: 'https://ionut290.github.io/timbrature-app/' },
  { name: 'Timbrature', icon: '🕒', desc: 'Progetto timbrature', repo: 'https://github.com/ionut290/Timbrature', appUrl: 'https://ionut290.github.io/Timbrature/' },
  { name: 'Giornale Cantiere', icon: '🦺', desc: 'Diario e attività di cantiere', repo: 'https://github.com/ionut290/giornale-cantiere', appUrl: 'https://ionut290.github.io/giornale-cantiere/' },
  { name: 'SQ Varga', icon: '👥', desc: 'Gestione squadre Varga', repo: 'https://github.com/ionut290/SQ-VARGA', appUrl: 'https://ionut290.github.io/SQ-VARGA/' },
  { name: 'Coop Avola', icon: '🌿', desc: 'Strumenti Coop Avola', repo: 'https://github.com/ionut290/coop-avola', appUrl: 'https://ionut290.github.io/coop-avola/' },
  { name: 'Varga Remoto', icon: '📡', desc: 'Controllo e funzioni remote', repo: 'https://github.com/ionut290/VARGA-REMOTO', appUrl: 'https://ionut290.github.io/VARGA-REMOTO/' },
  { name: 'Italia Guida', icon: '🇮🇹', desc: 'Guida e servizi per l’Italia', repo: 'https://github.com/ionut290/ITALIA-GUIDA', appUrl: 'https://ionut290.github.io/ITALIA-GUIDA/' },
  { name: 'Viaggi', icon: '✈️', desc: 'Organizzazione e strumenti viaggio', repo: 'https://github.com/ionut290/VIAGI', appUrl: 'https://ionut290.github.io/VIAGI/' },
  { name: 'Servizio Neve', icon: '❄️', desc: 'Gestione servizio neve', repo: 'https://github.com/ionut290/servizio-neve', appUrl: 'https://ionut290.github.io/servizio-neve/' },
  { name: 'Neve', icon: '🌨️', desc: 'Progetto neve', repo: 'https://github.com/ionut290/Neve', appUrl: 'https://ionut290.github.io/Neve/' },
  { name: 'Neve 2', icon: '☃️', desc: 'Secondo progetto neve', repo: 'https://github.com/ionut290/neve-2', appUrl: 'https://ionut290.github.io/neve-2/' },
  { name: 'Lavagna', icon: '📝', desc: 'Lavagna e note operative', repo: 'https://github.com/ionut290/lavagna', appUrl: 'https://ionut290.github.io/lavagna/' },
  { name: 'Una Vita', icon: '📖', desc: 'Progetto Una Vita', repo: 'https://github.com/ionut290/Una-Vita', appUrl: 'https://ionut290.github.io/Una-Vita/' },
  { name: 'Assoverde', icon: '🌱', desc: 'Progetto verde e manutenzione', repo: 'https://github.com/ionut290/ASSOVERDE', appUrl: 'https://ionut290.github.io/ASSOVERDE/' },
  { name: 'Moduli', icon: '📋', desc: 'Moduli e documenti', repo: 'https://github.com/ionut290/moduli', appUrl: 'https://ionut290.github.io/moduli/' },
  { name: 'Ionel Varga', icon: '👤', desc: 'Progetto personale', repo: 'https://github.com/ionut290/IONEL-VARGA', appUrl: 'https://ionut290.github.io/IONEL-VARGA/' },
  { name: 'Android', icon: '🤖', desc: 'Progetto Android', repo: 'https://github.com/ionut290/ANDROID', appUrl: 'https://ionut290.github.io/ANDROID/' },
  { name: 'V', icon: 'V', desc: 'Progetto V', repo: 'https://github.com/ionut290/V', appUrl: 'https://ionut290.github.io/V/' }
];

const grid = document.getElementById('appsGrid');
const template = document.getElementById('appCardTemplate');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const appCount = document.getElementById('appCount');

function chatGptUrlFor(app) {
  if (app.editUrl) return app.editUrl;
  const prompt = `Continua a modificare l'app ${app.name}. Repository GitHub: ${app.repo}. Prima controlla il codice attuale nel repository, poi applica le modifiche che ti dirò senza rompere le funzioni esistenti.`;
  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}

function openUrl(url) {
  if (!url) return;
  window.location.assign(url);
}

function closeOtherCards(currentCard) {
  document.querySelectorAll('.app-card[aria-expanded="true"]').forEach(card => {
    if (card === currentCard) return;
    card.setAttribute('aria-expanded', 'false');
    const actions = card.querySelector('.actions');
    if (actions) actions.hidden = true;
  });
}

function toggleCard(card) {
  const willOpen = card.getAttribute('aria-expanded') !== 'true';
  closeOtherCards(card);
  card.setAttribute('aria-expanded', String(willOpen));
  card.querySelector('.actions').hidden = !willOpen;
}

function makeCard(app) {
  const node = template.content.cloneNode(true);
  const card = node.querySelector('.app-card');
  const openButton = node.querySelector('.open-app');
  const editButton = node.querySelector('.edit-app');

  node.querySelector('.app-icon').textContent = app.icon;
  node.querySelector('.app-name').textContent = app.name;
  node.querySelector('.app-desc').textContent = app.desc;

  openButton.setAttribute('aria-label', `Apri ${app.name}`);
  editButton.setAttribute('aria-label', `Modifica ${app.name} con ChatGPT`);

  card.addEventListener('click', () => toggleCard(card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(card);
    }
  });

  for (const button of [openButton, editButton]) {
    button.addEventListener('pointerdown', event => event.stopPropagation());
    button.addEventListener('touchstart', event => event.stopPropagation(), { passive: true });
    button.addEventListener('click', event => event.stopPropagation());
  }

  openButton.addEventListener('click', event => {
    event.preventDefault();
    openUrl(app.appUrl);
  });

  editButton.addEventListener('click', event => {
    event.preventDefault();
    openUrl(chatGptUrlFor(app));
  });

  return node;
}

function renderApps(query = '') {
  const normalized = query.trim().toLocaleLowerCase('it');
  const filtered = APPS.filter(app =>
    !normalized || `${app.name} ${app.desc}`.toLocaleLowerCase('it').includes(normalized)
  );

  grid.replaceChildren();
  filtered.forEach(app => grid.appendChild(makeCard(app)));
  emptyState.hidden = filtered.length !== 0;
  appCount.textContent = `${filtered.length} app`;
}

searchInput.addEventListener('input', () => renderApps(searchInput.value));
renderApps();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}
