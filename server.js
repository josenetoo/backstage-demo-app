const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080; // Altera a porta para 8080

app.get("/", (req, res) => {
  res.send("Minha App está rodando no Backstage!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

