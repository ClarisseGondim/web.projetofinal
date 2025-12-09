const API = "http://localhost:3000/transacoes";

// POST - Adicionar transação
async function adicionartransacao() {
  const dados = {
    descricao: document.getElementById("descricao").value,
    valor: Nunber(document.getElementById("valor").value),
    tipo: document.getElementById("tipo").value,
    data:document.getElementById("data").value
  
  };
  await fetch("http:/localhost:300/trasacoes", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(dados)

  });

  carregartransacoes();
  carregarsaldo();
}

//Listagem(get)
async function carregartransacoes() {
  const resposta = await fetch("http://localhost:3000/transacoes"); 
  const lista = await resposta.json();

  const tbody = document.getElementById("lista");
  tbody.innerHTML = "";

  lista.forEach(item => {
    const tr = document.createElement("tr");

  tr.innerHTML =`
    <td>${item.descricao}</td>
    <td>R${item.valor.toFixed(2)}</td>
    <td>${item.tipo}</td>
    <td>${item.data}</td>
    <td><button onclick="remover(${itm.id})">X</button></td>
  `;

  tbody.appendChild(tr);

  });
}

//Remoção
async function remover(id) {
  await fetch(`http://localhost:3000/transacoes/${id}`,{
    method: "Delete"
  });
  
  carregartransacoes();
  carregarsaldo();
}

//Exibir saldo
async function carregarsaldo() {
  const resposta = await fetch("http://localhost:3000/saldo");
  const saldo = await resposta.json();

  document.getElementById("saldo").innerText = 
    `R$ ${saldo.tatal.toFixed(2)}`;
  
}
    
