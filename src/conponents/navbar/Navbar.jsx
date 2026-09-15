function Navbar() {
  return (
       <nav className="navbar navbar-expand-lg navbar-dark secondary_background py-2">
  <div className="container">
    
    <a className="navbar-brand custom-font fs-2 fw-bold text-white" href="#">
      Start Bootstrap
    </a>

    <button className="navbar-toggler p-3 d-flex align-items-center gap-1 green_background text-white d-block d-lg-none" 
      type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" 
      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="text-uppercase fs-6 fw-light">menu</span>
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse custom-font fw-bold" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fs-6">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
    
  );
}

export default Navbar;
