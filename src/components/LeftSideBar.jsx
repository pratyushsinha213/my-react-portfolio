import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/PS.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LeftSideBar = () => {
  return (
    <>
    <div className="nav-bar-left">
        <Link className='logo' to="/">
            <img className="logo-nav" src={logo} alt="PS" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/project">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/pratyush-sinha-483770218/"><FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/></a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href="https://github.com/pratyushsinha213"><FontAwesomeIcon icon={faGithub} color='#4d4d4e'/></a>
            </li>
        </ul>
    </div>
    </>
  );
}

export default LeftSideBar;