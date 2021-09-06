import { Theme } from './types';

const colors = {
  nodeColor: '#43a2ca',
  edgeColor: '#23231a',
  haloColor: '#c5f5f0',
  haloStroke: '#b6e5e0',
  outerStroke: '#267495',
  innerStroke: '#ffffff',
  textColor: '#23231a',
  secondaryTextColor: '#505050',
  textBackground: '#f4f4f4',
  pulseStart: 'rgba(8, 104, 172, 0.10)',
  pulseEnd: 'rgba(8, 104, 72, 0.0)',
  outline: 'rgba(188, 188, 188, 0.50)',
  badge: '#3FA296',
  badgeStrokeColor: '#ffffff',
  badgeTextColor: '#ffffff',
  nodeIcon: '#23231a',
  selected: '#bb3249',
  edgeStroke: '#c5f5f0',
  edgeHaloColor: '#EAEAEA',
  edgeOutline: 'rgba(116, 116, 116, 0.80)',

  background: 'white',
  nodeOutline: 'rgba(188, 188, 188, 0.50)'
};

const textDefault = {
  font: 'Helvetica',
  color: colors.textColor,
  backgroundColor: colors.textBackground,
  size: 16,
  margin: 12,
  padding: 8,
  scale: 0.1,
  content: ''
};

const secondaryTextDefault = {
  ...textDefault,
  backgroundColor: colors.textBackground,
  color: colors.secondaryTextColor,
  margin: 8,
  size: 12
};

const badgeDefault = {
  color: colors.badge,
  minVisibleSize: 12,
  stroke: {
    color: colors.badgeStrokeColor,
    width: 4
  },
  text: {
    ...textDefault,
    scale: 0.5,
    margin: 0,
    color: colors.badgeTextColor,
    content: ''
  }
};

const pulseDefault = {
  duration: 1000,
  endRatio: 4,
  endColor: colors.pulseStart,
  interval: 8000,
  startColor: colors.pulseEnd,
  width: 20,
  radius: 4
};

export const morningBreeze: Theme = {
  nodeAttributes: {
    color: colors.nodeColor,

    badges: {
      topLeft: badgeDefault,
      topRight: badgeDefault,
      bottomLeft: badgeDefault,
      bottomRight: badgeDefault
    },

    halo: {
      color: colors.haloColor,
      strokeColor: colors.haloStroke,
      strokeWidth: 4
    },

    icon: {
      color: colors.nodeIcon,
      scale: 0.7
    },

    innerStroke: {
      color: colors.innerStroke,
      minVisibleSize: 0,
      width: 4
    },

    outerStroke: {
      color: colors.outerStroke,
      minVisibleSize: 0,
      scalingMethod: 'scaled',
      width: 4
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
    color: colors.edgeColor,

    halo: {
      color: colors.haloColor
    },

    outline: {
      color: colors.outline
    },

    stroke: {
      color: colors.edgeStroke,
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
      color: colors.selected
    }
  },

  // export colors
  colors,

  // constants
  edgeOutlineWidth: 2,
  edgeHaloWidth: 8,
  nodeHaloWidth: 40
};
