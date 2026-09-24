import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './i18n/LanguageContext'
import App from './App.jsx'

// Set initial theme before render to avoid flash
const savedTheme = localStorage.getItem('pycon-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Every edition lives under its year, e.g. /2026/en/agenda. Prefix any
// un-versioned URL (old links, the bare domain) with the current edition.
const EDITION_BASE = '/2026';
const { pathname, search, hash } = window.location;
if (pathname !== EDITION_BASE && !pathname.startsWith(`${EDITION_BASE}/`)) {
  window.history.replaceState(null, '', `${EDITION_BASE}${pathname === '/' ? '' : pathname}${search}${hash}`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={EDITION_BASE}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
