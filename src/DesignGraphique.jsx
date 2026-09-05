import { useNavigate } from "react-router-dom";

import "./DesignGraphique.css";

function DesignGraphique() {

  const navigate = useNavigate();


  return (

    <div className="design-page">


      {/* ========================================
          HERO DESIGN GRAPHIQUE
      ======================================== */}

      <section className="design-hero">


        {/* PARTIE GAUCHE */}

        <div className="design-hero-content">


          {/* SOUS-TITRE */}

          <p className="design-subtitle">
            PIXLORA • CRÉATIVITÉ • DESIGN
          </p>


          {/* TITRE */}

          <h1 className="design-title">

            <span className="design-title-main">
              DESIGN
            </span>

            <span className="design-title-script">
              Graphique
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="design-description">

            Des visuels qui
            <strong> communiquent</strong>,

            <br />

            une identité qui
            <strong> marque.</strong>

          </p>


          {/* ========================================
              SERVICES
          ======================================== */}

          <div className="design-service-list">


            {/* CRÉATION LOGOS */}

            <button
              className="design-service-button"
              onClick={() =>
                navigate(
                  "/formulaire-service",
                  {
                    state: {
                      service: "Création de logos"
                    }
                  }
                )
              }
            >

              <span className="design-service-icon">
                ✒
              </span>

              <span className="design-service-text">
                Création de logos
              </span>

            </button>


            {/* AFFICHES */}

            <button
              className="design-service-button"
              onClick={() =>
                navigate(
                  "/formulaire-service",
                  {
                    state: {
                      service: "Affiches et flyers"
                    }
                  }
                )
              }
            >

              <span className="design-service-icon">
                ▧
              </span>

              <span className="design-service-text">
                Affiches et flyers
              </span>

            </button>


            {/* RÉSEAUX SOCIAUX */}

            <button
              className="design-service-button"
              onClick={() =>
                navigate(
                  "/formulaire-service",
                  {
                    state: {
                      service:
                        "Publications pour les réseaux sociaux"
                    }
                  }
                )
              }
            >

              <span className="design-service-icon">
                💬
              </span>

              <span className="design-service-text">

                Publications pour

                <br />

                les réseaux sociaux

              </span>

            </button>


            {/* IDENTITÉ VISUELLE */}

            <button
              className="design-service-button"
              onClick={() =>
                navigate(
                  "/formulaire-service",
                  {
                    state: {
                      service: "Identité visuelle"
                    }
                  }
                )
              }
            >

              <span className="design-service-icon">
                ☆
              </span>

              <span className="design-service-text">
                Identité visuelle
              </span>

            </button>


          </div>


          {/* SLOGAN */}

          <p className="design-slogan">

            Créons ensemble

            <span>
              l'image de votre succès.
            </span>

          </p>


        </div>


        {/* ========================================
            PHOTO À DROITE
        ======================================== */}

        <div className="design-hero-image">

          <img
            src="/designegraphique.jpg"
            alt="Design graphique Pixlora"
          />

        </div>


      </section>


    </div>

  );
}

export default DesignGraphique;