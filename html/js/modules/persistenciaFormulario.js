// Persistência de dados com localStorage

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const campos = formulario.querySelectorAll("input, select, textarea");

  // 🔹 Recupera dados salvos ao carregar a página
  campos.forEach(campo => {
    const valorSalvo = localStorage.getItem(campo.name);
    if (valorSalvo) {
      campo.value = JSON.parse(valorSalvo); // converte de string para valor original
    }
  });

  // 🔹 Salva dados em tempo real
  campos.forEach(campo => {
    campo.addEventListener("input", () => {
      localStorage.setItem(campo.name, JSON.stringify(campo.value)); // converte para string antes de salvar
    });
  });

  // 🔹 Limpa o armazenamento ao enviar o formulário
  formulario.addEventListener("submit", event => {
    event.preventDefault();
    localStorage.clear();
    alert("Cadastro enviado e dados limpos do armazenamento local!");
  });
});
