import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
//import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const video = [
    {
        href: "https://www.youtube.com/watch?v=VwZUcRe08X4",
        imgSrc: "/public/images/video1.jpeg",
        alt: "video1",
        title: "ナオト・インティライミ「ひそかに絶好調(with wacci)」Lyric Video",
    },
    {
        href: "https://www.youtube.com/watch?v=Nj90OHxCYCE",
        imgSrc: "/public/images/video2.jpeg",
        alt: "video2",
        title: "ナオト・インティライミ「memo」Lyric Video",
    },
    {
        href: "https://youtube.com/shorts/3Q7A_DAbWTE?feature=share",
        imgSrc: "/public/images/video4.jpeg",
        alt: "video3",
        title: "ステージ上で自らを追い込むナオト",
    },
    {
        href: "https://youtube.com/shorts/UIKbMIqFxOo?feature=share",
        imgSrc: "/public/images/video5.jpeg",
        alt: "video4",
        title: "4万人の大合唱",
    },
    {
        href: "https://youtube.com/shorts/IitKExLME3Y?feature=share",
        imgSrc: "/public/images/video6.jpeg",
        alt: "video5",
        title: "バンドメンバー紹介します。",
    },
];

const MainVideo = () => {
    return (
        <div>
            <section className='w-full'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto py-14'>
                    <div className='flex justify-between items-center mx-auto'>
                        <h2 className='text-2xl sm:text-3xl mb-5 text-black font-lato'>
                            VIDEO
                        </h2>
                        <div className='bg-gray-50 text-black border-2 border-black sm:hover:text-white sm:hover:bg-inti-green-x sm:hover:border-inti-green-x pt-1 pb-2 px-3 duration-500'>
                            <Link to="/Video">
                                <p className='sm:menu-evo text-md'>
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
                        /*coverFlowEffectを使う場合
                        effect={"coverflow"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}*/
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: " .swiper-button-next",
                            prevEl: " .swiper-button-prev",
                            clickable: true,
                        }}
                        breakpoints=
                        {{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1150: { slidesPerView: 3 },
                            /*coverFlowEffectを使う場合
                            1100: { slidesPerView: 4.5 },*/
                        }}

                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                        initialSlide={2}
                    >
                        {/* 配列にした画像をmap関数を使って表示 */}
                        {video.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                // 選択していないの画像にかかっているbackgroundーcolorを消す
                                className='
                                    py-2
                                    [&_.swiper-slide]:text-center
                                    [&_.swiper-slide-shadow-left]:bg-none
                                    [&_.swiper-slide-shadow-right]:bg-none
                                    '
                            >
                                <div className='text-center my-11'>
                                    <a href={item.href} target='_blank' rel='noopener noreferrer' className='inline-block max-w-[250px] max-h-[250px] button-evo'>
                                        <img
                                            className='mx-auto drop-shadow-xl max-w-[250px] max-h-[250px] hover:opacity-60 duration-500 object-cover'
                                            src={item.imgSrc}
                                            alt={item.alt}
                                            title={`Discography ${index + 1}`}
                                        />
                                        <p className='m-1 p-1 text-black text-xs sm:text-sm text-center line-clamp-1'>{item.title}</p>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className='slider-controller mx-auto w-[100px]'>
                            <div className='swiper-button-prev slider-arrow h-10 w-1/2 sm:w-1/4 sm:left-1/4 text-5xl'>
                                <ion-icon name="chevron-back-sharp"></ion-icon>
                            </div>
                            <div className='swiper-button-next slider-arrow h-10 w-1/2 sm:w-1/4 sm:right-1/4 text-5xl'>
                                <ion-icon name='chevron-forward-sharp'></ion-icon>
                            </div>
                            <div className='swiper-pagination'></div>
                        </div>
                    </Swiper>
                </div>
            </section>
        </div>
    );
};

export default MainVideo;
