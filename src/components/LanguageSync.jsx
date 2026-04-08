import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGS = ['en', 'fr'];

const LanguageSync = ({ children }) => {
    const { lang, '*': rest } = useParams();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!SUPPORTED_LANGS.includes(lang)) {
            const savedLang = localStorage.getItem('pycon-lang') || 'en';
            navigate(`/${savedLang}${location.pathname}${location.search}${location.hash}`, { replace: true });
            return;
        }

        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n, navigate, location]);

    if (!SUPPORTED_LANGS.includes(lang)) return null;

    return children;
};

export default LanguageSync;
