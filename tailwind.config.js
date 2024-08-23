module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-300': '#C8C8C8',
        'gray-400': '#6F6F6F',
        'gray-700': '#272727',
        'gray-800': '#131313',
        'gray-900': '#0C0C0D',
        'green-500': '#5FB9B0',
        'purple-300': '#B292FF'
      },
      backgroundImage: {
        'xp-glow': "url('./assets/images/XpBg.png')"
      },
      borderRadius: {
        "extra": "50px"
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'slide-in': 'slideIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
