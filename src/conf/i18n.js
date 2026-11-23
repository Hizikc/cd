import fs from 'node:fs';
import { DEFAULT_LANGUAGE } from './config.js';

let currentLang = DEFAULT_LANGUAGE;
let translations = loadTranslations(currentLang);

function loadTranslations(lang) {
    const fileUrl = new URL(`../locales/${lang}.json`, import.meta.url);
    const rawData = fs.readFileSync(fileUrl, 'utf-8');
    return JSON.parse(rawData);
}

export function setLanguage(lang) {
    currentLang = Lang;
    translations = loadTranslations(lang);
}

export function t(key) {
    return translations[key] || key;
}