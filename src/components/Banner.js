import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PosterbaseUrl, BannerImage } from "../api/service"
import "../assets/style.css"
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [bannerList, setBannerList] = useState([])
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    useEffect(() => {
        if (bannerList.length === 0) {
            BannerImage()
                .then(res => res.json())
                .then(json => setBannerList(json.results))
                .catch(err => console.error('error:' + err));
        }
    }, [])
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
