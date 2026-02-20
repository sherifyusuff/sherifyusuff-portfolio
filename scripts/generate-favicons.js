import sharp from 'sharp';
import { join } from 'path';

const publicDir = join(process.cwd(), 'public');

const lightSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#bg)"/>
  <text x="16" y="22" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-weight="700" font-size="15" fill="#ffffff">SY</text>
</svg>`;

const darkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#22d3ee;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#bg2)"/>
  <text x="16" y="22" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-weight="700" font-size="15" fill="#ffffff">SY</text>
</svg>`;

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0ea5e9;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="url(#bg3)"/>
  <text x="90" y="118" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-weight="700" font-size="80" fill="#ffffff">SY</text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(lightSvg))
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'icon-light-32x32.png'));
  console.log('Created icon-light-32x32.png');

  await sharp(Buffer.from(darkSvg))
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'icon-dark-32x32.png'));
  console.log('Created icon-dark-32x32.png');

  await sharp(Buffer.from(appleSvg))
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-icon.png'));
  console.log('Created apple-icon.png');

  await sharp(Buffer.from(lightSvg))
    .resize(32, 32)
    .png()
    .toFile(join(publicDir, 'favicon.png'));
  console.log('Created favicon.png');

  console.log('All favicons generated!');
}

generate().catch(console.error);
