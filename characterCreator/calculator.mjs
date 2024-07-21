import { calculatorTemplate } from "./calculatorTemplate.mjs";
import { resultTemplate } from "./calculatorTemplate.mjs";

var skillForm = document.querySelector("form");
var main = document.querySelector("main");
var skill1;
var skill2;
var skill3;
var skill4;
var skill5;
var skill6;
var skill7;
var skill8;
var rating1;
var rating2;
var rating3;
var rating4;
var rating5;
var rating6;
var rating7;
var rating8;
var occupation;
var personal;
skillForm.addEventListener("submit", submitForm);

var info = {
    occupation: Number(localStorage.getItem("occupation")),
    occupation_max: Number(localStorage.getItem("occupation")),
    personal: Number(localStorage.getItem("personal")),
    personal_max: Number(localStorage.getItem("personal")),
    skill: [localStorage.getItem("skill1"),
            localStorage.getItem("skill2"),
            localStorage.getItem("skill3"),
            localStorage.getItem("skill4"),
            localStorage.getItem("skill5"),
            localStorage.getItem("skill6"),
            localStorage.getItem("skill7"),
            localStorage.getItem("skill8"),
    ],
    skillpercent:  [localStorage.getItem("skillpercent1"),
                    localStorage.getItem("skillpercent2"),
                    localStorage.getItem("skillpercent3"),
                    localStorage.getItem("skillpercent4"),
                    localStorage.getItem("skillpercent5"),
                    localStorage.getItem("skillpercent6"),
                    localStorage.getItem("skillpercent7"),
                    localStorage.getItem("skillpercent8"),
        ],
    totalstartpercent: localStorage.getItem("totalpercent")
}
console.log(info);
window.onload = function(){
    skillForm.insertAdjacentHTML(
    "afterBegin", calculatorTemplate(info))
    skill1 = document.querySelector("#skill_percent_1");
    skill2 = document.querySelector("#skill_percent_2");
    skill3 = document.querySelector("#skill_percent_3");
    skill4 = document.querySelector("#skill_percent_4");
    skill5 = document.querySelector("#skill_percent_5");
    skill6 = document.querySelector("#skill_percent_6");
    skill7 = document.querySelector("#skill_percent_7");
    skill8 = document.querySelector("#skill_percent_8");
    rating1 = document.querySelector("#skill_percent_rating_1");
    rating2 = document.querySelector("#skill_percent_rating_2");
    rating3 = document.querySelector("#skill_percent_rating_3");
    rating4 = document.querySelector("#skill_percent_rating_4");
    rating5 = document.querySelector("#skill_percent_rating_5");
    rating6 = document.querySelector("#skill_percent_rating_6");
    rating7 = document.querySelector("#skill_percent_rating_7");
    rating8 = document.querySelector("#skill_percent_rating_8");
    occupation = document.querySelector("#occupation_num");
    personal = document.querySelector("#personal_num");
    skill1.addEventListener("change", function(){changeSkill(rating1, skill1, 0)});
    skill2.addEventListener("change", function(){changeSkill(rating2, skill2, 1)});
    skill3.addEventListener("change", function(){changeSkill(rating3, skill3, 2)});
    skill4.addEventListener("change", function(){changeSkill(rating4, skill4, 3)});
    skill5.addEventListener("change", function(){changeSkill(rating5, skill5, 4)});
    skill6.addEventListener("change", function(){changeSkill(rating6, skill6, 5)});
    skill7.addEventListener("change", function(){changeSkill(rating7, skill7, 6)});
    skill8.addEventListener("change", function(){changeSkill(rating8, skill8, 7)});
    changeRating(skill1, rating1);
    changeRating(skill2, rating2);
    changeRating(skill3, rating3);
    changeRating(skill4, rating4);
    changeRating(skill5, rating5);
    changeRating(skill6, rating6);
    changeRating(skill7, rating7);
    changeRating(skill8, rating8);
}

function changeSkill(rating, skill, num){
   if (skill.value < info.skillpercent[num]){
    if(info.personal < info.personal_max){
        info.personal += (info.skillpercent[num] - skill.value);
        info.skillpercent[num] = Number(skill.value);
    }
    else{
        info.occupation += (info.skillpercent[num] - skill.value);
        info.skillpercent[num] = Number(skill.value);
    }
   }
   else{
    if (info.occupation > 0){
        if(info.occupation >= skill.value - info.skillpercent[num]){
            info.occupation -= (skill.value - info.skillpercent[num]);
            info.skillpercent[num] = Number(skill.value);
        }
        else{
            skill.value = info.skillpercent[num]
        }
    }
    else if (info.personal > 0){
        if(info.personal >= skill.value - info.skillpercent[num]){
            info.personal -= (skill.value - info.skillpercent[num]);
            info.skillpercent[num] = Number(skill.value);
        }
        else{
            skill.value = info.skillpercent[num]
        }
    }
   }
   occupation.innerText = `Occupation Skill Points Left: ${info.occupation}`;
   personal.innerText = `Personal Interest Skill Points Left: ${info.personal}`;
   changeRating(skill, rating);
}

function changeRating(skill, rating){
    console.log(skill.value);
    if (skill.value < 5){
        rating.innerText = "Novice";
        rating.style.color="#CC0000";
    }
    else if (skill.value < 20){
        rating.innerText = "Neophyte";
        rating.style.color="#D21919";
    }
    else if (skill.value < 50){
        rating.innerText = "Amateur";
        rating.style.color="#9E5400";
    }
    else if (skill.value < 75){
        rating.innerText = "Professional";
        rating.style.color="#8D4B02";
    }
    else if (skill.value < 90){
        rating.innerText = "Expert";
        rating.style.color="#007520";
    }
    else{
        rating.innerText = "Master";
        rating.style.color="#24690C";
    }
}

function submitForm(event){
    event.preventDefault();
    var totalpercent = info.skillpercent.reduce((acc, x) => acc + x, 0);
    if (info.occupation_max + info.personal_max == totalpercent-info.totalstartpercent){
        skillForm.style.display = "none";
        main.insertAdjacentHTML(
            "beforeEnd", resultTemplate(info))
    }    

}
