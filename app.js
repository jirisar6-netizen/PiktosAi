import { voiceEngine } from './voice.js';

let sentence = [];

window.addToSentence = function(id, text) {
    const bar = document.getElementById('sentence-bar');
    if (!bar) return;

    // Odstranit placeholder při prvním kliku
    const placeholder = document.getElementById('placeholder');
    if (placeholder) placeholder.remove();

    // Přidat obrázek do lišty
    const img = document.createElement('img');
    img.src = `https://api.arasaac.org/api/pictograms/${id}`;
    img.style.height = "50px";
    img.style.margin = "5px";
    bar.appendChild(img);

    sentence.push(text);
    voiceEngine.speak(text); // Přečte hned jednotlivé slovo
};

window.readFullSentence = function() {
    if (sentence.length > 0) {
        voiceEngine.speak(sentence.join(" "));
    }
};

window.clearSentence = function() {
    sentence = [];
    const bar = document.getElementById('sentence-bar');
    bar.innerHTML = '<p id="placeholder">Klikej na piktogramy...</p>';
};

