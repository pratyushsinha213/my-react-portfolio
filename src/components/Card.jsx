import './card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ imgSrc, heading, hRef }) => {
  return (
    <div className='card'>
        <img className='card-img' src={imgSrc} alt="img" style={{width: '350px', height: '200px'}}/>
        <a target={'_blank'} style={{textDecoration: 'none'}} href={hRef}><h2 className='card-heading'>{heading}</h2></a>
        {/* <p className='card-p'>{paragraph}</p> */}
    </div>
  )
}

export default Card;
