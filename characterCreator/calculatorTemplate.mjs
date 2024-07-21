export function calculatorTemplate(info){
    return `
    <h2 id = "occupation_num">Occupation Skill Points Left: ${info.occupation}</h3>
            <h2 id = "personal_num">Personal Interest Skill Points Left: ${info.personal}</h3>
            <div class = "skills_input_div">
                <div id = "skill_percent_div_1">
                    <label class = "skill_percent_div" for = "skill_percent_1" id = "skill_percent_label_1">${info.skill[0]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_1">Unskilled</p>
                    <input type = "number" id = "skill_percent_1" min = "${info.skillpercent[0]}" max = "100" value = ${info.skillpercent[0]}>
                </div>
                <div id = class = "skill_percent_div" "skill_percent_div_2">
                    <label for = "skill_percent_2" id = "skill_percent_label_2">${info.skill[1]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_2">Unskilled</p>
                    <input type = "number" id = "skill_percent_2" min = "${info.skillpercent[1]}" max = "100" value = ${info.skillpercent[1]}>
                </div>
                <div id = class = "skill_percent_div" "skill_percent_div_3">
                    <label for = "skill_percent_3" id = "skill_percent_label_3">${info.skill[2]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_3">Unskilled</p>
                    <input type = "number" id = "skill_percent_3" min = "${info.skillpercent[2]}" max = "100" value = ${info.skillpercent[2]}>
                </div>
                <div class = "skill_percent_div" id = "skill_percent_div_4">
                    <label for = "skill_percent_4" id = "skill_percent_label_4">${info.skill[3]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_4">Unskilled</p>
                    <input type = "number" id = "skill_percent_4" min = "${info.skillpercent[3]}" max = "100" value = ${info.skillpercent[3]}>
                </div>
                <div class = "skill_percent_div" id = "skill_percent_div_5">
                    <label for = "skill_percent_5" id = "skill_percent_label_5">${info.skill[4]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_5">Unskilled</p>
                    <input type = "number" id = "skill_percent_5" min = "${info.skillpercent[4]}" max = "100" value = ${info.skillpercent[4]}>
                </div>
                <div class = "skill_percent_div" id = "skill_percent_div_6">
                    <label for = "skill_percent_6" id = "skill_percent_label_6">${info.skill[5]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_6">Unskilled</p>
                    <input type = "number" id = "skill_percent_6" min = "${info.skillpercent[5]}" max = "100" value = ${info.skillpercent[5]}>
                </div>
                <div class = "skill_percent_div" id = "skill_percent_div_7">
                    <label for = "skill_percent_7" id = "skill_percent_label_7">${info.skill[6]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_7">Unskilled</p>
                    <input type = "number" id = "skill_percent_7" min = "${info.skillpercent[6]}" max = "100" value = ${info.skillpercent[6]}>
                </div>
                <div class = "skill_percent_div" id = "skill_percent_div_8">
                    <label for = "skill_percent_8" id = "skill_percent_label_1">${info.skill[7]}</label>
                    <p class = "skill_rating" id = "skill_percent_rating_8">Unskilled</p>
                    <input type = "number" id = "skill_percent_8" min = "${info.skillpercent[7]}" max = "100" value = ${info.skillpercent[7]}>
                </div>
            </div>
    `
}

export function resultTemplate(info){
    return `
    <p>That's it! Your final skills are: </p>
    <p>${info.skill[0]}: ${info.skillpercent[0]}%</p>
    <p>${info.skill[1]}: ${info.skillpercent[1]}%</p>
    <p>${info.skill[2]}: ${info.skillpercent[2]}%</p>
    <p>${info.skill[3]}: ${info.skillpercent[3]}%</p>
    <p>${info.skill[4]}: ${info.skillpercent[4]}%</p>
    <p>${info.skill[5]}: ${info.skillpercent[5]}%</p>
    <p>${info.skill[6]}: ${info.skillpercent[6]}%</p>
    <p>${info.skill[7]}: ${info.skillpercent[7]}%</p>
    `
}