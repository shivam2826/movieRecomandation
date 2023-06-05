import React from "react";
import "../assets/style.css"; // CSS file for styling
import watch from "../assets/watch.png";
import MovieModal from "./MovieModal";
import { toast } from "react-toastify";
const Card = (props) => {
    const { data, watchList, setWatchList, baseUrl } = props
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
                // key={details.id}
                >
                    <img className="imax-logo" src={`${watch}`} alt="avatar2" />
                </a>
            </>
        );
    };
    return (
        <>
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
                                                    <Tolltip details={details} />
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
        </>
    );
};

export default Card;
