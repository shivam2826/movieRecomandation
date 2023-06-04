import React, { useState, useEffect } from "react";
import "./style.css"; // CSS file for styling
import { useSelector } from "react-redux";
import { selectCount } from "../features/counter/counterSlice";
import watch from "../assets/watch.png";
import MovieModal from "./MovieModal";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import Pagination1 from "./Pagination";
// import Pagination1 from 'react-bootstrap/Pagination1';

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const CustomHeader = ({ watchList, showWatchList, genres, setGenres, allGenres }) => {
    const [genereOption, setGenereOption] = useState([])


    useEffect(() => {
        let debounceTimer;
        debounceTimer = setTimeout(() => {
            if (genres && genres.length) {
                const array = genres.map((item) => ({
                    value: item.id,
                    label: item.name,
                }));
                setGenereOption(array);
            }
        }, 500);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [genres]);

    const changeBygen = (e) => {
        debugger
        if (e.length === 0) {
            setGenres(allGenres)
        } else {
            const array = e.map((item) => ({
                id: item.value,
                name: item.label,
            }));
            setGenres(array)
        }
    }


    console.log(30, genereOption)
    return (
        <>
            <div className="row row-cols-1 row-cols-md-5 g-4 m-5">
                <div className="col d-flex flex-column" style={{ color: "white" }}>
                    <a role="button"
                        tabIndex="0" className="watch-btn"
                        onClick={() => showWatchList('all')}
                    >
                        <span>
                            <b>All Movies</b>
                        </span>
                        {/* <span className="badge1">{(watchList && (watchList.length > 0)) && watchList.length}</span> */}
                    </a>
                </div>
                <div className="col d-flex flex-column" style={{ color: "white" }}>
                    <a role="button"
                        tabIndex="0" className="watch-btn"
                        onClick={() => showWatchList('watch')}
                    >
                        <span>
                            <b>Watchlist</b>
                        </span>
                        {(watchList && (watchList.length > 0)) && <span className="badge1">{watchList.length}</span>}
                    </a>
                </div>
                <div className="col">
                    <label style={{ color: "white" }}>Search by gen:</label>
                    <Select
                        defaultValue={[]}
                        isMulti
                        name="colors"
                        options={genereOption}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(e) => changeBygen(e)}
                    />
                </div>
                {/* <div className="col d-flex flex-column" style={{ color: "white" }}>
                    <label color="success">Search by Year:</label>
                    <input style={{ height: "2.5rem", borderRadius: "6px" }} />
                </div>
                <div className="col d-flex flex-column" style={{ color: "white" }}>
                    <label color="success">Search by gen:</label>
                    <input style={{ height: "2.5rem", borderRadius: "6px" }} />
                </div> */}
            </div>
        </>
    );
};

