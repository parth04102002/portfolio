const fs = require('fs');
const marked = require('marked');

const md = fs.readFileSync('portfolio-full-content.md', 'utf8');
const htmlContent = marked.parse(md);

const fullHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Portfolio Full Content</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 40px auto; padding: 20px; color: #333; }
        h1, h2, h3 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; margin-top: 1.5em; }
        pre { background-color: #f6f8fa; padding: 16px; overflow: auto; border-radius: 6px; font-size: 14px; }
        code { font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace; }
        ul { padding-left: 2em; }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`;

fs.writeFileSync('portfolio-full-content.html', fullHtml, 'utf8');
