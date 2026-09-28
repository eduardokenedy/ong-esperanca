// Exemplo de geração dinâmica de componentes usando Template Literals

const projetos = [
  { titulo: "Campanha do Agasalho", descricao: "Coleta de roupas e cobertores para famílias em vulnerabilidade.", imagem: "../img/agasalho.jpg" },
  { titulo: "Doação de Alimentos", descricao: "Distribuição de cestas básicas para comunidades carentes.", imagem: "../img/alimentos.jpg" },
  { titulo: "Apoio Escolar", descricao: "Aulas de reforço para crianças em idade escolar.", imagem: "../img/aulas.jpg" },
  { titulo: "Visitas a Asilos", descricao: "Momentos de companhia e atividades recreativas com idosos.", imagem: "../img/asilos.jpg" }
];

function renderizarProjetos(lista) {
  const container = document.getElementById("conteudo");
  container.innerHTML = ""; // limpa o conteúdo anterior

  // Itera sobre os dados e cria o HTML dinamicamente
  lista.forEach(projeto => {
    const card = `
      <article class="projeto">
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
      </article>
    `;
    container.innerHTML += card;
  });
}

// Chamada da função para renderizar os projetos
renderizarProjetos(projetos);
