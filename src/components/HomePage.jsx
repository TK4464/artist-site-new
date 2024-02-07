import React, { Suspense } from 'react'
import { useEffect } from 'react';
import MainVisual from './HomeComponents/MainVisual'
import MainPickUp from './HomeComponents/MainPickUp'
import MainNews from './HomeComponents/MainNews'
import MainDiscography from './HomeComponents/MainDiscography'
import MainVideo from './HomeComponents/MainVideo'
import MainOthers from './HomeComponents/MainOthers';
import Three from './ThreeComponents/Three'



const HomePage = () => {
    // ページがマウントされたときにトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <MainVisual />
            <MainPickUp />
            <MainNews />
            <MainDiscography />
            <MainVideo />
            <MainOthers />
            <Suspense fallback={<div>Loading...</div>}>
                <Three />
            </Suspense>
        </div>
    )
}

export default HomePage