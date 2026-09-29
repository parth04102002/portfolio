# Comprehensive Portfolio Content

This document is a complete raw extraction of all the text data, arrays, and content blocks used in your React portfolio.

## 1. Projects (allProjects)
```javascript
const allProjects = [
    {
      id: 'dwa24',
      title: 'DWA24 Medical Store',
      category: 'Healthcare / eCommerce',
      badge: 'Medical Store',
      stat: 'ðŸ›’ E-Commerce Platform',
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
      stat: 'ðŸ“… Direct Booking Engine',
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
      stat: 'âš™ï¸ Industrial Catalog',
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
      stat: 'ðŸ’Ž Premium Design',
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
      stat: 'ðŸšš Delivery Platform',
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
    }
  ];
```

## 2. Work History (Experience)
```javascript
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
```

## 3. Education History
```javascript
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
```

## 4. Skills & Categories
```javascript
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
```

## 5. Services Provided
```javascript
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
```

## 6. ROI & Benefits
```javascript
const benefits = [
    {
      title: 'Lightning Fast Load Speeds',
      value: '< 1s',
      numericVal: 96,
      benchmark: 'Core Web Vitals Pass',
      spec: 'LCP 0.78s Ã¢â‚¬Â¢ Speed Index 98',
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
      spec: 'Schema Ã¢â‚¬Â¢ JSON-LD Ã¢â‚¬Â¢ Meta',
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
      spec: 'Touch UX Ã¢â‚¬Â¢ Frictionless Forms',
      barPercent: 94,
      desc: 'Thumb-friendly touch targets, streamlined inquiry flows, and fluid layouts designed to turn casual visitors into paying clients.',
      icon: LayoutTemplate,
      color: '#f8fafc',
      tag: '2.4Ãƒâ€” MORE LEADS'
    }
  ];
```

## 7. Frequently Asked Questions (faqs)
```javascript
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
```

## 8. Marquee Items (Tech Stack)
```javascript
const MARQUEE_ITEMS = [
  'WordPress', 'React.js', 'SEO', 'Elementor', 'WooCommerce',
  'PHP', 'MySQL', 'HTML5', 'CSS3', 'Core Web Vitals',
  'Technical SEO', 'JavaScript', 'Responsive Design',
  'Bootstrap', 'Tailwind CSS', 'Git / GitHub', 'Hostinger', 'cPanel',
];
```

## 9. Marquee Items (Clients)
```javascript
const CLIENT_ITEMS = [
  'Trizone', 'SNT Solutions', 'DWA24 Medical', 'The Moment Massage', 
  'Satyam CNC', 'Squadra Lupo', 'GoFuelly', 'Aadicura Hospital'
];
```

## 10. Navigation Menu Items
```javascript
const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#work' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Contact', path: '#contact' }
  ];
```
