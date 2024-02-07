import React from 'react'
import { useEffect } from 'react';
import VideoBody from './VideoComponents/VideoBody'

const VideoPage = () => {
    // ページがマウントされたときにトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <VideoBody />
        </div>
    )
}

export default VideoPage