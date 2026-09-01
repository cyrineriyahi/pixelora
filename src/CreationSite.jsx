
import { useNavigate } from "react-router-dom";
import "./CreationSite.css";

function CreationSite() {

  const navigate = useNavigate();

  // =========================================
  // OUVRIR LE FORMULAIRE
  // =========================================

  const ouvrirFormulaire = (service) => {

    navigate(
      "/formulaire-service",
      {
        state: {
          service: service
        }
      }
    );

  };


  return (

    <div className="creation-site-page">


      {/* =========================================
          HERO
      ========================================= */}

      <section className="creation-site-hero">


        {/* =========================================
            PARTIE GAUCHE
        ========================================= */}

        <div className="creation-site-content">



          {/* PETIT TEXTE */}

          <p className="creation-site-small">
            PIXLORA • CRÉATION DIGITALE
          </p>


          {/* TITRE */}

          <h1 className="creation-site-title">

            <span className="creation-title-main">
              CRÉATION DE
            </span>

            <span className="creation-title-script">
              SITES WEB
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="creation-site-description">

            Des sites <strong>modernes</strong>, performants

            <br />

            et adaptés à tous vos besoins.

          </p>


          {/* =========================================
              SERVICES
          ========================================= */}

          <div className="creation-site-options">


            {/* SERVICE 1 */}

            <div
              className="creation-option"
              onClick={() =>
                ouvrirFormulaire("Site vitrine")
              }
            >

              <div className="option-icon">
                🖥️
              </div>

              <div>

                <h3>
                  Sites vitrines
                </h3>

                <p>
                  Présentez votre activité
                  <br />
                  avec élégance.
                </p>

              </div>

            </div>


            {/* SERVICE 2 */}

            <div
              className="creation-option"
              onClick={() =>
                ouvrirFormulaire("Site professionnel")
              }
            >

              <div className="option-icon">
                💼
              </div>

              <div>

                <h3>
                  Sites professionnels
                </h3>

                <p>
                  Des solutions complètes pour
                  <br />
                  développer votre entreprise.
                </p>

              </div>

            </div>


            {/* SERVICE 3 */}

            <div
              className="creation-option"
              onClick={() =>
                ouvrirFormulaire("Landing page")
              }
            >

              <div className="option-icon">
                🚀
              </div>

              <div>

                <h3>
                  Landing pages
                </h3>
 
                <p>
                  Convertissez vos visiteurs
                  <br />
                  en clients.
                </p>

              </div>

            </div>


            {/* SERVICE 4 */}

            <div
              className="creation-option"
              onClick={() =>
                ouvrirFormulaire("Site responsive / mobile")
              }
            >

              <div className="option-icon">
                📱
              </div>

              <div>

                <h3>
                  Sites adaptés aux mobiles
                </h3>

                <p>
                  Un design responsive pour une
                  <br />
                  expérience parfaite sur tous les écrans.
                </p>

              </div>

            </div>


          </div>


          {/* =========================================
              SLOGAN
          ========================================= */}

          <p className="creation-site-slogan">

            Votre présence en ligne,

            <br />

            <span>
              notre expertise.
            </span>

          </p>


          {/* =========================================
              BOUTON
          ========================================= */}

          <button
            className="creation-site-button"

            onClick={() =>
              ouvrirFormulaire("Création de site web")
            }
          >

            Demander un site web →

          </button>


        </div>


        {/* =========================================
            PARTIE DROITE — PHOTO
        ========================================= */}

        <div className="creation-site-image-container">

          <img
            src="/website.jpg"
            alt="Création de sites web"
            className="creation-site-image"
          />

        </div>


      </section>


      {/* =========================================
          SECTION SERVICES
      ========================================= */}

      <section className="creation-services">


        <p className="creation-section-small">
          NOS SOLUTIONS
        </p>


        <h2>

          Un site pensé pour

          <span>
            votre réussite.
          </span>

        </h2>


        <div className="creation-services-grid">


          {/* CARD 1 */}

          <div className="creation-service-card">

            <div>
              🖥️
            </div>

            <h3>
              Design moderne
            </h3>

            <p>
              Une interface élégante et adaptée
              à votre identité visuelle.
            </p>

          </div>


          {/* CARD 2 */}

          <div className="creation-service-card">

            <div>
              ⚡
            </div>

            <h3>
              Performance
            </h3>

            <p>
              Des pages rapides et optimisées
              pour une meilleure expérience.
            </p>

          </div>


          {/* CARD 3 */}

          <div className="creation-service-card">

            <div>
              📱
            </div>

            <h3>
              Responsive
            </h3>

            <p>
              Votre site fonctionne parfaitement
              sur ordinateur, tablette et mobile.
            </p>

          </div>


          {/* CARD 4 */}

          <div className="creation-service-card">

            <div>
              🔒
            </div>

            <h3>
              Sécurité
            </h3>

            <p>
              Une base solide pour protéger
              votre site et vos données.
            </p>

          </div>


        </div>

      </section>


    </div>

  );

}


export default CreationSite;
