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


      {/* ========================================
          SERVICES DÉTAILLÉS
      ======================================== */}

      <section className="design-services">

        <p className="section-subtitle">
          NOS SERVICES
        </p>

        <h2>

          Tout pour votre

          <span>
            identité visuelle.
          </span>

        </h2>


        <div className="design-grid">


          {/* LOGO */}

          <div className="design-card">

            <div className="design-icon">
              🎨
            </div>

            <h3>
              Création de logos
            </h3>

            <p>
              Création d'un logo professionnel,
              moderne et adapté à votre marque.
            </p>

          </div>


          {/* AFFICHES */}

          <div className="design-card">

            <div className="design-icon">
              🖼️
            </div>

            <h3>
              Affiches et flyers
            </h3>

            <p>
              Création d'affiches et flyers
              attractifs pour vos événements.
            </p>

          </div>


          {/* RÉSEAUX */}

          <div className="design-card">

            <div className="design-icon">
              📱
            </div>

            <h3>
              Réseaux sociaux
            </h3>

            <p>
              Création de publications modernes
              pour Instagram, Facebook et autres.
            </p>

          </div>


          {/* IDENTITÉ */}

          <div className="design-card">

            <div className="design-icon">
              ✨
            </div>

            <h3>
              Identité visuelle
            </h3>

            <p>
              Création d'une identité visuelle
              cohérente pour votre entreprise.
            </p>

          </div>


        </div>

      </section>


    </div>

  );
}

export default DesignGraphique;