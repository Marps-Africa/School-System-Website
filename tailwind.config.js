/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1D4ED8",
          200: "#1E40AF",
          300: "#1E3A8A",
        },
        background: {
          100: "#374151",
          200: "#707780",
          300: "#1F2937",
          400: "#0a1e33",
          900: "#fdfaf5",
        },
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 1s alternate ease-in-out infinite',
      },
      transitionProperty: {
        height: "height",
      },
      keyframes: {
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        pulse: {
          '0%': {
            transform: 'scale(0.5)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
