import { createTheme } from "@mui/material/styles";

// Define your custom theme
export const lightTheme = createTheme({
  palette: {
    primary: {
        main: "#ff0084",
        contrastText: "#d9d7ce"
    },
    secondary: {
        main: "#ff0084",
        contrastText: "#232323"
    },
    info: {
        main: "#232323"
    }, 
    text: {
      primary: "#d9d7ce",
      secondary: "#232323"
    },
    background: {
        default: "#d9d7ce",
        paper: "#232323"
    }
  },
  typography: {
    allVariants: {
        color: "#232323"
    },
    button: {
      textTransform: "uppercase", 
    },
  }
});