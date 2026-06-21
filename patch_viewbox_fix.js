import fs from 'fs';

// Patch BrandLogo.jsx
let brandLogo = fs.readFileSync('src/components/BrandLogo.jsx', 'utf8');
brandLogo = brandLogo.replace(/viewBox="380 318 320 320"/, 'viewBox="360 300 360 360"');
fs.writeFileSync('src/components/BrandLogo.jsx', brandLogo);

// Patch ScienceOfAstrology.jsx
let sciencePage = fs.readFileSync('src/pages/ScienceOfAstrology.jsx', 'utf8');
sciencePage = sciencePage.replace(/viewBox="380 318 320 320"/, 'viewBox="360 300 360 360"');
fs.writeFileSync('src/pages/ScienceOfAstrology.jsx', sciencePage);

console.log('viewBox correctly patched');
