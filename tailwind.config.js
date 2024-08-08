/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  darkMode: ['class'],
  theme: {
    extend: {
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            },
            slideInRight: {
                '0%': { transform: 'translateX(50px)', opacity: '0' },
                '100%': { transform: 'translateX(0)', opacity: '1' },
            },
            fadeInUp: {
                '0%': { transform: 'translateY(20px)', opacity: '0' },
                '100%': { transform: 'translateY(0)', opacity: '1' },
            },
        },
        animation: {
            fadeIn: 'fadeIn 1s ease-out',
            slideInRight: 'slideInRight 0.8s ease-out',
            fadeInUp: 'fadeInUp 1s ease-out',
        },
    },
},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.rotate-y-20': {
          transform: 'rotateY(20deg)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
