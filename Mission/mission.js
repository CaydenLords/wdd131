// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
document.querySelector("#modeSelector").addEventListener("change", changeTheme);

function changeTheme(){
    //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    var mode = document.querySelector("#modeSelector").value;
    // if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
    if (mode == "dark"){
        document.body.setAttribute("class", "dark");
        document.querySelector("img").setAttribute("src", "byui-logo_dark.png");
        console.log(mode);
    }
    // otherwise
// remove the dark class
// make sure the logo src is the blue logo.
    else{
        document.body.setAttribute("class", "light");
        document.querySelector("img").setAttribute("src", "byui-logo_blue.webp");
        console.log(mode);
    }
};