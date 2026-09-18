import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

/* --- Typewriter Effect Component --- */
function TypewriterText({ words }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 120;
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setCurrentText(word.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span style={{ position: 'relative', display: 'inline-block', minWidth: '7.5ch', textAlign: 'left', whiteSpace: 'nowrap' }}>
      {currentText}
      <span className="cursor-blink" style={{ color: '#06b6d4', marginLeft: '2px' }}>|</span>
    </span>
  );
}

/* --- Huge Typographic Impact Section --- */
function LargeTypewriterRow({ word, index }) {
  const [currentText, setCurrentText] = useState('');
  const [inView, setInView] = useState(false);
  const ref = React.useRef(null);
  const isOutline = index % 2 === 1; // Alternating outline and solid variants for high-end aesthetic

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
      }, 50); // Fast cinematic typing
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
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      className="large-typewriter-row"
      tabIndex={0}
      role="text"
      aria-label={word}
    >
      <div 
        className={`huge-text ${isOutline ? 'outline-variant' : 'solid-variant'}`}
      >
        {currentText}<span className="cursor-blink" style={{ color: '#06b6d4', opacity: currentText.length === word.length ? 0.4 : 1 }}>|</span>
      </div>
    </motion.div>
  );
}

function TypographicImpact() {
  const words = ['STRATEGY', 'PERFORMANCE', 'CUSTOM-CODE', 'SCALABILITY'];
  return (
    <section style={{ padding: '4.5rem 0', background: '#000000', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ fontSize: '0.85rem', fontWeight: 700, color: '#06b6d4', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '3px' }}
        >
          The Developer's Way
        </motion.div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {words.map((w, i) => (
            <LargeTypewriterRow key={i} word={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Navigation --- */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <a href="#" className="brand-logo">
          <div className="brand-badge">P</div>
          <span>PARTH<span style={{ color: '#06b6d4' }}>.</span></span>
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#work">Projects</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Hire Me <ArrowRight size={15} />
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#about" onClick={() => setMobileOpen(false)}>About Parth</a>
            <a href="#experience" onClick={() => setMobileOpen(false)}>Experience & Education</a>
            <a href="#skills" onClick={() => setMobileOpen(false)}>Technical Skills</a>
            <a href="#work" onClick={() => setMobileOpen(false)}>Client Projects</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>Frequently Asked Questions</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact / Get A Quote</a>
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
      
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '3rem', width: '100%' }}>
        <motion.div 
          style={{ flex: '1 1 min(100%, 520px)', minWidth: 0, zIndex: 10 }}
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
            style={{ fontSize: 'clamp(2.05rem, 5.2vw, 3.6rem)', fontWeight: 800, lineHeight: 1.16, marginBottom: '1.25rem', letterSpacing: '-0.025em' }}
          >
            I'm <span className="gradient-text">Parth Parmar</span>.<br />
            Professional <span style={{ color: '#06b6d4' }}><TypewriterText words={['WordPress', 'React.js', 'Shopify']} /></span> Developer.
          </motion.h1>

          <motion.p 
            variants={slideUp}
            style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}
          >
            Specializing in high-performance WordPress themes, seamless WooCommerce & Shopify stores, and responsive frontends that transform visitors into paying clients.
          </motion.p>

          <motion.div variants={slideUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            <a href="#work" className="btn-primary">
              Explore 7+ Client Sites <ArrowRight size={18} />
            </a>
            <a href="https://wa.me/917567959878" target="_blank" rel="noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} /> Chat on WhatsApp
            </a>
            <a href="/Parth_Parmar_Resume.pdf" target="_blank" rel="noreferrer" download className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(16, 185, 129, 0.4)', color: '#10b981' }}>
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div 
            variants={slideUp} 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 105px), 1fr))', 
              gap: '1.5rem', 
              marginTop: '2.5rem', 
              paddingTop: '1.75rem', 
              borderTop: '1px solid rgba(255,255,255,0.06)' 
            }}
          >
            <div>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 800, color: '#06b6d4' }}>2+ Years</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Industry Experience</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 800, color: '#3b82f6' }}>7+ Sites</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Live Client Deployments</div>
            </div>
            <div>
              <div style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', fontWeight: 800, color: '#10b981' }}>100%</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Responsive & SEO Ready</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Visual Banner with Browser Mockup Frame */}
        <motion.div 
          style={{ flex: '1 1 min(100%, 450px)', minWidth: 0, width: '100%', position: 'relative' }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="browser-frame">
            <div className="browser-header">
              <div className="browser-dots">
                <div className="browser-dot" style={{ background: '#ef4444' }}></div>
                <div className="browser-dot" style={{ background: '#f59e0b' }}></div>
                <div className="browser-dot" style={{ background: '#10b981' }}></div>
              </div>
              <div className="browser-url">
                <Lock size={11} color="#10b981" /> https://parthparmar.dev
              </div>
              <RefreshCw size={13} color="#64748b" />
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src="./hero3d.jpg" 
                alt="Futuristic 3D Tech Workspace" 
                style={{ width: '100%', display: 'block' }}
              />
              
              {/* Floating Mini Highlight Badge */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                maxWidth: 'calc(100% - 32px)',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '12px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.5)'
              }}>
                <Sparkles size={18} color="#06b6d4" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Core Focus</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', whiteSpace: 'normal' }}>Custom Themes & Performance</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- Experience & Education (Figma 4 Cards) --- */
