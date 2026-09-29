const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// Find the allProjects array definition
const startIdx = code.indexOf('const allProjects = [');
const endIdxStr = "    }\n  ];";
const endIdx = code.indexOf(endIdxStr, startIdx) + endIdxStr.length;

if (startIdx !== -1 && endIdx !== -1) {
    const allProjectsStr = code.substring(startIdx, endIdx);
    
    // Remove it from inside function Projects()
    code = code.replace(allProjectsStr, '');
    
    // Insert it right before function Projects()
    const funcIdx = code.indexOf('function Projects() {');
    code = code.substring(0, funcIdx) + allProjectsStr + '\n\n' + code.substring(funcIdx);
    
    fs.writeFileSync('src/App.jsx', code, 'utf8');
    console.log("Successfully moved allProjects.");
} else {
    console.log("Could not find allProjects bounds.");
}
