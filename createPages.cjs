const fs = require('fs');

const projects = [
  {
    id: 'dwa24',
    title: 'DWA24 Medical Store',
    category: 'Healthcare / eCommerce',
    badge: 'Medical Store',
    description: 'An online medical store developed using WordPress and WooCommerce. Features include product management, secure payments, and a user-friendly interface.',
    cleanUrl: 'dwa24.com'
  },
  {
    id: 'svaayush',
    title: 'Svaayush Healthcare',
    category: 'Healthcare / Corporate',
    badge: 'Healthcare',
    description: 'Corporate website for a healthcare provider, offering detailed information about services, specialists, and patient resources with easy appointment booking.',
    cleanUrl: 'svaayush.in'
  },
  {
    id: 'amigo',
    title: 'Amigo Supermarket',
    category: 'Retail / eCommerce',
    badge: 'Supermarket',
    description: 'Full-featured eCommerce platform for a supermarket chain. Includes inventory sync, delivery tracking, and a loyalty points system.',
    cleanUrl: 'amigoonline.in'
  },
  {
    id: 'mytvs',
    title: 'MyTVS (KGN Auto)',
    category: 'Automotive / Services',
    badge: 'Auto Services',
    description: 'Service booking and management platform for automotive repair centers. Includes appointment scheduling, service history tracking, and automated reminders.',
    cleanUrl: 'kgnauto.in'
  },
  {
    id: 'gofuelly',
    title: 'GoFuelly',
    category: 'Energy / Logistics',
    badge: 'Fuel Delivery',
    description: 'On-demand fuel delivery platform. Features real-time truck tracking, automated dispatching, and secure payment processing for commercial and retail customers.',
    cleanUrl: 'gofuelly.com'
  }
];

if (!fs.existsSync('public/temp-pages')) {
    fs.mkdirSync('public/temp-pages');
}

projects.forEach(proj => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${proj.title} - Project Details</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #08090d; color: #fff; margin: 0; padding: 40px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; background: #11131b; padding: 40px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); }
        h1 { margin-top: 0; color: #41d9ff; }
        .badge { display: inline-block; background: rgba(157,124,255,0.2); color: #9d7cff; padding: 4px 12px; border-radius: 20px; font-size: 14px; margin-bottom: 20px; }
        .category { color: #9da2b2; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
        p { font-size: 18px; color: #ccc; }
        a { color: #41d9ff; text-decoration: none; display: inline-block; margin-top: 20px; border: 1px solid #41d9ff; padding: 10px 20px; border-radius: 6px; }
        a:hover { background: #41d9ff; color: #000; }
        .back { margin-top: 40px; display: block; color: #9da2b2; border: none; padding: 0; }
        .back:hover { background: none; color: #fff; text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="category">${proj.category}</div>
        <h1>${proj.title}</h1>
        <div class="badge">${proj.badge}</div>
        <p>${proj.description}</p>
        <a href="https://${proj.cleanUrl}" target="_blank">Visit ${proj.cleanUrl}</a>
        <br>
        <a href="/" class="back">← Back to Portfolio</a>
    </div>
</body>
</html>`;
    
    fs.writeFileSync(`public/temp-pages/${proj.id}.html`, html, 'utf8');
});
console.log("Temporary project pages created in public/temp-pages/");
