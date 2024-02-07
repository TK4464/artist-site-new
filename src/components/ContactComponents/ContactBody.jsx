import { useState } from 'react'
import videoBg from '../../../public/background1.mp4'
const ContactBody = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div>
            <section className='w-full h-full'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto'>
                    <h2 className='text-2xl lg:text-3xl mt-12 mb-6 py-2 text-black text-center font-normal font-lato '>CONTACT</h2>
                    <div className='pt-3 pb-2 md:pb-10 mb-16'>
                        <div className=' mx-auto'>
                            <video src={videoBg} autoPlay loop muted playsInline className=' max-w-[1000px] mx-auto w-11/12  md:w-3/4 h-[575px] sm:h-[587px] object-cover z-[-250] absolute px-[23px] sm:px-[30px] md:px-8 lg:px-10 xl:px-11 pb-8'></video>
                        </div>
                        <div className=' mx-auto w-11/12  px-10 pb-14'>
                            <h2 className="text-lg sm:text-xl font-medium mt-14 mb-8 text-white text-shadow text-center">お問い合わせ</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="my-4 text-sm sm:text-base text-shadow text-black flex justify-center">
                                    <label htmlFor="name" className='text-white'>名前<br />
                                        <input
                                            placeholder="中村直人"
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="border border-gray-400 px-2 py-1 w-[200px] sm:w-[400px] md:w-[450px] xl:w-[600px] text-black "
                                        />
                                    </label>
                                </div>
                                <div className="my-4 text-black text-shadow flex justify-center">
                                    <label htmlFor="email" className='text-white'>Eメール<br />
                                        <input
                                            placeholder="メールアドレスを入力"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="border border-gray-400 px-2 py-1 w-[200px] sm:w-[400px] md:w-[450px] xl:w-[600px] text-black"
                                        />
                                    </label>
                                </div>
                                <div className="my-4 text-black text-shadow flex justify-center">
                                    <label htmlFor="message" className='text-white'>お問い合わせ内容<br />
                                        <textarea
                                            placeholder="ここに内容を入力"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            className="border border-gray-400 px-2 py-1 w-[200px] sm:w-[400px] md:w-[450px] xl:w-[600px] max-h-[140px] text-black"
                                        ></textarea>
                                    </label>
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        type="submit"
                                        className="text-sm sm:text-base bg-white sm:hover:bg-inti-green-x hover:sky-blue sm:hover:text-white duration-500 border border-black sm:hover:border-inti-green-x text-black px-4 pt-1 my-4 pb-2"
                                    >
                                        <p className='sm:menu-evo'>送信</p>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default ContactBody