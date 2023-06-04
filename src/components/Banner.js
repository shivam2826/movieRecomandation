import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { NavItem } from 'react-bootstrap';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [bannerList, setBannerList] = useState([])
    let PosterbaseUrl = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)'
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        if (bannerList.length === 0) {
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGZhNDBkOThlZTQ1Njk0ZmE5OWJiY2YyZmZhYjBhYiIsInN1YiI6IjY0Nzk3YWZkMTc0OTczMDBmYjM5ZWVjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NPamfZdzzpNYLnPEWf0DZZdvuHtugI5_KO6gZ5jJtz8'
                }
            };
            fetch(url, options)
                .then(res => res.json())
                .then(json => setBannerList(json.results))
                .catch(err => console.error('error:' + err));
        }
    }, [])


    console.log(39, bannerList)
    return (
        <>
            <div style={{ minHeight: "350px", height: "350px" }}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {
                        bannerList.slice(0, 5).map((NavItem) => {
                            return (
                                <SwiperSlide key={NavItem.id}>
                                    <img src={`${PosterbaseUrl + NavItem.poster_path}`}
                                        className="card-img-top position-relative"
                                        alt="..."
                                    />
                                    <div className='position-absolute' style={{ top: "25%" }}>
                                        <div className='d-flex justify-content-start flex-column text-start' style={{ color: "white", width: "100%", marginLeft: "4rem" }}>
                                            <div>
                                                <h2>{NavItem.title}</h2>

                                            </div>
                                            <div className='d-flex'>
                                                {NavItem.original_title}
                                            </div>
                                            <div className='d-flex'>
                                                Realese on:    &nbsp;{NavItem.release_date}
                                            </div>
                                            <div style={{ maxWidth: "35%" }}>
                                                <p>
                                                    {NavItem.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>

        </>
    );
}
