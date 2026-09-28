// Coordena o envio demonstrativo do formulário (sem backend).
document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario-voluntario");
  if (!formulario) return;

  const mensagem = document.querySelector("#mensagem-formulario");
  window.restaurarRascunho?.(formulario);

  formulario.addEventListener("input", event => {
    if (event.target.matches("input, select, textarea")) {
      window.salvarRascunho?.(formulario);
      if (mensagem) mensagem.textContent = "";
    }
  });

  formulario.addEventListener("submit", event => {
    event.preventDefault();
    const formularioNativoValido = formulario.checkValidity();
    const formularioPersonalizadoValido = window.validarFormulario?.(formulario) ?? true;

    if (!formularioNativoValido || !formularioPersonalizadoValido) {
      formulario.reportValidity();
      mensagem.textContent = "Revise os campos destacados antes de continuar.";
      mensagem.classList.add("mensagem-formulario--erro");
      return;
    }

    window.salvarRascunho?.(formulario);
    mensagem.textContent = "Cadastro validado. Este protótipo não envia dados para a ONG; o rascunho fica salvo somente neste navegador.";
    mensagem.classList.remove("mensagem-formulario--erro");
  });
});
