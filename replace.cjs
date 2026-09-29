const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// The Projects Swiper is the one that has "projects-slider" class.
// We find the breakpoints block right before it.
let parts = content.split('className="projects-slider"');
if(parts.length > 1) {
    let before = parts[0];
    before = before.replace(
        '1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false }',
        '1024: { slidesPerView: 2, grid: { rows: 2, fill: \\"row\\" }, spaceBetween: 30, centeredSlides: false }'
    );
    content = before + 'className="projects-slider"' + parts[1];
    fs.writeFileSync('src/App.jsx', content, 'utf8');
}
