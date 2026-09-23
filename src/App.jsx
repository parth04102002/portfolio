import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-creative';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Zap, LayoutTemplate, ShoppingCart, ExternalLink, Mail, ArrowRight, 
  Briefcase, Code2, GraduationCap, Phone, MapPin, CheckCircle2, 
  Menu, X, Sparkles, Globe, ShieldCheck, Database, Layers, 
  MessageSquare, ChevronDown, Download, Lock, RefreshCw, Eye 
} from 'lucide-react';
import { TextInput, TextArea, Button as GravityButton, Card, Text } from '@gravity-ui/uikit';

const slideUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};


/* ─── Scroll-shrink hook for Navbar ─────────────────────────── */
function useScrollShrink(threshold = 60) {
  const [shrunk, setShrunk] = useState(false);
  useEffect(() => {
    const handler = () => setShrunk(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);
  return shrunk;
}

/* ─── Magnetic button hook ───────────────────────────────────── */
function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [strength]);
  const handleLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = '';
  }, []);
  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}

/* --- Typewriter Effect Component --- */
function TypewriterText({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 35 : 75;
    
    let delay = typingSpeed;
    if (!isDeleting && currentText === word) {
      delay = 2000;
    } else if (isDeleting && currentText === '') {
      delay = 400;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(word.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="hero-typed-role">
      {currentText || '\u00A0'}
      <span 
        className="cursor-blink" 
        style={{ 
          display: 'inline-block',
          color: '#f87171', 
          WebkitTextFillColor: '#f87171', 
          marginLeft: '4px', 
          fontWeight: 300,
          filter: 'drop-shadow(0 0 8px #f87171)' 
        }}
      >
        |
      </span>
    </span>
  );
}

/* --- Huge Typographic Impact Section --- */
function LargeTypewriterRow({ word, index, subtitle, description, metrics, isOpen, onToggle }) {
  const [currentText, setCurrentText] = useState('');
  const [inView, setInView] = useState(false);
  const ref = React.useRef(null);
  const isOutline = index % 2 === 1;

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (inView && currentText.length < word.length) {
      const timeout = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentText, inView, word]);

  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      className={`large-typewriter-row${isOpen ? ' typo-row-open' : ''}`}
      onClick={onToggle}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={`${word} — ${subtitle}`}
      onKeyDown={(e) => e.key === 'Enter' && onToggle()}
    >
      {/* Main row */}
      <div className="typo-row-header">
        <div className="typo-row-index">0{index + 1}</div>
        <div 
          className={`huge-text ${isOutline ? 'outline-variant' : 'solid-variant'}`}
        >
          {currentText}<span className="cursor-blink" style={{ color: '#ef4444', opacity: currentText.length === word.length ? 0.4 : 1 }}>|</span>
        </div>
        <div className={`typo-row-toggle${isOpen ? ' typo-toggle-open' : ''}`}>
          <ChevronDown size={22} />
        </div>
      </div>

      {/* Expandable detail panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="typo-expand-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="typo-expand-inner">
              <div className="typo-expand-left">
                <h4 className="typo-expand-subtitle">{subtitle}</h4>
                <p className="typo-expand-desc">{description}</p>
              </div>
              <div className="typo-expand-metrics">
                {metrics.map((m, i) => (
                  <div key={i} className="typo-metric">
                    <div className="typo-metric-val">{m.value}</div>
                    <div className="typo-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TypographicImpact() {
  const [openIdx, setOpenIdx] = useState(null);

  const rows = [
    {
      word: 'DEVELOPMENT',
      subtitle: 'Modern Web Development',
      description: 'I don\'t just build websites; I engineer high-converting digital assets. By aligning technical architecture with your business KPIs, I ensure every WordPress and Shopify solution delivers a measurable return on investment.',
      metrics: [
        { value: '100%', label: 'Goal-Aligned' },
        { value: 'UX-First', label: 'Approach' },
        { value: '3-Phase', label: 'Process' },
      ]
    },
    {
      word: 'PERFORMANCE',
      subtitle: 'Speed & Optimization',
      description: 'In the modern web, milliseconds translate directly to revenue. I implement aggressive caching, headless architectures, and ruthless asset optimization to guarantee Core Web Vitals that dominate search rankings.',
      metrics: [
        { value: '0.8s', label: 'LCP Time' },
        { value: '100', label: 'Lighthouse' },
        { value: 'Custom', label: 'Caching' },
      ]
    },
    {
      word: 'SEO',
      subtitle: 'Search Engine Growth',
      description: 'A robust codebase is the foundation of digital scaling. I design modular, deeply extensible architectures that empower future feature integrations without accumulating crippling technical debt.',
      metrics: [
        { value: 'DRY', label: 'Principles' },
        { value: 'O-O', label: 'Design' },
        { value: 'Clean', label: 'Codebase' },
      ]
    },
    {
      word: 'SCALABILITY',
      subtitle: 'Connected Digital Ecosystems',
      description: 'Engineered to withstand massive traffic spikes without a sweat. From resilient database indexing to global CDN deployments, your platform is built to handle exponential growth seamlessly.',
      metrics: [
        { value: '99.9%', label: 'Uptime' },
        { value: '∞', label: 'Scale Ready' },
        { value: 'Future', label: 'Proof' },
      ]
    }
  ];

  return (
    <section className="typo-impact-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="typo-section-tag"
        >
          My Technical Approach
        </motion.div>
        <div className="typo-rows-wrap">
          {rows.map((r, i) => (
            <LargeTypewriterRow 
              key={i} 
              word={r.word} 
              index={i}
              subtitle={r.subtitle}
              description={r.description}
              metrics={r.metrics}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Navigation --- */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const shrunk = useScrollShrink(60);
  const magnetic = useMagnetic(0.28);
  const [hoveredPath, setHoveredPath] = useState(null);

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#work' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <header style={{ 
      position: 'fixed', 
      top: shrunk ? '15px' : '25px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 1000,
      width: 'max-content',
      maxWidth: '90vw',
      transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: shrunk ? 'rgba(3, 7, 18, 0.85)' : 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
          padding: '6px 6px 6px 16px',
          borderRadius: '999px',
        }}
      >
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginRight: '0.5rem' }}>
          <div style={{ background: '#ef4444', color: '#fff', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem' }}>P</div>
          <span style={{ fontWeight: 800, color: '#f8fafc', fontSize: '1.1rem', letterSpacing: '-0.02em' }}>PARTH<span style={{ color: '#ef4444' }}>.</span></span>
        </a>

        <div className="nav-links">
          {navItems.map((item) => (
            <a 
              key={item.path}
              href={item.path}
              onPointerEnter={(e) => { if (e.pointerType !== 'touch') setHoveredPath(item.path); }}
              onPointerLeave={(e) => { if (e.pointerType !== 'touch') setHoveredPath(null); }}
              style={{
                position: 'relative',
                padding: '8px 16px',
                color: hoveredPath === item.path ? '#f8fafc' : '#94a3b8',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'color 0.25s ease',
                zIndex: 1
              }}
            >
              {hoveredPath === item.path && (
                <motion.div
                  layoutId="nav-pill"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '999px',
                    zIndex: -1
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <a
            ref={magnetic.ref}
            onPointerMove={(e) => { if (e.pointerType !== 'touch') magnetic.onMouseMove(e); }}
            onPointerLeave={(e) => { if (e.pointerType !== 'touch') magnetic.onMouseLeave(e); }}
            href="#contact"
            className="btn-primary magnetic-btn"
            style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '999px', margin: 0 }}
          >
            Hire Me <ArrowRight size={16} />
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            style={{ borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: '110%',
              left: 0,
              width: '100%',
              background: '#0f172a',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              zIndex: 9999
            }}
          >
            {navItems.map(item => (
              <a 
                key={item.path} 
                href={item.path} 
                onClick={() => setMobileOpen(false)}
                style={{ color: '#f8fafc', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary" 
              onClick={() => setMobileOpen(false)}
              style={{ marginTop: '0.5rem', textAlign: 'center', width: '100%', justifyContent: 'center' }}
            >
              Hire Parth Parmar <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* --- Hero Section --- */
function Hero() {
  return (
    <section id="about" className="container" style={{ paddingTop: 'clamp(3.5rem, 7vw, 6rem)', paddingBottom: 'clamp(3.5rem, 7vw, 6rem)', position: 'relative', width: '100%' }}>
      <div className="glow-bg" style={{ top: '0', left: '10%' }}></div>

      {/* Floating ambient particle orbs */}
      <div className="hero-particles" aria-hidden="true">
        <div className="hero-particle hero-particle--1" />
        <div className="hero-particle hero-particle--2" />
        <div className="hero-particle hero-particle--3" />
        <div className="hero-particle hero-particle--4" />
        <div className="hero-particle hero-particle--5" />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem', width: '100%' }}>

        <motion.div 
          style={{ flex: '1 1 45%', minWidth: 'min(100%, 400px)', maxWidth: '650px', zIndex: 10 }}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Status Pill Badge */}
          <motion.div variants={slideUp} className="status-pill">
            <span className="status-dot"></span>
            Available for WordPress & Custom Web Projects
          </motion.div>

          <motion.h1 
            variants={slideUp}
            className="hero-title"
          >
            I'm <span className="gradient-text">Parth Parmar</span>.<br />
            <span className="hero-role-wrapper">
              <TypewriterText words={['WordPress Specialist', 'Shopify Developer', 'WooCommerce Expert', 'Frontend Engineer']} />
            </span>
          </motion.h1>

          <motion.p 
            variants={slideUp}
            className="hero-desc"
            style={{ marginBottom: '2rem', maxWidth: '580px' }}
          >
            Specializing in high-performance WordPress themes, seamless WooCommerce & Shopify stores, and responsive frontends that transform visitors into paying clients.
          </motion.p>

          <motion.div variants={slideUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a href="#work" className="btn-primary">
              Explore 30+ Client Sites <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/917567959878" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
            
          </motion.div>

          {/* Quick Metrics HUD Telemetry Bar */}
          <motion.div 
            variants={slideUp} 
            className="hero-metrics-hud"
          >
            <div className="hud-metric-item">
              <div className="hud-metric-header">
                <span className="hud-pulse-dot" style={{ background: '#ef4444', boxShadow: '0 0 10px #ef4444' }}></span>
                <span className="hud-metric-label">EXPERIENCE</span>
              </div>
              <div className="hud-metric-val" style={{ color: '#ef4444' }}>3+ Years</div>
              <div className="hud-metric-sub">Commercial Web Dev</div>
            </div>

            <div className="hud-metric-divider"></div>

            <div className="hud-metric-item">
              <div className="hud-metric-header">
                <span className="hud-pulse-dot" style={{ background: '#f87171', boxShadow: '0 0 10px #f87171' }}></span>
                <span className="hud-metric-label">CLIENT SITES</span>
              </div>
              <div className="hud-metric-val" style={{ color: '#f87171' }}>30+ Sites</div>
              <div className="hud-metric-sub">Production Deployments</div>
            </div>

            <div className="hud-metric-divider"></div>

            <div className="hud-metric-item">
              <div className="hud-metric-header">
                <span className="hud-pulse-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span>
                <span className="hud-metric-label">PERFORMANCE</span>
              </div>
              <div className="hud-metric-val" style={{ color: '#10b981' }}>100%</div>
              <div className="hud-metric-sub">Core Web Vitals & SEO</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Visual Banner */}
        <motion.div 
          className="hero-big-image-wrapper"
          style={{ flex: '1 1 45%', minWidth: 'min(100%, 400px)', position: 'relative' }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-banner-image" style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(239, 68, 68, 0.2)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <img 
              src="./hero_banner.webp" 
              alt="Web Development and Workspace" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- Experience & Education (Two-Column Symmetrical Architecture) --- */
function ExperienceAndEducation() {
  const workHistory = [
    {
      role: 'Executive Web Developer',
      company: 'Trizone Communications',
      duration: 'Nov 2024 - Present',
      location: 'Vadodara, India',
      icon: Briefcase,
      color: '#ef4444',
      points: [
        'Develop and manage WordPress websites for clients across multiple industries.',
        'Build custom Elementor layouts and interactive user interfaces.',
        'Implement SEO improvements and website optimization strategies.',
        'Integrate third-party APIs, payment gateways, and marketing tools.',
        'Ensure website security, performance, and scalability.'
      ],
      tags: ['WordPress', 'Elementor', 'SEO', 'API']
    },
    {
      role: 'WordPress Developer',
      company: 'SNT Solutions',
      duration: 'Dec 2023 - Nov 2024',
      location: 'Vadodara, India',
      icon: Briefcase,
      color: '#3b82f6',
      points: [
        'Developed custom WordPress websites and landing pages.',
        'Customized themes and plugins according to client requirements.',
        'Improved website performance and mobile responsiveness.',
        'Worked with HTML, CSS, JavaScript, PHP, and Elementor.'
      ],
      tags: ['WordPress', 'PHP', 'Performance', 'HTML/CSS/JS']
    },
    {
      role: 'Freelance Web Developer',
      company: 'Freelance',
      duration: '2023 - Present',
      location: 'Remote',
      icon: Briefcase,
      color: '#10b981',
      points: [
        'Delivered websites for healthcare, manufacturing, eCommerce, and business clients.',
        'Managed complete project lifecycles from design implementation to deployment.',
        'Provided SEO optimization and website maintenance services.'
      ],
      tags: ['Healthcare', 'eCommerce', 'Manufacturing', 'Maintenance']
    }
  ];

  const educationHistory = [
    {
      role: 'Bachelor of Technology (Information Technology)',
      company: 'Parul University',
      duration: '2020 - 2024',
      location: 'Vadodara, India',
      icon: GraduationCap,
      color: '#10b981',
      points: [
        'Graduated with a Bachelor\'s degree in Information Technology.',
        'Focused on software development, web technologies, database systems, and programming fundamentals.'
      ],
      tags: ['Information Technology', 'Software Development', 'Web Technologies']
    }
  ];

  return (
    <section id="experience" className="container" style={{ paddingTop: 'clamp(4rem, 6vw, 6rem)', paddingBottom: 'clamp(4rem, 6vw, 6rem)' }}>
      <div className="section-header">
        <span className="section-tag">Career & Credentials</span>
        <h2 className="section-title">Work Experience & <span className="gradient-text">Education</span></h2>
        <p className="section-desc">
          A track record of delivering production-ready web solutions, backed by formal IT engineering training.
        </p>
      </div>

      <TimelineSlider items={[...workHistory, ...educationHistory]} />
    </section>
  );
}

/* --- Skills Matrix (Modern Interactive Tech Arsenal) --- */
function SkillsMatrix() {
  const skillCategories = [
    {
      category: 'Frontend',
      badge: 'Client Stack',
      icon: LayoutTemplate,
      color: '#f87171',
      desc: 'Pixel-perfect, responsive interfaces with silky-smooth animations.',
      skills: [
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS3', level: 'Expert' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React.js', level: 'Intermediate' },
        { name: 'Bootstrap', level: 'Expert' },
        { name: 'Tailwind CSS', level: 'Expert' },
        { name: 'Responsive Design', level: 'Expert' },
      ]
    },
    {
      category: 'CMS & Frameworks',
      badge: 'Core Specialization',
      icon: ShoppingCart,
      color: '#ef4444',
      desc: 'Building blazing-fast storefronts and CMS-driven platforms that convert.',
      skills: [
        { name: 'WordPress', level: 'Expert' },
        { name: 'Elementor', level: 'Expert' },
        { name: 'WooCommerce', level: 'Expert' },
        { name: 'ACF', level: 'Expert' },
        { name: 'PHP', level: 'Advanced' },
      ]
    },
    {
      category: 'SEO & Analytics',
      badge: 'Search Engine Growth',
      icon: Zap,
      color: '#10b981',
      desc: 'Optimizing for Core Web Vitals, organic traffic, and conversion.',
      skills: [
        { name: 'Technical SEO', level: 'Expert' },
        { name: 'On-Page SEO', level: 'Expert' },
        { name: 'Google Search Console', level: 'Expert' },
        { name: 'Google Analytics', level: 'Expert' },
        { name: 'Microsoft Clarity', level: 'Advanced' },
        { name: 'Schema Markup', level: 'Expert' },
      ]
    },
    {
      category: 'Tools',
      badge: 'DevOps & Workflow',
      icon: Database,
      color: '#a855f7',
      desc: 'Modern tooling for efficient development and deployment.',
      skills: [
        { name: 'GitHub', level: 'Advanced' },
        { name: 'Figma', level: 'Intermediate' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Hostinger', level: 'Expert' },
        { name: 'cPanel', level: 'Expert' },
        { name: 'Cloudflare', level: 'Advanced' },
      ]
    }
  ];

  const levelColor = {
    'Expert': '#10b981',
    'Advanced': '#f87171',
    'Intermediate': '#f59e0b',
  };

  return (
    <section id="skills" className="container" style={{ paddingTop: 'clamp(3.5rem, 6vw, 6rem)', paddingBottom: 'clamp(3.5rem, 6vw, 6rem)' }}>
      <div className="section-header">
        <span className="section-tag">Technical Arsenal</span>
        <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
        <p className="section-desc">
          Tools, languages, and frameworks leveraged daily to engineer high-performing, conversion-focused client experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div 
              key={idx} 
              className="skill-card-modern"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideUp}
              style={{ '--card-accent': group.color }}
            >
              <div className="skill-card-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1, minWidth: 0 }}>
                  <div className="skill-icon-box" style={{ color: group.color, background: `${group.color}14`, borderColor: `${group.color}35` }}>
                    <Icon size={20} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 700, margin: 0, lineHeight: 1.3 }}>{group.category}</h3>
                    <span style={{ fontSize: '0.72rem', color: group.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{group.badge}</span>
                  </div>
                </div>
                <span className="skill-count-badge" style={{ color: group.color, borderColor: `${group.color}30`, background: `${group.color}0D` }}>
                  {group.skills.length} Skills
                </span>
              </div>

              {/* Card description */}
              <div style={{ padding: '1rem 1.85rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{group.desc}</p>
              </div>

              <div className="skill-chips-wrap">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="skill-chip-interactive"
                    style={{ '--card-accent': group.color }}
                  >
                    <span className="skill-chip-dot" style={{ background: levelColor[skill.level] || group.color }} />
                    {skill.name}
                  </span>
                ))}
              </div>

              {/* Proficiency legend */}
              <div style={{ padding: '0.85rem 1.85rem 1.35rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {Object.entries(levelColor).map(([lvl, col]) => (
                  <div key={lvl} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: '#475569' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: col, display: 'inline-block', flexShrink: 0 }} />
                    {lvl}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* --- Tech Marquee Strip (infinite scroll) --- */
const MARQUEE_ITEMS = [
  'WordPress', 'React.js', 'SEO', 'Elementor', 'WooCommerce',
  'PHP', 'MySQL', 'HTML5', 'CSS3', 'Core Web Vitals',
  'Technical SEO', 'JavaScript', 'Responsive Design',
  'Bootstrap', 'Tailwind CSS', 'Git / GitHub', 'Hostinger', 'cPanel',
];

const CLIENT_ITEMS = [
  'Trizone', 'SNT Solutions', 'DWA24 Medical', 'The Moment Massage', 
  'Satyam CNC', 'Squadra Lupo', 'GoFuelly', 'Aadicura Hospital'
];

function TechMarquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const doubledClients = [...CLIENT_ITEMS, ...CLIENT_ITEMS, ...CLIENT_ITEMS];
  return (
    <div className="marquee-section" aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem 0' }}>
      <div className="marquee-track">
        <div className="marquee-inner">
          {doubled.map((item, idx) => (
            <span key={idx} className="marquee-chip">
              <span className="marquee-chip-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
      
      <div className="marquee-track">
        <div className="marquee-inner" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
          {doubledClients.map((item, idx) => (
            <span key={idx} className="marquee-chip" style={{ borderColor: 'rgba(59, 130, 246, 0.25)' }}>
              <span className="marquee-chip-dot" style={{ background: '#3b82f6' }} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = [
    {
      id: 'dwa24',
      title: 'DWA24 Medical Store',
      category: 'Healthcare / eCommerce',
      badge: 'Medical Store',
      stat: '🛒 E-Commerce Platform',
      type: 'featured',
      url: '#',
      cleanUrl: 'dwa24.com',
      image: './dwa24.webp',
      headline: 'Online Medical Store',
      description: 'An online medical store developed using WordPress and WooCommerce. Features include product management, secure shopping experiences, responsive design, and optimized user journeys.',
      challenge: 'Creating a secure, user-friendly shopping experience for medical products.',
      solution: 'Custom WooCommerce integration with optimized checkout and responsive design.',
      deliverables: ['WooCommerce Store', 'Product Management', 'Responsive UX'],
      tags: ['WordPress', 'WooCommerce', 'PHP', 'JS', 'CSS']
    },
    {
      id: 'moment',
      title: 'The Moment Massage',
      category: 'Wellness & Spa',
      badge: 'Luxury Wellness',
      stat: '📅 Direct Booking Engine',
      type: 'featured',
      url: 'https://themomentmassage.com/',
      cleanUrl: 'https://themomentmassage.com',
      image: './themoment.webp',
      headline: 'Luxury Spa & Wellness Sanctuary',
      description: 'A premium wellness website designed to showcase services, improve customer engagement, and simplify appointment inquiries through an elegant user experience.',
      challenge: 'Clients previously experienced friction booking massage packages online.',
      solution: 'Integrated an intuitive booking flow, zen aesthetic, and high-performance layouts.',
      deliverables: ['Custom Wellness Layouts', 'Integrated Booking Engine', 'High-Converting CTAs'],
      tags: ['WordPress', 'Elementor', 'CSS', 'JavaScript']
    },
    {
      id: 'satyam',
      title: 'Satyam CNC & SPM Machines',
      category: 'Manufacturing',
      badge: 'Precision Engineering',
      stat: '⚙️ Industrial Catalog',
      type: 'grid',
      url: 'https://sabvix.com/satyam/',
      cleanUrl: 'https://sabvix.com/satyam',
      image: './satyam.webp',
      headline: 'Precision Industrial CNC & SPM Machine Manufacturing Portal',
      description: 'An industrial website highlighting CNC machines, automation solutions, and manufacturing capabilities with a focus on lead generation and professional branding.',
      challenge: 'Presenting complex industrial machinery in a clean, conversion-focused layout.',
      solution: 'Developed modular WordPress components with high-impact product catalogs and inquiry funnels.',
      deliverables: ['Custom CNC Catalog', 'Machinery Showcase Modules', 'Lead Generation Forms'],
      tags: ['WordPress', 'Elementor', 'JavaScript', 'CSS']
    },
    {
      id: 'squadra',
      title: 'Squadra Lupo',
      category: 'Corporate Website',
      badge: 'Premium Business',
      stat: '🏎️ Premium Design',
      type: 'grid',
      url: 'https://www.squadralupo.com/',
      cleanUrl: 'https://squadralupo.com',
      image: './squadra.webp',
      headline: 'Corporate Business Website',
      description: 'A modern business website featuring premium design, responsive layouts, advanced animations, and performance-focused development.',
      challenge: 'Delivering an immersive, high-end aesthetic while maintaining performance.',
      solution: 'Crafted a bespoke, high-contrast UI with optimized media carousels and smooth animations.',
      deliverables: ['Cinematic UI', 'Responsive Animations', 'Performance UI'],
      tags: ['WordPress', 'CSS', 'JavaScript']
    },
    {
      id: 'gofuelly',
      title: 'GoFuelly',
      category: 'On-Demand Services',
      badge: 'Fuel Delivery',
      stat: '⛽ Delivery Platform',
      type: 'grid',
      url: '#',
      cleanUrl: 'gofuelly.com',
      image: './gofuelly.webp',
      headline: 'Fuel Delivery Platform',
      description: 'A fuel delivery platform designed to streamline fuel ordering and management through a user-friendly digital experience.',
      challenge: 'Streamlining a complex ordering process for on-demand fuel delivery.',
      solution: 'Developed a custom PHP/MySQL backend with a clean HTML/JS frontend for seamless ordering.',
      deliverables: ['Fuel Ordering System', 'Database Management', 'Responsive Frontend'],
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL']
    },
    {
      id: 'aadicura',
      title: 'Aadicura Super Speciality Hospital',
      category: 'Healthcare',
      badge: 'Super Speciality',
      stat: '🏥 Hospital Portal',
      type: 'grid',
      url: '#',
      cleanUrl: 'aadicura.com',
      image: './aadicura.webp',
      headline: 'Super Speciality Hospital Website',
      description: 'A healthcare website designed to showcase hospital services, health packages, specialist consultations, and patient-focused information.',
      challenge: 'Organizing a large volume of healthcare services and specialist information clearly.',
      solution: 'Structured medical schema, clear navigation, and patient-friendly booking flows.',
      deliverables: ['Specialist Profiles', 'Health Packages', 'SEO-Optimized Content'],
      tags: ['WordPress', 'Elementor', 'SEO', 'CSS']
    }
  ];

  const categories = [
    { label: 'All', count: allProjects.length },
    { label: 'Healthcare', count: 1 },
    { label: 'Healthcare / eCommerce', count: 1 },
    { label: 'Wellness & Spa', count: 1 },
    { label: 'Manufacturing', count: 1 },
    { label: 'Corporate Website', count: 1 },
    { label: 'On-Demand Services', count: 1 }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="work" className="container" style={{ paddingTop: 'clamp(3.5rem, 7vw, 7rem)', paddingBottom: 'clamp(3.5rem, 7vw, 7rem)' }}>
      <div className="section-header">
        <span className="section-tag">Proven Results</span>
        <h2 className="section-title">Featured <span className="gradient-text">Client Works</span></h2>
        <p className="section-desc">
          Real production websites engineered for luxury clinics, wellness centers, industrial exporters, and digital agencies.
        </p>
      </div>

      {/* Social Proof Stats Strip */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(1.5rem, 4vw, 3.5rem)',
        flexWrap: 'wrap',
        marginBottom: '2.5rem',
        padding: '1.5rem 2rem',
        background: 'rgba(239, 68, 68, 0.04)',
        border: '1px solid rgba(239, 68, 68, 0.15)',
        borderRadius: '18px',
        
      }}>
        {[
          { label: 'Live Websites', val: '30+', icon: Globe },
          { label: 'Industries Served', val: '4', icon: Layers },
          { label: 'Avg PageSpeed', val: '97', icon: Zap },
          { label: 'Clients Satisfied', val: '100%', icon: CheckCircle2 },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Icon size={18} color="#ef4444" />
              <span style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em' }}>{s.val}</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Filter Tabs with Live Project Counts */}
      <div className="filter-tabs">
        {categories.map((cat, i) => (
          <button 
            key={i}
            className={`filter-btn ${filter === cat.label ? 'active' : ''}`}
            onClick={() => setFilter(cat.label)}
          >
            <span>{cat.label}</span>
            <span className="filter-count">{cat.count}</span>
          </button>
        ))}
      </div>

      {/* Flagship Showcases (Elegance Clinic & The Moment Massage) */}
      {(filter === 'All' || filter === 'Healthcare & Aesthetics') && (
        <div style={{ marginBottom: '4rem' }}>
          {/* Elegance Clinic */}
          <div className="featured-showcase-row">
            <div className="glow-bg" style={{ right: '-15%', top: '10%' }}></div>
            
            <motion.div 
              className="featured-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span className="mono-tag" style={{ color: '#ef4444', fontWeight: 700 }}>FLAGSHIP E-COMMERCE</span>
                <span style={{ fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.12)', color: '#67e8f9', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
                  Online Store
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#f8fafc', letterSpacing: '-0.5px' }}>
                DWA24 Medical Store
              </h3>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                An online medical store engineered with WooCommerce. The platform was designed to manage thousands of medical products, ensure secure shopping experiences, and provide seamless user journeys across all devices.
              </p>

              <div className="featured-checklist-grid">
                {['Custom WooCommerce Theme', 'Inventory Management', 'Secure Checkout Funnel', 'High PageSpeed Score'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} color="#ef4444" /> {item}
                  </div>
                ))}
              </div>

              <div className="project-tags" style={{ marginBottom: '2rem' }}>
                <span>WordPress</span>
                <span>WooCommerce</span>
                <span>PHP</span>
                <span>Responsive</span>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a href="https://dwa24.com/" target="_blank" rel="noreferrer" className="btn-primary">
                  Launch Live Site <ExternalLink size={17} />
                </a>
                <button 
                  className="btn-outline" 
                  onClick={() => setSelectedProject(allProjects[0])}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Eye size={17} /> View Case Study
                </button>
              </div>
            </motion.div>

                        <motion.div 
              className="featured-image-container"
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-dots">
                    <div className="browser-dot" style={{ background: '#ef4444' }}></div>
                    <div className="browser-dot" style={{ background: '#f59e0b' }}></div>
                    <div className="browser-dot" style={{ background: '#10b981' }}></div>
                  </div>
                </div>
                <img src={allProjects[0].image} alt={allProjects[0].title} style={{ width: '100%', display: 'block' }} />
              </div>
            </motion.div>
          </div>

          {/* The Moment Massage */}
          <div className="featured-showcase-row reverse">
            <div className="glow-bg" style={{ left: '-15%', top: '10%' }}></div>
            
            <motion.div 
              className="featured-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideUp}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <span className="mono-tag" style={{ color: '#f8fafc', fontWeight: 700 }}>LUXURY WELLNESS PORTAL</span>
                <span style={{ fontSize: '0.8rem', background: 'rgba(248, 250, 252, 0.12)', color: '#93c5fd', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(248, 250, 252, 0.25)' }}>
                  Spa & Retreat
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#f8fafc', letterSpacing: '-0.5px' }}>
                The Moment Massage
              </h3>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A luxury wellness and spa center website engineered with serene organic aesthetics, categorized therapy menus, and streamlined reservation features for seamless appointment booking.
              </p>

              <div className="featured-checklist-grid">
                {['Direct Spa Reservation Form', 'Zen Organic UI Aesthetics', 'Mobile First Navigation', 'SEO Structured Data'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} color="#f8fafc" /> {item}
                  </div>
                ))}
              </div>

              <div className="project-tags" style={{ marginBottom: '2rem' }}>
                <span>WordPress</span>
                <span>Spa & Wellness</span>
                <span>Booking System</span>
                <span>Custom UI</span>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a href="https://themomentmassage.com/" target="_blank" rel="noreferrer" className="btn-primary">
                  Launch Live Site <ExternalLink size={17} />
                </a>
                <button 
                  className="btn-outline" 
                  onClick={() => setSelectedProject(allProjects[1])}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Eye size={17} /> View Case Study
                </button>
              </div>
            </motion.div>

                        <motion.div 
              className="featured-image-container"
              initial={{ opacity: 0, scale: 0.95, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="browser-frame">
                <div className="browser-header">
                  <div className="browser-dots">
                    <div className="browser-dot" style={{ background: '#ef4444' }}></div>
                    <div className="browser-dot" style={{ background: '#f59e0b' }}></div>
                    <div className="browser-dot" style={{ background: '#10b981' }}></div>
                  </div>
                </div>
                <img src={allProjects[1].image} alt={allProjects[1].title} style={{ width: '100%', display: 'block' }} />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Grid of All Client Works */}
      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Layers size={24} color="#ef4444" />
        {filter === 'All' ? 'All Live Client Deliverables' : `${filter} Projects`}
      </h3>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 }
        }}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        style={{ paddingBottom: '3.5rem', paddingTop: '1rem' }}
      >
        {filteredProjects.map((project, cardIdx) => (
          <SwiperSlide key={project.id} style={{ height: 'auto', display: 'flex' }}>
            <motion.div 
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideUp}
              whileHover={{ y: -8 }}
              style={{ width: '100%' }}
            >
              <div className="project-card-stripe" style={{
                background: cardIdx % 3 === 0 ? 'linear-gradient(90deg,#ef4444,#f8fafc)' :
                            cardIdx % 3 === 1 ? 'linear-gradient(90deg,#10b981,#ef4444)' :
                                               'linear-gradient(90deg,#8b5cf6,#f8fafc)'
              }} />

              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot" style={{ background: '#ef4444' }}></div>
                  <div className="browser-dot" style={{ background: '#f59e0b' }}></div>
                  <div className="browser-dot" style={{ background: '#10b981' }}></div>
                </div>
                <div className="browser-url">
                  <Lock size={10} color="#10b981" /> {project.cleanUrl}
                </div>
              </div>

              <div 
                className="project-thumb-wrap" 
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                aria-label={`Open case study for ${project.title}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                
                <div className="project-cat-pill">
                  {project.badge}
                </div>

                <div className="floating-stat-badge">
                  {project.stat}
                </div>

                <div className="project-thumb-overlay">
                  <div className="project-thumb-overlay-inner">
                    <Eye size={18} />
                    <span>Explore Case Study</span>
                  </div>
                </div>
              </div>

              <div className="project-card-body">
                <h4 className="project-card-title">
                  {project.title}
                </h4>
                <div className="project-card-headline">
                  {project.headline}
                </div>
                <p className="project-card-desc">
                  {project.description}
                </p>

                <div className="project-tags" style={{ marginBottom: '1.25rem' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', paddingTop: '10px' }}>
                  <button 
                    className="btn-outline" 
                    onClick={() => setSelectedProject(project)}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '8px 16px', flex: 1, justifyContent: 'center' }}
                  >
                    <Eye size={15} /> Case Study
                  </button>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary" 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', padding: '8px 16px', flex: 1, justifyContent: 'center' }}
                  >
                    Live <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Project Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(3, 7, 18, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
            }}
          >
            <motion.div 
              className="project-modal-content"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative'
              }}
            >
              <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
                <X size={20} />
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', height: 'auto', display: 'block', borderBottom: '1px solid rgba(255,255,255,0.1)' }} />
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(239, 68, 68, 0.3)' }}>{selectedProject.badge}</span>
                  <span style={{ fontSize: '0.8rem', background: 'rgba(248, 250, 252, 0.1)', color: '#94a3b8', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>{selectedProject.stat}</span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>{selectedProject.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '25px' }}>{selectedProject.description}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '5px' }}>The Challenge</h4>
                    <p style={{ color: '#94a3b8' }}>{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '5px' }}>The Solution</h4>
                    <p style={{ color: '#94a3b8' }}>{selectedProject.solution}</p>
                  </div>
                </div>

                <h4 style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '10px' }}>Key Deliverables</h4>
                <ul style={{ color: '#94a3b8', paddingLeft: '20px', marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedProject.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <a href={selectedProject.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}>
                  Visit Live Project <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* --- Client ROI Analysis Section (The Technical Advantage) --- */
function ROIAnalysis() {
  const benefits = [
    {
      title: 'Lightning Fast Load Speeds',
      value: '< 1s',
      numericVal: 96,
      benchmark: 'Core Web Vitals Pass',
      spec: 'LCP 0.78s • Speed Index 98',
      barPercent: 96,
      desc: 'Engineered for sub-second page loads to eliminate visitor bounce rates and boost Google search ranking signals.',
      icon: Zap,
      color: '#ef4444',
      tag: '96% FASTER'
    },
    {
      title: 'Flawless Technical SEO',
      value: '100/100',
      numericVal: 100,
      benchmark: 'Lighthouse Score',
      spec: 'Schema • JSON-LD • Meta',
      barPercent: 100,
      desc: 'Semantic HTML5 structure, automated OpenGraph tags, rich snippets, and optimized crawl paths for top organic SERP rank.',
      icon: Globe,
      color: '#10b981',
      tag: 'PERFECT SCORE'
    },
    {
      title: 'Mobile-First Conversions',
      value: '2.4x',
      numericVal: 94,
      benchmark: 'Lead Gen Surge',
      spec: 'Touch UX • Frictionless Forms',
      barPercent: 94,
      desc: 'Thumb-friendly touch targets, streamlined inquiry flows, and fluid layouts designed to turn casual visitors into paying clients.',
      icon: LayoutTemplate,
      color: '#f8fafc',
      tag: '2.4× MORE LEADS'
    }
  ];

  return (
    <section className="roi-section">
      <div className="container">
        {/* Header */}
        <motion.div
          className="roi-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-tag">Performance Proof</span>
          <h2 className="section-title">
            The Technical <span className="gradient-text">Advantage</span>
          </h2>
          <p className="section-desc">
            Why clients choose to work with me — measurable performance, conversion funnels, and real digital growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="roi-cards-grid">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                className="roi-adv-card"
                style={{ '--accent': b.color }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                {/* Top accent bar */}
                <div className="roi-card-accent-bar" style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }} />

                {/* Ghost big number */}
                <div className="roi-ghost-num">{b.value}</div>

                {/* Header row */}
                <div className="roi-card-top">
                  <div className="roi-icon-wrap" style={{ background: `${b.color}18`, borderColor: `${b.color}35`, color: b.color }}>
                    <Icon size={22} />
                  </div>
                  <span className="roi-tag-pill" style={{ color: b.color, borderColor: `${b.color}35`, background: `${b.color}12` }}>
                    {b.tag}
                  </span>
                </div>

                {/* Big value */}
                <div className="roi-big-value" style={{ color: b.color }}>{b.value}</div>
                <div className="roi-spec-row">{b.spec}</div>

                {/* Progress bar */}
                <div className="roi-bar-track">
                  <motion.div
                    className="roi-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${b.color}, #f87171)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.barPercent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 + i * 0.1 }}
                  />
                </div>

                {/* Title + desc */}
                <h4 className="roi-card-title">{b.title}</h4>
                <p className="roi-card-desc">{b.desc}</p>

                {/* Benchmark pill */}
                <div className="roi-benchmark-footer" style={{ borderColor: `${b.color}20` }}>
                  <span className="roi-dot" style={{ background: b.color }} />
                  {b.benchmark}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          className="roi-stat-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { val: '30+', label: 'Live Websites Deployed' },
            { val: '100%', label: 'Client Satisfaction' },
            { val: '2+', label: 'Years Experience' },
            { val: '98', label: 'Avg Lighthouse Score' },
          ].map((s, i) => (
            <div key={i} className="roi-strip-item">
              <div className="roi-strip-val">{s.val}</div>
              <div className="roi-strip-label">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --- FAQ Section --- */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you build custom WordPress themes or customize existing ones?',
      a: 'I specialize in both! For maximum speed and bespoke branding, I build lightweight custom themes using clean PHP, Advanced Custom Fields (ACF), and semantic CSS. I can also customize existing themes or Elementor setups without introducing bloat.'
    },
    {
      q: 'How do you guarantee fast website load speeds and Core Web Vitals?',
      a: 'I audit every site using Google PageSpeed Insights, implement server-level caching, optimize database queries, compress images to WebP formats, eliminate render-blocking CSS/JS, and ensure smooth sub-second load times.'
    },
    {
      q: 'Can you migrate or redesign our existing site without losing SEO rankings?',
      a: 'Absolutely. I preserve all permalink structures, implement proper 301 redirects, maintain existing meta tags and schemas, and improve overall on-page technical SEO so your search visibility increases after redesign.'
    },
    {
      q: 'Do you develop e-commerce stores with WooCommerce and Shopify?',
      a: 'Yes. I configure product catalogs, secure checkout gateways, automated customer emails, discount systems, and inventory tracking for both WooCommerce and Shopify.'
    }
  ];

  return (
    <section id="faq" className="container" style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
      <div className="section-header">
        <span className="section-tag">Clarity & Process</span>
        <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <p className="section-desc">
          Answers to common questions about my development workflow, turnaround times, and technical standards.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {faqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button 
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <span>{faq.q}</span>
              <ChevronDown 
                size={20} 
                style={{ 
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', 
                  transition: 'transform 0.25s ease',
                  color: '#ef4444',
                  flexShrink: 0,
                  marginLeft: '12px'
                }} 
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="faq-answer"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- High-Tech Glassmorphism Contact Form --- */
function ContactSection() {
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'WordPress Custom Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="container" style={{ padding: 'clamp(4rem, 7vw, 7rem) 0 clamp(4rem, 7vw, 8rem)', position: 'relative' }}>
      <div className="glow-bg" style={{ bottom: '0', left: '50%', transform: 'translateX(-50%)' }}></div>

      <div className="section-header">
        <span className="section-tag">Let's Connect</span>
        <h2 className="section-title">Start a <span className="gradient-text">Conversation</span></h2>
        <p className="section-desc">
          Ready to scale your web presence with high-performance WordPress development? Let's discuss your requirements.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'stretch' }}>
        
        {/* Contact Info Sidebar */}
        <motion.div 
          style={{ flex: '1 1 min(100%, 340px)', minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={slideUp}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem', lineHeight: 1.3 }}>
              Work With a Dedicated <span style={{ color: '#ef4444' }}>WordPress Engineer</span>
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Whether you need a custom-coded theme, high-converting WooCommerce storefront, emergency speed optimization, or ongoing website maintenance, I'm available to collaborate.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Direct Email</div>
                  <a href="mailto:parmarparth23012003@gmail.com" style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.92rem', wordBreak: 'break-all' }}>
                    parmarparth23012003@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(248, 250, 252, 0.12)', border: '1px solid rgba(248, 250, 252, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f8fafc', flexShrink: 0 }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Call / WhatsApp</div>
                  <a href="tel:+917567959878" style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.92rem' }}>
                    +91 7567959878
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', flexShrink: 0 }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Location</div>
                  <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.92rem' }}>
                    Vadodara, Gujarat, India (388260)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Languages Spoken:</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['English', 'Gujarati', 'Hindi'].map((lang, idx) => (
                <span key={idx} style={{ padding: '4px 12px', background: 'rgba(239, 68, 68, 0.1)', color: '#67e8f9', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 600 }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* High-Tech HUD Glassmorphism Form */}
        <motion.div 
          style={{ flex: '1 1 min(100%, 460px)', minWidth: 0, width: '100%' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={slideUp}
        >
          <div className="hud-corner-card">
            <div style={{ marginBottom: '1.75rem' }}>
              <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: 800, color: '#f8fafc' }}>
                Send a <span className="gradient-text">Project Inquiry</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '4px' }}>
                Fill in the details below to receive a personalized quote & project timeline.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  textAlign: 'center', 
                  padding: '2.5rem 1.25rem', 
                  background: 'rgba(16, 185, 129, 0.08)', 
                  border: '1px solid rgba(16, 185, 129, 0.3)', 
                  borderRadius: '16px' 
                }}
              >
                <CheckCircle2 size={52} color="#10b981" style={{ margin: '0 auto 1.25rem' }} />
                <h4 style={{ fontSize: '1.3rem', color: '#f8fafc', marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                  Thank you for reaching out, <strong>{formState.fullName}</strong>. Parth Parmar will review your inquiry and get back to you shortly.
                </p>
                <button 
                  className="btn-outline" 
                  onClick={() => { setSubmitted(false); setFormState({ fullName: '', email: '', phone: '', service: 'WordPress Custom Development', message: '' }); }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <Card view="raised" className="contact-gravity-card">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    
                    <div>
                      <Text variant="body-2" style={{ marginBottom: '8px', display: 'block', color: '#cbd5e1', fontWeight: 500 }}>Full Name *</Text>
                      <TextInput 
                        size="xl" 
                        placeholder="John Doe" 
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      />
                    </div>

                    <div>
                      <Text variant="body-2" style={{ marginBottom: '8px', display: 'block', color: '#cbd5e1', fontWeight: 500 }}>Email Address *</Text>
                      <TextInput 
                        size="xl" 
                        placeholder="name@company.com" 
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>

                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    <div>
                      <Text variant="body-2" style={{ marginBottom: '8px', display: 'block', color: '#cbd5e1', fontWeight: 500 }}>Phone / WhatsApp</Text>
                      <TextInput 
                        size="xl" 
                        placeholder="+91 00000 00000" 
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <Text variant="body-2" style={{ marginBottom: '8px', display: 'block', color: '#cbd5e1', fontWeight: 500 }}>Project Details / Message *</Text>
                    <TextArea 
                      size="xl" 
                      minRows={4} 
                      placeholder="Tell me about your project, timeline, and goals..." 
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="project-case-btn"
                    style={{ width: '100%', justifyContent: 'center', marginTop: '1rem', background: 'var(--accent-cyan)', color: '#fff', border: 'none' }}
                  >
                    {loading ? 'Sending...' : 'Send Inquiry Directly'}
                  </button>
                </Card>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- Floating WhatsApp Widget --- */
function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/917567959878" 
      target="_blank" 
      rel="noreferrer"
      className="floating-whatsapp-btn"
      title="Chat with Parth Parmar on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={26} />
    </a>
  );
}

/* --- Footer --- */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '4rem 0 3rem', background: '#02050e' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.4rem' }}>
            PARTH<span style={{ color: '#ef4444' }}>.</span>PARMAR
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
            Professional WordPress & Web Solutions Developer • Vadodara, Gujarat
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://www.linkedin.com/in/parth-parmar-35611723a" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-outline" 
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            LinkedIn Profile <ExternalLink size={14} />
          </a>
          <a 
            href="mailto:parmarparth23012003@gmail.com" 
            className="btn-primary" 
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            Email Me <Mail size={14} />
          </a>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center', color: '#64748b', fontSize: '0.8rem' }}>
        © {new Date().getFullYear()} Parth Parmar. All Rights Reserved. Built with React & Vite.
      </div>
    </footer>
  );
}

function GlobalBackground() {
  return (
    <div className="global-bg-container">
      <div className="global-grid-overlay"></div>
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>
    </div>
  );
}

function TimelineSlider({ items = [] }) {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="timeline-slider-wrapper" style={{ position: 'relative', marginTop: '2rem' }}>
      <div className="slider-controls" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginBottom: '1rem' }}>
        <button onClick={() => scroll('left')} className="slider-btn" aria-label="Scroll Left">
          <ArrowRight style={{ transform: 'rotate(180deg)' }} size={20} />
        </button>
        <button onClick={() => scroll('right')} className="slider-btn" aria-label="Scroll Right">
          <ArrowRight size={20} />
        </button>
      </div>
      
      <div className="career-timeline-scroll hide-scrollbar" ref={scrollRef}>
        {items.map((item, idx) => {
          const Icon = item.icon;
          const isEdu = item.icon === GraduationCap || item.role.includes('Bachelor');
          return (
            <motion.div 
              key={idx} 
              className="exp-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideUp}
            >
              <div className="exp-header">
                <div className="exp-icon-box" style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}15` }}>
                  <Icon size={22} />
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: isEdu ? '#10b981' : '#ef4444', padding: '4px 10px', borderRadius: '100px', background: isEdu ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)' }}>
                    {isEdu ? 'Education' : 'Experience'}
                  </span>
                  <span className="exp-date-badge" style={{ color: item.color, borderColor: `${item.color}35`, background: `${item.color}10` }}>
                    {item.duration}
                  </span>
                </div>
              </div>

              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                {item.role}
              </h4>
              <div style={{ fontSize: '0.92rem', color: item.color, fontWeight: 600, marginBottom: '1.25rem' }}>
                {item.company} <span style={{ color: '#64748b', fontWeight: 400 }}>• {item.location}</span>
              </div>

              <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', flex: 1 }}>
                {(item.points || []).map((pt, pIdx) => (
                  <li key={pIdx} style={{ lineHeight: 1.6 }}>{pt}</li>
                ))}
              </ul>

              <div className="project-tags" style={{ margin: 0 }}>
                {(item.tags || []).map((tg, tIdx) => (
                  <span key={tIdx} style={{ fontSize: '0.75rem', padding: '4px 12px' }}>{tg}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}



function ExperienceOptionTwo() {
  const [activeCard, setActiveCard] = useState(null);

  const workHistory = [
    {
      role: 'Executive Web Developer',
      company: 'Trizone Communications',
      duration: 'Nov 2024 - Present',
      location: 'Vadodara',
      badge: 'Current Role',
      color: '#ef4444',
      points: [
        'Develop and manage WordPress websites for clients across multiple industries.',
        'Build custom Elementor layouts and interactive user interfaces.',
        'Implement SEO improvements and website optimization strategies.',
        'Integrate third-party APIs, payment gateways, and marketing tools.',
        'Ensure website security, performance, and scalability.'
      ],
      tags: ['WordPress', 'Elementor', 'SEO', 'API']
    },
    {
      role: 'WordPress Developer',
      company: 'SNT Solutions',
      duration: 'Dec 2023 - Nov 2024',
      location: 'Vadodara',
      badge: 'Previous Role',
      color: '#3b82f6',
      points: [
        'Developed custom WordPress websites and landing pages.',
        'Customized themes and plugins according to client requirements.',
        'Improved website performance and mobile responsiveness.',
        'Worked with HTML, CSS, JavaScript, PHP, and Elementor.'
      ],
      tags: ['WordPress', 'PHP', 'Performance', 'HTML/CSS/JS']
    },
    {
      role: 'Freelance Web Developer',
      company: 'Freelance',
      duration: '2023 - Present',
      location: 'Remote',
      badge: 'Side Hustle',
      color: '#10b981',
      points: [
        'Delivered websites for healthcare, manufacturing, eCommerce, and business clients.',
        'Managed complete project lifecycles from design implementation to deployment.',
        'Provided SEO optimization and website maintenance services.'
      ],
      tags: ['Healthcare', 'eCommerce', 'Manufacturing', 'Maintenance']
    }
  ];

  return (
    <section id="experience" className="container" style={{ paddingBottom: 'clamp(4rem, 6vw, 6rem)' }}>
      <div className="section-header">
        <span className="section-tag">Work History</span>
        <h2 className="section-title">Experience <span className="gradient-text">Slider Variant</span></h2>
        <p className="section-desc">
          Tap or hover over the cards below to instantly reveal the responsibilities, duration, and technologies for each role.
        </p>
      </div>

      <div className="swiper-material-wrapper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1.15}
          centeredSlides={false}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
          }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '3rem' }}
        >
          {workHistory.map((item, idx) => {
            const isActive = activeCard === idx;
            return (
              <SwiperSlide key={idx}>
                <div 
                  className="material-slide-card" 
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(isActive ? null : idx)}
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    aspectRatio: '3/4',
                    background: `linear-gradient(to bottom, transparent 30%, #0f172a 100%), ${item.color}20`,
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(45deg, ${item.color}, #0f172a)`, zIndex: -1 }}></div>
                  
                  {/* Default State Content */}
                  <div style={{ 
                    /* removed opacity fade to prevent glitch */ 
                    
                    height: '100%' 
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '20px', left: '20px',
                      background: 'rgba(255,255,255,0.85)',
                      color: '#0f172a',
                      padding: '6px 16px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {item.badge}
                    </div>

                    <div style={{ position: 'absolute', top: '80px', left: '20px', right: '20px' }}>
                      <h3 style={{
                        fontSize: 'clamp(2rem, 6vw, 2.6rem)',
                        fontWeight: 900,
                        color: '#fff',
                        lineHeight: 1,
                        textTransform: 'uppercase',
                        marginBottom: '10px'
                      }}>
                        {item.role.split(' ').map((word, i) => <div key={i}>{word}</div>)}
                      </h3>
                    </div>

                    <div style={{
                      position: 'absolute',
                      bottom: '20px', left: '20px', right: '20px',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '30px',
                      padding: '10px 10px 10px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                        {item.company}
                      </span>
                      <div style={{
                        background: '#0f172a',
                        width: '45px', height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff'
                      }}>
                        <Briefcase size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Interactive Details Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#0f172a',
                    
                    padding: '30px 20px',
borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: 1,
                    transform: isActive ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                      <div style={{ background: `${item.color}20`, color: item.color, padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>
                        {item.duration}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={14} /> {item.location}
                      </div>
                    </div>

                    <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '15px', lineHeight: 1.2 }}>
                      {item.role} <br />
                      <span style={{ fontSize: '1rem', color: item.color, fontWeight: 600 }}>@ {item.company}</span>
                    </h4>

                    <ul style={{ 
                      paddingLeft: '1.2rem', 
                      color: '#cbd5e1', 
                      fontSize: '0.88rem', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '8px', 
                      marginBottom: '20px', 
                      flex: 1,
                      overflowY: 'auto'
                    }}>
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ lineHeight: 1.5 }}>{pt}</li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                      {item.tags.map((tg, tIdx) => (
                        <span key={tIdx} style={{ 
                          fontSize: '0.7rem', 
                          padding: '4px 10px', 
                          background: `${item.color}15`, 
                          border: `1px solid ${item.color}40`,
                          color: '#fff', 
                          borderRadius: '4px' 
                        }}>
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}


/* --- Services Section --- */
function ServicesSection() {
  const services = [
    {
      title: 'Custom Web & Shopify',
      desc: 'Custom, high-performing websites built with modern technologies like React, Shopify Liquid, Node.js, and modern tech to ensure scalable digital solutions.',
      icon: LayoutTemplate,
      color: '#3b82f6'
    },
    {
      title: 'WordPress Solutions',
      desc: 'Expert WordPress development, custom Elementor layouts, theme customization, and plugin integration for tailored business needs.',
      icon: Layers,
      color: '#ef4444'
    },
    {
      title: 'SEO Specialist',
      desc: 'On-page and technical SEO optimization, Core Web Vitals improvements, and schema implementations to rank higher on Google.',
      icon: Globe,
      color: '#10b981'
    },
    {
      title: 'Performance Optimization',
      desc: 'Speeding up slow websites, caching strategies, and asset minification for sub-second page loads and better conversion rates.',
      icon: Zap,
      color: '#f59e0b'
    },
    {
      title: 'UI/UX Enhancement',
      desc: 'Designing intuitive, user-friendly interfaces with a focus on mobile-first responsiveness and frictionless user journeys.',
      icon: Eye,
      color: '#8b5cf6'
    },
    {
      title: 'Website Maintenance',
      desc: 'Ongoing support, security audits, backups, and regular updates to keep your digital presence secure and running smoothly.',
      icon: ShieldCheck,
      color: '#0ea5e9'
    }
  ];

  return (
    <section id="services" style={{ padding: 'clamp(4rem, 6vw, 6rem) 0', background: 'linear-gradient(to bottom, transparent, #0f172a, transparent)', borderTop: '1px solid rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto 3rem auto' }}>
          <span className="section-tag" style={{ justifyContent: 'center' }}>My Expertise</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Services I <span className="gradient-text">Provide</span></h2>
          <p className="section-desc" style={{ margin: '0 auto', textAlign: 'center' }}>
            Comprehensive web solutions designed to build, scale, and optimize your online presence.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={slideUp}
                whileHover={{ y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0, right: 0,
                  width: '150px', height: '150px',
                  background: `radial-gradient(circle at top right, ${srv.color}20, transparent 70%)`,
                  zIndex: 0
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: '50px', height: '50px',
                    borderRadius: '12px',
                    background: `${srv.color}15`,
                    color: srv.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: `1px solid ${srv.color}30`
                  }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1rem' }}>
                    {srv.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BannerSliderSection() {
  return (
    <section className="banner-slider-section" style={{ padding: '8rem 5% 0rem', maxWidth: '100vw', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', height: '400px' }}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="hero-material-slider"
          style={{ height: '100%' }}
        >
          <SwiperSlide>
            <img src="./hero_banner.webp" alt="Workspace 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./hero-crimson.webp" alt="Workspace 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./hero3d.webp" alt="Workspace 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./dwa24.webp" alt="Workspace 4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <GlobalBackground />
      <Navbar />
      <BannerSliderSection />
      <Hero />
      <TypographicImpact />
      <ServicesSection />
      <ExperienceOptionTwo />
      <SkillsMatrix />
      <TechMarquee />
      <Projects />
      <ROIAnalysis />
      <FAQ />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
