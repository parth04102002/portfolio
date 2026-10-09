import React from 'react';
import { motion } from 'motion/react';

const ToolkitSection = () => {
  return (
    <section className="toolkit-section">
      <style>{`
        .toolkit-section {
          overflow-x: hidden;
          background: linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.95) 15%, rgba(15, 23, 42, 0.95) 85%, transparent 100%);
          border-top: 1px solid rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(255,255,255,0.02);
          padding: 120px 5%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          overflow: hidden;
          position: relative;
          z-index: 10;
        }

        .toolkit-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* Left side text content */
        .toolkit-content {
          flex: 1;
          max-width: 500px;
          z-index: 2;
        }

        .toolkit-subtitle {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .toolkit-subtitle .line {
          width: 30px;
          height: 1px;
          background-color: #94a3b8;
        }

        .toolkit-title {
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 1.05;
          color: #f8fafc;
          margin: 0 0 24px 0;
          font-weight: 600;
          letter-spacing: -1.5px;
        }

        .toolkit-title .italic-accent {
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          display: block;
        }

        .toolkit-desc {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .toolkit-link {
          font-size: 1rem;
          font-weight: 700;
          color: #f8fafc;
          text-decoration: none;
          border-bottom: 2px solid rgba(255, 255, 255, 0.2);
          transition: border-color 0.3s ease;
          padding-bottom: 2px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .toolkit-link:hover {
          border-color: #f8fafc;
        }

        /* Right side visual elements */
        .toolkit-visual {
          flex: 1.5;
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }

        .toolkit-visual-inner {
          position: relative;
          width: 100%;
          max-width: 650px;
          aspect-ratio: 1.6;
          transform-style: preserve-3d;
        }

        /* Center 3D Sphere */
        .center-sphere {
          position: absolute;
          width: 130px;
          height: 130px;
          background: radial-gradient(circle at 35% 35%, #f87171, #ef4444, #b91c1c);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #ffffff;
          box-shadow: 0 15px 30px rgba(239, 68, 68, 0.4), inset -10px -10px 20px rgba(0,0,0,0.3);
          z-index: 10;
          top: 50%;
          left: 50%;
          margin-top: -65px;
          margin-left: -65px;
          cursor: pointer;
        }

        .center-sphere .asterisk {
          font-size: 18px;
          margin-top: 4px;
          font-weight: 400;
        }
        
        /* Elliptical Rings */
        .orbit-ring {
          position: absolute;
          border: 1px dashed rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .inner-ring {
          width: 65%;
          height: 65%;
        }

        .outer-ring {
          width: 100%;
          height: 100%;
        }

        /* Tool Badges */
        .skill-pill {
          position: absolute;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          color: #e2e8f0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
          z-index: 5;
          cursor: pointer;
          transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
        }

        .skill-pill:hover {
          border-color: rgba(239, 68, 68, 0.5);
          background: rgba(15, 23, 42, 1);
          color: #ffffff;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .toolkit-container {
            flex-direction: column;
            text-align: center;
          }
          
          .toolkit-content {
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 60px;
          }

          .toolkit-subtitle {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .toolkit-section {
          overflow-x: hidden;
            padding: 60px 5%;
          }
          .center-sphere {
            width: 100px;
            height: 100px;
            margin-top: -50px;
            margin-left: -50px;
          }
          .skill-pill {
            padding: 6px 14px;
            font-size: 11px;
          }
        }
      `}</style>

      <div className="toolkit-container">
        {/* Left side text content */}
        <div className="toolkit-content">
          <div className="toolkit-subtitle">
            <span className="line"></span> MY TOOLKIT
          </div>
          <h2 className="toolkit-title">
            Curiosity in.<br/>
            <span className="italic-accent gradient-text">Good work<br/>out.</span>
          </h2>
          <p className="toolkit-desc">
            Tools are only part of the story. I use the right ones to bring ideas to life, build on a solid foundation, and make every detail count.
          </p>
          <a href="#work" className="toolkit-link">
            See what I can make ↗
          </a>
        </div>

        {/* Right side visual elements */}
        <div className="toolkit-visual">
          <motion.div 
            className="toolkit-visual-inner"
            initial={{ rotateX: 10, rotateY: -10 }}
            animate={{ rotateX: [10, -5, 10], rotateY: [-10, 5, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Center 3D Sphere */}
            <motion.div 
              className="center-sphere"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span>THE<br/>TOOLKIT</span>
              <span className="asterisk">✴</span>
            </motion.div>
            
            {/* Elliptical Rings */}
            <div className="orbit-ring inner-ring"></div>
            <div className="orbit-ring outer-ring"></div>

            {/* Outer Ring Tool Pills */}
            {[
              { label: 'CSS3', top: '18%', left: '18%', delay: 0 },
              { label: 'HTML5', top: '8%', left: '50%', delay: 0.5 },
              { label: 'Elementor', top: '18%', left: '82%', delay: 1 },
              { label: 'WordPress', top: '50%', left: '90%', delay: 1.5 },
              { label: 'Shopify', top: '82%', left: '85%', delay: 2 },
              { label: 'PHP', top: '92%', left: '55%', delay: 2.5 },
              { label: 'SEO', top: '85%', left: '15%', delay: 3 },
              { label: 'React JS', top: '50%', left: '10%', delay: 3.5 },
            ].map((tool, idx) => (
              <motion.div 
                key={idx} 
                className="skill-pill"
                style={{ top: tool.top, left: tool.left, marginLeft: '-30px', marginTop: '-15px' }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: tool.delay }}
                whileHover={{ scale: 1.15, zIndex: 20 }}
              >
                {tool.label}
              </motion.div>
            ))}
            
            {/* Inner Ring Tool Pills */}
            {[
              { label: 'ACF', top: '27%', left: '27%', delay: 0.2 },
              { label: 'JavaScript', top: '27%', left: '73%', delay: 0.8 },
              { label: 'GitHub', top: '66%', left: '78%', delay: 1.4 },
              { label: 'WooCommerce', top: '78%', left: '33%', delay: 2.2 },
            ].map((tool, idx) => (
              <motion.div 
                key={`inner-${idx}`} 
                className="skill-pill" 
                style={{ top: tool.top, left: tool.left, marginLeft: '-30px', marginTop: '-15px' }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: tool.delay }}
                whileHover={{ scale: 1.15, zIndex: 20 }}
              >
                {tool.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
