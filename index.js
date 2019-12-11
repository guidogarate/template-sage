const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/Template/layout_1/LTR/material/full"));
app.use(express.static(__dirname + "/libreria"));

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
