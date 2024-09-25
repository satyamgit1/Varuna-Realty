// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#FFD700',  // The bright yellow from the logo for important text
//         background: '#4A403A',  // The dark brown background from the banner
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(20px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)',
//           },
//         },
//         fadeInDown: {
//           '0%': { opacity: 0, transform: 'translateY(-20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         fadeInUp: 'fadeInUp 1s ease-out forwards',
//         fadeInDown: 'fadeInDown 0.5s ease-out forwards',
//       },
//     },
//   },
//   plugins: [
//     require('daisyui'),  // DaisyUI plugin
//   ],
// };


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700',  // Bright yellow for important text
        background: '#4A403A',  // Dark brown background
        brown: {
          100: '#E2B97D', // Light brown
          300: '#C79A4A', // Medium brown
          500: '#8B5A2A', // Dark brown
          600: '#6F4C3E', // Darker brown for footer gradient
        },
        orange: {
          500: '#FF7F50', // Coral color for orange
        },
        yellow: {
          500: '#FFD700', // Yellow
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeInDown: 'fadeInDown 0.5s ease-out forwards',
      },
    },
  },
  plugins: [
    require('daisyui'),  // DaisyUI plugin
  ],
};
