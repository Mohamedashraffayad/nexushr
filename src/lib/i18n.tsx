"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "@/translations/en";
import { ar } from "@/translations/ar";
import type { Translations } from "@/translations/en";

type Lang = "ar" | "en";
interface I18nCtx { t: Translations; lang: Lang; setLang: (l: Lang) => void; isAr: boolean; }

const Ctx = createContext<I18nCtx>({ t: ar, lang: "ar", setLang: () => {}, isAr: true });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");
  const setLang = (l: Lang) => { setLangState(l); if (typeof window !== "undefined") localStorage.setItem("nhr_lang", l); };
  useEffect(() => { const s = localStorage.getItem("nhr_lang") as Lang | null; if (s === "en" || s === "ar") setLangState(s); }, []);
  const t = lang === "ar" ? ar : en;
  return (
    <Ctx.Provider value={{ t, lang, setLang, isAr: lang === "ar" }}>
      <div dir={t.dir} lang={t.lang} className={t.fontClass}>
        {children}
      </div>
    </Ctx.Provider>
  );
}

export function useI18n() { return useContext(Ctx); }
