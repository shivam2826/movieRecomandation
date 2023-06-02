import React, { useState } from 'react';
import './style.css'; // CSS file for styling

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
    return (
        <>
            <CustomHeader />
            <h3 style={{ color: "white", marginLeft: "3.8rem", marginBottom: "-2rem" }}>Type movies</h3>
            <div className="row row-cols-1 row-cols-md-5 g-4 m-5">
                <div className="col">
                    <div className="card" style={{ minHeight: "350px" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5 className="card-title">Card title</h5>
                                <StarRating />
                            </div>
                            {/* <h5 className="card-title">Card title</h5> */}
                            <h6 className="card-title">year</h6>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                            <p className="card-text">
                                + Add to watchlist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card