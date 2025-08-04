import { Theme as OgmaTheme } from '@linkurious/ogma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare interface Theme<ND = any, ED = any> extends OgmaTheme<ND, ED> {
  [index: string]: unknown;
}

export declare type ThemeFactory<ND, ED> = (
  ...args: unknown[]
) => Theme<ND, ED>;
