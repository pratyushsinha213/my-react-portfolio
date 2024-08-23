import { faBootstrap, faCss3, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './about.scss';
import BG2 from "./BG2";

const About = () => {
    return (
        <>
        <BG2 />
        <div className="container about-page">
            <div className="text-zone">
                <h1>About Me</h1>
                <p>Hi there, Pratyush here✌️.</p>
                <p>I am currently in my final year at VIT Vellore, pursuing a B.Tech in Computer Science and Engineering.</p>
                <p>As an aspiring software developer with a passion for full stack web development, I am proficient in HTML, CSS, and JavaScript, with hands-on experience in frameworks and libraries such as React.js, Node.js, and MongoDB.</p>
                <p>I am always open to fellow professionals and would be delighted to connect and explore potential opportunities to collaborate.</p>
            </div>

            {/* My shit here */}
            <div className="stage-container">
                <div className="translate-icons">
                    <div className="face1">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faBootstrap} color='#861BF8' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;