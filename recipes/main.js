import recipes from './recipes.mjs';
const main = document.querySelector("main")
const search_button = document.querySelector("#search_image");
const search_bar = document.querySelector("#searchbar");
search_button.addEventListener("click", searchHandler);


function selectRecipe(){
    var recipe_num = random(recipes.length);
    var recipe = recipes[recipe_num];
    showRecipe(recipe);
}

function showRecipe(recipe){
    main.insertAdjacentHTML(
        "beforeend", recipeTemplate(recipe)
    )
}

function random(num){
   return Math.floor(Math.random()*num)
}

function recipeTemplate(recipe){
    return `
        <div class = "recipe">
            <img src = ${recipe.image} class = "recipe_image" alt = "picture of recipe">
            <div class = "recipe_text">
            <div class = "recipe_tags">
                ${tagsTemplate(recipe.tags)}
            </div>
            <h2 class = "recipe_title">${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class = "recipe_desc">${recipe.description}</p>
            </div>
        </div>
    `
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = ``
    tags.forEach(tag => {
        html += `<h3 class = "recipe_tag">${tag}</h3> `
    });
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let num = 0; num < 5; num++){
		// check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (num < rating){
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
		// else output an empty star
        else{
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>
`
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function searchHandler(){
    const filtered = recipes.filter(filterRecipes);
    filtered.forEach(recipe => 
        showRecipe(recipe)
    );
}

    function filterRecipes(recipe){
        var query = search_bar.value.toLowerCase();
        return (recipe.name.toLowerCase().includes(query)
        || recipe.tags.find((item) => item.toLowerCase().includes(query))
        || recipe.description.toLowerCase().includes(query)
        || recipe.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query)));
    }