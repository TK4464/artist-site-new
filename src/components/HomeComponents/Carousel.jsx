import { useState, useEffect } from "react"
//import { ChevronLeft, ChevronRight } from "react-feather"

function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 8000,
}) {
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    const goToSlide = (slideIndex) =>
        setCurr(slideIndex);

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className='overflow-hidden relative group container w-full m-auto'>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>

            {/*/ 左右のカーソル必要な場合 */}
            {/*<div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft size={30} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white"
                >
                    <ChevronRight size={30} />
                </button>
            </div>*/}

            <div className='container absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className={`container 
                transition-all w-2 h-2 bg-inti-green-x rounded-full
                ${curr === slideIndex ? "p-1" : "bg-opacity-30"}
            `}

                            onClick={() => goToSlide(slideIndex)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel