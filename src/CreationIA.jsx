import { useNavigate } from "react-router-dom";
import "./CreationIA.css";

function CreationIA() {

  const navigate = useNavigate();

  return (
    <div className="creation-ia-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="creation-ia-hero">

        {/* =========================================
            PARTIE GAUCHE
        ========================================= */}

        <div className="creation-ia-content">


          {/* PETIT TEXTE */}

          <p className="creation-ia-small">
            PIXLORA • CRÉATION DIGITALE
          </p>


          {/* TITRE */}

          <h1>

            <span className="creation-ia-title-main">
              CRÉATION DE
            </span>

            <span className="creation-ia-title-gradient">
              VIDÉOS
            </span>

            <span className="creation-ia-title-script">
              avec l'IA
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="creation-ia-description">

            Des vidéos <strong>intelligentes</strong>,
            <br />
            créatives et <strong>percutantes.</strong>

          </p>


          {/* SERVICES */}

          <div className="creation-ia-options">


            {/* SERVICE 1 */}

            <button
              className="creation-ia-option"
              onClick={() =>
                navigate("/formulaire-service", {
                  state: {
                    service: "Génération de contenu vidéo avec IA"
                  }
                })
              }
            >

              <div className="creation-ia-icon">
                🤖
              </div>

              <div className="creation-ia-option-text">

                <h3>
                  Génération de contenu vidéo
                </h3>

                <p>
                  Des idées à la vidéo,
                  <br />
                  en quelques clics.
                </p>

              </div>

            </button>


            {/* SERVICE 2 */}

            <button
              className="creation-ia-option"
              onClick={() =>
                navigate("/formulaire-service", {
                  state: {
                    service: "Vidéo publicitaire avec IA"
                  }
                })
              }
            >

              <div className="creation-ia-icon">
                📣
              </div>

              <div className="creation-ia-option-text">

                <h3>
                  Vidéos publicitaires
                </h3>

                <p>
                  Des vidéos qui attirent
                  <br />
                  l'attention et convertissent.
                </p>

              </div>

            </button>


            {/* SERVICE 3 */}

            <button
              className="creation-ia-option"
              onClick={() =>
                navigate("/formulaire-service", {
                  state: {
                    service: "Personnages et animations générées par IA"
                  }
                })
              }
            >

              <div className="creation-ia-icon">
                ✨
              </div>

              <div className="creation-ia-option-text">

                <h3>
                  Personnages et animations
                </h3>

                <p>
                  Des visuels uniques et
                  <br />
                  réalistes, sans limites.
                </p>

              </div>

            </button>

          </div>


          {/* SLOGAN */}

          <p className="creation-ia-slogan">

            L'IA au service de
            <br />

            <span>
              votre créativité.
            </span>

          </p>


          {/* BOUTON */}

          <button
            className="creation-ia-button"
            onClick={() =>
              navigate("/formulaire-service", {
                state: {
                  service: "Création de vidéos avec IA"
                }
              })
            }
          >
            Créer ma vidéo avec IA →
          </button>

        </div>


        {/* =========================================
            PARTIE DROITE — IMAGE
        ========================================= */}

        <div className="creation-ia-image-container">

          <img
            src="/iavideo.jpg"
            alt="Création de vidéos avec intelligence artificielle"
            className="creation-ia-image"
          />

        </div>

      </section>


      {/* =========================================
          SECTION SERVICES
      ========================================= */}

      <section className="creation-ia-services">

        <p className="creation-ia-section-small">
          NOS SOLUTIONS IA
        </p>

        <h2>
          Donnez vie à vos
          <span> idées.</span>
        </h2>


        <div className="creation-ia-grid">


          <div className="creation-ia-card">

            <div className="creation-ia-card-icon">
              🤖
            </div>

            <h3>
              Vidéos IA
            </h3>

            <p>
              Transformez vos idées en vidéos
              créatives grâce à l'intelligence
              artificielle.
            </p>

          </div>


          <div className="creation-ia-card">

            <div className="creation-ia-card-icon">
              🎬
            </div>

            <h3>
              Publicité
            </h3>

            <p>
              Créez des contenus publicitaires
              modernes et captivants.
            </p>

          </div>


          <div className="creation-ia-card">

            <div className="creation-ia-card-icon">
              ✨
            </div>

            <h3>
              Animation IA
            </h3>

            <p>
              Donnez vie à vos personnages,
              produits et concepts.
            </p>

          </div>


          <div className="creation-ia-card">

            <div className="creation-ia-card-icon">
              🚀
            </div>

            <h3>
              Réseaux sociaux
            </h3>

            <p>
              Des vidéos adaptées à Instagram,
              TikTok et autres plateformes.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default CreationIA;