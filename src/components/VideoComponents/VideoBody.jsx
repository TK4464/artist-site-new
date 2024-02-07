import React from 'react'

const videoGrid = [
    {
        href: "https://www.youtube.com/watch?v=SLJz9ZxeREo",
        imgSrc: "/public/images/modalvisual1.jpeg",
        alt: "video1",
        title: "ナオト・インティライミ「サマータイム マジック」Music Video",
    },
    {
        href: "https://www.youtube.com/watch?v=VwZUcRe08X4",
        imgSrc: "/public/images/video1.jpeg",
        alt: "video2",
        title: "ナオト・インティライミ「ひそかに絶好調(with wacci)」Lyric Video",
    },
    {
        href: "https://www.youtube.com/watch?v=Nj90OHxCYCE",
        imgSrc: "/public/images/video2.jpeg",
        alt: "video3",
        title: "ナオト・インティライミ「memo」Lyric Video",
    },
    {
        href: "https://www.youtube.com/watch?v=PUaTIJED0EI",
        imgSrc: "/public/images/video3.jpeg",
        alt: "video4",
        title: "ナオト・インティライミ「愛してた(feat.れん)」Music Video",
    },
    {
        href: "https://youtube.com/shorts/3Q7A_DAbWTE?feature=share",
        imgSrc: "/public/images/video4.jpeg",
        alt: "video5",
        title: "ステージ上で自らを追い込むナオト",
    },
    {
        href: "https://youtube.com/shorts/UIKbMIqFxOo?feature=share",
        imgSrc: "/public/images/video5.jpeg",
        alt: "video6",
        title: "4万人の大合唱",
    },
    {
        href: "https://youtube.com/shorts/IitKExLME3Y?feature=share",
        imgSrc: "/public/images/video6.jpeg",
        alt: "video7",
        title: "バンドメンバー紹介します。",
    },
    {
        href: "https://youtube.com/shorts/pXZVeHDHIyA?feature=share",
        imgSrc: "/public/images/video7.jpeg",
        alt: "video8",
        title: "絶妙すぎる返しをするお客さん",
    },
    {
        href: "https://youtube.com/shorts/d-5MprlJ4So?feature=share",
        imgSrc: "/public/images/video8.jpeg",
        alt: "video9",
        title: "お客さんにも高いクオリティを求めるナオト",
    },
    {
        href: "https://www.youtube.com/watch?v=Q1q-_KD_ZT4",
        imgSrc: "/public/images/video9.jpeg",
        alt: "video10",
        title: "ナオト・インティライミ「Overflows～言葉にできなくて～」Music Video",
    },
    {
        href: "https://www.youtube.com/watch?v=Sfp28lbXW9U",
        imgSrc: "/public/images/video10.jpeg",
        alt: "video11",
        title: "ナオト・インティライミ「未来へ」Music Video",
    },
    {
        href: "https://www.youtube.com/watch?v=zSe-bcW7kwE",
        imgSrc: "/public/images/video11.jpeg",
        alt: "video11",
        title: "ナオト・インティライミ「いつかきっと」Music Video",
    },
];





const VideoBody = () => {
    return (
        <div>
            <section className='w-full h-full'>
                <div className='max-w-[1000px] md:w-3/4 mx-auto pb-1'>
                    <h2 className='text-2xl lg:text-3xl mt-12 mb-6 text-center py-2 text-black font-normal font-lato'>VIDEO</h2>
                    <div className=' mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-5 pb-12 '>
                        {videoGrid.map((item, index) => (
                            <div className=' mx-auto mb-3 pt-3 md:mb-0' key={index}>
                                <a href={item.href} target='_blank' rel='noopener noreferrer' className='inline-block max-w-[290px] max-h-[290px] sm:button-evo'>
                                    <img
                                        className='mx-auto drop-shadow-xl max-w-[290px] max-h-[290px] object-cover md:hover:opacity-60 duration-500'
                                        src={item.imgSrc}
                                        alt={item.alt}
                                        title={`Discography ${index + 1}`}
                                    />
                                    <p className='m-1 p-1 text-black text-sm line-clamp-3'>{item.title}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='text-center mb-14'>
                        <a href='https://www.youtube.com/user/naotochannel' target='_blank' rel='noopener noreferrer' className='text-sky-500 md:hover:opacity-60 duration-500 text-xs sm:text-sm'>▶︎ naotochannel – YouTube</a>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default VideoBody