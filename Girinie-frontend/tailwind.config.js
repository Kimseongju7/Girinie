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
  
          /** Secondary Colors **/
          secondary: "#FFE76A",
  
          /** Tertiary Colors **/
          tertiary: "#E0AB5B",
  
          /** Error Colors **/
          error: "#D8433B",
          
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
  