module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        white: '#FFFFFF',
        darkblue: '#070724',
        grayishblue: '#38384F',
        gray: '#838391',
        skyblue: '#419EBB',
        orange: '#EDA249',
        purple: '#6F2ED6',
        lightred: '#D14C32',
        red: '#D83A34',
        orange: '#CD5120',
        aqua: '#1EC2A4',
        blue: '#2D68F0'
    },
    fontFamily: {
        antonio: 'Antonio, sans-serif',
        spartan: 'Spartan, sans-serif'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
