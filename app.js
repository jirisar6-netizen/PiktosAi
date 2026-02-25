// app.js
import { START_SET, getPictoUrl } from './api.js';

export function loadStartCards() {
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; // Vyčistit

    START_SET.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${getPictoUrl(item.id)}" alt="${item.text}">
            <p>${item.text}</p>
        `;
        card.onclick = () => window.addCardToSentence(item.id, item.text);
        grid.appendChild(card);
    });
}
