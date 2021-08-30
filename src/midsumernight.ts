import { Badge, BasicTextStyle, Theme } from './types';

const textDefault: BasicTextStyle = {
  font: 'Helvetica',
  color: '#23231a',
  backgroundColor: '#e4f2ef',
  size: 16,
  margin: 10,
  padding: 6,
  scale: 0.1,
  content: '',
}
const secondaryTextDefault: BasicTextStyle = {
  ...textDefault,
  backgroundColor: '#e4f2ef',
  color: '#23231a',
  margin: 8,
  size: 12
}

const badgeDefault: Partial<Badge> = {
  color: '#074f67',
  minVisibleSize: 12,
  stroke: {
    color: '#ffffff',
    width: 2,
  },
  text: {
    ...textDefault,
    color: '#ffffff',
    content: ''
  },
}
const selectionColor = '#df162e';
const hoverColor = selectionColor;


export const midsummernight: Theme = {
  nodeAttributes: {
    color: '#3fa291',
    badges: {
      topLeft: badgeDefault,
      topRight: badgeDefault,
      bottomLeft: badgeDefault,
      bottomRight: badgeDefault
    },
    halo: {
      color: '#e4ebea',
      strokeColor: '#d4e0de',
      strokeWidth: 2,
      width: 0,
    },
    icon: {
      color: '#23231a',
      scale: 0.7
    },
    innerStroke: {
      color: 'white',
      minVisibleSize: 12,
      width: 2,
    },
    outerStroke: {
      color: '#074f67',
      minVisibleSize: 0,
      width: 5,
    },
    outline: {
      color: 'rgba(118, 118, 118, 0.36)',
    },
    opacity: 1,
    shape: 'circle',
    pulse: {
      duration: 1000,
      endRatio: 4,
      endColor: 'rgba(245, 235, 147, 0)',
      interval: 8000,
      startRatio: 1,
      startColor: 'rgba(239, 168, 75, 0.40)',
      width: 40
    },
    radius: 5,
    text: {
      ...textDefault,
      secondary: secondaryTextDefault,
      tip: false,
    },
  },
  edgeAttributes: {
    color: '#23231a',
    halo: {
      color: "#e4ebea",
      width: 8,
    },
    outline: {
      color: "rgba(118, 118, 118, 0.36)",
    },
    stroke: {
      color: "#3fa291",
      minVisibleSize: 0,
      width:2
    },
    pulse: {
      duration: 1000,
      endRatio: 4,
      endColor: "rgba(245, 235, 147, 0)",
      interval: 8000,
      startColor: "rgba(239, 168, 75, 0.40)",
      width: 20
    },
    text: {
      ...textDefault,
      secondary: secondaryTextDefault,
    },
  },
  selectedEdgeAttributes: {
    color: selectionColor
  },
  selectedNodeAttributes: {
    outerStroke:{
      color: selectionColor
    } 
  },
  hoveredNodeAttributes:{
    outerStroke:{
      color: hoverColor
    }
  },
  hoveredEdgeAttributes: {
    color: hoverColor
  },
  colors: {
    background: 'white',
    selectionColor,
    hoverColor
  }
};

