const menu = document.querySelectorAll(".menu");
const gallery = document.querySelector(".gallery");

document.querySelector("#dropdown").addEventListener("click", changeMenu);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", viewHandler);

function changeMenu(){
    menu.forEach(item => {
        item.classList.toggle("hide");
    })
}

function handleResize(){
    if (window.innerWidth > 1000){
        menu.forEach(item => {
            item.classList.remove("hide");
        })
    }
}
function viewHandler(e) {
	// create a variable to hold the element that was clicked on from event.target
    const image = e.target.closest("img");
    var source = image.src; 
    console.log(source);
    source = source.split('-', 1);
    console.log(source);
    result = source.toString().concat("-full.jpeg");
    console.log(result);
	// get the src attribute from that element and 'split' it on the "-"
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const header = document.querySelector("header");
    header.insertAdjacentHTML("afterbegin", viewerTemplate(result, "A picture"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector("#exit").addEventListener("click", closeViewer);
}

function viewerTemplate(pic, alt) {
    return `<div id = "viewer">
    <button id = "exit">X</button>
    <img src="${pic}" class = "display" alt="${alt}">
    </div>`;
  }

function closeViewer(){
    document.querySelector("#viewer").remove();
}