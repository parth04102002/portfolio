const fs = require('fs');

const pages = [
  {
    id: 'about',
    title: 'About Me',
    content: `
      <h2>Hi, I'm Parth</h2>
      <p>A passionate Full Stack Developer with expertise in building scalable web applications. I specialize in WordPress, React, and modern web technologies to create blazing fast and beautiful digital experiences.</p>
      <ul>
        <li>Over 3 years of professional experience</li>
        <li>Specialized in custom theme & plugin development</li>
        <li>Focused on Core Web Vitals and Technical SEO</li>
      </ul>`
  },
  {
    id: 'experience',
    title: 'Experience & Work History',
    content: `
      <div style="margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px;">
        <h3>WordPress & SEO Expert - SNT Solutions</h3>
        <p style="color: #9da2b2;">2023 - Present | Remote</p>
        <ul>
          <li>Developed and maintained high-performance WordPress sites for clients.</li>
          <li>Implemented advanced on-page and technical SEO strategies.</li>
        </ul>
      </div>
      <div style="margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px;">
        <h3>Web Developer Intern - Trizone Healthcare</h3>
        <p style="color: #9da2b2;">2023 | Vadodara, India</p>
        <ul>
          <li>Assisted in the development and redesign of corporate healthcare websites.</li>
          <li>Managed content updates and optimized site architecture.</li>
        </ul>
      </div>
      <div>
        <h3>Freelance Web Developer</h3>
        <p style="color: #9da2b2;">2022 - Present | Global</p>
        <ul>
          <li>Delivered end-to-end web solutions for various clients.</li>
          <li>Specialized in WordPress, WooCommerce, and Shopify development.</li>
        </ul>
      </div>`
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    content: `
      <h3>Frontend</h3>
      <p>HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Responsive Design</p>
      <h3>CMS & Frameworks</h3>
      <p>WordPress, Elementor, WooCommerce, ACF, PHP</p>
      <h3>SEO & Analytics</h3>
      <p>Technical SEO, On-Page SEO, Google Search Console, Schema Markup</p>
      <h3>Tools</h3>
      <p>GitHub, Figma, VS Code, Hostinger, cPanel, Cloudflare</p>`
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    content: `
      <h3>Do you build custom WordPress themes?</h3>
      <p>I specialize in both! I build lightweight custom themes using clean PHP and ACF, and can also customize existing themes like Elementor without bloat.</p>
      <h3>How do you guarantee fast website load speeds?</h3>
      <p>I audit using Google PageSpeed Insights, implement caching, optimize queries, compress to WebP, and eliminate render-blocking CSS/JS.</p>`
  },
  {
    id: 'contact',
    title: 'Contact Me',
    content: `
      <p>Let's discuss your next project!</p>
      <p><strong>Email:</strong> (Your Email Here)</p>
      <p><strong>LinkedIn:</strong> <a href="#">linkedin.com/in/parth04102002</a></p>
      <p><strong>GitHub:</strong> <a href="#">github.com/parth04102002</a></p>`
  }
];

const template = (page) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${page.title} - Single Page Preview</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #08090d; color: #fff; margin: 0; padding: 40px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; background: #11131b; padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
        h1 { margin-top: 0; color: #41d9ff; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 15px;}
        h2 { color: #9d7cff; }
        h3 { color: #ccc; margin-top: 25px; }
        p, li { font-size: 16px; color: #aaa; }
        a { color: #41d9ff; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .nav { margin-bottom: 30px; display: flex; gap: 15px; flex-wrap: wrap; }
        .nav a { background: rgba(255,255,255,0.05); padding: 8px 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.1); }
        .nav a:hover { background: rgba(65,217,255,0.1); border-color: #41d9ff; text-decoration: none;}
    </style>
</head>
<body>
    <div class="container">
        <div class="nav">
            <a href="/">← Back to Main App</a>
            ${pages.map(p => `<a href="${p.id}.html">${p.title}</a>`).join('')}
        </div>
        <h1>${page.title}</h1>
        <div class="content">
            ${page.content}
        </div>
    </div>
</body>
</html>`;

pages.forEach(page => {
    fs.writeFileSync(`public/temp-pages/${page.id}.html`, template(page), 'utf8');
});
console.log("Main portfolio pages created in public/temp-pages/");
