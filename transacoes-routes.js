const express = require("express");
const router = express.Router();

let transacoes
let id = 1;

// GET 
router.get("/", (req, res) => {
    res.json(transacoes);
});

// POST 
router.post("/",(req, res) => {
    const {descricao, valor, tipo, data} = req.body;
    if (!descricao || !valor || !tipo || !data){
        return res.status(400).json({erro: "Dados inválidos"});

    }
    const nova = {id: id++, descricao, valor, tipo, data};
    transacoes.push(nova);

    res.status(201).json(nova);
});

// DELETE 
router.delete("/:id", (req, res) => {
    const idremove = Number(req.params.id);
    const index = transacoes.findIndex(t => t.id === idremove);
    if (index < 0) {
        return res.status(404).json({erro: "Transação não encontrada"});
    }

    transacoes.splice(index, 1);
    res.sendStatus(200);
});

module.exports = router;
