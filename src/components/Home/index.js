import LogoA from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom';
import './index.css'

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br /> I'm 
                    <img src={LogoA} alt="developer"/>
                    leksandar
                    <br />
                    Mobile App Developer
                </h1>
                <h2>
                    Android / Flutter / Git expert
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home