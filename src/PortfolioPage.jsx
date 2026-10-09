import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ExternalLink, Code2, ShieldCheck, Database, LayoutTemplate, Layers, Globe } from 'lucide-react';
import { ContactSection } from './App';

export default function PortfolioPage({ projects, onBack }) {
  const [filter, setFilter] = useState('All');

  // Extract unique categories for filters
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach(p => {
      // Split by ' / ' if it exists, or just use the main category
      const mainCat = p.category.split(' / ')[0].trim();
      if (!cats.includes(mainCat)) {
        cats.push(mainCat);
      }
    });
    return cats;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category.includes(filter));
  }, [projects, filter]);

  return (
    <div className="portfolio-page" style={{ 
      minHeight: '100vh', 
      backgroundColor: '#08090d', 
      color: '#fff', 
      fontFamily: '"Inter", sans-serif',
      paddingBottom: '80px'
    }}>
      {/* Navbar/Header */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        backgroundColor: 'rgba(8, 9, 13, 0.85)', 
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: '20px 0'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button 
            onClick={onBack}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              background: 'none', border: 'none', color: '#9da2b2',
              fontSize: '16px', fontWeight: '500', cursor: 'pointer',
              padding: '8px 0', transition: 'color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
            onMouseOut={(e) => e.currentTarget.style.color = '#9da2b2'}
          >
            <ArrowLeft size={18} /> Back to Home
          </button>
          
          <div style={{ fontWeight: '700', fontSize: '20px', letterSpacing: '-0.5px' }}>
            My <span style={{ color: '#ef4444' }}>Portfolio</span>
          </div>
        </div>
      </header>

      <main className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        
        {/* Page Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', borderRadius: '100px', fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
              Complete Work Archive
            </div>
            <h1 style={{ fontSize: '3rem', margin: '0 0 16px 0', fontWeight: '800', letterSpacing: '-1px' }}>
              All <span className="gradient-text" style={{ background: 'linear-gradient(90deg, #f87171, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
            </h1>
            <p style={{ color: '#9da2b2', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
              A comprehensive collection of websites, web apps, and digital experiences I have built for clients worldwide.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px' }}>
          {categories.map((cat, i) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                border: filter === cat ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                background: filter === cat ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255,255,255,0.02)',
                color: filter === cat ? '#ef4444' : '#9da2b2',
                cursor: 'pointer',
                fontWeight: '500',
                fontSize: '15px',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                if(filter !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseOut={(e) => {
                if(filter !== cat) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', 
            gap: '32px' 
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id || index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#11131b',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(65, 217, 255, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                }}
              >
                {/* Image Box */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  />
                  <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600', color: '#fff' }}>
                    {project.badge}
                  </div>
                </div>
                
                {/* Content Box */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ fontSize: '13px', color: '#f87171', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    {project.category}
                  </div>
                  <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: '700', lineHeight: '1.3' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#9da2b2', fontSize: '15px', lineHeight: '1.6', flexGrow: 1, margin: '0 0 20px 0' }}>
                    {project.description}
                  </p>
                  
                  {project.challenge && (
                    <div style={{ marginBottom: '16px', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
                      <div style={{ fontSize: '12px', color: '#9da2b2', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>The Problem</div>
                      <div style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: '1.5' }}>{project.challenge}</div>
                    </div>
                  )}

                  {project.solution && (
                    <div style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.02)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                      <div style={{ fontSize: '12px', color: '#9da2b2', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>The Solution</div>
                      <div style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: '1.5' }}>{project.solution}</div>
                    </div>
                  )}

                  {/* Tags */}
                  {project.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                      {project.tags.map((tag, i) => (
                        <span key={i} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '6px', fontSize: '12px', color: '#ccc' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link / URL */}
                  <a 
                    href={project.url !== '#' ? project.url : `https://${project.cleanUrl}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                      background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444',
                      padding: '12px', borderRadius: '8px', textDecoration: 'none',
                      fontWeight: '600', fontSize: '14px', transition: 'background 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(65, 217, 255, 0.2)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#9da2b2' }}>
            <p>No projects found in this category.</p>
          </div>
        )}

        <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
          <ContactSection />
        </div>

      </main>
    </div>
  );
}
