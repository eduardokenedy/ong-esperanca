// Valida dados além dos atributos nativos de HTML.
const regrasCampos = {
  nome: {
    regra: /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)+$/u,
    mensagem: "Informe nome e sobrenome."
  },
  cpf: { regra: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, mensagem: "Informe o CPF no formato 000.000.000-00." },
  cep: { regra: /^\d{5}-?\d{3}$/, mensagem: "Informe um CEP válido." },
  estado: { regra: /^[A-Za-z]{2}$/, mensagem: "Informe a sigla do estado com duas letras." },
  telefone: { regra: /^\(\d{2}\)\s\d{4,5}-\d{4}$/, mensagem: "Informe um telefone com DDD." }
};

function cpfValido(cpf) {
  const digitos = cpf.replace(/\D/g, "");
  if (digitos.length !== 11 || /^([0-9])\1{10}$/.test(digitos)) return false;

  const calcularDigito = tamanho => {
    let soma = 0;
    for (let i = 0; i < tamanho; i++) soma += Number(digitos[i]) * (tamanho + 1 - i);
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  return calcularDigito(9) === Number(digitos[9]) && calcularDigito(10) === Number(digitos[10]);
}

function validarCampo(campo) {
  const configuracao = regrasCampos[campo.name];
  let valido = campo.value.trim() !== "";
  let mensagem = configuracao?.mensagem || "Preencha este campo.";

  if (valido && configuracao && !configuracao.regra.test(campo.value.trim())) valido = false;
  if (valido && campo.name === "cpf" && !cpfValido(campo.value)) {
    valido = false;
    mensagem = "O CPF informado não é válido.";
  }
  if (valido && campo.name === "nascimento" && new Date(`${campo.value}T00:00:00`) >= new Date(new Date().toDateString())) {
    valido = false;
    mensagem = "Informe uma data de nascimento anterior a hoje.";
  }
  if (valido && campo.type === "email" && !campo.validity.valid) {
    valido = false;
    mensagem = "Informe um e-mail válido.";
  }

  campo.classList.toggle("erro", !valido);
  campo.classList.toggle("sucesso", valido);
  campo.setAttribute("aria-invalid", String(!valido));
  const erro = document.getElementById(`erro-${campo.name}`);
  if (erro) erro.textContent = valido ? "" : mensagem;
  return valido;
}

window.validarFormulario = formulario => {
  let valido = true;
  formulario.querySelectorAll("input, select, textarea").forEach(campo => {
    if (!validarCampo(campo)) valido = false;
  });
  return valido;
};

document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#formulario-voluntario");
  if (!formulario) return;
  formulario.querySelectorAll("input, select, textarea").forEach(campo => {
    campo.addEventListener("blur", () => {
      if (campo.value) validarCampo(campo);
    });
  });
});
