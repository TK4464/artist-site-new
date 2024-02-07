import React from 'react'

const discoGraphyGrid = [
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_f5813ded5086e88822c085cfe95d6ad3?ret=%2Fdiscography",
        imgSrc: "/public/images/discography1.jpeg",
        alt: "discography1",
        category: "ALBUM",
        release: "2023.07.19 Release",
        title: "アドナイン（初回限定ファンクラブ盤）",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_2ec5ea5220aeecf2edc3094d3d518546?ret=%2Fdiscography",
        imgSrc: "/public/images/discography6.jpeg",
        alt: "discography2",
        category: "ALBUM",
        release: "2023.07.19 Release",
        title: "アドナイン（通常盤）",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_88d760fb22233878f0d7d4b7487adda6?ret=%2Fdiscography",
        imgSrc: "/public/images/discography2.jpeg",
        alt: "discography3",
        category: "DOWNLOAD",
        release: "2023.06.28 Release",
        title: "ひそかに絶好調(with wacci）",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_8a2d2109ca54f9eb59acda5b334d7f9f?ret=%2Fdiscography",
        imgSrc: "/public/images/discography3.jpeg",
        alt: "discography4",
        category: "DOWNLOAD",
        release: "2023.06.07 Release",
        title: "memo",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_807ecab97565775ee077474d7b1cb713?ret=%2Fdiscography",
        imgSrc: "/public/images/discography4.jpeg",
        alt: "discography5",
        category: "DVD & BD",
        release: "Release",
        title: "ナオト・インティライミ＠ぴあアリーナMM ティライミワールド カーニバル2022〜絶対に見逃せないLIVEがそこにはある〜 (Blu-ray/完全受注生産限定ファンクラブ盤)",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_93d7b05bc22336403c1b835248e97076?ret=%2Fdiscography",
        imgSrc: "/public/images/discography5.jpeg",
        alt: "discography6",
        category: "DVD & BD",
        release: "Release",
        title: "ナオト・インティライミ＠ぴあアリーナMM ティライミワールド カーニバル2022〜絶対に見逃せないLIVEがそこにはある〜(DVD/完全受注生産限定ファンクラブ盤)",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_e2bb146374185249adba81532f479a01?ret=%2Fdiscography",
        imgSrc: "/public/images/discography7.jpeg",
        alt: "discography7",
        category: "DOWNLOAD",
        release: "2023.05.17 Release",
        title: "愛してた(feat.れん)",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_6b71ef5217c5e3e1eb2858f118fb4f82?ret=%2Fdiscography",
        imgSrc: "/public/images/discography8.jpeg",
        alt: "discography8",
        category: "DOWNLOAD",
        release: "2023.04.14 Release",
        title: "With",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_8f3fe26bfecd45edb8eee6c017348d30?ret=%2Fdiscography",
        imgSrc: "/public/images/discography9.jpeg",
        alt: "discography9",
        category: "DOWNLOAD",
        release: "2023.03.29 Release",
        title: "桜小町(feat.缶缶)",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_45d34097ec93b9eca86e300c5822a58a?ret=%2Fdiscography",
        imgSrc: "/public/images/discography10.jpeg",
        alt: "discography10",
        category: "DOWNLOAD",
        release: "2023.03.01 Release",
        title: "EQ(feat.Rin音)",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_b95c043063568ae78e66da00741d70a9?ret=%2Fdiscography",
        imgSrc: "/public/images/discography11.jpeg",
        alt: "discography11",
        category: "DOWNLOAD",
        release: "2023.02.08 Release",
        title: "Secret",
    },
    {
        href: "https://www.nananaoto.com/discography/ENJ_naoto_discography_b521079146057ddc11242bfa848e9f77?ret=%2Fdiscography",
        imgSrc: "/public/images/discography12.jpeg",
        alt: "discography12",
        category: "DOWNLOAD",
        release: "2023.01.18 Release",
        title: "パッキャマラード",
    },
];

const DiscographyBody = () => {
    return (
        <div>
            <section className='w-full h-full'>
                <div className='max-w-[1000px] md:w-3/4 mx-auto'>
                    <h2 className='text-2xl lg:text-3xl mt-12 mb-6 text-center py-2 text-black font-normal font-lato'>DISCOGRAPHY</h2>
                    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5 pb-12 '>
                        {discoGraphyGrid.map((item, index) => (
                            <a key={index} href={item.href} target='_blank' rel='noopener noreferrer'>
                                <div className='flex md:block p-3 border mx-2 md:my-0 md:mx-5 md:button-evo md:border-none'>
                                    <div className='basis-1/3'>
                                        <img src={item.imgSrc} alt={item.alt} className='w-[100px] md:w-[250px] mx-auto drop-shadow md:hover:opacity-60 duration-500' />
                                    </div>
                                    <div className='px-5 md:px-0 xl:mx-0 text-sm basis-2/3'>
                                        <p className='inline-block mt-2 px-2 py-1 text-gray-400 text-xs border rounded-full font-normal'>{item.category}</p>
                                        <p className='text-gray-400 text-xs sm:text-sm font-times italic'>{item.release}</p>
                                        <p className='text-gray-800 text-xs sm:text-sm line-clamp-2 md:line-clamp-none'>{item.title}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DiscographyBody