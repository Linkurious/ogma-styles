# Ogma styles [![](https://data.jsdelivr.com/v1/package/npm/@linkurious/ogma-styles/badge)](https://www.jsdelivr.com/package/npm/@linkurious/ogma-styles)

<!-- Here goes nice image of a style -->

This is a repositiory of style presets for [Ogma graph visualisation library](https://ogma.linkurio.us). You can use them in your prototypes and applications.

## How to use

```ts
import Ogma from '@linkurious/ogma';
import { theme } from '@linkurious/ogma-styles'

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

## Copyright

Linkurious SAS &copy; 2021
