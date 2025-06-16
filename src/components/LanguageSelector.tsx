import { useState } from "react";
import { useTranslation } from 'react-i18next';


const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<"es" | "en">(i18n.language as "es" | "en");
    const handleLangChange = (newLang: "es" | "en") => {
        setLang(newLang);
        // Aquí puedes agregar lógica para cambiar el idioma global
        i18n.changeLanguage(newLang)
    }
    return (
        <div className="flex gap-2 justify-center p-2 mb-4">
            
            <button
                className={`cursor-pointer px-3 py-1 rounded-full font-bold flex items-center gap-1 ${lang === "en" ? "bg-cyan-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleLangChange("en")}
                aria-label="English"
            >
                <span role="img" aria-label="USA Flag">🇺🇸</span></button>


                <button
                className={`cursor-pointer px-3 py-1 rounded-full font-bold flex items-center gap-1 ${lang === "es" ? "bg-cyan-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleLangChange("es")}
                aria-label="Español"
            >
                <span role="img" aria-label="Bandera de México">🇲🇽</span></button>
        </div>
    );
}


export default LanguageSelector;