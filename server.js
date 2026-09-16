const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Liste des clés valides (à remplacer par une base de données si besoin)
const VALID_KEYS = ["CLE-SECRET-123", "CLE-DEMO-456"];

app.post('/api/verify-key', (req, res) => {
    const { key } = req.body;
    if (VALID_KEYS.includes(key)) {
        return res.json({ valid: true });
    }
    return res.status(403).json({ valid: false });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur actif sur le port ${PORT}`));
