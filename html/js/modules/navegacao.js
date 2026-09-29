document.addEventListener("DOMContentLoaded", () => {
  const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav a").forEach(link => {
    const paginaDoLink = new URL(link.href, window.location.href).pathname.split("/").pop();

    if (paginaDoLink === paginaAtual) {
      link.setAttribute("aria-current", "page");
    }
  });
});
