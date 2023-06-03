import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Banner() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
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
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top position-relative" alt="..." />
                        <div className='position-absolute' style={{ top: "25%" }}>
                            <div className='d-flex justify-content-start flex-column text-start' style={{ color: "white", width: "40%", marginLeft: "4rem" }}>
                                <div>
                                    <h2> Slide 1</h2>
                                </div>
                                <div>
                                    Subtitle
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                        laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                        Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                        Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                        ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                        tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
                    <SwiperSlide>  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UPCGgo9z-sokgSi9PGtt7tB-rZ140w-xlRrtikND8Q&usqp=CAU&ec=48665699" className="card-img-top" alt="..." /></SwiperSlide>
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
