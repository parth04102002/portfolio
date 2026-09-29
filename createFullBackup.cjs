const fs = require('fs');
const code = fs.readFileSync('src/App.jsx', 'utf8');

function extractArray(arrayName) {
    const regex = new RegExp(`const ${arrayName}\\s*=\\s*(\\[[\\s\\S]*?\\]);`);
    const match = code.match(regex);
    return match ? match[1] : `[Not found: ${arrayName}]`;
}

const allProjects = extractArray('allProjects');
const navItems = extractArray('navItems');
const workHistory = extractArray('workHistory');
const educationHistory = extractArray('educationHistory');
const skillCategories = extractArray('skillCategories');
const MARQUEE_ITEMS = extractArray('MARQUEE_ITEMS');
const CLIENT_ITEMS = extractArray('CLIENT_ITEMS');
const benefits = extractArray('benefits');
const faqs = extractArray('faqs');
const services = extractArray('services');

const fullDoc = `# Comprehensive Portfolio Content

This document is a complete raw extraction of all the text data, arrays, and content blocks used in your React portfolio.

## 1. Projects (allProjects)
\`\`\`javascript
const allProjects = ${allProjects};
\`\`\`

## 2. Work History (Experience)
\`\`\`javascript
const workHistory = ${workHistory};
\`\`\`

## 3. Education History
\`\`\`javascript
const educationHistory = ${educationHistory};
\`\`\`

## 4. Skills & Categories
\`\`\`javascript
const skillCategories = ${skillCategories};
\`\`\`

## 5. Services Provided
\`\`\`javascript
const services = ${services};
\`\`\`

## 6. ROI & Benefits
\`\`\`javascript
const benefits = ${benefits};
\`\`\`

## 7. Frequently Asked Questions (faqs)
\`\`\`javascript
const faqs = ${faqs};
\`\`\`

## 8. Marquee Items (Tech Stack)
\`\`\`javascript
const MARQUEE_ITEMS = ${MARQUEE_ITEMS};
\`\`\`

## 9. Marquee Items (Clients)
\`\`\`javascript
const CLIENT_ITEMS = ${CLIENT_ITEMS};
\`\`\`

## 10. Navigation Menu Items
\`\`\`javascript
const navItems = ${navItems};
\`\`\`
`;

fs.writeFileSync('portfolio-full-content.md', fullDoc, 'utf8');
