import React, { useState, useEffect } from "react";
import "../assets/style.css"; // CSS file for styling
import { useDispatch, useSelector } from "react-redux";
// import { selectCount } from "../features/counter/counterSlice";
import { decrement, selectCount } from "../redux/counterSlice";
import { ToastContainer } from "react-toastify";
import Select from "react-select";
import Pagination1 from "../components/Pagination";
import { Search, baseUrl, genreFetch, movieFetch } from "../api/service";
import Card from "../components/Card";
import Banner from "../components/Banner"

const CustomHeader = ({ watchList, showWatchList, genres, setGenres, allGenres, handleSearchInputChange }) => {
    const [genereOption, setGenereOption] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        let debounceTimer;
        debounceTimer = setTimeout(() => {
            if (genres && genres.length) {
                const array = allGenres.map((item) => ({
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

    return (
        <>
            <Banner />
            <div className="row row-cols-1 row-cols-md-5 g-4 m-5">
                <div className="col d-flex flex-column" style={{ color: "white" }}>
                    <label className="form-label" style={{ color: "white" }}></label>
                    <a role="button"
                        tabIndex="0" className="watch-btn"
                        onClick={() => {
                            showWatchList('all')
                            dispatch(decrement(''))
                        }}
                    >
                        <span>
                            <b>All Movies</b>
                        </span>
                    </a>
                </div>
                <div className="col d-flex flex-column" style={{ color: "white" }}>
                    <label className="form-label" style={{ color: "white" }}></label>
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
                    <label className="form-label" style={{ color: "white" }}>Search by gen:</label>
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
                <div className="col">
                    <label className="form-label" style={{ color: "white" }}>Search in List</label>
                    <input
                        style={{ height: "38px", borderRadius: "4px" }}
                        type="email" className="form-control"
                        placeholder="Search movie name"
                        onChange={(e) => handleSearchInputChange(e)}
                    />
                </div>
            </div>
        </>
    );
};

const Dashboard = () => {
    // unmuted api data *******
    const [allGenres, setAllGenres] = useState([]);
    const [AllmovieList, setAllMovieList] = useState([]);
    // muted api data*******
    const [genres, setGenres] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [data, setData] = useState([]);
    const count = useSelector(selectCount);
    const [watchList, setWatchList] = useState([]);
    const [ser, setSer] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(null);
    // pagination **********
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(5)
    useEffect(() => {
        if (count && count.length) {
            Search()
        } else {
            movieFetch(currentPage).then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
                .then((data) => {
                    // console.log(data);
                    setMovieList(data.results);
                    setAllMovieList(data.results);
                    setTotalPage(data.total_pages)
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [currentPage])

    // fetching data from api
    useEffect(() => {
        genreFetch().then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
            .then((data) => {
                // console.log(data);
                setGenres(data.genres);
                setAllGenres(data.genres);
            })
            .catch((error) => {
                console.error(error);
            });
        movieFetch(currentPage).then((response) => {
            debugger
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
            .then((data) => {
                // console.log(data);
                setMovieList(data.results);
                setAllMovieList(data.results);


                setTotalPage(data.total_pages)
            })
            .catch((error) => {
                console.error(error);
            });
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
                let obj = { gen: group.genreName, movies: group.movies };
                return (newArray = [...newArray, obj]);
            });
            setData(newArray);
        }
    }, [genres, movieList]);


    function getGenreNameById(genreId) {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    }




    const keysToLoop = ["title", "release_date"];
    const filterByKeys = (searchTerm) => {
        return movieList.filter((item) => {
            for (let key of keysToLoop) {
                if (item.hasOwnProperty(key)) {
                    // console.log(key, item[key]);
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


    // Event handler for the search input
    function handleSearchInputChange(event) {
        const { value } = event.target;
        setSer(value);
    }

    // Effect to handle debouncing
    useEffect(() => {
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }

        const newTimeout = setTimeout(() => {
            if (ser.length <= 0) {
                setMovieList(AllmovieList)
            } else {
                filterByKeys(ser)
            }

        }, 300);
        setSearchTimeout(newTimeout);
        return () => {
            clearTimeout(newTimeout);
        };
    }, [ser]);



    // const filteredData = filterByKeys('Super Mario Bros');

    useEffect(() => {
        if (count.length > 0) {
            Search(count).then(res => res.json())
                .then((json) => {
                    setMovieList(json.results)
                    setAllMovieList(json.results)
                })
                .catch(err => console.error('error:' + err));
        } else {
            setMovieList(AllmovieList)
        }
    }, [count]);

    // watch list 
    const showWatchList = (t) => {
        if (t === "watch") {
            setMovieList(watchList)
        } else {
            if (watchList && watchList.length) {
                setMovieList(AllmovieList)
            } else {
                movieFetch(currentPage).then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                    .then((data) => {
                        // console.log(data);
                        setMovieList(data.results);
                        setAllMovieList(data.results);


                        setTotalPage(data.total_pages)
                    })
                    .catch((error) => {
                        console.error(error);
                    });
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
                handleSearchInputChange={handleSearchInputChange}
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

            <Card
                data={data}
                baseUrl={baseUrl}
                watchList={watchList}
                setWatchList={setWatchList}
            />
            <Pagination1 setCurrentPage={setCurrentPage} currentPage={currentPage} totalPage={totalPage} />
        </>
    );
};

export default Dashboard;
