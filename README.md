# Varga Hub

Hub PWA per raccogliere le app e i progetti Varga in un'unica interfaccia.

## Funzioni

- Elenco app responsive per telefono e desktop.
- Ricerca immediata.
- Tap sulla scheda per mostrare le azioni.
- **Apri app**: usa `appUrl` quando presente; altrimenti apre il repository GitHub del progetto.
- **Modifica con ChatGPT**: apre ChatGPT con un prompt già compilato contenente nome app e repository corretto.
- PWA installabile con cache offline dell'interfaccia.

## Aggiungere il link pubblico reale di un'app

In `app.js`, aggiungere `appUrl` alla voce corrispondente:

```js
{
  name: 'Varga Quiz',
  icon: '🧠',
  desc: 'Quiz, cultura generale e patente B',
  repo: 'https://github.com/ionut290/Quiz',
  appUrl: 'https://URL-PUBBLICO-DELL-APP'
}
```

## Link ChatGPT specifico

Normalmente il pulsante viene costruito automaticamente dal repository. Se in futuro esiste un link ChatGPT specifico per un progetto, basta aggiungere:

```js
editUrl: 'https://chatgpt.com/...'
```

## Nota sul vecchio Varga Hub

Il sito `varga-hub.ionel.chatgpt.site` non è esportabile automaticamente dal repository. Questa versione GitHub diventa la base sorgente mantenibile per gli aggiornamenti futuri.
