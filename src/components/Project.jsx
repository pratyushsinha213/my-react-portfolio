import Card from './Card';
import NomadNav from '../assets/nomadnav.png';
import Portfolio from '../assets/portfolio.png';
import Event from '../assets/event.png'

const Project = () => {
    return (
        <div className="project">
            <Card 
                imgSrc={NomadNav} 
                hRef='https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html'
                heading="Travel Itinerary Planner" 
            />
            <Card 
                imgSrc={Portfolio} 
                hRef='https://pratyushsinha213.github.io/my-react-portfolio/'
                heading="Portfolio"  
            />
            <Card 
                imgSrc={Event} 
                hRef='https://mern-project-frontend-mu.vercel.app/'
                heading="Event Management System (MERN)"  
            />
        </div>
    );
}

export default Project;
