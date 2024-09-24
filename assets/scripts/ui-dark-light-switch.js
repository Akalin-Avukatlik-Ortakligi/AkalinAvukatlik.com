///////////////////
// VARIABLES
/* Select <meta name="theme-color"> tag */
var theme_color = document.querySelector('meta[name="theme-color"]');

// Define colors

// Logo 1-1
// const color_aaoblue = "rgb(206, 172, 61)";
// const color_dark_aaoblue = "rgb(150, 118, 12)";

// Logo 1-2
// const color_aaoblue = "rgb(36, 64, 101)";
// const color_dark_aaoblue = "rgb(20, 36, 57)";

// Logo 2-1
const color_aaoblue = "rgb(36, 64, 101)";
const color_dark_aaoblue = "rgb(20, 36, 57)";

///////////////////
// FUNCTIONS
// Define basic color changing functions
function lightenUi(){
    theme_color.setAttribute('content', color_aaoblue);
}

function darkenUi(){
    theme_color.setAttribute('content', color_dark_aaoblue);
}

function paintUi() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    darkenUi();
  } else {
    lightenUi();
  }
};


///////////////////
// EVENT LISTENERS
/* Listens the change in system's, device's or web browser's color scheme (dark or light) 
   Invoke the necessary function to match Google Maps' iframe's colors */
// References
// https://stackoverflow.com/a/59621903/4258598
// https://web.dev/prefers-color-scheme/

// DARK-LIGHT THEME RELATED EVENT LISTENERS ARE MOVED TO 'dark-light-change-events.js'
// window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", 
//   e => e.matches && darkenUi() 
// ); 

// window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", 
//   e => e.matches && lightenUi() 
// ); 


///////////////////
// MAIN FUNCTION
// This function should be run once this script loads so correct UI color is picked
paintUi();
