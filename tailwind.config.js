module.exports = {
  content: ['./index.html'],
  // darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '10px',
  },

  extend: {
      fontFamily: {

roboto: ['Roboto', 'sans-serif'],
},

      colors: {
        
          primary: "#09b2ab",
          sec:"#fff",
          textku:"#545454",
      
      },
      screens: {
         '2xl':'1050px ',
      },
      fontSize: {
          si: ['14px', '18px'],
          xxl: ['26px', '34px'],

      },


  },
},
  plugins: [],
};