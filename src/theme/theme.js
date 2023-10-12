import { createTheme } from "@mui/material";

// black: {
//     100: "#d2d2d3",
//     200: "#a5a5a7",
//     300: "#78797a",
//     400: "#4b4c4e",
//     500: "#1e1f22",
//     600: "#18191b",
//     700: "#121314",
//     800: "#0c0c0e",
//     900: "#060607"
// },

// purple: {
//     100: "#e6dff3",
//     200: "#cebfe7",
//     300: "#b59eda",
//     400: "#9d7ece",
//     500: "#845ec2",
//     600: "#6a4b9b",
//     700: "#4f3874",
//     800: "#35264e",
//     900: "#1a1327"
// },

const black = {
  100: "#d1d2d5",
  200: "#a3a6ab",
  300: "#767980",
  400: "#484d56",
  500: "#243448",
  600: "#151a23",
  700: "#10131a",
  800: "#0a0d12",
  900: "#050609",
};

// black: {
//     100: "#d3d6da",
//     200: "#a7aeb6",
//     300: "#7c8591",
//     400: "#505d6d",
//     500: "#243448",
//     600: "#1d2a3a",
//     700: "#161f2b",
//     800: "#0e151d",
//     900: "#070a0e"
// },

// #544d91
// #243448
// #766bb9
// #F30737

const myTheme = createTheme({
  palette: {
    bgForm: {
      black_1: "#1A202C",
      black_2: "#313338",
      black_3: "#272D38",
    },
    primary: {
      main: "#845ec2",
    },
    secondary: {
      main: "#a178df",
    },
    accent: {
      main: "#d65db1",
    },
    secondAccent: {
      main: "#47B9B0",
    },
    danger: {
      main: "#F56565",
    },
    success: {
      main: "#48BB78",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#fff",
          backgroundColor: black[600],
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: black[600],
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff",
          },
          "& .Mui-active .MuiOutlinedInput-notchedOutline": {
            color: black[600],
            borderColor: black[600],
          },
          "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: black[600],
            borderColor: black[600],
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: black[400],
        },
      },
    },
  },
});

export { myTheme };
