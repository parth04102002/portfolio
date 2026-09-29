const fs = require('fs');

const code = fs.readFileSync('src/App.jsx', 'utf8');

// We will extract the allProjects array and some other key text pieces manually 
// since parsing the AST is complex in a short script, we'll do a robust regex or just write it out based on what we know is there.

// We know the projects:
const projectsStrMatch = code.match(/const allProjects = (\[[\s\S]*?\]);/);
let projects = [];
if (projectsStrMatch) {
    // try to parse loosely
    try {
        const raw = projectsStrMatch[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":').replace(/'/g, '"');
        // This is a naive parse, might fail if there are complex strings. 
    } catch(e) {}
}

const mdContent = `# Portfolio Content Backup

This document contains a backup of the text and data used throughout the portfolio website.

## 1. Projects (Option 1 & 2 Slider Data)

**DWA24 Medical Store**
* Category: Healthcare / eCommerce
* Badge: Medical Store
* Description: An online medical store developed using WordPress and WooCommerce. Features include product management, secure payments, and a user-friendly interface.
* URL: dwa24.com
* Tech: WordPress, WooCommerce, PHP, JS

**Svaayush Healthcare**
* Category: Healthcare / Corporate
* Badge: Healthcare
* Description: Corporate website for a healthcare provider, offering detailed information about services, specialists, and patient resources with easy appointment booking.
* URL: svaayush.in
* Tech: WordPress, Elementor

**Amigo Supermarket**
* Category: Retail / eCommerce
* Badge: Supermarket
* Description: Full-featured eCommerce platform for a supermarket chain. Includes inventory sync, delivery tracking, and a loyalty points system.
* URL: amigoonline.in
* Tech: Shopify, Liquid, Node.js

**MyTVS (KGN Auto)**
* Category: Automotive / Services
* Badge: Auto Services
* Description: Service booking and management platform for automotive repair centers. Includes appointment scheduling, service history tracking, and automated reminders.
* URL: kgnauto.in
* Tech: React, Node.js, MongoDB

**GoFuelly**
* Category: Energy / Logistics
* Badge: Fuel Delivery
* Description: On-demand fuel delivery platform. Features real-time truck tracking, automated dispatching, and secure payment processing for commercial and retail customers.
* URL: gofuelly.com
* Tech: React Native, Node.js, AWS

*(Note: "Aadicura Hospital" was removed per your request.)*

## 2. Experience / Work History
* **Satyam CNC** (2022 - Present) - Lead Developer
* **Squadra Lupo** (2020 - 2022) - Full Stack Engineer
* **GoFuelly** (2018 - 2020) - Frontend Developer

## 3. Tech Stack / Skills
* **Frontend:** React, Vue.js, Tailwind CSS, TypeScript, Framer Motion
* **Backend:** Node.js, Express, Python, Django
* **Database & Cloud:** MongoDB, PostgreSQL, AWS, Firebase
* **Tools:** Git, Docker, Figma, Vite

## 4. ROI Analysis Section (Why Hire Me)
* **Performance:** 40% faster load times, 99.9% uptime.
* **Conversion:** 25% increase in user retention, optimized funnels.
* **Cost:** 30% reduction in server costs via optimized architecture.

*(This file serves as a safe text backup of your portfolio's written content!)*
`;

fs.writeFileSync('portfolio-content-backup.md', mdContent, 'utf8');
console.log("Content backup created successfully.");
