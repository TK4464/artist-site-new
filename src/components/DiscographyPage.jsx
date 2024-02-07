import React from 'react'
import { useEffect } from 'react';
import DiscographyBody from './DiscographyComponents/DiscographyBody'

const DiscographyPage = () => {
    // ページがマウントされたときにトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <DiscographyBody/>
        </div>
    )
}

export default DiscographyPage