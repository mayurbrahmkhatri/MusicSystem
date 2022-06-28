/**
=========================================================
* House Of Travel admin web app - v1.0.0
=========================================================

* Copyright 2022 House Of Travel

Coded by House Of Travel

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRem(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
