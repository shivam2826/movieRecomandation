import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css"

function MyVerticallyCenteredModal(props) {
    const { details } = props
    let PosterbaseUrl = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)'
    let baseUrl = 'https://image.tmdb.org/t/p/w220_and_h330_face';

    const imageUrl = 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_bg.jpg")';
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <>
                    <div className="movie-card">
                        <div className="container">
                            <a href="#">
                                <img
                                    src={`${baseUrl + details.backdrop_path}`}
                                    alt="cover"
                                    className="cover"
                                />
                            </a>
                            <div className="hero"
                                style={{
                                    backgroundImage: `url(${baseUrl + details.backdrop_path})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="details">
                                    <div className="title1">
                                        {details.title.split(':')[0].slice(0, 10)} <span>PG-13</span>
                                    </div>
                                    <div className="title2">{details.original_title}</div>
                                    {/* <fieldset className="rating">
                                        <input type="radio" id="star5" name="rating" defaultValue={5} />
                                        <label className="full" htmlFor="star5" title="Awesome - 5 stars" />
                                        <input
                                            type="radio"
                                            id="star4half"
                                            name="rating"
                                            defaultValue="4 and a half"
                                        />
                                        <label
                                            className="half"
                                            htmlFor="star4half"
                                            title="Pretty good - 4.5 stars"
                                        />
                                        <input
                                            type="radio"
                                            id="star4"
                                            name="rating"
                                            defaultValue={4}
                                            defaultChecked=""
                                        />
                                        <label
                                            className="full"
                                            htmlFor="star4"
                                            title="Pretty good - 4 stars"
                                        />
                                        <input
                                            type="radio"
                                            id="star3half"
                                            name="rating"
                                            defaultValue="3 and a half"
                                        />
                                        <label
                                            className="half"
                                            htmlFor="star3half"
                                            title="Meh - 3.5 stars"
                                        />
                                        <input type="radio" id="star3" name="rating" defaultValue={3} />
                                        <label className="full" htmlFor="star3" title="Meh - 3 stars" />
                                        <input
                                            type="radio"
                                            id="star2half"
                                            name="rating"
                                            defaultValue="2 and a half"
                                        />
                                        <label
                                            className="half"
                                            htmlFor="star2half"
                                            title="Kinda bad - 2.5 stars"
                                        />
                                        <input type="radio" id="star2" name="rating" defaultValue={2} />
                                        <label
                                            className="full"
                                            htmlFor="star2"
                                            title="Kinda bad - 2 stars"
                                        />
                                        <input
                                            type="radio"
                                            id="star1half"
                                            name="rating"
                                            defaultValue="1 and a half"
                                        />
                                        <label
                                            className="half"
                                            htmlFor="star1half"
                                            title="Meh - 1.5 stars"
                                        />
                                        <input type="radio" id="star1" name="rating" defaultValue={1} />
                                        <label
                                            className="full"
                                            htmlFor="star1"
                                            title="Sucks big time - 1 star"
                                        />
                                        <input
                                            type="radio"
                                            id="starhalf"
                                            name="rating"
                                            defaultValue="half"
                                        />
                                        <label
                                            className="half"
                                            htmlFor="starhalf"
                                            title="Sucks big time - 0.5 stars"
                                        />
                                    </fieldset> */}
                                    IMDb: {details.vote_average}
                                    <span className="likes">{details.vote_count} likes</span>
                                </div>{" "}
                                {/* end details */}
                            </div>{" "}
                            {/* end hero */}
                            <div className="description">
                                <div className="column1">
                                    <span className="tag">action</span>
                                    <span className="tag">fantasy</span>
                                    <span className="tag">adventure</span>
                                </div>{" "}
                                {/* end column1 */}
                                <div className="column2">
                                    <p>
                                        {details.overview}...{" "}
                                        <a href="#">read more</a>
                                    </p>
                                    {/* <div className="avatars">
                                        <a href="#" data-tooltip="Person 1" data-placement="top">
                                            <img
                                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
                                                alt="avatar1"
                                            />
                                        </a>
                                        <a href="#" data-tooltip="Person 2" data-placement="top">
                                            <img
                                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
                                                alt="avatar2"
                                            />
                                        </a>
                                        <a href="#" data-tooltip="Person 3" data-placement="top">
                                            <img
                                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
                                                alt="avatar3"
                                            />
                                        </a>
                                    </div>{" "} */}
                                    {/* end avatars */}
                                </div>{" "}
                                {/* end column2 */}
                            </div>{" "}
                            {/* end description */}
                        </div>{" "}
                        {/* end container */}
                    </div>{" "}
                    {/* end movie-card */}
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

function MovieModal({ details }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Know more
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                details={details}
            />
        </>
    );
}

export default MovieModal
