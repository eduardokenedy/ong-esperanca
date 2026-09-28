// Rotina de verificação de consistência do formulário

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const campos = formulario.querySelectorAll("input");

  // Expressões RegEx para validação
  const regras = {
    nome: /^[A-Za-zÀ-ÿ\s]{3,}$/, // mínimo de 3 letras
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, // formato 000.000.000-00
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // formato de e-mail válido
    telefone: /^\(\d{2}\)\s\d{4,5}-\d{4}$/ // formato (00) 00000-0000
  };

  // Função de validação individual
  function validarCampo(campo) {
    const regra = regras[campo.name];
    const valido = regra ? regra.test(campo.value) : campo.value.trim() !== "";

    if (!valido) {
      campo.classList.add("erro");
      campo.classList.remove("sucesso");
      campo.nextElementSibling?.remove(); // remove mensagem anterior
      const msg = document.createElement("span");
      msg.textContent = "Campo inválido ou incompleto.";
      msg.classList.add("mensagem-erro");
      campo.insertAdjacentElement("afterend", msg);
    } else {
      campo.classList.remove("erro");
      campo.classList.add("sucesso");
      campo.nextElementSibling?.remove();
    }
    return valido;
  }

  // Validação em tempo real
  campos.forEach(campo => {
    campo.addEventListener("input", () => validarCampo(campo));
  });

  // Validação ao enviar
  formulario.addEventListener("submit", event => {
    event.preventDefault();
    let valido = true;
    campos.forEach(campo => {
      if (!validarCampo(campo)) valido = false;
    });
    if (valido) alert("Formulário enviado com sucesso!");
  });
});
