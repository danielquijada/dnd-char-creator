/**
 * Imports the existing languages.
 *
 * Exports:
 * - registerTranslation
 * -
 */

import { en } from "./en.js";
import { es } from "./es.js";

const languageList = { en, es };

/**
 * Registers an element to always show the translation for the set key.
 */
export function registerTranslation(element, key) {
  translationKeys.set(element, key);
  element.textContent = translate(key);
}

/**
 * Changes the language to a new one and initializes the dictionary, if that language is in our list.
 */
export function changeLanguage(language) {
  localStorage.setItem('language', language);
  initDictionary();
  rewriteRegistered();
}

/**
 * Rewrites every registered element with the current language.
 */
export function rewriteRegistered() {
  document.title = translate('ui.title');
  if (shownLanguage != currentLanguage) {
    for (const [element, key] of translationKeys) {
      element.textContent = translate(key);
    }
    shownLanguage = currentLanguage;
  }
}

/*******************
 * PRIVATE METHODS *
 *******************/


let currentLanguage;
let currentDictionary;
let shownLanguage = null;
initDictionary();
const translationKeys = new Map();

/**
 * Returns the translation for a specific key in the current dictionary.
 */
function translate(key, dictionary = currentDictionary) {
  if (key == null || key == '') { return; };

  const path = key.split('.');
  let current = dictionary;

  for (let key of path) {
    current = current?.[key];
  }

  if (typeof current == 'object' || current == null) {
    if (dictionary != en) {
      return translate(key, en);
    } else {
      return key;
    }
  }

  return current;
}

/**
 * Initializes the current dictionary to the currently set language (or defaults to the default language, that is english unless otherwise specified).
 */
function initDictionary(defaultLanguage = 'en') {
  currentLanguage = localStorage.getItem('language') || defaultLanguage; // TODO Add default to system before english
  currentDictionary = languageList[currentLanguage] || languageList[defaultLanguage];
}