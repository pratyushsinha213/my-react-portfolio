import './card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, hRef, heading }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={heading} />
            <h3>{heading}</h3>
            <a href={hRef} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default Card;
