// api.js
const BASE_URL = 'https://api.arasaac.org/api/pictograms';

// ID piktogramů pro rychlý start (čerpáno z ARASAAC databáze)
export const START_SET = [
    { id: 2335, text: "Jablko" },
    { id: 3033, text: "Pít" },
    { id: 2548, text: "Chci" },
    { id: 2577, text: "Doma" },
    { id: 6355, text: "Jiřík" }, // Později nahradíme reálnou fotkou
    { id: 2358, text: "Máma" },
    { id: 2359, text: "Táta" }
];

export async function searchPictos(term) {
    const response = await fetch(`${BASE_URL}/cs/search/${encodeURIComponent(term)}`);
    return response.ok ? await response.json() : [];
}

export function getPictoUrl(id) {
    return `${BASE_URL}/${id}`;
}
