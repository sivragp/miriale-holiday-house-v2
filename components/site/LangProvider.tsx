"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "it" | "en" | "es";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangCtx = createContext<Ctx>({ lang: "it", setLang: () => {} });

/** Provider lingua (IT/EN/ES) con persistenza in localStorage. */
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("miriale-lang");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved === "it" || saved === "en" || saved === "es") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("miriale-lang", l);
      document.documentElement.lang = l;
    } catch {}
  };

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

/** Helper: sceglie la stringa giusta in base alla lingua corrente.
 *  Fallback su en → it così il build non si rompe mai e stringhe non
 *  ancora tradotte mostrano comunque un testo valido. */
export function tr(lang: Lang, s: { it: string; en: string; es?: string }) {
  return s[lang] ?? s.en ?? s.it;
}
