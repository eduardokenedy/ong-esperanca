// js/modules/navegacao.js

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const conteudo = document.getElementById("conteudo");

  // Intercepta os cliques nos links
  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // impede o recarregamento da página
      const pagina = link.getAttribute("href").replace(".html", "");
      carregarPagina(pagina, true);
    });
  });

  // Função para carregar páginas dinamicamente
  function carregarPagina(pagina, atualizarHistorico = false) {
    fetch(`html/${pagina}.html`)
      .then(response => response.text())
      .then(data => {
        conteudo.innerHTML = data;
        if (atualizarHistorico) {
          history.pushState({ pagina }, "", `${pagina}.html`);
        }
      })
      .catch(() => {
        conteudo.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
      });
  }

  // Suporte ao botão de voltar/avançar do navegador
  window.addEventListener("popstate", event => {
    if (event.state && event.state.pagina) {
      carregarPagina(event.state.pagina);
    }
  });

  // Carrega a página inicial ao abrir
  const paginaInicial = location.pathname.split("/").pop().replace(".html", "") || "index";
  carregarPagina(paginaInicial);
});
