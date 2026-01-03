import fetch from "node-fetch";

export async function getSuggestions(query) {
    const url = `https://api.datamuse.com/sug?s=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    if (!res.ok) return [];

    const data = await res.json();

    // Return top 1–3 suggestions
    return data.slice(0, 3).map(item => item.word);
}
