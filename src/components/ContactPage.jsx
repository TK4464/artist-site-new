import React from 'react'
import { useEffect } from 'react';
import ContactBody from './ContactComponents/ContactBody'

const ContactPage = () => {
    // ページがマウントされたときにトップにスクロール
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ContactBody />
        </div>
    )
}

export default ContactPage