import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faLinkedin,faDribbble } from "@fortawesome/free-brands-svg-icons";


function Footer(){

    return <div class="secondary_background text-white py-lg-5 py-3">
        <div className=" container  d-flex flex-column flex-lg-row ">
  <div class="col-sm-4 p-3 text-center ">
      <div class="card-body d-flex flex-column gap-3">
        <h4 class="card-title text-uppercase fw-bold">Location</h4>
        <p class="card-text">2215 John Daniel Drive
            <br />
Clark, MO 65243</p>
     
    </div>
  </div>
  <div class="col-sm-4 p-3 text-center ">
      <div class="card-body d-flex flex-column gap-3">
        <h4 class="card-title text-uppercase fw-bold">Around the Web</h4>
        <div className=" d-flex justify-content-center align-items-center">
            <a href="#" className=" border-1 p-2 ">
            <FontAwesomeIcon icon={faFacebook} size="2x"/>
             </a> 
             <a href="#" className=" border-1 p-2 ">
            <FontAwesomeIcon icon={faTwitter} size="2x"/>
             </a> 
             <a href="#" className=" border-1 p-2 ">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
             </a> 
             <a href="#" className=" border-1 p-2 ">
            <FontAwesomeIcon icon={faDribbble} size="2x"/>
             </a> 
        </div>
             
    </div>
  </div>
    <div class="col-sm-4 p-3 text-center ">
      <div class="card-body d-flex flex-column gap-3">
        <h4 class="card-title text-uppercase fw-bold">About Freelancer</h4>
        <p class="card-text">Freelance is a free to use, MIT licensed  Bootstrap theme created by <a className="green_color text-decoration-underline" href="#">Start Bootstrap .</a> </p>
     
    </div>
  </div>
  </div>
</div>
}

export default Footer;