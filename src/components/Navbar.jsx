
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();


  // ============================================
  // SERVICES
  // ============================================

  const handleServices = (e) => {

    e.preventDefault();

    if (location.pathname === "/") {

      const services =
        document.getElementById("services");

      if (services) {

        services.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    } else {

      navigate("/?section=services");

    }
  };


  // ============================================
  // À PROPOS
  // ============================================

  const handleAbout = (e) => {

    e.preventDefault();

    if (location.pathname === "/") {

      const about =
        document.getElementById("about");

      if (about) {

        about.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    } else {

      navigate("/?section=about");

    }
  };


  // ============================================
  // CONTACT
  // ============================================

  const handleContact = (e) => {

    e.preventDefault();

    // Si on est déjà sur l'accueil
    if (location.pathname === "/") {

      const contact =
        document.getElementById("contact");

      if (contact) {

        contact.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    } else {

      // Si on est sur une autre page,
      // revenir à l'accueil avec la section contact
      navigate("/?section=contact");

    }
  };


  return (

    <nav className="navbar">


      {/* ============================================
          LOGO
      ============================================ */}

      <Link
        to="/"
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

      </Link>


      {/* ============================================
          NAVIGATION
      ============================================ */}

      <ul className="nav-links">


        {/* ==========================================
            ACCUEIL
        ========================================== */}

        <li>

          <Link to="/">
            Accueil
          </Link>

        </li>


        {/* ==========================================
            SERVICES
        ========================================== */}

        <li>

          <a
            href="#services"
            onClick={handleServices}
          >
            Services
          </a>

        </li>


        {/* ==========================================
            À PROPOS
        ========================================== */}

        <li>

          <a
            href="#about"
            onClick={handleAbout}
          >
            À propos
          </a>

        </li>


        {/* ==========================================
            CONTACT
        ========================================== */}

        <li>

          <a
            href="#contact"
            onClick={handleContact}
          >
            Contact
          </a>

        </li>

      </ul>


      {/* ============================================
          BOUTON NOUS CONTACTER
      ============================================ */}

      <a
        href="#contact"
        className="nav-button"
        onClick={handleContact}
      >
        Nous contacter
      </a>


    </nav>

  );

}

export default Navbar;
