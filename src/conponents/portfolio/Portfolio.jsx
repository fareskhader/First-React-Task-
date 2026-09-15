import capin from './../../assets/cabin.png'
import cake from './../../assets/cake.png'
import circus from './../../assets/circus.png'
import game from './../../assets/game.png'
import safe from './../../assets/safe.png'
import submarine from './../../assets/submarine.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Porfolio(){

    return<div className='Porfolio py-5'>
    <div className=' container d-flex flex-column align-items-center justify-content-center gap-lg-2 gap-sm-0 ' >
           <h2 className='secondary_textcolor heading2_font_size custom-font fw-bold text-uppercase pt-3 text-center'>Portfolio</h2>
        <div className='divider-custom'>
          <span className='divider-custom-line-dark'></span>
          <FontAwesomeIcon className='divider-custom-icon-dark' icon={faStar} />
          <span className='divider-custom-line-dark'></span>
        </div>

<div className='row justify-content-center align-items-center '>
    <div className=' flex-grow-1 col-md-6 col-lg-4 p-sm-2 p-lg-4'>
    <img className='w-100 rounded-2' src={capin} />
    </div>
    <div className='flex-grow-1 col-md-6 col-lg-4 p-sm-2 p-lg-4'>
    <img className='w-100 rounded-2' src={cake} />
    </div>
    <div className='flex-grow-1 col-md-6 col-lg-4 p-sm-2 p-lg-4'>
    <img className='w-100 rounded-2' src={circus} />
    </div>
     <div className=' flex-grow-1 col-md-6 col-lg-4 p-sm-2 p-lg-4'>
    <img className='w-100 rounded-2' src={game} />
    </div>
    <div className='flex-grow-1 col-md-6 col-lg-4 p-sm-2 p-lg-4'>
    <img className='w-100 rounded-2' src={safe} />
    </div>
    <div className='flex-grow-1 col-md-6 col-lg-4 p-sm-2 p-lg-4'>
    <img className='w-100 rounded-2' src={submarine} />
    </div>
</div>

    </div>
    </div>
}

export default Porfolio;