let dados = [];
let idAtual = 1;

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();

  if (nome && idade) {
    dados.push({ id: idAtual++, nome, idade });
    atualizarTabela();
    this.reset();
  }
});

function atualizarTabela() {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";

  const filtro = document.getElementById("pesquisa").value.toLowerCase();

  dados
    .filter(item => item.nome.toLowerCase().includes(filtro))
    .forEach((item) => {
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
  if (item) item[campo] = valor.trim();
}

function deletar(id) {
  dados = dados.filter(d => d.id !== id);
  atualizarTabela();
}

function filtrarTabela() {
  atualizarTabela();
}
