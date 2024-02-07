import React from 'react'

const banner = [
    {
        name: 'Fanclub',
        href: 'https://www.nananaoto.com/fanclub',
        image: '/public/images/banner1.jpeg'
    },
    {
        name: 'Store',
        href: 'https://store.enjing.jp/sp/',
        image: '/public/images/banner2.jpeg'
    },
    {
        name: 'Songs',
        href: 'http://mobile.enjing.jp/songs/nananaoto/',
        image: '/public/images/banner3.jpeg'
    },
];


const MainOthers = () => {
    return (
        <div>
            <section className='w-full'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto px-8 py-7 border-t-2 border-inti-green-x'>



                    <ul className='lg:flex justify-center'>
                        {banner.map((item, index) => (
                            <li key={index} className='p-2 my-4'>
                                <a href={item.href} target='_blank' rel='noopener noreferrer'>
                                    <img src={item.image} alt={item.name} className='rounded-md mx-auto w-[200px] md:w-[240px]' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default MainOthers