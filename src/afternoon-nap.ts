import { Theme } from './types';

const colors = {
  nodeColor: '#BD8A61',
  edgeColor: '#d3d3d3',
  haloColor: '#e2efff',
  haloStroke: '#80a3ce',
  outerStroke: '#34344A',
  innerStroke: '#ffffff',
  textColor: '#34344A',
  secondaryTextColor: '#505050',
  textBackground: '#f4f4f4',
  pulseStart: 'rgba(255, 250, 204, 0.80)',
  pulseEnd: 'rgba(255, 250, 204, 0.00)',
  outline: 'rgba(116, 116, 116, 0.80)',
  badge: '#1b998b',
  badgeStrokeColor: '#ffffff',
  badgeTextColor: '#ffffff',
  nodeIcon: '#23231a',
  selected: '#bb3249',
  edgeStroke: '#c5f5f0',

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
    width: 2
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
  interval: 5000,
  startColor: colors.pulseEnd,
  width: 20,
  radius: 4
};

export const afternoonNap: Theme = {
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
      strokeWidth: 2
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
      width: 0
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
      width: 0
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
  edgeStrokeWidth: 2,
  edgeHaloWidth: 8,
  nodeHaloWidth: 40,
  nodeOuterStroke: 4
};
