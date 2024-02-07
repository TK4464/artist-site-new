import React, { useEffect } from 'react';

const Modal = ({ isVisible, onClose, children }) => {
    // モーダルが開いた時に背景をスクロールできないように固定
    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isVisible);
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isVisible]);

    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') onClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm flex justify-center items-center' id='wrapper' onClick={handleClose}>
            <div className='w-[90%] md:w-[750px] flex flex-col'>
                {/* ボタン */}
                <button className='text-white text-xl place-self-end' onClick={() => onClose()}>&times;</button>
                {/* モーダルのコンテンツ部分 */}
                <div className=' bg-white bg-cover bg-no-repeat bg-center h-[500px] drop-shadow-2xl rounded overflow-y-scroll'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
