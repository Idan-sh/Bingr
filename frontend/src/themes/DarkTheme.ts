import { createTheme } from "@mui/material/styles";

// Define your custom theme
export const darkTheme = createTheme({
  palette: {
    primary: {
        main: "#ff0084",
        contrastText: "#232323"
    },
    secondary: {
        main: "#ff0084",
        contrastText: "#d9d7ce"
    },
    info: {
        main: "#d9d7ce"
    }, 
    text: {
      primary: "#d9d7ce",
      secondary: "#232323"
    },
    background: {
        default: "#232323",
        paper: "#d9d7ce"
    }
  },
  typography: {
    allVariants: {
        color: "#d9d7ce"
    },
    button: {
      textTransform: "uppercase", 
    },
  }
});