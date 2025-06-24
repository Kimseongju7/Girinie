/** @type {import('./Girinie-frontend/node_modules/tailwindcss/types').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          SUIT: ["SUIT", "sans-serif"],
        },
        colors: {
          /** Primary Colors **/
          primary: "#FEF1B0",
          "on-primary":
            "#FFFFF/** @type {import('tailwindcss').Config} */\n" +
            "export default {\n" +
            "  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n" +
            "  theme: {\n" +
            "    extend: {\n" +
            "      fontFamily: {\n" +
            "        SUIT: ['SUIT', 'sans-serif'],\n" +
            "      },\n" +
            "      colors: {\n" +
            "        /** Primary Colors **/\n" +
            "        primary: '#3D5AFE',\n" +
            "        'on-primary': '#FFFFFF',\n" +
            "        'primary-container': '#E8F0FF',\n" +
            "        'on-primary-container': '#3D5AFE',\n" +
            "\n" +
            "        /** Secondary Colors **/\n" +
            "        secondary: '#5C6BC0',\n" +
            "        'on-secondary': '#FFFFFF',\n" +
            "        'secondary-container': '#DDE7FF',\n" +
            "        'on-secondary-container': '#2C3A87',\n" +
            "\n" +
            "        /** Tertiary Colors **/\n" +
            "        tertiary: '#52A87F',\n" +
            "        'on-tertiary': '#FFFFFF',\n" +
            "        'tertiary-container': '#FBE47A',\n" +
            "        'on-tertiary-container': '#141414',\n" +
            "\n" +
            "        /** Error Colors **/\n" +
            "        error: '#D8433B',\n" +
            "        'on-error': '#FFFFFF',\n" +
            "        'error-container': '#FDECEA',\n" +
            "        'on-error-container': '#D8433B',\n" +
            "      },\n" +
            "      letterSpacing: {\n" +
            "        tightest: '-0.02em',\n" +
            "      },\n" +
            "    },\n" +
            "  },\n" +
            "  plugins: [\n" +
            "    ({ addUtilities }) => {\n" +
            "      addUtilities({\n" +
            "        '.font-title1': {\n" +
            "          '@apply font-SUIT font-semibold text-[28px] leading-[40px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-title2': {\n" +
            "          '@apply font-SUIT font-semibold text-[24px] leading-[35px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-title3': {\n" +
            "          '@apply font-SUIT font-medium text-[20px] leading-[28px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-body1-m': {\n" +
            "          '@apply font-SUIT font-medium text-[18px] leading-[25px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-body1-sb': {\n" +
            "          '@apply font-SUIT font-semibold text-[18px] leading-[25px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-body2-m': {\n" +
            "          '@apply font-SUIT font-medium text-[14px] leading-[20px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-body2-sb': {\n" +
            "          '@apply font-SUIT font-semibold text-[14px] leading-[20px] tracking-tightest': {},\n" +
            "        },\n" +
            "        '.font-caption-m': {\n" +
            "          '@apply font-SUIT font-medium text-[12px] leading-[15px] tracking-tightest': {},\n" +
            "        },\n" +
            "      });\n" +
            "    },\n" +
            "  ],\n" +
            "};\nF",
          "primary-container": "#E8F0FF",
          "on-primary-container": "#3D5AFE",
  
          /** Secondary Colors **/
          secondary: "#FFE76A",
          "on-secondary": "#FFFFFF",
          "secondary-container": "#DDE7FF",
          "on-secondary-container": "#2C3A87",
  
          /** Tertiary Colors **/
          tertiary: "#E0AB5B",
          "on-tertiary": "#FFFFFF",
          "tertiary-container": "#FBE47A",
          "on-tertiary-container": "#141414",
  
          /** Error Colors **/
          error: "#D8433B",
          "on-error": "#FFFFFF",
          "error-container": "#FDECEA",
          "on-error-container": "#D8433B",
        },
        letterSpacing: {
          tightest: "-0.02em",
        },
      },
    },
    plugins: [
      ({ addUtilities }) => {
        addUtilities({
          ".font-title1": {
            "@apply font-SUIT font-semibold text-[28px] leading-[40px] tracking-tightest":
              {},
          },
          ".font-title2": {
            "@apply font-SUIT font-semibold text-[24px] leading-[35px] tracking-tightest":
              {},
          },
          ".font-title3": {
            "@apply font-SUIT font-medium text-[20px] leading-[28px] tracking-tightest":
              {},
          },
          ".font-body1-m": {
            "@apply font-SUIT font-medium text-[18px] leading-[25px] tracking-tightest":
              {},
          },
          ".font-body1-sb": {
            "@apply font-SUIT font-semibold text-[18px] leading-[25px] tracking-tightest":
              {},
          },
          ".font-body2-m": {
            "@apply font-SUIT font-medium text-[14px] leading-[20px] tracking-tightest":
              {},
          },
          ".font-body2-sb": {
            "@apply font-SUIT font-semibold text-[14px] leading-[20px] tracking-tightest":
              {},
          },
          ".font-caption-m": {
            "@apply font-SUIT font-medium text-[12px] leading-[15px] tracking-tightest":
              {},
          },
        });
      },
    ],
  };
  