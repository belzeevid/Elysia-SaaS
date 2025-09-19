const express = require('express');
const app = express();

// El puerto en el que correrá el servidor
const PORT = process.env.PORT || 3000;

// Esta es tu primera ruta
app.get('/', (req, res) => {
    res.send('¡Servidor de Elysia funcionando!');
});

// El servidor empieza a escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});