const input = document.getElementById("search-file")
const searchBtn = document.getElementById("search-btn")
const main = document.getElementById("main")

searchBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    let getValue = input.value
    fetch(`https://www.omdbapi.com/?s=${getValue}&apikey=8765eb67`)
        .then(response=>response.json())
        .then(data=>
        main.innerHTML +=` <article id="article1" class="article1">
                        <img src="${data.Search[0].Poster}" alt="movie-poster" id="poster1"/>
                        <div id="text1">
                            <div class="article1-upper-section">
                                <h3>${data.Search[0].Title}</h3>
                                <span class="rating">8.1</span>
                            </div>
                            <div>
                                <span class="duration">time</span>
                                <span id="genre">Genre</span>
                                <button><img src="add.png">Watchlist</button>
                            </div>
                            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                            </p>
                        </div>
                    </article>
                    <hr/>`
        
        )
        
})
