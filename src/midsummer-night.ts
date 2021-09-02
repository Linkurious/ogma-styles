import { Theme } from './types';

const colors = {
  red: '#df162e',
  emerald: '#3fa291',
  lightgrey: '#e4ebea',
  darkblue: '#074f67',
  selected: 'blue',
  white: 'white',
  background: 'white',
  textBackground: '#e4f2ef',
  haloStroke: '#d4e0de',
  outline: 'rgba(118, 118, 118, 0.36)',

  // color swatches
  darkorange: '#d55e00',
  orange: '#e69f00',
  yellow: '#f0e441',
  lightgreen: '#019D73',
  sky: '#57b4e9',
  blue: '#0072b2',
  purple: '#c2739f'
};

const textDefault = {
  font: 'Helvetica',
  color: '#23231a',
  backgroundColor: colors.textBackground,
  size: 16,
  margin: 10,
  padding: 6,
  scale: 0.1,
  content: ''
};

const secondaryTextDefault = {
  ...textDefault,
  backgroundColor: colors.textBackground,
  color: '#23231a',
  margin: 8,
  size: 12
};

const badgeDefault = {
  color: colors.darkblue,
  minVisibleSize: 12,
  stroke: {
    color: colors.background,
    width: 2
  },
  text: {
    ...textDefault,
    scale: 0.5,
    margin: 0,
    color: colors.white,
    content: ''
  }
};

const pulseDefault = {
  duration: 1000,
  endRatio: 4,
  endColor: 'rgba(245, 235, 147, 0)',
  interval: 8000,
  startColor: 'rgba(239, 168, 75, 0.40)',
  width: 20
};

export const midsummernight: Theme = {
  nodeAttributes: {
    color: colors.emerald,
    badges: {
      topLeft: badgeDefault,
      topRight: badgeDefault,
      bottomLeft: badgeDefault,
      bottomRight: badgeDefault
    },
    halo: {
      color: colors.lightgrey,
      strokeColor: colors.haloStroke,
      strokeWidth: 2,
      width: 0
    },
    icon: {
      color: '#23231a',
      scale: 0.7
    },
    innerStroke: {
      color: colors.white,
      minVisibleSize: 12,
      width: 2
    },
    outerStroke: {
      color: colors.darkblue,
      minVisibleSize: 0,
      width: 5
    },
    outline: {
      color: colors.outline
    },
    opacity: 1,
    shape: 'circle',
    pulse: pulseDefault,
    radius: 5,
    text: {
      ...textDefault,
      secondary: secondaryTextDefault,
      tip: false
    }
  },
  edgeAttributes: {
    color: '#23231a',
    halo: {
      color: colors.lightgrey,
      width: 8
    },
    outline: {
      color: colors.outline
    },
    stroke: {
      color: colors.emerald,
      minVisibleSize: 0,
      width: 2
    },
    pulse: pulseDefault,
    text: {
      ...textDefault,
      secondary: secondaryTextDefault
    }
  },
  selectedEdgeAttributes: {
    color: colors.selected
  },
  selectedNodeAttributes: {
    outerStroke: {
      color: colors.red
    }
  },

  // export colors
  colors
};
