import React, { useState, useEffect } from 'react';
import './style.css'; // CSS file for styling
import { useSelector } from 'react-redux';
import { selectCount } from '../features/counter/counterSlice';
import watch from "../assets/watch.png"
import MovieModal from './MovieModal';
const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClassName = i <= rating ? 'star filled' : 'star'; // Add 'filled' class to filled stars
            stars.push(
                <span
                    key={i}
                    className={starClassName}
                    onClick={() => handleRatingChange(i)}
                >
                    &#9734;
                </span>
            );
        }
        return stars;
    };

    return (
        <div className="star-rating">
            {/* <h3>Rate this product:</h3> */}
            <div className="stars">3.1/5 {renderStars()}</div>
        </div>
    );
};

const CustomHeader = () => {
    return (<>
        <div className="row row-cols-1 row-cols-md-5 g-4 m-5">

        </div>
    </>)
}


const Card = () => {
    const [genres, setGenres] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [data, setData] = useState([]);
    const count = useSelector(selectCount);


    // fetching data from api
    let baseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8',
                'Accept': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setGenres(data.genres);
            })
            .catch(error => {
                console.error(error);
            });

        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8',
                'accept': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setMovieList(data.results);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        if (genres.length > 0) {
            const groupedList = genres.map(genre => {
                const genreId = genre.id;
                const genreName = getGenreNameById(genreId);
                const movies = movieList.filter(item => item.genre_ids.includes(genreId));

                return {
                    genreId,
                    genreName,
                    movies
                };
            });
            let newArray = []
            groupedList.forEach(group => {
                // console.log(`Genre: ${group.genreName}`);
                // obj['gen'] = group.genreName;
                // obj['movies'] = group.movies
                let obj = { gen: group.genreName, movies: group.movies }
                // group.movies.forEach(movie => {
                // console.log(`- ${movie.title}`);
                return newArray = [...newArray, obj];

                // });
                // console.log('---');
            });
            setData(newArray);
        }
    }, [genres, movieList]);

    console.log(115, data)
    function getGenreNameById(genreId) {
        const genre = genres.find(genre => genre.id === genreId);
        return genre ? genre.name : '';
    }


    const data1 = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 35 },
        { id: 4, name: 'Alice', age: 40 }
    ];

    // const obj = { name: 'John', age: 30, city: 'New York', occupation: 'Developer' };
    const keysToLoop = ['title', 'release_date'];
    // const keysToLoop = ['name', 'age'];

    const filterByKeys = (searchTerm) => {
        return movieList.filter((item) => {
            for (let key of keysToLoop) {
                if (item.hasOwnProperty(key)) {
                    console.log(key, item[key]);
                    const value = item[key];
                    if (typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return setMovieList([item]);
                    }
                }
            }
        }
        )
    };

    // const filteredData = filterByKeys('Super Mario Bros');
    console.log(161, movieList);

    useEffect(() => {
        if (count.length > 0) {
            const filteredData = filterByKeys(count)
            console.log(166, filteredData);
        }
    }, [count]);


    return (
        <>
            <CustomHeader />
            {data.map((item) => {
                return (
                    <>
                        <h3 style={{ color: "white", marginLeft: "3.8rem", marginBottom: "-2rem" }}>{item.movies.length ? item.gen : ""}</h3 >
                        <div className="row row-cols-1 row-cols-md-5 g-4 m-5">
                            {/* <div className="col"> */}
                            {
                                item.movies.map((details) => {
                                    return (
                                        <div className="col" key={details.id}>
                                            <div className="movie-card">
                                                <div className="movie-header manOfSteel"
                                                    style={{
                                                        backgroundImage: `url(${baseUrl + details.backdrop_path})`,
                                                        backgroundSize: 'cover',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                    }}
                                                >
                                                    <div className="header-icon-container">
                                                        <a href="#">
                                                            <MovieModal details={details} />
                                                            {/* <i className="material-icons header-icon"></i> */}
                                                        </a>
                                                    </div>
                                                </div>
                                                {/*movie-header*/}
                                                <div className="movie-content">
                                                    <div className="movie-content-header">
                                                        <a href="#">
                                                            <h6 className="movie-title">{details.title}</h6>
                                                        </a>
                                                        <div className="imax-logo"
                                                            style={{
                                                                backgroundImage: `url(${watch})`,
                                                                backgroundSize: 'cover',
                                                                backgroundRepeat: 'no-repeat',
                                                                backgroundPosition: 'center',
                                                            }}

                                                        />
                                                    </div>
                                                    <div className="movie-info">
                                                        <div className="info-section">
                                                            <label>Date &amp; Time</label>
                                                            <span>{details.release_date}</span>
                                                        </div>
                                                        {/*date,time*/}
                                                        <div className="info-section">
                                                            <label>Screen</label>
                                                            <span>03</span>
                                                        </div>
                                                        {/*screen*/}
                                                        <div className="info-section">
                                                            <label>Row</label>
                                                            <span>F</span>
                                                        </div>
                                                        {/*row*/}
                                                        <div className="info-section">
                                                            <label>Seat</label>
                                                            <span>21,22</span>
                                                        </div>
                                                        {/*seat*/}
                                                    </div>
                                                </div>
                                                {/*movie-content*/}
                                            </div>
                                        </div >
                                    )
                                })
                            }
                            {/* </div > */}
                        </div >
                    </>
                )
            })
            }
        </>
    )
}

export default Card