var form = document.querySelector("form");
form.addEventListener("submit", fowardForm);

function fowardForm(event){
    event.preventDefault();
    var formPersonal = calculatePersonal();
    var formOccupation = calculateOccupation();
    var percentArray = [
        document.querySelector("#skill_num_1").value, 
        document.querySelector("#skill_num_2").value, 
        document.querySelector("#skill_num_3").value, 
        document.querySelector("#skill_num_4").value, 
        document.querySelector("#skill_num_5").value, 
        document.querySelector("#skill_num_6").value, 
        document.querySelector("#skill_num_7").value, 
        document.querySelector("#skill_num_8").value]
    var percentTotal = percentArray.reduce((acc, x) => acc + Number(x), 0);
        localStorage.setItem("occupation",formOccupation);
        localStorage.setItem("personal", formPersonal);
        localStorage.setItem("skill1", document.querySelector("#skill_name_1").value);
        localStorage.setItem("skill2", document.querySelector("#skill_name_2").value);
        localStorage.setItem("skill3", document.querySelector("#skill_name_3").value);
        localStorage.setItem("skill4", document.querySelector("#skill_name_4").value);
        localStorage.setItem("skill5", document.querySelector("#skill_name_5").value);
        localStorage.setItem("skill6", document.querySelector("#skill_name_6").value);
        localStorage.setItem("skill7", document.querySelector("#skill_name_7").value);
        localStorage.setItem("skill8", document.querySelector("#skill_name_8").value);
        localStorage.setItem("skillpercent1", document.querySelector("#skill_num_1").value);
        localStorage.setItem("skillpercent2", document.querySelector("#skill_num_2").value);
        localStorage.setItem("skillpercent3", document.querySelector("#skill_num_3").value);
        localStorage.setItem("skillpercent4", document.querySelector("#skill_num_4").value);
        localStorage.setItem("skillpercent5", document.querySelector("#skill_num_5").value);
        localStorage.setItem("skillpercent6", document.querySelector("#skill_num_6").value);
        localStorage.setItem("skillpercent7", document.querySelector("#skill_num_7").value);
        localStorage.setItem("skillpercent8", document.querySelector("#skill_num_8").value);

        localStorage.setItem("totalpercent", percentTotal);
    window.location.href = "./calculator.html";
}

function calculateOccupation(){
    if (document.querySelector("#all_EDU").checked){
        return Number(document.querySelector("#EDU_amount").value * 4);
    }
    else{
        return Number((document.querySelector("#relevant_amount").value * 2)+(document.querySelector("#EDU_amount").value*2));
    }
}

function calculatePersonal(){
    return Number(document.querySelector("#INT_amount").value * 2);
}
