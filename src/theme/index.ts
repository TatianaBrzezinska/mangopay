import "@mui/x-data-grid/themeAugmentation";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    light: string;
    lightGrey: string;
    grey: string;
    darkGrey: string;
    dark: string;
  }

  interface Palette {
    common: CommonColors;
  }

  interface PaletteOptions {
    common?: Partial<CommonColors>;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#0E5AEE",
    },
    secondary: {
      main: "#626C7E",
    },
    text: {
      primary: "#545860",
    },
    common: {
      white: "#ffffff",
      light: "#eaebec",
      lightGrey: "#f7f8fa",
      darkGrey: "#8A98B2",
      grey: "#758197",
      dark: "#2e333d",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    allVariants: {
      color: "#545860",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { height: "100%", backgroundColor: "#f7f8fa", margin: 0 },
        html: {
          height: "100%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "0.875rem",
            fontWeight: 400,
            color: "#2e333d",
            "&::placeholder": {
              opacity: 1,
              color: "#8A98B2",
            },
          },
          "& .MuiInputLabel-formControl": {
            fontSize: "0.875rem",
            "&.MuiFormLabel-filled": {
              fontSize: "1rem",
            },
            "&.Mui-focused": {
              fontSize: "1rem",
            },
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "capitalize",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: ({ theme }) => ({
          backdropFilter: "blur(5px)",
          "& .MuiDialogTitle-root": {
            fontSize: 24,
            padding: theme.spacing(2, 4),
          },
          "& .MuiDialogContent-root": {
            padding: theme.spacing(0, 4, 3),
          },
          "& .MuiDialogActions-root": {
            padding: theme.spacing(0, 4, 4),
          },
        }),
        paper: {
          borderRadius: 12,
          boxShadow: "none",
          minWidth: "30vw",
          minHeight: "15vh",
        },
      },
    },
  },
});

export default theme;
