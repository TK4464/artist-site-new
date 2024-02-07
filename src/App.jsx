import './App.css'
import { HashRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/HeaderComponents/Header';
import Footer from './components/FooterComponents/Footer';
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import BiographyPage from './components/BiographyPage';
import DiscographyPage from './components/DiscographyPage';
import VideoPage from './components/VideoPage';
import ContactPage from './components/ContactPage';
import Particle from './components/ParticlesComponents/Particle';


function App() {
    return (
        <HashRouter>
            <div className='App bg-gray-100 bg-opacity-50 z-[-700]'>
                <Header />
                <Particle />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/News' element={<NewsPage />} />
                    <Route path='/Biography' element={<BiographyPage />} />
                    <Route path='/Discography' element={<DiscographyPage />} />
                    <Route path='/Video' element={<VideoPage />} />
                    <Route path='/Contact' element={<ContactPage />} />
                </Routes>
                <Footer />
            </div>
        </HashRouter>
    );
}

export default App
