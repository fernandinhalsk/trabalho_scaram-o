let dados = [];
let idAtual = 1;

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;

  dados.push({ id: idAtual++, nome, idade });
  atualizarTabela();
  this.reset();
});

function atualizarTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";

  dados.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${item.id}</td>
      <td contenteditable="true" onblur="alterar(${item.id}, 'nome', this.innerText)">${item.nome}</td>
      <td contenteditable="true" onblur="alterar(${item.id}, 'idade', this.innerText)">${item.idade}</td>
      <td><button onclick="deletar(${item.id})">Deletar</button></td>
    `;

    tbody.appendChild(tr);
  });
}

function alterar(id, campo, valor) {
  const item = dados.find(d => d.id === id);
  if (item) item[campo] = valor;
}

function deletar(id) {
  dados = dados.filter(d => d.id !== id);
  atualizarTabela();
}
