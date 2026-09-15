import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return <div className='About py-5 green_background'>
    <div className=' container d-flex flex-column align-items-center justify-content-center gap-lg-2 gap-sm-0 ' >
           <h2 className='text-white heading2_font_size custom-font fw-bold text-uppercase pt-3 text-center'>ABOUT</h2>
        <div className='divider-custom'>
          <span className='divider-custom-line'></span>
          <FontAwesomeIcon className='divider-custom-icon' icon={faStar} />
          <span className='divider-custom-line'></span>
        </div>
        <div className='d-flex  flex-column flex-lg-row gap-3 custom-width '>
    <p className='text-white fw-light  fs-5'>
      Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </p>
    <p className='text-white fw-light  fs-5'>
You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!    </p>
        </div>

        <div>
       <a href="#">
          <button type="button" className="btn btn-outline-light d-flex align-items-center gap-1 p-3">
                        <FontAwesomeIcon size="lg" icon={faDownload} />
                        <span className=' fs-5'>Free Download!</span>
          </button>
          </a>
        </div>


    </div>
    </div>
}

export default About