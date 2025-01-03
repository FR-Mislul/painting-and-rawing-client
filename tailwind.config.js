/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounce: 'bounce 3s infinite',
      },
      fontFamily: {
        josefin : '"Josefin Sans", sans-serif',
        bree : '"Bree Serif", serif',
        cabin : '"Cabin", sans-serif',
        bricolage: '"Bricolage Grotesque", sans-serif',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  
}

