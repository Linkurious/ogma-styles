# Ogma styles [![](https://data.jsdelivr.com/v1/package/npm/@linkurious/ogma-styles/badge)](https://www.jsdelivr.com/package/npm/@linkurious/ogma-styles)

<!-- Here goes nice image of a style -->

This is a repositiory of style presets for [Ogma graph visualisation library](https://ogma.linkurio.us). You can use them in your prototypes and applications.

[Demo](https://doc.linkurio.us/ogma/latest/examples/set-theme.html)

## How to use

### Install

```
npm install -S @linkurious/ogma-styles
# or
yarn add @linkurious/ogma-styles
```

Alternatively, you can use the CDN-hosted version

```html
<script src="https://cdn.jsdelivr.net/npm/@linkurious/ogma-styles@0.0.4/dist/index.min.js"></script>
...
<script>
  // themes are globally exposed as `ogmaStyles`
  const themes = ogmaStyles;
</script>
```

### Usage

```ts
import Ogma from '@linkurious/ogma';
import { midsummerNight as theme } from '@linkurious/ogma-styles'

const ogma = new Ogma({ ... });
ogma.styles.setTheme(theme);
```

## "Midsummer night" theme

![Midsummer night](https://user-images.githubusercontent.com/26884/131863840-5d462e5d-3bc4-4bc2-9eea-50150d40ffa5.png)

```ts
import Ogma from '@linkurious/ogma';
import { midsummerNight as theme } from '@linkurious/ogma-styles'

const ogma = new Ogma({
  ...
});

ogma.styles.setTheme(theme);

// you can also use the theme's colors for your UI
console.log(theme.colors.red); // '#df162e'
```

### Additional variables

`midsummer-night` exports several constants for you to apply when you need conditional styling.

```ts
  edgeOutlineWidth: 2,
  edgeHaloWidth: 8,
  nodeHaloWidth: 20,

  // you can also use different colors for the nodes and edges
  colors: {}
```

### Color palette

![Midsummer night color palette](https://user-images.githubusercontent.com/26884/131863382-9d004b26-2911-4030-9b12-7ea8a33f4b4d.png)

### Compose your own style

You can follow the examples in `src` to create your own theme.
The repositiory uses TypeScript for checking the types of attributes, so you will not get lost. You can always try out your theme in [Ogma playground](https://doc.linkurio.us/ogma/latest/playground/index.html#H4sIAEXkMGEAA31TTW+bQBD9K1N6sJEcSNRLRXCkqo2qXppK9aUqPazZATZddtHu2I5l+b93FjCt3SQXGN68+XozHCISax9lP9lQpDHKImUkPiUNtTpaRKU1hIYYzt98evi4+vHtHoLrrjD5+AbIGxSyt9hukQSUjXAeaVlEG6qu3hcRpOwfGVqZ30D7DtlN+ERp6T0zHGoGPO01+gaRGGocVhOW9LShYDpVzNdW7k+1pdqCkhxRO9E1V6F5oQw6DstTdp54vnSqI/CuZO4w72PInaeDZywypuZqw6Ssx1bh7jsJYqHMRuvj4lK3R3+mmmo76wge6lZA5WwLM8vm7DaIURjmeYKAwBIM7nre/BCqT71nMLuYZlaYY9xnSFMgt4e93TigBluEBh0WJmRMRtV4DavgGtIaK/EDkVPrDaHPoAdDNW1DJYeSswMcF+GJsj4nD7BHjSWh/HqZ69x9/3x0Y7fc40vBo/f/2GnmfrYaWQfeQuKEkbadH/rBmHhzvejbZvPdNRzjkDNhacy8huVdL3VQ5HNQdF7H//jn8UTQghUln1TWlTh/gRQuIdG25C6GbHF8+/qB/D3jsxN5e7HeYSdkuwyueWKAtSWy7elLY0Un26m6mT466xUpazLgP9pqFq6HW+FqxeBACvJW2u4yaJSUaBhkaZ/p+9ciOi1yJdZfwm1H2c3xD/hvzcQwBAAA)
If you want to share it, send us a pull request and we will check and publish it.

## "Afternoon nap" theme

![Afternoon nap](https://user-images.githubusercontent.com/26884/132239364-aceebad2-466d-44a8-9be2-a21656d06793.png)
![Afternoon nap with badges](https://user-images.githubusercontent.com/26884/132239390-7abf79ef-f9ad-4c8d-bf1a-3129b4739a33.png)

```ts
import Ogma from '@linkurious/ogma';
import { afternoonNap as theme } from '@linkurious/ogma-styles'

const ogma = new Ogma({
  ...
});

ogma.styles.setTheme(theme);

// you can also use the theme's constants for your UI
console.log(theme.colors.nodeHaloWidth); // 40
```

## "Morning breeze" theme

![Midsummer night](https://user-images.githubusercontent.com/26884/132235154-c09a9a00-8346-469d-a226-0a9e063856c5.png)
![Midsummer night with halos](https://user-images.githubusercontent.com/26884/132235200-b680e329-c238-4e2c-b099-44a78e1f7857.png)

```ts
import Ogma from '@linkurious/ogma';
import { morningBreeze as theme } from '@linkurious/ogma-styles'

const ogma = new Ogma({
  ...
});

ogma.styles.setTheme(theme);

// you can also use the theme's constants for your UI
console.log(theme.colors.nodeHaloWidth); // 40
```

## Color Schemes

The package includes a collection of carefully selected color palettes for data visualization, including Paul Tol's scientifically designed color schemes and custom categorical palettes.

### Available Color Schemes

#### **categorical** - 9 distinct colors for basic categorical data
<svg width="360" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#44AA99"/>
  <rect x="40" y="0" width="40" height="30" fill="#FFCB2F"/>
  <rect x="80" y="0" width="40" height="30" fill="#FF7523"/>
  <rect x="120" y="0" width="40" height="30" fill="#FF9AAC"/>
  <rect x="160" y="0" width="40" height="30" fill="#80E5CA"/>
  <rect x="200" y="0" width="40" height="30" fill="#0099FF"/>
  <rect x="240" y="0" width="40" height="30" fill="#1450DD"/>
  <rect x="280" y="0" width="40" height="30" fill="#9386CE"/>
  <rect x="320" y="0" width="40" height="30" fill="#617083"/>
</svg>

#### **categorical16** - 16 colors for larger categorical datasets
<svg width="640" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#44AA99"/>
  <rect x="40" y="0" width="40" height="30" fill="#FFCB2F"/>
  <rect x="80" y="0" width="40" height="30" fill="#FF7523"/>
  <rect x="120" y="0" width="40" height="30" fill="#FF9AAC"/>
  <rect x="160" y="0" width="40" height="30" fill="#80E5CA"/>
  <rect x="200" y="0" width="40" height="30" fill="#0099FF"/>
  <rect x="240" y="0" width="40" height="30" fill="#1450DD"/>
  <rect x="280" y="0" width="40" height="30" fill="#9386CE"/>
  <rect x="320" y="0" width="40" height="30" fill="#617083"/>
  <rect x="360" y="0" width="40" height="30" fill="#E74C3C"/>
  <rect x="400" y="0" width="40" height="30" fill="#2ECC71"/>
  <rect x="440" y="0" width="40" height="30" fill="#F39C12"/>
  <rect x="480" y="0" width="40" height="30" fill="#8E44AD"/>
  <rect x="520" y="0" width="40" height="30" fill="#34495E"/>
  <rect x="560" y="0" width="40" height="30" fill="#16A085"/>
  <rect x="600" y="0" width="40" height="30" fill="#D35400"/>
</svg>

#### **categorical24** - 24 colors for extensive categorical data
<svg width="600" height="60">
  <rect x="0" y="0" width="25" height="30" fill="#44AA99"/>
  <rect x="25" y="0" width="25" height="30" fill="#FFCB2F"/>
  <rect x="50" y="0" width="25" height="30" fill="#FF7523"/>
  <rect x="75" y="0" width="25" height="30" fill="#FF9AAC"/>
  <rect x="100" y="0" width="25" height="30" fill="#80E5CA"/>
  <rect x="125" y="0" width="25" height="30" fill="#0099FF"/>
  <rect x="150" y="0" width="25" height="30" fill="#1450DD"/>
  <rect x="175" y="0" width="25" height="30" fill="#9386CE"/>
  <rect x="200" y="0" width="25" height="30" fill="#617083"/>
  <rect x="225" y="0" width="25" height="30" fill="#E74C3C"/>
  <rect x="250" y="0" width="25" height="30" fill="#2ECC71"/>
  <rect x="275" y="0" width="25" height="30" fill="#F39C12"/>
  <rect x="300" y="0" width="25" height="30" fill="#8E44AD"/>
  <rect x="325" y="0" width="25" height="30" fill="#34495E"/>
  <rect x="350" y="0" width="25" height="30" fill="#16A085"/>
  <rect x="375" y="0" width="25" height="30" fill="#D35400"/>
  <rect x="400" y="0" width="25" height="30" fill="#27AE60"/>
  <rect x="425" y="0" width="25" height="30" fill="#E67E22"/>
  <rect x="450" y="0" width="25" height="30" fill="#9B59B6"/>
  <rect x="475" y="0" width="25" height="30" fill="#3498DB"/>
  <rect x="500" y="0" width="25" height="30" fill="#F1C40F"/>
  <rect x="525" y="0" width="25" height="30" fill="#E91E63"/>
  <rect x="0" y="30" width="25" height="30" fill="#00BCD4"/>
  <rect x="25" y="30" width="25" height="30" fill="#795548"/>
</svg>

#### **contrastLight** - Paul Tol's bright color scheme (7 colors)
<svg width="280" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#4477AA"/>
  <rect x="40" y="0" width="40" height="30" fill="#66CCEE"/>
  <rect x="80" y="0" width="40" height="30" fill="#228833"/>
  <rect x="120" y="0" width="40" height="30" fill="#CCBB44"/>
  <rect x="160" y="0" width="40" height="30" fill="#EE6677"/>
  <rect x="200" y="0" width="40" height="30" fill="#AA3377"/>
  <rect x="240" y="0" width="40" height="30" fill="#BBBBBB"/>
</svg>

#### **highContrast** - Paul Tol's high-contrast scheme (4 colors)
<svg width="160" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#DDAA33"/>
  <rect x="40" y="0" width="40" height="30" fill="#BB5566"/>
  <rect x="80" y="0" width="40" height="30" fill="#004488"/>
  <rect x="120" y="0" width="40" height="30" fill="#000000"/>
</svg>

#### **vibrant** - Paul Tol's vibrant color scheme (7 colors)
<svg width="280" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#0077BB"/>
  <rect x="40" y="0" width="40" height="30" fill="#33BBEE"/>
  <rect x="80" y="0" width="40" height="30" fill="#009988"/>
  <rect x="120" y="0" width="40" height="30" fill="#EE7733"/>
  <rect x="160" y="0" width="40" height="30" fill="#CC3311"/>
  <rect x="200" y="0" width="40" height="30" fill="#EE3377"/>
  <rect x="240" y="0" width="40" height="30" fill="#BBBBBB"/>
</svg>

#### **muted** - Paul Tol's muted color scheme (9 colors)
<svg width="360" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#332288"/>
  <rect x="40" y="0" width="40" height="30" fill="#88CCEE"/>
  <rect x="80" y="0" width="40" height="30" fill="#44AA99"/>
  <rect x="120" y="0" width="40" height="30" fill="#117733"/>
  <rect x="160" y="0" width="40" height="30" fill="#999933"/>
  <rect x="200" y="0" width="40" height="30" fill="#DDCC77"/>
  <rect x="240" y="0" width="40" height="30" fill="#CC6677"/>
  <rect x="280" y="0" width="40" height="30" fill="#882255"/>
  <rect x="320" y="0" width="40" height="30" fill="#AA4499"/>
</svg>

#### **mediumContrast** - Paul Tol's medium contrast scheme (7 colors)
<svg width="280" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#EECC66"/>
  <rect x="40" y="0" width="40" height="30" fill="#EE99AA"/>
  <rect x="80" y="0" width="40" height="30" fill="#6699CC"/>
  <rect x="120" y="0" width="40" height="30" fill="#997700"/>
  <rect x="160" y="0" width="40" height="30" fill="#994455"/>
  <rect x="200" y="0" width="40" height="30" fill="#004488"/>
  <rect x="240" y="0" width="40" height="30" fill="#000000"/>
</svg>

#### **pale** - Paul Tol's pale color scheme (6 colors)
<svg width="240" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#BBCCEE"/>
  <rect x="40" y="0" width="40" height="30" fill="#CCEEFF"/>
  <rect x="80" y="0" width="40" height="30" fill="#CCDDAA"/>
  <rect x="120" y="0" width="40" height="30" fill="#EEEEBB"/>
  <rect x="160" y="0" width="40" height="30" fill="#FFCCCC"/>
  <rect x="200" y="0" width="40" height="30" fill="#DDDDDD"/>
</svg>

#### **wong** - Wong color scheme (8 colors)
<svg width="320" height="30">
  <rect x="0" y="0" width="40" height="30" fill="#000000"/>
  <rect x="40" y="0" width="40" height="30" fill="#E69F00"/>
  <rect x="80" y="0" width="40" height="30" fill="#56B4E9"/>
  <rect x="120" y="0" width="40" height="30" fill="#009E73"/>
  <rect x="160" y="0" width="40" height="30" fill="#F0E442"/>
  <rect x="200" y="0" width="40" height="30" fill="#0072B2"/>
  <rect x="240" y="0" width="40" height="30" fill="#D55E00"/>
  <rect x="280" y="0" width="40" height="30" fill="#CC79A7"/>
</svg>

### Import and Usage

```ts
import {
  categorical,
  categorical16,
  categorical24,
  contrastLight,
  vibrant,
  muted
} from '@linkurious/ogma-styles/colors';

// Use with Ogma node styling
ogma.styles.addNodeStyle({
  color: (node, index) => categorical[index % categorical.length]
});

// Use for custom color mapping
const nodeColors = categorical16.slice(0, myCategories.length);
ogma.styles.addNodeStyle({
  color: node => nodeColors[node.getData('category') % nodeColors.length]
});

// Access individual colors
console.log(vibrant[0]); // '#0077BB'
console.log(categorical24.length); // 24
```

### Color Scheme Characteristics

- **Categorical schemes** are optimized for maximum visual distinction
- **Paul Tol schemes** are scientifically designed for accessibility and perceptual uniformity
- **Wong scheme** is colorblind-friendly
- All colors are provided as hex strings (e.g., '#44AA99')

## Copyright

Linkurious SAS &copy; 2021
