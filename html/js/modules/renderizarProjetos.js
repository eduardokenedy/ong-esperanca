// Conteúdo dos cards centralizado para facilitar a manutenção da página.
const projetos = [
  {
    titulo: "Campanha do Agasalho",
    descricao: "Coleta de roupas e cobertores para famílias em situação de vulnerabilidade.",
    imagem: "../img/agasalho.jpg",
    textoAlternativo: "Voluntários recolhendo roupas para a campanha do agasalho",
    categoria: "campanha",
    chamada: "Participe"
  },
  {
    titulo: "Doação de Alimentos",
    descricao: "Distribuição de cestas básicas para comunidades carentes.",
    imagem: "../img/alimentos.jpg",
    textoAlternativo: "Cestas básicas organizadas para distribuição",
    categoria: "campanha",
    chamada: "Contribua"
  },
  {
    titulo: "Apoio Escolar",
    descricao: "Aulas de reforço para crianças em idade escolar.",
    imagem: "../img/aulas.jpg",
    textoAlternativo: "Voluntário ensinando crianças em sala comunitária",
    categoria: "iniciativa"
  },
  {
    titulo: "Visitas a Asilos",
    descricao: "Momentos de companhia e atividades recreativas com idosos.",
    imagem: "../img/asilos.jpg",
    textoAlternativo: "Voluntários conversando com idosos em asilo",
    categoria: "iniciativa"
  }
];

function criarCardProjeto(projeto) {
  const card = document.createElement("article");
  card.className = "projeto";

  const titulo = document.createElement("h3");
  titulo.textContent = projeto.titulo;
  const descricao = document.createElement("p");
  descricao.textContent = projeto.descricao;
  const imagem = document.createElement("img");
  imagem.src = projeto.imagem;
  imagem.alt = projeto.textoAlternativo;
  imagem.loading = "lazy";
  imagem.decoding = "async";

  card.append(titulo, descricao, imagem);
  if (projeto.chamada) {
    const link = document.createElement("a");
    link.href = "cadastro.html";
    link.textContent = projeto.chamada;
    card.append(link);
  }
  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const campanhas = document.getElementById("campanhas-projetos");
  const iniciativas = document.getElementById("iniciativas-projetos");
  if (!campanhas || !iniciativas) return;

  projetos.forEach(projeto => {
    const destino = projeto.categoria === "campanha" ? campanhas : iniciativas;
    destino.append(criarCardProjeto(projeto));
  });
});
