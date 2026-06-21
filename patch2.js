import fs from 'fs';

const innerSvgContent = fs.readFileSync('svg_inner.jsx', 'utf8');
const lines = innerSvgContent.split('\n');

// Take only the logo graphic elements (lines 0 through 15) and close the groups
const filteredSvg = lines.slice(0, 16).join('\n') + '\n</g>\n</g>';

// Patch BrandLogo.jsx
let brandLogo = fs.readFileSync('src/components/BrandLogo.jsx', 'utf8');
brandLogo = brandLogo.replace(/<svg[\s\S]*?<\/svg>/, 
`<svg 
        viewBox="0 0 1080 1080" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        ${filteredSvg}
      </svg>`);
fs.writeFileSync('src/components/BrandLogo.jsx', brandLogo);

// Patch ScienceOfAstrology.jsx
let sciencePage = fs.readFileSync('src/pages/ScienceOfAstrology.jsx', 'utf8');
sciencePage = sciencePage.replace(/<svg viewBox="0 0 1080 1080"[\s\S]*?<\/svg>/,
`<svg viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-chakra-cyan" style={{ filter: 'drop-shadow(0 0 20px rgba(37,169,186,0.6)) brightness(1.5)' }}>
            ${filteredSvg}
          </svg>`);
fs.writeFileSync('src/pages/ScienceOfAstrology.jsx', sciencePage);

console.log('patched without text');
