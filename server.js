const express = require("express");
const cors = require("cors");
const transacoesRoutes = require("./routes/transacoes");

const app = express();

app.use(cors());
app.use(express.json());

// monta as rotas 
app.use("/transacoes", transacoesRoutes);

// rota raiz opcional
app.get("/saldo", (req, res) => {
  const entradas = transacoes 
  .filter(t=> t.tipo === "entrada")
  .reduce((s, t) => s + t.vslor, 0);

  const saidas = transacoes
  .filter(t => t.tipo === "saida")
  .reduce((s, t) => s + t.valor , 0);
  res.json({ total: entradas - saidas });
});

app.listen(300, () => console.log("Servidor rodando")); 
