const API_KEY = "api_key=e0c0d3622b43ae47c6135b0a8f2cb8f2"

const API_URL = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${API_KEY}`

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"

const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?${API_KEY}&query=`

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// 영화 가져오기

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    displayMovies(data.results)
    console.log(data.results)
}
function displayMovies(movies) {
    main.insertAdjacentHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const moviesElement = document.createElement('div')
        moviesElement.classList.add('movie');
        moviesElement.insertAdjacentHTML('beforeend',
            `<div>
            <img src="${IMAGE_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassesByRating(vote_average)}">${vote_average}</span>
                <div class="overview">
                    <h3>줄거리</h3>
                    ${overview}
                </div>
            </div>
        </div>`
        )

        main.appendChild(moviesElement);
    })
}

function getClassesByRating(rating) {
    if (rating >= 8) {
        return 'green'
    } else if (rating >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = search.value;
    if (searchValue && searchValue !== '') {
        console.log(searchValue)
        getMovies(SEARCH_URL + searchValue)
        console.log(SEARCH_URL)
        searchValue.value = '';
    }
    else {
        window.location.reload()
    }
})

