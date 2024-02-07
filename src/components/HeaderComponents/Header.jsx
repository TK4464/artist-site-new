import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sns from './Sns';



const Header = () => {
    const Links = [
        {
            name: "HOME",
            link: "/"
        },
        {
            name: "NEWS",
            link: "/News"
        },
        {
            name: "BIOGRAPHY",
            link: "/Biography"
        },
        {
            name: "DISCOGRAPHY",
            link: "/Discography"
        },
        {
            name: "VIDEO",
            link: "/Video"
        },
        {
            name: "CONTACT",
            link: "/Contact"
        },
    ];

    const [open, setOpen] = useState(false);

    const handleLinkClick = () => {
        setOpen(false);
    };


    return (
        <header className='text-black border-t-2 bg-gradient-to-b from-white border-inti-green-x w-full left-0 sticky top-0 z-50'>
            <div className='container flex mx-auto py-5 flex-row max-w-[1000px] w-full sm:w-3/4 items-center justify-between px-1 sm:px-0'>
                <div className='mb-0'>
                    <Link to='/'>
                        <h1 className='text-black text-lg sm:text-2xl pb-1 px-3 sm:px-1 font-normal '>NAOTO INTI RAYMI</h1>
                    </Link>
                </div>

                <Sns />

                {/* 1024pxを下回った場合にハンバーガーメニューを表示 */}
                <div onClick={() => setOpen(!open)} className='text-3xl inline-flex items-center justify-center cursor-pointer hover:opacity-60 duration-500 xl:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`p-5 mx-auto bg-inti-green-x opacity-90 bg-opacity-100 pb-12 absolute xl:mx-0 xl:flex xl:items-center xl:bg-opacity-0 xl:pb-0 xl:static xl:z-auto z-[-1] left-0 right-0 w-full lg: xl:w-auto xl:p-0 transition-all duration-500 ease-in ${open ? 'top-3/4' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='xl:menu-ex mx-auto my-4 p-1 hover:opacity-60 duration-500 w-3/4 xl:mx-3 xl:mr-0 xl:my-0'>
                                <Link to={link.link} onClick={() => { handleLinkClick(); window.scrollTo(0, 0); }} className=' block w-full h-full text-white xl:text-gray-800 font-normal'>{link.name}</Link>
                            </li>
                        ))
                    }
                    <div>

                    </div>
                </ul>
            </div>
            <div className='fixed right-[1%] text-[0.1vw] top-[50%] z-50'>
                <Link to='/' className='vertical-rl text-gray-300 relative'>
                    <small>NAOTO INTI RAYMI</small>
                </Link>
            </div>
        </header>
    )
}

export default Header