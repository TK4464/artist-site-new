import React from 'react'

const socialMediaLinks = [
    {
        name: 'Twitter',
        href: 'https://twitter.com/naotointiraymi',
        icon: '/public/snstwitter.svg'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/naotointiraymi_710/',
        icon: '/public/snsinsta.svg'
    },

    {
        name: 'Facebook',
        href: 'https://www.facebook.com/%E3%83%8A%E3%82%AA%E3%83%88%E3%82%A4%E3%83%B3%E3%83%86%E3%82%A3%E3%83%A9%E3%82%A4%E3%83%9F-862367297154208/',
        icon: '/public/snsfb.svg'
    },

    {
        name: 'Line',
        href: 'https://line.me/R/ti/p/%40naotointiraymi',
        icon: '/public/snsline.svg'
    },
];

const Sns = () => {
    return (
        <div>
            <ul className='flex justify-center'>
                {socialMediaLinks.map((socialMedia, index) =>
                (<li key={index} className='my-1 mx-1 md:mx-4 xl:mx-2'>
                    <a href={socialMedia.href} target='_blank' rel='noopener noreferrer'>
                        <img className="h-6 md:h-7" src={socialMedia.icon} alt={`${socialMedia.name}アカウント`} />
                    </a>
                </li>))
                }
            </ul>
        </div>
    )
}

export default Sns