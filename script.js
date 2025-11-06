let table = [];

function insertData() {
  table.push({ id: table.length + 1, name: "Item " + (table.length + 1) });
  document.getElementById("output").textContent = "INSERT realizado:\n" + JSON.stringify(table, null, 2);
}

function alterData() {
  if (table.length > 0) {
    table[0].name = "Item Alterado";
    document.getElementById("output").textContent = "ALTER realizado:\n" + JSON.stringify(table, null, 2);
  } else {
    document.getElementById("output").textContent = "Nenhum dado para alterar.";
  }
}

function deleteData() {
  if (table.length > 0) {
    table.pop();
    document.getElementById("output").textContent = "DELETE realizado:\n" + JSON.stringify(table, null, 2);
  } else {
    document.getElementById("output").textContent = "Nenhum dado para deletar.";
  }
}

function selectData() {
  document.getElementById("output").textContent = "SELECT realizado:\n" + JSON.stringify(table, null, 2);
}
