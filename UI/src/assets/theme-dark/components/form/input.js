/**
=========================================================
* House Of Travel admin web app - v1.0.0
=========================================================

* Copyright 2022 House Of Travel

Coded by House Of Travel

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React Helper Functions
import rgba from "assets/theme-dark/functions/rgba";

const { info, inputBorderColor, dark, grey, white } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${rgba(inputBorderColor, 0.6)}`,
      },

      "&:before": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&:after": {
        borderColor: info.main,
      },

      input: {
        color: white.main,

        "&::-webkit-input-placeholder": {
          color: grey[100],
        },
      },
    },
  },
};

export default input;
