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
import { midsummernight } from '@linkurious/ogma-styles'

const ogma = new Ogma({
  ...
});

ogma.styles.setTheme(midsummernight);

// you can also use the theme's colors for your UI
console.log(midsummernight.colors.red); // '#df162e'
```

### Color palette

![Midsummer night color palette](https://user-images.githubusercontent.com/26884/131863382-9d004b26-2911-4030-9b12-7ea8a33f4b4d.png)

### Compose your own style

You can follow the examples in `src` to create your own theme.
The repositiory uses TypeScript for checking the types of attributes, so you will not get lost. You can always try out your theme in [Ogma playground](https://doc.linkurio.us/ogma/latest/playground/index.html#H4sIAEXkMGEAA31TTW+bQBD9K1N6sJEcSNRLRXCkqo2qXppK9aUqPazZATZddtHu2I5l+b93FjCt3SQXGN68+XozHCISax9lP9lQpDHKImUkPiUNtTpaRKU1hIYYzt98evi4+vHtHoLrrjD5+AbIGxSyt9hukQSUjXAeaVlEG6qu3hcRpOwfGVqZ30D7DtlN+ERp6T0zHGoGPO01+gaRGGocVhOW9LShYDpVzNdW7k+1pdqCkhxRO9E1V6F5oQw6DstTdp54vnSqI/CuZO4w72PInaeDZywypuZqw6Ssx1bh7jsJYqHMRuvj4lK3R3+mmmo76wge6lZA5WwLM8vm7DaIURjmeYKAwBIM7nre/BCqT71nMLuYZlaYY9xnSFMgt4e93TigBluEBh0WJmRMRtV4DavgGtIaK/EDkVPrDaHPoAdDNW1DJYeSswMcF+GJsj4nD7BHjSWh/HqZ69x9/3x0Y7fc40vBo/f/2GnmfrYaWQfeQuKEkbadH/rBmHhzvejbZvPdNRzjkDNhacy8huVdL3VQ5HNQdF7H//jn8UTQghUln1TWlTh/gRQuIdG25C6GbHF8+/qB/D3jsxN5e7HeYSdkuwyueWKAtSWy7elLY0Un26m6mT466xUpazLgP9pqFq6HW+FqxeBACvJW2u4yaJSUaBhkaZ/p+9ciOi1yJdZfwm1H2c3xD/hvzcQwBAAA)
If you want to share it, send us a pull request and we will check and publish it.

## Copyright

Linkurious SAS &copy; 2021
