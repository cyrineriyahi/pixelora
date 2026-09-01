
import { useNavigate } from "react-router-dom";
import "./MontageVideo.css";

function MontageVideo() {

  const navigate = useNavigate();

  // Ouvrir le formulaire avec le service choisi
  const ouvrirFormulaire = (service) => {
    navigate("/formulaire-service", {
      state: { service: service }
    });
  };

  return (

    <div className="montage-page">

      {/* ========================================
          HERO MONTAGE VIDEO
      ======================================== */}

      <section className="montage-hero">

        {/* PARTIE GAUCHE */}

        <div className="montage-content">

          {/* PETIT TEXTE */}

          <p className="montage-subtitle">
            PIXLORA • CRÉATIVITÉ • VIDÉO
          </p>


          {/* TITRE */}

          <h1 className="montage-title">

            <span className="montage-title-main">
              MONTAGE
            </span>

            <span className="montage-title-script">
              Vidéo
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="montage-description">

            Des vidéos qui <strong>captivent</strong>,
            <br />

            des contenus qui <strong>marquent.</strong>

          </p>


          {/* ========================================
              SERVICES VIDEO
          ======================================== */}

          <div className="montage-service-list">


            {/* TIKTOK / INSTAGRAM */}

            <button
              className="montage-service-button"
              onClick={() =>
                ouvrirFormulaire(
                  "Montage pour TikTok, Instagram, Facebook et YouTube"
                )
              }
            >

              <span className="montage-service-icon">
                🎬
              </span>

              <span>

                <strong>
                  Montage pour
                </strong>

                <br />

                TikTok, Instagram,
                <br />

                Facebook et YouTube

              </span>

            </button>


            {/* VIDEOS PROMOTIONNELLES */}

            <button
              className="montage-service-button"
              onClick={() =>
                ouvrirFormulaire(
                  "Vidéo promotionnelle"
                )
              }
            >

              <span className="montage-service-icon">
                📢
              </span>

              <span>

                <strong>
                  Vidéos
                </strong>

                <br />

                promotionnelles

              </span>

            </button>


            {/* REELS */}

            <button
              className="montage-service-button"
              onClick={() =>
                ouvrirFormulaire(
                  "Reels et contenus dynamiques"
                )
              }
            >

              <span className="montage-service-icon">
                🎞️
              </span>

              <span>

                <strong>
                  Reels et contenus
                </strong>

                <br />

                dynamiques

              </span>

            </button>


          </div>


          {/* SLOGAN */}

          <p className="montage-slogan">

            Des idées. Du rythme.
            <br />

            Des émotions.

          </p>

        </div>


        {/* ========================================
            PARTIE DROITE : PHOTO
        ======================================== */}

        <div className="montage-image-container">

          <img
            src="/Evideo.jpg"
            alt="Montage vidéo Pixlora"
            className="montage-image"
          />

        </div>

      </section>


      {/* ========================================
          SERVICES DÉTAILLÉS
      ======================================== */}

      <section className="montage-services">

        <p className="montage-section-subtitle">
          NOS SERVICES
        </p>

        <h2>
          Des vidéos qui
          <span> font la différence.</span>
        </h2>


        <div className="montage-grid">


          {/* CARD 1 */}

          <div className="montage-card">

            <div className="montage-card-icon">
              🎬
            </div>

            <h3>
              Montage réseaux sociaux
            </h3>

            <p>
              Création de vidéos dynamiques
              pour TikTok, Instagram, Facebook
              et YouTube.
            </p>

          </div>


          {/* CARD 2 */}

          <div className="montage-card">

            <div className="montage-card-icon">
              📢
            </div>

            <h3>
              Vidéos promotionnelles
            </h3>

            <p>
              Création de vidéos professionnelles
              pour présenter vos produits
              et services.
            </p>

          </div>


          {/* CARD 3 */}

          <div className="montage-card">

            <div className="montage-card-icon">
              📱
            </div>

            <h3>
              Reels et Shorts
            </h3>

            <p>
              Des contenus courts, modernes
              et dynamiques adaptés aux réseaux sociaux.
            </p>

          </div>


          {/* CARD 4 */}

          <div className="montage-card">

            <div className="montage-card-icon">
              ✨
            </div>

            <h3>
              Effets et animations
            </h3>

            <p>
              Ajout d'effets, transitions,
              animations et éléments visuels.
            </p>

          </div>


        </div>

      </section>


    </div>

  );
}

export default MontageVideo;
