const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/get-response', (req, res) => {
    const userMessage = req.body.message;

    // Aquí se integraría el modelo de IA
    const aiResponse = "Esta es una respuesta simulada de la IA para la pregunta: " + userMessage;

    res.json({ response: aiResponse });
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
