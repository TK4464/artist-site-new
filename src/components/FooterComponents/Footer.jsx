import React from 'react'
import Sns from '../HeaderComponents/Sns'

const Footer = () => {
    return (
        <div>
            <section className='w-full py-8 bg-black'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto'>
                    <Sns />
                    <div className='text-center my-2 mx-auto'>
                        <small className='text-gray-400 text-[0.5rem] font-light'>&copy;2023 NAOTO INTI RAYMI</small>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer