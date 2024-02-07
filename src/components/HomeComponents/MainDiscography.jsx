import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const discography = [
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_8a2d2109ca54f9eb59acda5b334d7f9f?ret=%2Fdiscography",
        imgSrc: "/public/images/discography3.jpeg",
        alt: "discography1",
        title: "memo",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_6b71ef5217c5e3e1eb2858f118fb4f82?ret=%2Fdiscography",
        imgSrc: "/public/images/discography8.jpeg",
        alt: "discography2",
        title: "With",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_f5813ded5086e88822c085cfe95d6ad3?ret=%2Fdiscography",
        imgSrc: "/public/images/discography1.jpeg",
        alt: "discography3",
        title: "アドナイン（初回限定ファンクラブ盤）",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_8f3fe26bfecd45edb8eee6c017348d30?ret=%2Fdiscography",
        imgSrc: "/public/images/discography9.jpeg",
        alt: "discography4",
        title: "桜小町(feat.缶缶)",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_2ec5ea5220aeecf2edc3094d3d518546?ret=%2Fdiscography",
        imgSrc: "/public/images/discography6.jpeg",
        alt: "discography5",
        title: "アドナイン（通常盤）",
    },
];

const MainDiscography = () => {
    return (
        <div>
            <section className='w-full'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto py-14 border-inti-green-x border-b-2'>
                    <div className='flex justify-between items-center mx-auto'>
                        <h2 className='text-2xl sm:text-3xl mb-5 text-black font-lato '>
                            DISCOGRAPHY
                        </h2>
                        <div className=' bg-gray-50 text-black border-2 border-black pt-1 pb-2 px-3 sm:hover:text-white sm:hover:bg-inti-green-x sm:hover:border-inti-green-x duration-500'>
                            <Link to="/Discography">
                                <p className='sm:menu-evo text-md '>
                                    VIEW MORE
                                </p>
                            </Link>
                        </div>
                    </div>

                    <Swiper
                        grabCursor={true}
                        //trueにするとnextの時だけ１つ飛ばしになってしまうため、今の所falseで設定
                        loop={false}
                        centeredSlides={true}
                        //  coverflowEffectを使用したい場合
                        /* 
                        effect={"coverflow"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }} */
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: " .swiper-button-next",
                            prevEl: " .swiper-button-prev",
                            clickable: true,
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1150: { slidesPerView: 2.5 },
                            /*coverFlowEffectを使う場合
                            1100: { slidesPerView: 4.5 },*/
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container slide2'
                        initialSlide={2}
                    >
                        {/* 配列にした画像をmap関数を使って表示 */}
                        {discography.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className='
                                    py-2
                                    [&_.swiper-slide-shadow-left]:bg-none
                                    [&_.swiper-slide-shadow-right]:bg-none
                                    '
                            >
                                <div className='text-center my-11'>
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" className='inline-block max-w-[250px] max-h-[250px] button-evo'>
                                        <img
                                            className='mx-auto drop-shadow-xl max-w-[250px] max-h-[250px] hover:opacity-60 duration-500 object-contain'
                                            src={item.imgSrc}
                                            alt={item.alt}
                                            title={`Discography ${index + 1}`}
                                        />
                                        <p className='text-xs sm:text-sm text-center m-1 p-1  text-black line-clamp-1'>{item.title}</p>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className='slider-controller mx-auto w-[100px] container'>
                            <div className='swiper-button-prev slider-arrow h-10 w-1/2 sm:w-1/4 sm:left-1/4 text-5xl'>
                                <ion-icon name="chevron-back-sharp"></ion-icon>
                            </div>
                            <div className='swiper-button-next slider-arrow h-10 w-1/2 sm:w-1/4 sm:right-1/4 text-5xl'>
                                <ion-icon name="chevron-forward-sharp"></ion-icon>
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default MainDiscography