import {ParticipantTemplate} from "./templates.js";
import {SuccessTemplate} from "./templates.js";
var currentParticipants = 1;
const form = document.querySelector("form");
const addButton = document.querySelector("#add");
const submitButton = document.querySelector("#submitButton");
var total = 0;
addButton.addEventListener("click", addParticipant);
form.addEventListener("submit", submitForm);


function addParticipant(){
    currentParticipants += 1;
    addButton.insertAdjacentHTML(
        "beforebegin", ParticipantTemplate(currentParticipants)
    )
}

function submitForm(event){
    event.preventDefault();
    totalFees();
    const info = {};
    info.aname = document.getElementById("adult_name").value;
    info.sum = total;
    info.num = currentParticipants;
    form.insertAdjacentHTML(
        "afterend", SuccessTemplate(info)
    )
    form.style.display = "none";
}

function totalFees(){
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    feeElements.forEach((element) => total = total + parseInt(element.value));
    // Remember that the text that was entered into the input element will be found in the .value of the element.
// once you have your total make sure to return it!
}

