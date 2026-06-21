const fs = require('fs');
let content = fs.readFileSync('LOGO (15).svg', 'utf8');
let inner = content.match(/<defs>[\s\S]*<\/g>/)[0];
inner = inner.replace(/clip-path/g, 'clipPath')
             .replace(/inkscape:groupmode="[^"]*"/g, '')
             .replace(/inkscape:label="[^"]*"/g, '');
fs.writeFileSync('svg_inner.jsx', inner);
console.log('done');
