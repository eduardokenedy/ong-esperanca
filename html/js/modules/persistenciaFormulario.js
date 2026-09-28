// Salva somente o rascunho deste formulário; não apaga outros dados do site.
const CHAVE_RASCUNHO_CADASTRO = "ongEsperanca:cadastro:rascunho";

window.restaurarRascunho = formulario => {
  try {
    const rascunho = JSON.parse(localStorage.getItem(CHAVE_RASCUNHO_CADASTRO) || "{}");
    Object.entries(rascunho).forEach(([nome, valor]) => {
      const campo = formulario.elements.namedItem(nome);
      if (campo && typeof valor === "string") campo.value = valor;
    });
  } catch (erro) {
    console.warn("Não foi possível recuperar o rascunho do formulário.", erro);
  }
};

window.salvarRascunho = formulario => {
  const dados = Object.fromEntries(new FormData(formulario).entries());
  try {
    localStorage.setItem(CHAVE_RASCUNHO_CADASTRO, JSON.stringify(dados));
  } catch (erro) {
    console.warn("Não foi possível salvar o rascunho neste navegador.", erro);
  }
};
