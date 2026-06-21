import fs from 'fs';

// Patch BrandLogo.jsx
let brandLogo = fs.readFileSync('src/components/BrandLogo.jsx', 'utf8');
brandLogo = brandLogo.replace(/viewBox="0 0 1080 1080"/, 'viewBox="380 318 320 320"');
fs.writeFileSync('src/components/BrandLogo.jsx', brandLogo);

// Patch ScienceOfAstrology.jsx
let sciencePage = fs.readFileSync('src/pages/ScienceOfAstrology.jsx', 'utf8');
sciencePage = sciencePage.replace(/viewBox="0 0 1080 1080"/, 'viewBox="380 318 320 320"');
fs.writeFileSync('src/pages/ScienceOfAstrology.jsx', sciencePage);

console.log('viewBox patched');
