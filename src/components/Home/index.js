import LogoA from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom';
import './index.css'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l', 'e', 'k', 's', 'a', 'n', 'd', 'a', 'r']
    const jobArray = ['M', 'o', 'b', 'i', 'l', 'e', '', 'A', 'p', 'p', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']


    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoA} alt="developer"/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>
                    Android / Flutter / Git expert
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    );
}

export default Home