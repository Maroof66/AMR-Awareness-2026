let activeLanguage = "en";
let dictionaries = {};

export async function loadLanguage(language = "en") {
  try {
    const response = await fetch(`languages/${language}.json`);
    if (!response.ok) throw new Error(`Could not load ${language}`);
    dictionaries[language] = await response.json();
    activeLanguage = language;
  } catch (error) {
    console.warn(error);
    activeLanguage = "en";
    if (!dictionaries.en) {
      const fallback = await fetch("languages/en.json");
      dictionaries.en = await fallback.json();
    }
  }
}

export function t(key) {
  const parts = key.split(".");
  let value = dictionaries[activeLanguage];
  for (const part of parts) value = value?.[part];
  if (value !== undefined) return value;
  value = dictionaries.en;
  for (const part of parts) value = value?.[part];
  return value ?? key;
}

export function getLanguage() {
  return activeLanguage;
}
