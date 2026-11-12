let active="en", dictionaries={};
export async function loadLanguage(code="en") {
  try {
    const response=await fetch(`languages/${code}.json`);
    if(!response.ok) throw new Error("Language file unavailable");
    dictionaries[code]=await response.json(); active=code;
  } catch(error) {
    console.warn(error); active="en";
    if(!dictionaries.en) {
      const response=await fetch("languages/en.json");
      dictionaries.en=await response.json();
    }
  }
}
export function t(key) {
  const value=key.split(".").reduce((o,k)=>o?.[k],dictionaries[active]);
  return value ?? key;
}
