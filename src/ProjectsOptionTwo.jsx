import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function ProjectsOptionTwo({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);

  const updateSlider = useCallback(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      let offset = index - currentIndex;

      if (offset > projects.length / 2) {
        offset -= projects.length;
      }
      if (offset < -projects.length / 2) {
        offset += projects.length;
      }

      const x = offset * 245;
      const rotate = offset * -38;
      const z = Math.abs(offset) * -170;
      const scale = offset === 0 ? 1 : Math.max(0.68, 0.84 - Math.abs(offset) * 0.05);
      const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2;
      const tilt = offset * 3;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--rotate", `${rotate}deg`);
      card.style.setProperty("--z", `${z}px`);
      card.style.setProperty("--scale", scale);
      card.style.setProperty("--tilt", `${tilt}deg`);
      card.style.setProperty("--mouse-rotate-x", "0deg");
      card.style.setProperty("--mouse-rotate-y", "0deg");

      card.style.opacity = opacity;
      card.style.zIndex = 20 - Math.abs(offset);
      card.style.filter = offset === 0 ? "none" : "brightness(0.5) saturate(0.7) blur(0.2px)";

      if (offset === 0) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }, [currentIndex, projects.length]);

  useEffect(() => {
    updateSlider();
  }, [currentIndex, updateSlider]);

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;
    const slider = sliderRef.current;
    if (!sliderWrapper || !slider) return;

    let ticking = false;
    const updateScrollAnimation = () => {
      const rect = sliderWrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const centerDistance = rect.top + rect.height / 2 - windowHeight / 2;
      const normalized = Math.max(-1, Math.min(1, centerDistance / windowHeight));

      slider.style.setProperty("--scroll-y", `${normalized * -35}px`);
      slider.style.setProperty("--scroll-rotate", `${normalized * 5}deg`);
      slider.style.setProperty("--scroll-z", `${normalized * 1.5}deg`);

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const distance = index - currentIndex;
        card.style.setProperty("--scroll-tilt", `${normalized * distance * 4}deg`);
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollAnimation);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    const onMouseMove = (event) => {
      const rect = sliderWrapper.getBoundingClientRect();
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -6;
      const activeCard = cardsRef.current[currentIndex];
      if (activeCard) {
        activeCard.style.setProperty("--mouse-rotate-y", `${rotateY}deg`);
        activeCard.style.setProperty("--mouse-rotate-x", `${rotateX}deg`);
      }
    };

    const onMouseLeave = () => {
      const activeCard = cardsRef.current[currentIndex];
      if (activeCard) {
        activeCard.style.setProperty("--mouse-rotate-y", "0deg");
        activeCard.style.setProperty("--mouse-rotate-x", "0deg");
      }
    };

    sliderWrapper.addEventListener("mousemove", onMouseMove);
    sliderWrapper.addEventListener("mouseleave", onMouseLeave);

    let startX = 0;
    let isDragging = false;

    const onPointerDown = (e) => {
      startX = e.clientX;
      isDragging = true;
      sliderWrapper.setPointerCapture(e.pointerId);
    };

    const onPointerUp = (e) => {
      if (!isDragging) return;
      const difference = e.clientX - startX;
      if (Math.abs(difference) > 50) {
        if (difference < 0) {
          nextProject();
        } else {
          prevProject();
        }
      }
      isDragging = false;
    };

    const onPointerCancel = () => {
      isDragging = false;
    };

    sliderWrapper.addEventListener("pointerdown", onPointerDown);
    sliderWrapper.addEventListener("pointerup", onPointerUp);
    sliderWrapper.addEventListener("pointercancel", onPointerCancel);

    let wheelLocked = false;
    const onWheel = (e) => {
      if (wheelLocked) return;
      wheelLocked = true;
      if (e.deltaY > 0) {
        nextProject();
      } else {
        prevProject();
      }
      setTimeout(() => {
        wheelLocked = false;
      }, 750);
    };

    // passive: true so page still scrolls smoothly when mouse is over it!
    sliderWrapper.addEventListener("wheel", onWheel, { passive: true });

    updateScrollAnimation();

    return () => {
      window.removeEventListener("scroll", onScroll);
      sliderWrapper.removeEventListener("mousemove", onMouseMove);
      sliderWrapper.removeEventListener("mouseleave", onMouseLeave);
      sliderWrapper.removeEventListener("pointerdown", onPointerDown);
      sliderWrapper.removeEventListener("pointerup", onPointerUp);
      sliderWrapper.removeEventListener("pointercancel", onPointerCancel);
      sliderWrapper.removeEventListener("wheel", onWheel);
    };
  }, [currentIndex, projects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [projects.length]);

  return (
    <main className="p3d-portfolio" style={{ marginBottom: '4rem', padding: '80px 0' }}>
      <header className="p3d-heading" style={{ marginBottom: '42px' }}>
        <div className="p3d-eyebrow">Projects Alternative</div>
        <h2 className="section-title">3D <span className="gradient-text">Portfolio Slider</span></h2>
        <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto' }}>
          An immersive 3D collection of digital experiences, brand identities and products.
        </p>
      </header>

      <section className="p3d-slider-wrapper" ref={sliderWrapperRef} style={{ height: '570px' }}>
        <div className="p3d-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <article
              key={project.id || index}
              className={`p3d-project-card ${index === currentIndex ? "active" : ""}`}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="p3d-project-image">
                <img src={project.image} alt={project.title} />
                <div className="p3d-project-number">
                  0{index + 1}
                </div>
              </div>
              <div className="p3d-project-content">
                <div className="p3d-project-meta">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.badge || '2024'}</span>
                </div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="p3d-tags">
                  {project.tags && project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="p3d-controls" style={{ marginTop: '24px' }}>
        <button className="p3d-arrow" onClick={prevProject} aria-label="Previous project">
          ←
        </button>
        <div className="p3d-dots">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`p3d-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Show project ${idx + 1}`}
            />
          ))}
        </div>
        <button className="p3d-arrow" onClick={nextProject} aria-label="Next project">
          →
        </button>
      </div>

      <div className="p3d-slider-progress" style={{ marginTop: '25px' }}>
        <span style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}></span>
      </div>

      <div className="p3d-scroll-hint" style={{ marginTop: '25px' }}>
        <span>↓</span>
        Scroll or drag to explore
      </div>
    </main>
  );
}
