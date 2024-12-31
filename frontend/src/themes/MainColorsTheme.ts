import { createTheme } from "@mui/material/styles";

export const mainColorsTheme = createTheme({
  custom: {
    blue: "#0967e7",
    pink: "#ff0084",
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      blue: string;
      pink: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      blue: string;
      pink: string;
    };
  }
}