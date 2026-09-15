import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
  <div>
     <div className=' py-5 container d-flex flex-column align-items-center justify-content-center gap-lg-2 gap-sm-0 ' >
               <h2 className='secondary_textcolor heading2_font_size custom-font fw-bold text-uppercase pt-3 text-center'>Contact Me</h2>
            <div className='divider-custom'>
              <span className='divider-custom-line-dark'></span>
              <FontAwesomeIcon className='divider-custom-icon-dark' icon={faStar} />
              <span className='divider-custom-line-dark'></span>
            </div>
            <div className=' w-75'>
              <form className=' d-flex flex-column justify-content-center'>
  <div class="mb-1 mb-lg-3">
    <input type="text"  placeholder='Full Name' class="form-control fs-5 border-0 " id="exampleInputEmail1" required aria-describedby="emailHelp"/>
  </div>
  <hr />
  <div class="mb-1 mb-lg-3">
    <input type="email"  placeholder='Email Addres' class="form-control fs-5 border-0 " id="exampleInputEmail1" required aria-describedby="emailHelp"/>
  </div>
  <hr />
   <div class="mb-1 mb-lg-3">
    <input type="number"  placeholder='Phone Number' class="form-control fs-5 border-0 " id="exampleInputEmail1" required aria-describedby="emailHelp"/>
  </div>
  <hr />
   <div class=" mb-5 ">
    <input type="text"  placeholder='Message' class="form-control fs-5 border-0 " id="exampleInputEmail1" required aria-describedby="emailHelp"/>
  </div>
  <hr />

  <button type="submit" class=" w-15 p-3 border-0 rounded-2  text-white fs-6 green_background">Send</button>
</form>
            </div>
    
    
        </div>
        </div>
    
  )
}

export default Contact