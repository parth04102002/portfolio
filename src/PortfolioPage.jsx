import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Sparkles, FolderGit2 } from 'lucide-react';
import { ContactSection } from './App';

export default function PortfolioPage({ projects, onBack }) {
  const [activeFilter, setActiveFilter] = useState('All');

  // Scroll to top upon opening the portfolio page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Compute categories and project counts dynamically
  const categories = useMemo(() => {
    const counts = {};
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    const uniqueCats = Object.keys(counts);
    return [
      { name: 'All', count: projects.length },
      ...uniqueCats.map((name) => ({ name, count: counts[name] }))
    ];
  }, [projects]);

  // Filter projects according to the selected category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div
      className="portfolio-page"
      style={{
        minHeight: '100vh',
        backgroundColor: '#050810',
        color: '#f8fafc',
        fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      {/* Subtle Ambient Background Glow */}
      <div
        style={{
          position: 'fixed',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, rgba(5, 8, 16, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Navbar / Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(5, 8, 16, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '18px 0'
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              padding: '8px 18px',
              borderRadius: '100px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#e2e8f0';
            }}
          >
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.3px' }}>
            PARTH<span style={{ color: '#ef4444' }}>.</span>PORTFOLIO
          </div>
        </div>
      </header>

      <main
        className="container"
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '48px 24px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                background: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#f87171',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '16px'
              }}
            >
              <Sparkles size={14} /> Complete Work Archive
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                margin: '0 0 16px 0',
                fontWeight: 800,
                letterSpacing: '-1px',
                lineHeight: 1.15
              }}
            >
              All Client <span className="gradient-text">Projects</span>
            </h1>
            <p
              style={{
                color: '#94a3b8',
                fontSize: '16px',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: 1.6
              }}
            >
              Explore custom WordPress themes, WooCommerce stores, enterprise manufacturing catalogs, and web applications built for high performance and conversions.
            </p>
          </motion.div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '45px'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveFilter(cat.name)}
                style={{
                  position: 'relative',
                  padding: '9px 20px',
                  borderRadius: '100px',
                  border: isActive ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.08)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.25), rgba(248, 113, 113, 0.1))'
                    : 'rgba(255,255,255,0.03)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isActive ? '0 0 20px -3px rgba(239, 68, 68, 0.4)' : 'none'
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                <span>{cat.name}</span>
                <span
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '100px',
                    background: isActive ? '#ef4444' : 'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    fontWeight: 700
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid - Smoothly Transitions on Filter Change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '28px'
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id || index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.04, 0.24),
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{
                  background: '#0c101b',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.4)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(239, 68, 68, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
                }}
              >
                {/* Image Container with Badge and Stat */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative', background: '#050810' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {project.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        background: 'rgba(5, 8, 16, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        padding: '5px 12px',
                        borderRadius: '100px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#f8fafc'
                      }}
                    >
                      {project.badge}
                    </div>
                  )}

                  {project.stat && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        left: '14px',
                        background: 'rgba(5, 8, 16, 0.85)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: '#f87171'
                      }}
                    >
                      {project.stat}
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#f87171',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      marginBottom: '8px'
                    }}
                  >
                    {project.category}
                  </div>

                  <h3
                    style={{
                      margin: '0 0 10px 0',
                      fontSize: '20px',
                      fontWeight: 700,
                      lineHeight: '1.3',
                      color: '#f8fafc'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: '#94a3b8',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      flexGrow: 1,
                      margin: '0 0 16px 0'
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Challenge Callout */}
                  {project.challenge && (
                    <div
                      style={{
                        marginBottom: '10px',
                        background: 'rgba(255,255,255,0.02)',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        borderLeft: '3px solid #ef4444'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '3px',
                          fontWeight: 600
                        }}
                      >
                        The Challenge
                      </div>
                      <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.4' }}>
                        {project.challenge}
                      </div>
                    </div>
                  )}

                  {/* Solution Callout */}
                  {project.solution && (
                    <div
                      style={{
                        marginBottom: '16px',
                        background: 'rgba(255,255,255,0.02)',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        borderLeft: '3px solid #10b981'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '11px',
                          color: '#94a3b8',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '3px',
                          fontWeight: 600
                        }}
                      >
                        The Solution
                      </div>
                      <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.4' }}>
                        {project.solution}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '3px 9px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: '#94a3b8'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Link Button */}
                  {project.url && project.url !== '#' ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        color: '#f87171',
                        padding: '11px 16px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '13px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#ef4444';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#ef4444';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                        e.currentTarget.style.color = '#f87171';
                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <div
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        color: '#64748b',
                        padding: '11px 16px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 500
                      }}
                    >
                      <FolderGit2 size={15} />
                      <span>Proprietary System • Internal Architecture</span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8' }}>
            <p>No projects found in this category.</p>
          </div>
        )}

        <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '40px' }}>
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
