# Crystals Chakra

A modern web application for Vedic astrology readings, offering users a free "Cosmic Snapshot" preview feature based on their Zodiac and Numerology Life Path.

## About This Project
Built as a freelance client project for a Vedic astrology consultancy. 
Solo-developed end to end — UI/UX, architecture, and the client-side 
zodiac/numerology calculation engine (`src/cosmicEngine.js`).

## Key Features
- **Cosmic Snapshot Calculator**: Real-time client-side calculation of Zodiac signs (handling edge cases like Capricorn wraparounds) and Numerology Life Paths (preserving Master Numbers 11, 22, 33).
- **Service Catalog**: Browse in-depth astrological services like complete Kundli readings and Bhrigu Patrikas.
- **WhatsApp Integration**: Seamless direct-to-whatsapp ordering flow for personalized readings.
- **Science & Credibility**: Dedicated section explaining the mathematical and psychological foundations of Vedic astrology.

## Tech Stack
- **React 18**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## Building for Production
To generate a production-ready build:
```bash
npm run build
```
The output will be placed in the `dist` directory.

## Project Structure Notes
- The core logic for Zodiac and Numerology calculations can be found in `src/cosmicEngine.js`. This file acts as the single source of truth for the astrological data and deterministic date math.
