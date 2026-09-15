
import HeroPhoto from './../../assets/HeroPhoto.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


function BasicButtons() {
  return (
    <div className='green_background vh-100'>
    <div className=' container d-flex flex-column align-items-center vh-100 justify-content-center text-white gap-3' >
      
      <img className=' w-20' src={HeroPhoto} />
           <h1 className=' heading_font_size custom-font fw-bold text-uppercase pt-3'>Start Bootstrap</h1>
        <div className='divider-custom'>
          <span className='divider-custom-line'></span>
          <FontAwesomeIcon className='divider-custom-icon' icon={faStar} />
          <span className='divider-custom-line'></span>
        </div>
        <p className='lato-font fs-3'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
    </div>
  );
}

export default BasicButtons;