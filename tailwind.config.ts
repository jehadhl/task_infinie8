import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interBold: ["var(--font-interBold-sans)", "sans-serif"],
        interMedium: ["var(--font-interMedium-mono)", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(47.55% 47.55% at 50% 14.71%, #FFF4C0 0.07%, #FFE02E 100%)",
        "radial-gradient-cirle":
          "radial-gradient(50% 50% at 50% 50%, rgba(243, 186, 47, 0.36) 0%, rgba(0, 0, 0, 0) 100%)",
        "custom-gradient":
          "linear-gradient(180deg, #FFFF00 0%, #FBB03B 22.6%, #F7931E 47.24%, #F37830 64.12%, #F16A3A 76%, #F37433 84.61%, #F79020 99.46%, #F7931E 100.65%)",
        "button-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #F7C891 8.5%, #F3AC59 12.75%, #EC6615 77%, #944617 100%)",
      },

      animation: {
        rotate: "rotate 10s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      backgroundColor: {
        "custom-color": "#7A4220",
      },
      colors: {
        primary: "#291911",
        secondary: "#F08E3C",
        tertiary: "#35241C",
        quaternary: "#DCC794",
        quinary: "#F3BA2F",
        borderYellow: "#423520",
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow")({
      shadowColor: "rgba(0, 0, 0, 0.5)",
      shadowBlur: "3px",
      shadowOffsetX: "2px",
      shadowOffsetY: "2px",
    }),
  ],
};
export default config;
