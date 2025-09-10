/* eslint-disable no-console */
import { Color } from '@linkurious/ogma';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as palettes from '../src/colors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate SVG for a color palette
function generatePaletteSVG(name, colors) {
  const colorCount = colors.length;
  const rectWidth = 40;
  const rectHeight = 30;
  const maxColsPerRow = 12;

  // Calculate layout
  const colsPerRow = Math.min(colorCount, maxColsPerRow);
  const rows = Math.ceil(colorCount / colsPerRow);
  const svgWidth = colsPerRow * rectWidth;
  const svgHeight = rows * rectHeight;

  // Build SVG content
  let svgContent = `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">\n`;

  colors.forEach((color, index) => {
    const row = Math.floor(index / colsPerRow);
    const col = index % colsPerRow;
    const x = col * rectWidth;
    const y = row * rectHeight;

    svgContent += `  <rect x="${x}" y="${y}" width="${rectWidth}" height="${rectHeight}" fill="${color}"/>\n`;
  });

  svgContent += '</svg>';

  return svgContent;
}

// Generate description for palette
function getPaletteDescription(name, colorCount) {
  const descriptions = {
    categorical: `${colorCount} distinct colors for basic categorical data`,
    categorical16: `16 colors for larger categorical datasets`,
    categorical24: `24 colors for extensive categorical data`,
    contrastLight: `Paul Tol's bright color scheme (${colorCount} colors)`,
    highContrast: `Paul Tol's high-contrast scheme (${colorCount} colors)`,
    vibrant: `Paul Tol's vibrant color scheme (${colorCount} colors)`,
    muted: `Paul Tol's muted color scheme (${colorCount} colors)`,
    mediumContrast: `Paul Tol's medium contrast scheme (${colorCount} colors)`,
    pale: `Paul Tol's pale color scheme (${colorCount} colors)`,
    wong: `Wong color scheme (${colorCount} colors)`
  };

  return descriptions[name] || `${colorCount} colors`;
}

// Main function
function main() {
  console.log('🎨 Generating color palette previews...\n');

  // Create assets directory
  const assetsDir = join(__dirname, '../assets');
  mkdirSync(assetsDir, { recursive: true });

  // Parse colors
  console.log(`Found ${Object.keys(palettes).length} color palettes:\n`);

  // Generate SVGs
  const generatedFiles: {
    name: string;
    filename: string;
    colors: Color[];
    description: string;
  }[] = [];

  Object.entries(palettes).forEach(([name, colors]) => {
    const svg = generatePaletteSVG(name, colors);
    const filename = `${name}-palette.svg`;
    const filepath = join(assetsDir, filename);

    writeFileSync(filepath, svg);

    console.log(`✅ ${name}: ${colors.length} colors → assets/${filename}`);

    generatedFiles.push({
      name,
      filename,
      colors,
      description: getPaletteDescription(name, colors.length)
    });
  });
}

main();
