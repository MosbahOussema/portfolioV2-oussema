import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './fonts.css'
import './index.css'
import App from './App.jsx'
import { languageFromPath } from './config/seo'

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App initialLanguage={languageFromPath(window.location.pathname)} />
  </StrictMode>
);
if (root.dataset.prerendered) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
