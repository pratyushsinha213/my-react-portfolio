import Card from './Card';
import './project.scss';
import NomadNav from '../assets/nomadnav.png'
import Portfolio from '../assets/portfolio.png'

const Project = () => {
    return (
        <div className="project">
            <Card 
                imgSrc={NomadNav} 
                hRef='https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html'
                heading="Travel Itinerary Planner" 
                // paragraph="This is paragraph 1"
            />
            <Card 
                imgSrc={Portfolio} 
                hRef='https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html'
                heading="Portfolio"  
                // paragraph="This is paragraph 2"
            />
        </div>
    );
}

export default Project;
