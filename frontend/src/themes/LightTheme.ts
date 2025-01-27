import { createTheme } from "@mui/material/styles";

// Define your custom theme
export const lightTheme = createTheme({
  palette: {
    primary: {
        main: "#ff0084",
        contrastText: "#d9d7ce"
    },
    secondary: {
        main: "#0967e7",
        contrastText: "#232323"
    },
    info: {
        main: "#232323"
    }, 
    text: {
      primary: "#232323",
      secondary: "#d9d7ce"
    },
    background: {
        default: "#d9d7ce",
        paper: "#232323"
    },
    action: {
      hover: "rgba(0, 0, 0, 0.08)",
    },
  },
  typography: {
    fontFamily:  "Work Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    allVariants: {
        color: "#232323"
    },
    button: {
      textTransform: "uppercase", 
    },
  },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "gray",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#ff0084",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0967e7",
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                color: "gray",
                "&.Mui-focused": {
                        color: "#0967e7", // Label color when focused
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    "&:hover .MuiInputLabel-root:not(.Mui-focused)": {
                        color: "#ff0084", // Label color when parent is hovered
                    },
                },
            },
        },
    },
});