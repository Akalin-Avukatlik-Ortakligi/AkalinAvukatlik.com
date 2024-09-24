// Requires `font_check.js` to load `checkFontAvailable(string FONTNAME)` function
const logo_text_container = document.querySelector("#logo-name-container");
const logo_font = "Baskerville";
const logo_info = {
    "name": "Baskerville",
    "svg_dir": {
        // This file is 960 Bytes
        "as_path": "/assets/images/logos/basker-text-textsvg.html",
        
        // This file is 21,253 Bytes (21 kB)
        "as_text": "/assets/images/logos/basker-text-pathsvg.html"
    }
};

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}


function loadTextLogo(fontFamilyName, svgWhenFontPresent, svgFontNotPresent) {
    let logo_path = "";
    if (checkFontAvailable(fontFamilyName)){
        logo_path = svgWhenFontPresent;
    } else {
        logo_path = svgFontNotPresent;
    }
    fetch(logo_path)
        .then(response => {
            if (response.ok){
                return response.text();    
            } else {
                let errorMessage = `Fetch failed:`+
                    `\n\tStatus: ${response.statusText}` +
                    `\n\tCode: ${response.status}`;
                throw new Error(errorMessage);                
            }            
        })
        .then(text => {
            let fragment = create(text);
            logo_text_container.prepend(fragment);
        })
        .catch(error => console.error(error));
}

loadTextLogo(
    logo_info.name,
    logo_info.svg_dir.as_text,
    logo_info.svg_dir.as_path);

