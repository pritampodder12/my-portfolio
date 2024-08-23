const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-300": "#C8C8C8",
        "gray-400": "#6F6F6F",
        "gray-700": "#272727",
        "gray-800": "#131313",
        "gray-900": "#0C0C0D",
        "green-500": "#5FB9B0",
        "purple-300": "#B292FF",
      },
      backgroundImage: {
        "xp-glow": "url('./assets/images/XpBg.png')",
      },
      borderRadius: {
        extra: "50px",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.gray-400")} ${theme(
            "colors.gray-900"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "2px",
          width: "2px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.gray-300"),
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.gray-900"),
        },
      });
    }),
  ],
};
