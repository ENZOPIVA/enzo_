// Funcionalidade dos botões de reação (Curtir)
const botoesReacao = document.querySelectorAll("article button");

botoesReacao.forEach(function (botao) {
  let curtiu = false;

  botao.addEventListener("click", function () {
    const texto = botao.querySelector("span");

    if (!curtiu) {
      texto.textContent = Number(texto.textContent) + 1;
      curtiu = true;
    } else {
      texto.textContent = Number(texto.textContent) - 1;
      curtiu = false;
    }
  });
});

// Alternância de Tema Claro / Escuro
const btnTemaEscuro = document.getElementById("btn-tema");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
  const corpoPagina = document.body;
  corpoPagina.classList.toggle("tema-escuro");

  // Alterna o ícone do botão entre Lua e Sol
  if (corpoPagina.classList.contains("tema-escuro")) {
    btnTemaEscuro.textContent = "☀️";
  } else {
    btnTemaEscuro.textContent = "🌙";
  }
}