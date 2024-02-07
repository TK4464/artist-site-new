import React from 'react'
import { useEffect } from 'react';
import NewsBody from './NewsComponents/NewsBody'

const NewsPage = () => {
    // ページがマウントされたときにトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NewsBody />
        </div>
    )
}

export default NewsPage