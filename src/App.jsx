import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Zap, LayoutTemplate, ShoppingCart, ExternalLink, Mail, ArrowRight, 
  Briefcase, Code2, GraduationCap, Phone, MapPin, Send, CheckCircle2, 
  Menu, X, Sparkles, Globe, ShieldCheck, Database, Layers, ChevronRight, 
  User, MessageSquare, ChevronDown, Star, Download, ArrowUp, FileText
} from 'lucide-react';

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <a href="#about" onClick={() => setMobileOpen(false)}>About Parth</a>
            <a href="#experience" onClick={() => setMobileOpen(false)}>Experience & Education</a>
            <a href="#skills" onClick={() => setMobileOpen(false)}>Technical Skills</a>
            <a href="#work" onClick={() => setMobileOpen(false)}>Client Projects</a>
            <a href="#faq" onClick={() => setMobileOpen(false)}>Frequently Asked Questions</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact / Get A Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* --- Hero Section --- */
function Hero() {
  return (
    <section id="about" className="container" style={{ padding: '6rem 0 6rem', position: 'relative' }}>
      <div className="glow-bg" style={{ top: '0', left: '10%' }}></div>
      
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '3.5rem' }}>
        <motion.div 
          style={{ flex: '1 1 520px', zIndex: 10 }}
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
            style={{ fontSize: '3.6rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-1px' }}
          >
            I'm <span className="gradient-text">Parth Parmar</span>.<br />
            Professional WordPress & Web Developer.
          </motion.h1>

          <motion.p 
            variants={slideUp}
            style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '580px' }}
          >
            Specializing in high-performance WordPress themes, seamless WooCommerce & Shopify stores, and responsive frontends that transform visitors into paying clients.
          </motion.p>

          <motion.div variants={slideUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#work" className="btn-primary">
              Explore 7+ Client Sites <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Request a Project Quote
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div 
            variants={slideUp} 
            style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#06b6d4' }}>2+ Years</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Industry Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#3b82f6' }}>7+ Sites</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Live Client Deployments</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Responsive & SEO Ready</div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Visual Banner */}
        <motion.div 
          style={{ flex: '1 1 450px', position: 'relative' }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{ 
            position: 'relative', 
            borderRadius: '24px', 
            padding: '10px', 
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.1))',
            boxShadow: '0 30px 70px -10px rgba(6, 182, 212, 0.25), 0 0 40px rgba(0, 0, 0, 0.8)'
          }}>
            <img 
              src="./hero3d.jpg" 
              alt="Futuristic 3D Tech Workspace" 
              style={{ width: '100%', borderRadius: '18px', display: 'block' }}
            />
            
            {/* Floating Mini Highlight Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '20px',
              background: 'rgba(15, 23, 42, 0.9)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '12px',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 15px 30px rgba(0,0,0,0.5)'
            }}>
              <Sparkles size={20} color="#06b6d4" />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Core Focus</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>Custom Themes & Fast Load Times</div>
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
    <section id="experience" className="container" style={{ padding: '6rem 0' }}>
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
    <section id="skills" className="container" style={{ padding: '6rem 0' }}>
      <div className="section-header">
        <span className="section-tag">Technical Arsenal</span>
        <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
        <p className="section-desc">
          Tools and frameworks I leverage daily to create high-performing, visually engaging web presences.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
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

/* --- Featured & Comprehensive Projects --- */
function Projects() {
  const [filter, setFilter] = useState('All');

  const allProjects = [
    {
      id: 'elegance',
      title: 'Elegance Clinic',
      category: 'Healthcare & Aesthetics',
      type: 'featured',
      url: 'https://eleganceclinic.in/',
      image: './elegance.jpg',
      headline: 'Plastic & Cosmetic Surgery Center — Surat',
      description: 'A luxury healthcare web platform engineered to showcase treatments (cosmetic surgery, hair transplantation, dermatology, and laser therapies) while preserving high brand elegance and client trust.',
      deliverables: ['Custom WordPress Theme', 'Consultation Inquiry System', 'SEO-Optimized Treatment Catalog', 'Mobile-Responsive UX'],
      tags: ['WordPress', 'Healthcare SEO', 'Responsive Design', 'Speed Optimization']
    },
    {
      id: 'moment',
      title: 'The Moment Massage',
      category: 'Healthcare & Aesthetics',
      type: 'featured',
      url: 'https://themomentmassage.com/',
      image: './themoment.jpg',
      headline: 'Luxury Spa & Wellness Sanctuary',
      description: 'Developed an elegant, zen-inspired WordPress website featuring complete service menus, tier pricing, and instant booking reservation forms, optimized for high conversion and mobile visitors.',
      deliverables: ['Custom Wellness Layouts', 'Integrated Booking Engine', 'High-Converting CTAs', 'Fast Load Times'],
      tags: ['WordPress', 'Booking System', 'Custom Layouts', 'Performance']
    },
    {
      id: 'satyam',
      title: 'Sabvix Satyam',
      category: 'Corporate & Marketing',
      type: 'grid',
      url: 'https://sabvix.com/satyam/',
      image: './satyam.jpg',
      headline: 'Enterprise Corporate Platform',
      description: 'Modern corporate website architecture built with high attention to typography, modular sections, and smooth multi-device responsiveness to present enterprise capabilities.',
      deliverables: ['Corporate Layout Design', 'Multi-device Responsive UI', 'Interactive Service Modules'],
      tags: ['WordPress', 'Corporate UX', 'Responsive CSS', 'SEO']
    },
    {
      id: 'squadra',
      title: 'Squadra Lupo',
      category: 'Corporate & Marketing',
      type: 'grid',
      url: 'https://www.squadralupo.com/',
      image: './squadra.jpg',
      headline: 'Luxury Automotive & Lifestyle Portal',
      description: 'Engineered a sleek, dark-themed responsive website for high-end automotive enthusiasts and collectors, featuring fluid navigation and dynamic vehicle showcase galleries.',
      deliverables: ['High-End Visual Aesthetics', 'Vehicle Portfolio Showcase', 'Interactive Media Grid'],
      tags: ['WordPress', 'Automotive Showcase', 'Interactive UI', 'Performance']
    },
    {
      id: 'yashraj',
      title: 'Yashraj Digital Marketing',
      category: 'Corporate & Marketing',
      type: 'grid',
      url: 'https://yashrajmarketing.com/',
      image: './yashraj.jpg',
      headline: 'Digital Growth & Marketing Agency',
      description: 'Built a clean, user-focused digital marketing agency portal presenting growth strategies, case studies, and conversion-focused lead generation funnels.',
      deliverables: ['Lead Generation Forms', 'Service Packages Display', 'SEO-Friendly Layout'],
      tags: ['WordPress', 'Lead Generation', 'Digital Agency', 'SEO']
    },
    {
      id: 'krishna',
      title: 'Krishna Peanut Processing',
      category: 'Industrial & Export',
      type: 'grid',
      url: 'https://krishnapeanut.com/',
      image: './krishnapeanut.jpg',
      headline: 'Agro-Food Processing & Global Export Hub',
      description: 'Created a comprehensive international trade portal featuring detailed product catalogs for Bold, Java, and TJ varieties, technical specifications, and international export inquiry tools.',
      deliverables: ['Product Variety Catalog (Bold/Java/TJ)', 'Global Inquiry Engine', 'Quality Certification Showcase'],
      tags: ['WordPress', 'Export Catalog', 'Inquiry Engine', 'International UX']
    },
    {
      id: 'aaron',
      title: 'Aaron Metals Foundry',
      category: 'Industrial & Export',
      type: 'grid',
      url: 'https://aaronmetals.in/',
      image: './aaronmetals.jpg',
      headline: 'Precision Metal Casting & Valve Foundry',
      description: 'Professional industrial website engineered for a metal casting foundry, showcasing valve castings, pump castings, company profile, and precision quote request systems.',
      deliverables: ['Custom Valve & Pump Product Pages', 'Quote & Technical Inquiry Form', 'Industrial SEO Structure'],
      tags: ['WordPress', 'Industrial Foundry', 'Product Pages', 'Quote Forms']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="work" className="container" style={{ padding: '7rem 0' }}>
      <div className="section-header">
        <span className="section-tag">Proven Results</span>
        <h2 className="section-title">Featured <span className="gradient-text">Client Works</span></h2>
        <p className="section-desc">
          Real production websites engineered for luxury clinics, wellness centers, industrial exporters, and digital agencies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {['All', 'Healthcare & Aesthetics', 'Industrial & Export', 'Corporate & Marketing'].map((tab, i) => (
          <button 
            key={i}
            className={`filter-btn ${filter === tab ? 'active' : ''}`}
            onClick={() => setFilter(tab)}
          >
            {tab}
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
              <span className="mono-tag" style={{ color: '#06b6d4', fontWeight: 600 }}>FLAGSHIP HEALTHCARE PROJECT</span>
              <h3 style={{ fontSize: '2.4rem', fontWeight: 800, margin: '0.5rem 0 1rem', color: '#f8fafc' }}>
                Elegance Clinic
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A premium plastic and cosmetic surgery center based in Surat. The platform was designed to showcase specialized cosmetic treatments, hair restorations, and dermatology with a high-end, trustworthy aesthetic.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.8rem' }}>
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

              <a href="https://eleganceclinic.in/" target="_blank" rel="noreferrer" className="btn-primary">
                Explore Live Website <ExternalLink size={17} />
              </a>
            </motion.div>

            <motion.div 
              className="featured-image-container"
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src="./elegance.jpg" alt="Elegance Clinic Website UI Mockup" />
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
              <span className="mono-tag" style={{ color: '#3b82f6', fontWeight: 600 }}>LUXURY WELLNESS PORTAL</span>
              <h3 style={{ fontSize: '2.4rem', fontWeight: 800, margin: '0.5rem 0 1rem', color: '#f8fafc' }}>
                The Moment Massage
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                A luxury wellness and spa center website engineered with serene organic aesthetics, categorized therapy menus, and streamlined reservation features for seamless appointment booking.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1.8rem' }}>
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

              <a href="https://themomentmassage.com/" target="_blank" rel="noreferrer" className="btn-primary">
                Explore Live Website <ExternalLink size={17} />
              </a>
            </motion.div>

            <motion.div 
              className="featured-image-container"
              initial={{ opacity: 0, scale: 0.95, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src="./themoment.jpg" alt="The Moment Massage Wellness Portal Mockup" />
            </motion.div>
          </div>
        </div>
      )}

      {/* Grid of All Client Works */}
      <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '2.5rem', color: '#f8fafc' }}>
        {filter === 'All' ? 'All Live Client Deliverables' : `${filter} Projects`}
      </h3>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideUp}
          >
            <div className="project-thumb-wrap">
              <img src={project.image} alt={project.title} />
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: 'rgba(3, 7, 18, 0.75)',
                backdropFilter: 'blur(8px)',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#67e8f9',
                border: '1px solid rgba(6, 182, 212, 0.3)'
              }}>
                {project.category}
              </div>
            </div>

            <div className="project-card-body">
              <h4 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#f8fafc', marginBottom: '0.4rem' }}>
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

              <a 
                href={project.url} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-outline" 
                style={{ width: '100%', justifyContent: 'space-between', padding: '11px 18px', fontSize: '0.9rem' }}
              >
                <span>Visit Live Website</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
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
    <section id="faq" className="container" style={{ padding: '6rem 0' }}>
      <div className="section-header">
        <span className="section-tag">Clarity & Process</span>
        <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        <p className="section-desc">
          Answers to common questions about my development workflow, turnaround times, and technical standards.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
                  color: '#06b6d4'
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
    <section id="contact" className="container" style={{ padding: '7rem 0 8rem', position: 'relative' }}>
      <div className="glow-bg" style={{ bottom: '0', left: '50%', transform: 'translateX(-50%)' }}></div>

      <div className="section-header">
        <span className="section-tag">Let's Connect</span>
        <h2 className="section-title">Start a <span className="gradient-text">Conversation</span></h2>
        <p className="section-desc">
          Ready to scale your web presence with high-performance WordPress development? Let's discuss your requirements.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3.5rem', alignItems: 'stretch' }}>
        
        {/* Contact Info Sidebar */}
        <motion.div 
          style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={slideUp}
        >
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f8fafc', marginBottom: '1rem' }}>
              Work With a Dedicated <span style={{ color: '#06b6d4' }}>WordPress Engineer</span>
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Whether you need a custom-coded theme, high-converting WooCommerce storefront, emergency speed optimization, or ongoing website maintenance, I'm available to collaborate.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.12)', border: '1px solid rgba(6, 182, 212, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#06b6d4' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Direct Email</div>
                  <a href="mailto:parmarparth23012003@gmail.com" style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem' }}>
                    parmarparth23012003@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Call / WhatsApp</div>
                  <a href="tel:+917567959878" style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem' }}>
                    +91 7567959878
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Location</div>
                  <div style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem' }}>
                    Vadodara, Gujarat, India (388260)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px' }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Languages Spoken:</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['English', 'Gujarati', 'Hindi'].map((lang, idx) => (
                <span key={idx} style={{ padding: '4px 12px', background: 'rgba(6, 182, 212, 0.1)', color: '#67e8f9', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* High-Tech HUD Glassmorphism Form */}
        <motion.div 
          style={{ flex: '1 1 500px' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={slideUp}
        >
          <div className="hud-corner-card">
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#f8fafc' }}>
                Send a <span className="gradient-text">Project Inquiry</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>
                Fill in the details below to receive a personalized quote & project timeline.
              </p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  textAlign: 'center', 
                  padding: '3rem 1.5rem', 
                  background: 'rgba(16, 185, 129, 0.08)', 
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '16px' 
                }}
              >
                <CheckCircle2 size={56} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
                <h4 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '0.5rem' }}>Message Sent Successfully!</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  
                  {/* Full Name */}
                  <div className="input-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe" 
                      className="form-control"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    />
                    <div className="input-icon-wrapper">
                      <User size={18} />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="input-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com" 
                      className="form-control"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                    <div className="input-icon-wrapper">
                      <Mail size={18} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {/* Phone / WhatsApp */}
                  <div className="input-group">
                    <label className="form-label">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="form-control"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                    <div className="input-icon-wrapper">
                      <Phone size={18} />
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className="input-group">
                    <label className="form-label">Service Required</label>
                    <select 
                      className="form-control"
                      style={{ paddingLeft: '16px' }}
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    >
                      <option value="WordPress Custom Development" style={{ background: '#090d16', color: '#fff' }}>WordPress Custom Development</option>
                      <option value="WooCommerce / Shopify Store" style={{ background: '#090d16', color: '#fff' }}>WooCommerce / Shopify Store</option>
                      <option value="Speed & SEO Optimization" style={{ background: '#090d16', color: '#fff' }}>Speed & SEO Optimization</option>
                      <option value="Theme / Plugin Customization" style={{ background: '#090d16', color: '#fff' }}>Theme / Plugin Customization</option>
                      <option value="Full Website Redesign" style={{ background: '#090d16', color: '#fff' }}>Full Website Redesign</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="input-group" style={{ marginBottom: '2rem' }}>
                  <label className="form-label">Project Details / Message *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Tell me about your project, timeline, and goals..." 
                    className="form-control"
                    style={{ paddingLeft: '16px', resize: 'vertical' }}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                {/* Submit Action */}
                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={loading}
                  style={{ width: '100%', padding: '16px', fontSize: '1.05rem', borderRadius: '12px' }}
                >
                  {loading ? 'Submitting Inquiry...' : (
                    <>
                      Send Inquiry Directly <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
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
      <ExperienceAndEducation />
      <SkillsMatrix />
      <Projects />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
