const articles = [
	{
		id: 1,
		title: 'Mistborn: The Final Empire',
		date: 'May 29th, 2024',
		description:
        'Brando Sando\'s first big hit, Mistborn delivers a perfect example of the brilliance we\'ve come to expect from our boy Brando.',
		imgSrc: 'Mistborn-final-empire-cover.jpg',
		imgAlt: 'Mistborn cover showing a young woman in a dress flying over a room filled with evil-looking men',
		ages: '13+',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Alcatraz vs the Evil Librarians',
		date: 'May 22nd, 2024',
		description:
			'While not part of the Cosmere, it\'s still a great Brando Sando book. Brando takes a comedic spin with this book while making appropiate for younger ages. A great Brando Sando gateway drug for your children. ',
		imgSrc:
			'Alcatraz-vs-evil-librarians-cover.jpg',
		imgAlt: 'Alcatraz cover showing a young man in a green jacket running, along with an older and younger man in suits, a young lady in a dress carrying a large blue sword, and a tripping man in a blue kimono',
		ages: '10+',
		genre: 'Modern Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: 3,
        title: "Skyward",
        date: "May 15th, 2024",
        description:
        "Brandon Sanderson never misses. HOWEVER, one must admit that this isn't quite what we've come to expect from Brando Sando.",
        imgSrc:
        "Skyward-cover.jpg",
        imgAlt: "Skyward Cover showing a woman facing towards us with shooting stars in the background",
        ages: "14+",
        genre: "Science Fiction",
        stars: "⭐⭐⭐"
        }
]

const archives = document.querySelector("#archives")
articles.forEach(article => {
    archives.insertAdjacentHTML(
        "beforeend", articleTemplate(article)
    )
});


function articleTemplate(article){
    return `
    <section id = "book${article.id}" class = "book">
                <div class = "sidebar">
                    <h4>${article.date}</h4>
                    <p>${article.ages}</p>
                    <p>${article.genre}</p>
                    <p>${article.stars}</p>
                </div>
                <div class = "article">
                    <h2>${article.title}</h2>
                    <div class = "cover">
                        <img src = "${article.imgSrc}" alt = "${article.imgAlt}">
                    </div>
                    <div class = "article_content">
                        <p class = "article_text">${article.description}</p>
                        <a class = "article_link">Read More</a>
                    </div>                      
                </div>
            </section>
    `
}