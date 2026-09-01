import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connexion à MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Tester la connexion
db.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à MySQL :", err);
    return;
  }

  console.log("✅ Connexion à MySQL réussie !");
});

// Route de test
app.get("/", (req, res) => {
  res.send("Serveur Pixlora fonctionne !");
});

// Enregistrer une demande
app.post("/api/demandes", (req, res) => {
  const { nom, prenom, email, telephone, service, description } = req.body;

  const sql = `
    INSERT INTO demandes
    (nom, prenom, email, telephone, service, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nom, prenom, email, telephone, service, description],
    (err, result) => {
      if (err) {
        console.error("❌ Erreur lors de l'enregistrement :", err);

        return res.status(500).json({
          message: "Erreur lors de l'enregistrement"
        });
      }

      res.status(201).json({
        message: "✅ Demande enregistrée avec succès",
        id: result.insertId
      });
    }
  );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
})
