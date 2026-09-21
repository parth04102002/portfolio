const fs = require('fs');
const path = require('path');

const THEMES = {
  'neon': {
    primaryHex: '#8b5cf6', // Violet
    primaryRgb: '139, 92, 246',
    primaryLightHex: '#a855f7', // Lighter Violet
    secondaryHex: '#ec4899', // Fuchsia
    secondaryRgb: '236, 72, 153',
  },
  'luxury': {
    primaryHex: '#10b981', // Emerald
    primaryRgb: '16, 185, 129',
    primaryLightHex: '#34d399', // Lighter Emerald
    secondaryHex: '#f59e0b', // Amber/Gold
    secondaryRgb: '245, 158, 11',
  },
  'brutalism': {
    primaryHex: '#ef4444', // Crimson
    primaryRgb: '239, 68, 68',
    primaryLightHex: '#f87171', // Lighter Red
    secondaryHex: '#f8fafc', // White/Silver
    secondaryRgb: '248, 250, 252',
  },
  'original': {
    primaryHex: '#06b6d4',
    primaryRgb: '6, 182, 212',
    primaryLightHex: '#38bdf8',
    secondaryHex: '#3b82f6',
    secondaryRgb: '59, 130, 246',
  }
};

const themeName = process.argv[2];
if (!THEMES[themeName]) {
  console.error('Invalid theme. Choose neon, luxury, brutalism, or original.');
  process.exit(1);
}

const theme = THEMES[themeName];
const orig = THEMES['original'];

const filesToProcess = [
  { src: 'scratch/App.jsx.original', dest: 'src/App.jsx' },
  { src: 'scratch/index.css.original', dest: 'src/index.css' }
];

filesToProcess.forEach(file => {
  let content = fs.readFileSync(path.join(process.cwd(), file.src), 'utf8');
  
  // Replace Primary Hex (case-insensitive)
  content = content.replace(new RegExp(orig.primaryHex, 'gi'), theme.primaryHex);
  // Replace Primary RGB
  content = content.replace(new RegExp(orig.primaryRgb, 'g'), theme.primaryRgb);
  
  // Replace Primary Light Hex
  content = content.replace(new RegExp(orig.primaryLightHex, 'gi'), theme.primaryLightHex);
  
  // Replace Secondary Hex
  content = content.replace(new RegExp(orig.secondaryHex, 'gi'), theme.secondaryHex);
  // Replace Secondary RGB
  content = content.replace(new RegExp(orig.secondaryRgb, 'g'), theme.secondaryRgb);

  fs.writeFileSync(path.join(process.cwd(), file.dest), content, 'utf8');
  console.log(`Applied theme ${themeName} to ${file.dest}`);
});
