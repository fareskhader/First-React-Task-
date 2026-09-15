import Footer from './conponents/footer/Footer.jsx';
import Hero from './conponents/hero/Hero.jsx';
import Navbar from './conponents/navbar/Navbar.jsx'
import Portfolio from './conponents/portfolio/Portfolio.jsx'
import About from './conponents/about/About.jsx'
import Contact from './conponents/contact/Contact.jsx'
import './index.css'
function app(){

  return <div className=' d-flex flex-column'>
   <Navbar />
    <Hero />
    <Portfolio/>
    <About/>
    <Contact />
    <Footer/>
      </div>

}

export default app;