const Card = () => {
    // unmuted api data *******
    const [allGenres, setAllGenres] = useState([]);
    const [AllmovieList, setAllMovieList] = useState([]);
    // muted api data*******
    const [genres, setGenres] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [data, setData] = useState([]);
    const count = useSelector(selectCount);
    const [watchList, setWatchList] = useState([]);
    // pagination **********
    const [currentPage, setCurrentPage] = useState(1)


    useEffect(() => {
        if (count && count.length) {
            Search()
        } else {
            movieFetch()
        }
    }, [currentPage])

    // fetching data from api
    let baseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face";



    // searchby ***********
    const Search = () => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${count}&include_adult=false&language=en-US&page=${1}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8'
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then((json) => {
                setMovieList(json.results)
                setAllMovieList(json.results)
            })
            .catch(err => console.error('error:' + err));
    }

    // movie api
    const movieFetch = () => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc`,
            {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8",
                    accept: "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setMovieList(data.results);
                setAllMovieList(data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // genere api****
    const genreFetch = () => {
        fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8",
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setGenres(data.genres);
                setAllGenres(data.genres);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        genreFetch()
        movieFetch()
    }, []);


    // groupbye genere ********
    useEffect(() => {
        if (genres.length > 0) {
            const groupedList = genres.map((genre) => {
                const genreId = genre.id;
                const genreName = getGenreNameById(genreId);
                const movies = movieList.filter((item) =>
                    item.genre_ids.includes(genreId)
                );

                return {
                    genreId,
                    genreName,
                    movies,
                };
            });
            let newArray = [];
            groupedList.forEach((group) => {
                // console.log(`Genre: ${group.genreName}`);
                // obj['gen'] = group.genreName;
                // obj['movies'] = group.movies
                let obj = { gen: group.genreName, movies: group.movies };
                // group.movies.forEach(movie => {
                // console.log(`- ${movie.title}`);
                return (newArray = [...newArray, obj]);

                // });
                // console.log('---');
            });
            setData(newArray);
        }
    }, [genres, movieList]);



    console.log(115, data);
    function getGenreNameById(genreId) {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    }

    const data1 = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
        { id: 3, name: "Bob", age: 35 },
        { id: 4, name: "Alice", age: 40 },
    ];

    // const obj = { name: 'John', age: 30, city: 'New York', occupation: 'Developer' };
    const keysToLoop = ["title", "release_date"];
    // const keysToLoop = ['name', 'age'];

    const filterByKeys = (searchTerm) => {
        return movieList.filter((item) => {
            for (let key of keysToLoop) {
                if (item.hasOwnProperty(key)) {
                    console.log(key, item[key]);
                    const value = item[key];
                    if (
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return setMovieList([item]);
                    }
                }
            }
        });
    };

    // const filteredData = filterByKeys('Super Mario Bros');

    useEffect(() => {
        if (count.length > 0) {
            Search()
        } else {
            setMovieList(AllmovieList)
        }
    }, [count]);


    const check = (details) => {
        let a = watchList.findIndex((x) => x.id === details.id);
        return a;
    };
    const check2 = (details) => {
        let a = watchList.findIndex((x) => x.id === details.id);
        if (a < 0) {
            return " + Add in watch list ";
        } else {
            return "Movie already added in watchlist";
        }
    };
    const checkList = (details) => {
        setTimeout(() => {
            if (check(details) < 0) {
                setWatchList([...watchList, details]);
                toast("🦄 Movie has Added in Watchlist ", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // check2(details)
            }
        }, 100);
    };
    const Tolltip = ({ details }) => {
        return (
            <>
                <a
                    role="button"
                    tabIndex="0"
                    data-tooltip={check2(details)}
                    data-placement="top"
                    onClick={() => checkList(details)}
                    key={details.id}
                >
                    <img className="imax-logo" src={`${watch}`} alt="avatar2" />
                </a>
            </>
        );
    };

    // watch list 
    const showWatchList = (t) => {
        if (t === "watch") {
            setMovieList(watchList)
        } else {
            if (watchList && watchList.length) {
                setMovieList(AllmovieList)
            } else {
                movieFetch()
            }
        }
    }
    // Pagination ***************
    return (
        <>
            <CustomHeader
                watchList={watchList}
                showWatchList={showWatchList}
                genres={genres}
                setGenres={setGenres}
                allGenres={allGenres}
            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {data.map((item) => {
                return (
                    <>
                        <h3
                            style={{
                                color: "white",
                                marginLeft: "3.8rem",
                                marginBottom: "-2rem",
                            }}
                        >
                            {item.movies.length ? item.gen : ""}
                        </h3>
                        <div className="row row-cols-1 row-cols-md-5 g-4 m-5">
                            {/* <div className="col"> */}
                            {item.movies.map((details) => {
                                return (
                                    <div className="col" key={details.id}>
                                        <div className="movie-card">
                                            <div
                                                className="movie-header manOfSteel"
                                                style={{
                                                    backgroundImage: `url(${baseUrl + details.backdrop_path
                                                        })`,
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                }}
                                            >
                                                <div className="header-icon-container">
                                                    <a role="button"
                                                        tabIndex="0">
                                                        <MovieModal details={details} />
                                                        {/* <i className="material-icons header-icon"></i> */}
                                                    </a>
                                                </div>
                                            </div>
                                            {/*movie-header*/}
                                            <div className="movie-content">
                                                <div className="movie-content-header">
                                                    <a role="button"
                                                        tabIndex="0">
                                                        <h6 className="movie-title">{details.title.split(':')[0]}</h6>
                                                    </a>
                                                    <Tolltip details={details} key={details.id} />
                                                </div>
                                                <div className="movie-info">
                                                    <div className="info-section">
                                                        <label>Date &amp; Time</label>
                                                        <span>{details.release_date}</span>
                                                    </div>
                                                    {/*date,time*/}
                                                    <div className="info-section">
                                                        <label>IMDb</label>
                                                        <span>{details.vote_average}</span>
                                                    </div>
                                                    {/*screen*/}
                                                    <div className="info-section">
                                                        <label>Lang</label>
                                                        <span>{details.original_language}</span>
                                                    </div>
                                                    {/*row*/}
                                                    <div className="info-section">
                                                        <label>likes</label>
                                                        <span className="likes">{details.vote_count}</span>
                                                    </div>
                                                    {/*seat*/}
                                                </div>
                                            </div>
                                            {/*movie-content*/}
                                        </div>
                                    </div>
                                );
                            })}
                            {/* </div > */}
                        </div>
                    </>
                );
            })}
            <Pagination1 setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    );
};

export default Card;
