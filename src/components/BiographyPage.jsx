import React from 'react'
import { useEffect } from 'react';
import BiographyBody from './BiographyComponents/BiographyBody'

const BiographyPage = () => {
    // ページがマウントされたときにトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <BiographyBody />
        </div>
    )
}

export default BiographyPage