import { Link } from "react-router-dom";
import './home.scss'
import Image from "./Image";

const Home = () => {
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi, <br /> I am Pratyush <br /> software developer.</h1>
                    <h2>Frontend / Software Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
                {/* <Image /> */}
            </div>
            <Image />
        </>
    );
}

export default Home;