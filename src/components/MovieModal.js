import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/style.css";
import { baseUrl } from "../api/service";

function MyVerticallyCenteredModal(props) {
    const { details } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton></Modal.Header>
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
                            <div
                                className="hero"
                                style={{
                                    backgroundImage: `url(${baseUrl + details.backdrop_path})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="details">
                                    <div className="title1">
                                        {details.title.split(":")[0].slice(0, 10)}{" "}
                                        <span>PG-13</span>
                                    </div>
                                    <div className="title2">{details.original_title}</div>
                                    IMDb: {details.vote_average}
                                    <span className="likes">{details.vote_count} likes</span>
                                </div>{" "}
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
                                        {details.overview}... <a href="#">read more</a>
                                    </p>
                                </div>
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function MovieModal({ details }) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                style={{ position: "absolute" }}
            >
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

export default MovieModal;