function ExperienceAndEducation() {
  const experiences = [
    {
      role: 'Assistant Executive Web',
      company: 'Trizone Communication',
      duration: '12/2024 - Present',
      location: 'Vadodara, India',
      icon: Briefcase,
      color: '#06b6d4',
      points: [
        'Developing and customizing advanced WordPress themes and specialized plugins.',
        'Auditing and boosting Core Web Vitals, page speed, and cross-browser responsiveness.',
        'Implementing technical on-page SEO best practices and schema markup.',
        'Collaborating with creative and marketing teams to exceed client ROI targets.'
      ]
    },
    {
      role: 'WordPress Developer',
      company: 'SNT Solutions',
      duration: '12/2023 - 11/2024',
      location: 'Gujarat, India',
      icon: Code2,
      color: '#3b82f6',
      points: [
        'Engineered responsive, dynamic client portals using WordPress, HTML5, CSS3, and JavaScript.',
        'Implemented SEO-friendly architectures and streamlined user inquiry funnels.',
        'Maintained high server uptime and security hardening across multiple client sites.',
        'Created custom templates aligned with brand guidelines and UX flows.'
      ]
    },
    {
      role: 'Bachelor of Technology in IT',
      company: 'Parul University',
      duration: 'Graduated 04/2024',
      location: 'Vadodara, India',
      icon: GraduationCap,
      color: '#10b981',
      points: [
        'Completed Bachelor of Technology in Information Technology with a strong 7.32 CGPA.',
        'Deep foundation in Web Development, Database Management, and Data Structures.',
        'Hands-on full-stack software development projects and modern web engineering.'
      ]
    },
    {
      role: 'Secondary & High School',
      company: 'Science & Computer Foundations',
      duration: '2018 - 2020',
      location: 'Gujarat, India',
      icon: ShieldCheck,
      color: '#f59e0b',
      points: [
        'C M Desai Highschool — 12th Grade (Science Stream) completed with 66% (03/2020).',
        'Saraswati Highschool Debhari — 10th Grade completed with 80% (03/2018).',
        'Early grounding in analytical problem solving, logic, and computing foundations.'
      ]
    }
  ];

  return (
    <section id="experience" className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className="section-header">
        <span className="section-tag">Career & Credentials</span>
        <h2 className="section-title">Work Experience & <span className="gradient-text">Education</span></h2>
        <p className="section-desc">
          A track record of delivering production-ready web solutions, backed by formal IT engineering training.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx} 
              className="exp-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideUp}
            >
              <div className="exp-header">
                <div className="exp-icon-box" style={{ color: item.color, borderColor: `${item.color}40` }}>
                  <Icon size={22} />
                </div>
                <span className="exp-date-badge" style={{ color: item.color, borderColor: `${item.color}30` }}>
                  {item.duration}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.25rem' }}>
                {item.role}
              </h3>
              <div style={{ fontSize: '0.95rem', color: item.color, fontWeight: 600, marginBottom: '1.25rem' }}>
                {item.company} <span style={{ color: '#64748b', fontWeight: 400 }}>• {item.location}</span>
              </div>

              <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ lineHeight: 1.5 }}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* --- Skills Matrix --- */
