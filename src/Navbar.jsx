function Navbar() {

  return (

    <nav className="navbar">

      {/* LOGO */}

      <a
        href="/"
        className="logo"
      >

        <img
          src="/icon logo pixlora.png"
          alt="Pixlora Logo"
          className="logo-image"
        />

        <div className="logo-text">

          <span className="logo-normal">
            pi
          </span>

          <span className="logo-gradient">
            xl
          </span>

          <span className="logo-normal">
            ora
          </span>

        </div>

      </a>


      {/* NAVIGATION */}

      <ul className="nav-links">

        <li>
          <a href="/">
            Accueil
          </a>
        </li>

        <li>
          <a href="/#services">
            Services
          </a>
        </li>

        <li>
          <a href="/about">
            À propos
          </a>
        </li>

        <li>
          <a href="/contact">
            Contact
          </a>
        </li>

      </ul>


      {/* BOUTON */}

      <a
        href="/contact"
        className="nav-button"
      >
        Nous contacter
      </a>

    </nav>

  );
}

export default Navbar;