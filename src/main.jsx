import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { ThemeProvider } from '@gravity-ui/uikit';
import './index.css'
import App from './App.jsx'
import Lenis from 'lenis';

/* ── Lenis smooth scroll ── */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ── prefers-reduced-motion: disable Lenis if user prefers reduced motion ── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  lenis.destroy();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme="dark">
      <App reducedMotion={prefersReducedMotion} />
    </ThemeProvider>
  </StrictMode>,
)
