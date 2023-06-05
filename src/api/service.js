export const movieFetch = (currentPage) => {
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8",
                accept: "application/json",
            },
        }
    )
}

export const genreFetch = () => {
    return fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8",
            Accept: "application/json",
        },
    })

}


export const Search = (count) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${count}&include_adult=false&language=en-US&page=${1}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8'
        }
    }
    return fetch(url, options)
}

export const BannerImage = () => {
    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8'
        }
    };
    return fetch(url, options)
}

export let baseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face";
export let PosterbaseUrl = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)'


