function mostrarAmor() {
  const amor = document.getElementById("amor-gigante");
  amor.style.display = "block";
  amor.scrollIntoView({ behavior: "smooth" });
}
function calcularDias() {
  const inicio = new Date(2025, 10, 24); // Mês começa em 0 (10 = novembro)
  const hoje = new Date();

  const diferenca = hoje - inicio;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  document.getElementById("dias").textContent = dias;
}

calcularDias();
