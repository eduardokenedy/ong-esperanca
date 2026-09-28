// Monitoramento de eventos principais na aplicação SPA

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const botoes = document.querySelectorAll("button");
  const inputs = document.querySelectorAll("input, textarea, select");

  // Captura de cliques em botões
  botoes.forEach(botao => {
    botao.addEventListener("click", event => {
      event.preventDefault(); // evita comportamento padrão
      console.log(`Botão ${botao.textContent} clicado`);
      botao.classList.add("ativo"); // altera estilo dinamicamente
    });
  });

  // Captura de digitação em campos de formulário
  inputs.forEach(input => {
    input.addEventListener("input", () => {
      localStorage.setItem(input.name, input.value); // persiste dados
    });
  });

  // Captura de envio do formulário
  formulario.addEventListener("submit", event => {
    event.preventDefault(); // evita recarregar a página
    const dados = {};
    inputs.forEach(input => (dados[input.name] = input.value));
    localStorage.setItem("cadastro", JSON.stringify(dados));
    alert("Cadastro salvo com sucesso!");
  });
});
