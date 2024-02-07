import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



const MainPickUp = () => {
    const pickup = [
        {
            name: 'pickup1',
            href: 'https://www.nananaoto.com/2023_special/',
            icon: '/public/images/banner4.jpeg'
        },
        {
            name: 'pickup2',
            href: 'https://www.nananaoto.com/2023_tour/',
            icon: '/public/images/banner5.jpeg'
        },
        {
            name: 'pickup3',
            href: 'https://store.enjing.jp/sp/syousai.asp?item=UMCK-1751',
            icon: '/public/images/banner6.jpeg'
        },


    ];

    return (
        <div>
            <section className='w-full p-1 bg-blue-950'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4  mx-auto'>

                    <Swiper
                        grabCursor={true}
                        //trueにするとnextの時だけ１つ飛ばしになってしまうため、今の所falseで設定
                        loop={false}
                        centeredSlides={true}

                        breakpoints=
                        {{
                            0: { slidesPerView: 1.5 },
                            420: { slidesPerView: 2 },
                            1000: { slidesPerView: 3 },
                        }}


                        className='swiper_container slide1'
                        initialSlide={1}
                    >

                        {pickup.map((item, index) => (
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
                                <div key={index} className='p-2 my-2 mx-auto'>
                                    <a href={item.href} target='_blank' rel='noopener noreferrer'>
                                        <img src={item.icon} alt={item.name} className='drop-shadow-xl mx-auto w-[300px]' />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default MainPickUp