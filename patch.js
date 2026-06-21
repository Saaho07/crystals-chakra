import fs from 'fs';

const innerSvg = fs.readFileSync('svg_inner.jsx', 'utf8');

// Patch BrandLogo.jsx
let brandLogo = fs.readFileSync('src/components/BrandLogo.jsx', 'utf8');
brandLogo = brandLogo.replace(/<svg\s+viewBox="0 0 100 100"[\s\S]*?<\/svg>/, 
`<svg 
        viewBox="0 0 1080 1080" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        ${innerSvg}
      </svg>`);
fs.writeFileSync('src/components/BrandLogo.jsx', brandLogo);

// Patch ScienceOfAstrology.jsx
let sciencePage = fs.readFileSync('src/pages/ScienceOfAstrology.jsx', 'utf8');
// The inner SVG for Science page should have the bright colors or just the original colors but higher opacity.
// The user asked to "increase the brightness of it on the science page".
// Let's modify the opacity of the wrapper. Currently it's 0.18. Let's make it 0.3.
sciencePage = sciencePage.replace(/opacity:\s*0\.18,/, 'opacity: 0.3,');
sciencePage = sciencePage.replace(/<svg viewBox="0 0 100 100"[\s\S]*?<\/svg>/,
`<svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-chakra-cyan" style={{ filter: 'drop-shadow(0 0 20px rgba(37,169,186,0.6)) brightness(1.5)' }}>
            ${innerSvg}
          </svg>`);
fs.writeFileSync('src/pages/ScienceOfAstrology.jsx', sciencePage);

console.log('patched');
