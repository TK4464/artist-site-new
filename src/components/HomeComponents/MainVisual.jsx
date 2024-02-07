import React from 'react'
import Carousel from './Carousel'

const slides = [
    {
        image: "/public/images/mainVisualSlider1.jpeg",
        link: "#",
        id: "1"
    },

    {
        image: "/public/images/mainVisualSlider2.jpeg",
        link: "https://www.nananaoto.com/discography/ENJ_naoto_discography_f5813ded5086e88822c085cfe95d6ad3",
        id: "2"
    },

    {
        image: "/public/images/mainVisualSlider3.jpeg",
        link: "https://www.nananaoto.com/2023_tour/",
        id: "3"

    },
    {
        image: "/public/images/mainVisualSlider4.jpeg",
        link: "https://www.nananaoto.com/discography/ENJ_naoto_discography_2ec5ea5220aeecf2edc3094d3d518546",
        id: "4"
    },
    {
        image: "/public/images/mainVisualSlider5.jpeg",
        link: "https://www.nananaoto.com/discography/ENJ_naoto_discography_8a2d2109ca54f9eb59acda5b334d7f9f",
        id: "5"
    },
]


const MainVisual = () => {
    const handleRedirect = (slide) => {
        slide !== "#" ? window.open(slide, "_blank", "noreferrer") : null;
    }
    return (
        <div>
            <section className=''>
                <div className='container relative w-full md:max-w-[1000px] h-3/4 mt-2 pb-2 mx-auto '>
                    <Carousel autoSlide={true} autoSlideInterval={7000} >
                        {slides.map((slide) => (<img onClick={() => handleRedirect(slide.link)} className='object-contain' src={slide.image} key={slide.id} />))}
                    </Carousel>
                    <div className='text-center mx-auto mt-2'>
                        <span className='
                                w-[2px] h-[35px] bg-gray-50 overflow-hidden absolute
                                after:content-[""] after:absolute after:w-[2px] after:right-0 after:h-[35px] after:bg-gray-700 after:animate-scrolldown-animation'>
                        </span>
                        <span className='scroll-text font-lato vertical-rl text-black'>Scroll</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainVisual
