import { Theme as MTheme } from "@mui/material";

/**
 * Button prop options.
 */
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    hero: true;
  }
}

/**
 * Palette definitions.
 */
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    hero: PaletteColor;
  }

  interface PaletteOptions {
    hero?: PaletteColorOptions;
  }
}

declare module "@emotion/react" {
  export interface Theme extends MTheme {
    name: "EmotionTheme";
  }
}