function SkillsMatrix() {
  const skillCategories = [
    {
      category: 'CMS & E-Commerce',
      icon: ShoppingCart,
      skills: ['WordPress', 'WooCommerce', 'Shopify', 'Theme Customization', 'Plugin Development', 'ACF (Advanced Custom Fields)', 'Elementor Pro']
    },
    {
      category: 'Frontend & UI Engineering',
      icon: LayoutTemplate,
      skills: ['HTML5', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React.js', 'Responsive UI / Mobile First', 'Framer Motion', 'Bootstrap / Tailwind']
    },
    {
      category: 'Backend, Database & Core',
      icon: Database,
      skills: ['PHP', 'MySQL', 'REST APIs', 'Server Hardening', 'cPanel / Hosting Setup']
    },
    {
      category: 'Optimization & Tools',
      icon: Zap,
      skills: ['Technical SEO', 'Core Web Vitals Optimization', 'PageSpeed Insights', 'Mailer / SMTP Integrations', 'Git / GitHub', 'Vite']
    }
  ];

  return (
    <section id="skills" className="container" style={{ paddingTop: 'clamp(3.5rem, 6vw, 6rem)', paddingBottom: 'clamp(3.5rem, 6vw, 6rem)' }}>
      <div className="section-header">
        <span className="section-tag">Technical Arsenal</span>
        <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
        <p className="section-desc">
          Tools and frameworks I leverage daily to create high-performing, visually engaging web presences.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((group, idx) => {
          const Icon = group.icon;
          return (
            <motion.div 
              key={idx} 
              className="glass-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={slideUp}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '38px', height: '38px', borderRadius: '10px', 
                  background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4'
                }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', fontWeight: 700 }}>{group.category}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '50px',
                      fontSize: '0.85rem',
                      color: '#cbd5e1',
                      fontWeight: 500
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* --- Ultra-Attractive Featured & Comprehensive Projects --- */
function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const allProjects = [
    {
      id: 'elegance',
      title: 'Elegance Clinic',
      category: 'Healthcare & Aesthetics',
      badge: 'Flagship Healthcare',
      stat: '⚡ 98/100 PageSpeed',
      type: 'featured',
      url: 'https://eleganceclinic.in/',
      cleanUrl: 'https://eleganceclinic.in',
      image: './elegance.jpg',
      headline: 'Plastic & Cosmetic Surgery Center — Surat',
      description: 'A luxury healthcare web platform engineered to showcase treatments (cosmetic surgery, hair transplantation, dermatology, and laser therapies) while preserving high brand elegance and client trust.',
      challenge: 'The clinic needed a fast, high-converting digital storefront capable of highlighting complex surgical procedures while maintaining a calming aesthetic and friction-free consultation booking.',
      solution: 'Custom-coded WordPress theme with optimized image delivery, structured medical schema markup, and seamless appointment inquiry forms.',
      deliverables: ['Custom WordPress Theme', 'Consultation Inquiry System', 'SEO-Optimized Treatment Catalog', 'Mobile-Responsive UX'],
      tags: ['WordPress', 'Healthcare SEO', 'Responsive Design', 'Speed Optimization']
    },
    {
      id: 'moment',
      title: 'The Moment Massage',
      category: 'Healthcare & Aesthetics',
      badge: 'Luxury Wellness',
      stat: '📅 Direct Booking Engine',
      type: 'featured',
      url: 'https://themomentmassage.com/',
      cleanUrl: 'https://themomentmassage.com',
      image: './themoment.jpg',
      headline: 'Luxury Spa & Wellness Sanctuary',
      description: 'Developed an elegant, zen-inspired WordPress website featuring complete service menus, tier pricing, and instant booking reservation forms, optimized for high conversion and mobile visitors.',
      challenge: 'Clients previously experienced friction booking massage packages online, resulting in drop-offs.',
      solution: 'Integrated an intuitive booking flow, zen aesthetic with organic earthy tones, and sub-second load times across mobile devices.',
      deliverables: ['Custom Wellness Layouts', 'Integrated Booking Engine', 'High-Converting CTAs', 'Fast Load Times'],
      tags: ['WordPress', 'Booking System', 'Custom Layouts', 'Performance']
    },
    {
      id: 'satyam',
      title: 'Sabvix Satyam',
      category: 'Corporate & Marketing',
      badge: 'Enterprise Architecture',
      stat: '📱 Fluid Responsive Grid',
      type: 'grid',
      url: 'https://sabvix.com/satyam/',
      cleanUrl: 'https://sabvix.com/satyam',
      image: './satyam.jpg',
      headline: 'Enterprise Corporate Platform',
      description: 'Modern corporate website architecture built with high attention to typography, modular sections, and smooth multi-device responsiveness to present enterprise capabilities.',
      challenge: 'Creating a unified multi-service showcase that conveys enterprise authority while staying approachable.',
      solution: 'Modern modular layouts with clean PHP components and CSS Grid/Flexbox architecture.',
      deliverables: ['Corporate Layout Design', 'Multi-device Responsive UI', 'Interactive Service Modules'],
      tags: ['WordPress', 'Corporate UX', 'Responsive CSS', 'SEO']
    },
    {
      id: 'squadra',
      title: 'Squadra Lupo',
      category: 'Corporate & Marketing',
      badge: 'Luxury Automotive',
      stat: '🏎️ High-Impact Visuals',
      type: 'grid',
      url: 'https://www.squadralupo.com/',
      cleanUrl: 'https://squadralupo.com',
      image: './squadra.jpg',
      headline: 'Luxury Automotive & Lifestyle Portal',
      description: 'Engineered a sleek, dark-themed responsive website for high-end automotive enthusiasts and collectors, featuring fluid navigation and dynamic vehicle showcase galleries.',
      challenge: 'High-resolution vehicle photography caused slow load times on mobile devices.',
      solution: 'Implemented lazy-loading WebP pipelines and dark luxury UI styling that highlights automobile craftsmanship.',
      deliverables: ['High-End Visual Aesthetics', 'Vehicle Portfolio Showcase', 'Interactive Media Grid'],
      tags: ['WordPress', 'Automotive Showcase', 'Interactive UI', 'Performance']
    },
    {
      id: 'yashraj',
      title: 'Yashraj Digital Marketing',
      category: 'Corporate & Marketing',
      badge: 'Growth Agency',
      stat: '🎯 High-Converting Funnel',
      type: 'grid',
      url: 'https://yashrajmarketing.com/',
      cleanUrl: 'https://yashrajmarketing.com',
      image: './yashraj.jpg',
      headline: 'Digital Growth & Marketing Agency',
      description: 'Built a clean, user-focused digital marketing agency portal presenting growth strategies, case studies, and conversion-focused lead generation funnels.',
      challenge: 'Converting visitors into inbound agency inquiries.',
      solution: 'High-contrast CTAs, social proof elements, and streamlined multi-step lead capture forms.',
      deliverables: ['Lead Generation Forms', 'Service Packages Display', 'SEO-Friendly Layout'],
      tags: ['WordPress', 'Lead Generation', 'Digital Agency', 'SEO']
    },
    {
      id: 'krishna',
      title: 'Krishna Peanut Processing',
      category: 'Industrial & Export',
      badge: 'Global Agro Export',
      stat: '📦 TJ/Bold Catalogs',
      type: 'grid',
      url: 'https://krishnapeanut.com/',
      cleanUrl: 'https://krishnapeanut.com',
      image: './krishnapeanut.jpg',
      headline: 'Agro-Food Processing & Global Export Hub',
      description: 'Created a comprehensive international trade portal featuring detailed product catalogs for Bold, Java, and TJ varieties, technical specifications, and international export inquiry tools.',
      challenge: 'International buyers needed detailed purity, moisture, and grading specs before contacting.',
      solution: 'Comprehensive tabular technical catalogs, multi-currency inquiry options, and export certification badges.',
      deliverables: ['Product Variety Catalog (Bold/Java/TJ)', 'Global Inquiry Engine', 'Quality Certification Showcase'],
      tags: ['WordPress', 'Export Catalog', 'Inquiry Engine', 'International UX']
    },
    {
      id: 'aaron',
      title: 'Aaron Metals Foundry',
      category: 'Industrial & Export',
      badge: 'Precision Foundry',
      stat: '⚙️ Valve Quote Engine',
      type: 'grid',
      url: 'https://aaronmetals.in/',
      cleanUrl: 'https://aaronmetals.in',
      image: './aaronmetals.jpg',
      headline: 'Precision Metal Casting & Valve Foundry',
      description: 'Professional industrial website engineered for a metal casting foundry, showcasing valve castings, pump castings, company profile, and precision quote request systems.',
      challenge: 'Industrial clients require specific alloy compositions and casting standards before requesting quotes.',
      solution: 'Engineering-first layout with detailed product blueprints, pump/valve specs, and integrated RFP forms.',
      deliverables: ['Custom Valve & Pump Product Pages', 'Quote & Technical Inquiry Form', 'Industrial SEO Structure'],
      tags: ['WordPress', 'Industrial Foundry', 'Product Pages', 'Quote Forms']
    }
  ];

  const categories = [
    { label: 'All', count: allProjects.length },
    { label: 'Healthcare & Aesthetics', count: 2 },
    { label: 'Industrial & Export', count: 2 },
    { label: 'Corporate & Marketing', count: 3 }
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
                <span className="mono-tag" style={{ color: '#06b6d4', fontWeight: 700 }}>FLAGSHIP HEALTHCARE</span>
                <span style={{ fontSize: '0.8rem', background: 'rgba(6, 182, 212, 0.12)', color: '#67e8f9', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(6, 182, 212, 0.25)' }}>
                  Surat, India
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', color: '#f8fafc', letterSpacing: '-0.5px' }}>
                Elegance Clinic
              </h3>
              <p style={{ color: '#94a3b8', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A premium plastic and cosmetic surgery center based in Surat. The platform was designed to showcase specialized cosmetic treatments, hair restorations, and dermatology with a high-end, trustworthy aesthetic.
              </p>

              <div className="featured-checklist-grid">
                {['Custom WordPress Theme', 'Medical Treatment Catalog', 'Consultation Booking Funnel', 'High PageSpeed Score'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} color="#06b6d4" /> {item}
                  </div>
                ))}
              </div>

              <div className="project-tags" style={{ marginBottom: '2rem' }}>
                <span>WordPress</span>
                <span>Cosmetic Surgery</span>
                <span>SEO Structure</span>
                <span>Responsive</span>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <a href="https://eleganceclinic.in/" target="_blank" rel="noreferrer" className="btn-primary">
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
                  <div className="browser-url">
                    <Lock size={11} color="#10b981" /> https://eleganceclinic.in
                  </div>
                  <ExternalLink size={13} color="#64748b" />
                </div>
                <img src="./elegance.jpg" alt="Elegance Clinic Website UI Mockup" style={{ width: '100%', display: 'block' }} />
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
                <span className="mono-tag" style={{ color: '#3b82f6', fontWeight: 700 }}>LUXURY WELLNESS PORTAL</span>
                <span style={{ fontSize: '0.8rem', background: 'rgba(59, 130, 246, 0.12)', color: '#93c5fd', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.25)' }}>
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
                    <CheckCircle2 size={16} color="#3b82f6" /> {item}
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
                  <div className="browser-url">
                    <Lock size={11} color="#10b981" /> https://themomentmassage.com
                  </div>
                  <ExternalLink size={13} color="#64748b" />
                </div>
                <img src="./themoment.jpg" alt="The Moment Massage Wellness Portal Mockup" style={{ width: '100%', display: 'block' }} />
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Grid of All Client Works */}
      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Layers size={24} color="#06b6d4" />
        {filter === 'All' ? 'All Live Client Deliverables' : `${filter} Projects`}
      </h3>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideUp}
          >
            {/* Safari Browser Top Bar for each card */}
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

            <div className="project-thumb-wrap">
              <img src={project.image} alt={project.title} />
              
              {/* Category Pill */}
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(3, 7, 18, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#67e8f9',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                {project.badge}
              </div>

              {/* Stat Highlight */}
              <div className="floating-stat-badge">
                {project.stat}
              </div>
            </div>

            <div className="project-card-body">
              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.35rem' }}>
                {project.title}
              </h4>
              <div style={{ fontSize: '0.85rem', color: '#06b6d4', fontWeight: 600, marginBottom: '0.8rem' }}>
                {project.headline}
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1 }}>
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx}>{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary" 
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem' }}
                >
                  <span>Live Site</span>
                  <ExternalLink size={15} />
                </a>
                <button 
                  className="btn-outline" 
                  onClick={() => setSelectedProject(project)}
                  style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                  title="Inspect Case Study"
                >
                  <Eye size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <span className="mono-tag" style={{ color: '#06b6d4', fontWeight: 700 }}>CASE STUDY BREAKDOWN</span>
                <span style={{ fontSize: '0.8rem', background: 'rgba(6, 182, 212, 0.15)', color: '#67e8f9', padding: '2px 10px', borderRadius: '20px' }}>
                  {selectedProject.badge}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.4rem, 4.2vw, 2.2rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.4rem' }}>
                {selectedProject.title}
              </h2>
              <div style={{ color: '#06b6d4', fontWeight: 600, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', marginBottom: '1.5rem' }}>
                {selectedProject.headline}
              </div>

              <div className="browser-frame" style={{ marginBottom: '1.75rem' }}>
                <div className="browser-header">
                  <div className="browser-dots">
                    <div className="browser-dot" style={{ background: '#ef4444' }}></div>
                    <div className="browser-dot" style={{ background: '#f59e0b' }}></div>
                    <div className="browser-dot" style={{ background: '#10b981' }}></div>
                  </div>
                  <div className="browser-url">
                    <Lock size={11} color="#10b981" /> {selectedProject.cleanUrl}
                  </div>
                </div>
                <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', display: 'block', maxHeight: '350px', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h4 style={{ color: '#f59e0b', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>The Challenge</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{selectedProject.challenge}</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h4 style={{ color: '#10b981', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem' }}>Parth's Solution</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{selectedProject.solution}</p>
                </div>
              </div>

              <h4 style={{ fontSize: '1rem', color: '#f8fafc', marginBottom: '0.8rem' }}>Key Deliverables & Capabilities:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.6rem', marginBottom: '1.75rem' }}>
                {selectedProject.deliverables.map((del, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <CheckCircle2 size={16} color="#06b6d4" /> {del}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="project-tags" style={{ margin: 0 }}>
                  {selectedProject.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                <a 
                  href={selectedProject.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  Visit Production Site <ExternalLink size={17} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* --- Client ROI Analysis Section --- */
function ROIAnalysis() {
  const benefits = [
    {
      title: 'Lightning Fast Load Times',
      value: '< 1s',
      desc: 'Engineered for sub-second speeds to decrease bounce rates and increase conversion by up to 30%.',
      icon: Zap,
      color: '#06b6d4'
    },
    {
      title: 'Technical SEO Structure',
      value: '100/100',
      desc: 'Flawless semantic markup and schema deployment ensuring top-tier Google search visibility.',
      icon: Globe,
      color: '#10b981'
    },
    {
      title: 'Mobile-First Conversions',
      value: '2x',
      desc: 'Responsive UI/UX flows specifically designed to capture leads efficiently on smaller devices.',
      icon: LayoutTemplate,
      color: '#3b82f6'
    }
  ];

  return (
    <section className="container" style={{ paddingTop: 'clamp(3.5rem, 6vw, 5rem)', paddingBottom: 'clamp(3.5rem, 6vw, 5rem)' }}>
      <div className="roi-card">
        <div className="glow-bg" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.5 }}></div>
        
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem', zIndex: 1 }}>
          The Technical <span className="gradient-text">Advantage</span>
        </h2>
        <p style={{ color: '#94a3b8', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', maxWidth: '600px', marginBottom: '3rem', zIndex: 1 }}>
          Why businesses choose to collaborate with me. It’s not just about looking good—it’s about measurable performance and digital growth.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '1.5rem', width: '100%', zIndex: 1 }}>
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${b.color}20`, color: b.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} />
                  </div>
                  <div style={{ fontSize: '1.65rem', fontWeight: 800, color: b.color }}>{b.value}</div>
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#f8fafc', marginBottom: '0.6rem' }}>{b.title}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            );
          })}
        </div>
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
                  color: '#06b6d4',
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
            <h3 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.8rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
              Work With a Dedicated <span style={{ color: '#06b6d4' }}>WordPress Engineer</span>
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Whether you need a custom-coded theme, high-converting WooCommerce storefront, emergency speed optimization, or ongoing website maintenance, I'm available to collaborate.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4', flexShrink: 0 }}>
                  <Mail size={20} />
                </div>
                <div style={{ minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Direct Email</div>
                  <a href="mailto:parmarparth23012003@gmail.com" style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.92rem', wordBreak: 'break-word' }}>
                    parmarparth23012003@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', flexShrink: 0 }}>
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
                <span key={idx} style={{ padding: '4px 12px', background: 'rgba(6, 182, 212, 0.1)', color: '#67e8f9', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 600 }}>
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

                  <GravityButton 
                    view="action" 
                    size="xl" 
                    type="submit" 
                    loading={loading}
                    width="max"
                    style={{ background: '#06b6d4', color: '#02050e', fontWeight: 700 }}
                  >
                    Send Inquiry Directly
                  </GravityButton>
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
            PARTH<span style={{ color: '#06b6d4' }}>.</span>PARMAR
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

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TypographicImpact />
      <ExperienceAndEducation />
      <SkillsMatrix />
      <Projects />
      <ROIAnalysis />
      <FAQ />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
