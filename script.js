function mostrarAmor() {
  const amor = document.getElementById("amor-gigante");
  amor.style.display = "block";
  amor.scrollIntoView({ behavior: "smooth" });
}
function atualizarContador() {
  const inicio = new Date("2025-11-24T00:00:00");
  const agora = new Date();

  let diff = Math.floor((agora - inicio) / 1000); // em segundos

  const segundos = diff % 60;
  diff = Math.floor(diff / 60);

  const minutos = diff % 60;
  diff = Math.floor(diff / 60);

  const horas = diff % 24;
  diff = Math.floor(diff / 24);

  const diasTotais = diff;

  const meses = Math.floor(diasTotais / 30);
  const dias = diasTotais % 30;

  document.getElementById("contador").innerHTML = `
    💜 Estamos juntos há:<br>
    <strong>${meses}</strong> meses,
    <strong>${dias}</strong> dias,
    <strong>${minutos}</strong> minutos e
    <strong>${segundos}</strong> segundos 💜
  `;
}

setInterval(atualizarContador, 1000);
atualizarContador();
