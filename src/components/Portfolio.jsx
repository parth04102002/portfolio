import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Satyam CNC & SPM Machines',
    category: 'Industrial & Manufacturing',
    description: 'Bespoke industrial WordPress platform featuring custom SPM & CNC machine lineups, 3D machinery specifications, and interactive RFQ quotation engine.',
    image: './satyam.jpg',
    tags: ['WordPress', 'PHP', 'Industrial Catalog', 'Responsive'],
    link: 'https://sabvix.com/satyam/',
    github: '#'
  },
  {
    id: 2,
    title: 'Squadra Lupo',
    category: 'Automotive & Luxury',
    description: 'Bespoke dark-themed digital showroom celebrating rare automotive heritage, homologation rally legends, and rare modern supercars.',
    image: './squadra.jpg',
    tags: ['WordPress', 'Luxury Automotive', 'E-Commerce', 'Performance UI'],
    link: 'https://www.squadralupo.com/',
    github: '#'
  },
  {
    id: 3,
    title: 'Studio X Agency',
    category: 'Creative Portfolio',
    description: 'Award-winning agency portfolio utilizing Framer Motion for scroll animations and WebGL backgrounds for a deeply immersive experience.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Framer Motion', 'WebGL', 'React', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Lumina Real Estate',
    category: 'Property Directory',
    description: 'Custom property listing platform built on WordPress with advanced filtering, map integration, and virtual 3D property tours.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Google Maps API', 'PHP', 'React', 'Advanced Custom Fields'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Apex SaaS Landing',
    category: 'B2B Marketing',
    description: 'Conversion-optimized landing page for a B2B SaaS company. Integrated with Hubspot CRM and optimized for <900ms load times.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Marketing', 'SEO', 'Hubspot', 'Performance'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Nexus Learning Hub',
    category: 'LMS Platform',
    description: 'Custom Learning Management System built over LearnDash. Features video progress tracking, gamification badges, and community forums.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['LearnDash', 'BuddyPress', 'React', 'LMS'],
    link: '#',
    github: '#'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Work
        </motion.h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="glass-card"
              style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(250, 204, 21, 0.4)' }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem', height: '200px' }}>
                <motion.div 
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ fontSize: '0.8rem', color: '#facc15', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0', lineHeight: 1.3 }}>{project.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = '#facc15'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '0.9rem' }} onMouseOver={(e) => e.target.style.color = '#facc15'} onMouseOut={(e) => e.target.style.color = 'inherit'}>
                      <Github size={16} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
