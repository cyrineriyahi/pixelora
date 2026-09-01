import { useLocation, useNavigate } from "react-router-dom";
import "./FormulaireService.css";

function FormulaireService() {
  const location = useLocation();
  const navigate = useNavigate();

  // Service choisi
  const service = location.state?.service || "Service";

  // Envoyer le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Récupérer les données du formulaire
    const formData = new FormData(e.target);

    const demande = {
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      service: service,
      description: formData.get("description"),
    };

    try {
      // Envoyer les données au serveur Node.js
      const response = await fetch("http://localhost:5000/api/demandes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(demande),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'envoi");
      }

      alert("Votre demande a été enregistrée avec succès !");

      navigate("/design-graphique");

    } catch (error) {
      console.error("Erreur :", error);

      alert(
        "Une erreur est survenue. Vérifiez que le serveur est bien démarré."
      );
    }
  };

  return (
    <div className="formulaire-page">

      <div className="formulaire-container">

        {/* TITRE */}
        <p className="formulaire-subtitle">
          PIXLORA • VOTRE PROJET
        </p>
<h1>
  Parlons de votre{" "}
  <span>
    projet.
  </span>
</h1>

        <p className="formulaire-description">
          Remplissez ce formulaire et expliquez-nous votre projet.
        </p>

        {/* SERVICE CHOISI */}
        <div className="service-choisi">
          Service choisi :
          <strong>
            {service}
          </strong>
        </div>

        {/* FORMULAIRE */}
        <form onSubmit={handleSubmit}>

          {/* NOM */}
          <div className="form-group">
            <label>Nom</label>

            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
            />
          </div>

          {/* PRÉNOM */}
          <div className="form-group">
            <label>Prénom</label>

            <input
              type="text"
              name="prenom"
              placeholder="Votre prénom"
              required
            />
          </div>

          {/* TÉLÉPHONE */}
          <div className="form-group">
            <label>Téléphone</label>

            <input
              type="tel"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>
              Description de votre projet
            </label>

            <textarea
              name="description"
              placeholder="Décrivez votre projet..."
              required
            ></textarea>
          </div>

          {/* BOUTONS */}
          <div className="form-buttons">

            <button
              type="button"
              className="back-button"
              onClick={() =>
                navigate("/design-graphique")
              }
            >
              ← Retour
            </button>

            <button
              type="submit"
              className="form-button"
            >
              Envoyer ma demande
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default FormulaireService;