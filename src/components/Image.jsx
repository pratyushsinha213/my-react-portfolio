import './image.scss';
import image from '../assets/profile-picture.jpg'

const Image = () => {
  return (
    <div className='image-container'>
        <img className='image' src={image} alt='Profile Pic' />
    </div>
  )
}

export default Image