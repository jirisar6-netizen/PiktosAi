const BASE_URL = 'https://api.arasaac.org/api/pictograms';

export async function searchPictos(term) {
    try {
        // Hledáme piktogramy v češtině (cs)
        const response = await fetch(`${BASE_URL}/cs/search/${encodeURIComponent(term)}`);
        if (!response.ok) return [];
        return await response.json();
    } catch (error) {
        console.error("Chyba při komunikaci s ARASAAC:", error);
        return [];
    }
}

