import { NodeAttributesValue, EdgeAttributesValue } from '@linkurious/ogma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare interface Theme<ND = any, ED = any> {
  nodeAttributes?: NodeAttributesValue<ND, ED>;
  edgeAttributes?: EdgeAttributesValue<ED, ND>;
  selectedNodeAttributes?: NodeAttributesValue<ND, ED>;
  selectedEdgeAttributes?: EdgeAttributesValue<ED, ND>;
  hoveredNodeAttributes?: NodeAttributesValue<ND, ED>;
  hoveredEdgeAttributes?: EdgeAttributesValue<ED, ND>;
  [index: string]: unknown;
}

export declare type ThemeFactory<ND, ED> = (
  ...args: unknown[]
) => Theme<ND, ED>;
