import { createTheme, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import * as C from "./common/components";

/**
 * Returns BRC customized theme.
 * @param theme -- Base theme
 * @returns theme with custom theme overrides.
 */
export function mergeAppTheme(theme: Theme): Theme {
  return createTheme(
    deepmerge(theme, {
      components: {
        MuiButton: C.MuiButton(theme),
        MuiCssBaseline: C.MuiCssBaseline(theme),
      },
    })
  );
}
