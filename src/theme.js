import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#B9B9BC",
          200: "#85868A",
          300: "#63666C",
          400: "#313540",
          500: "#15142D",
          600: "#101624",
          700: "#111024",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          //pink
          100: "#F5DBF0",
          200: "#EBB7DE",
          300: "#E294CE",
          400: "#D870B8",
          500: "#CE4CA8",
          600: "#A53D8C",
          700: "#7C2E6B",
          800: "#521E42",
          900: "#290F25",
        },
        redAccent: {
          100: "#FE8F8A",
          200: "#FD645E",
          300: "#e99592",
          400: "#EE7A76",
          500: "#EE5751",
          600: "#C64844",
          700: "#933431",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#8DD5FC",
          200: "#6BDCFB",
          300: "#2BDCFD",
          400: "#249DF9",
          500: "#68BDFA",
          600: "#5399C8",
          700: "#494FB3",
          800: "#40459E",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#434957",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#290F25",
          200: "#521E42",
          300: "#7C2E6B",
          400: "#A53D8C",
          500: "#CE4CA8",
          600: "#D870B8",
          700: "#E294CE",
          800: "#EBB7DE",
          900: "#F5DBF0",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#21259B",
          200: "#40459E",
          300: "#494FB3",
          400: "#5399C8",
          500: "#68BDFA",
          600: "#249DF9",
          700: "#2BDCFD",
          800: "#6BDCFB",
          900: "#8DD5FC",
        },
      }),
});
// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            seconday: {
              main: colors.primary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            backgroud: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            seconday: {
              main: colors.primary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            backgroud: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
