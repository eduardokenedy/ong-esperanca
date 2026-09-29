import { cp, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { minify } from 'html-minifier-terser';
import { defineConfig } from 'vite';

const raizProjeto = fileURLToPath(new URL('.', import.meta.url));

function minificarDocumentosHtml() {
  return {
    name: 'minificar-documentos-html',
    enforce: 'post',
    apply: 'build',
    async generateBundle(_, arquivos) {
      for (const arquivo of Object.values(arquivos)) {
        if (arquivo.type === 'asset' && arquivo.fileName.endsWith('.html')) {
          arquivo.source = await minify(String(arquivo.source), {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
          });
        }
      }
    },
  };
}

function copiarImagensOpcionais() {
  const imagensOrigem = resolve(raizProjeto, 'img');
  const imagensDestino = resolve(raizProjeto, 'dist/img');

  return {
    name: 'copiar-imagens-da-ong',
    apply: 'build',
    async closeBundle() {
      try {
        await access(imagensOrigem);
        await cp(imagensOrigem, imagensDestino, { recursive: true });
      } catch (erro) {
        if (erro.code !== 'ENOENT') throw erro;
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [minificarDocumentosHtml(), copiarImagensOpcionais()],
  build: {
    minify: true,
    rolldownOptions: {
      input: {
        inicio: resolve(raizProjeto, 'index.html'),
        paginaInicial: resolve(raizProjeto, 'html/index.html'),
        projetos: resolve(raizProjeto, 'html/projetos.html'),
        cadastro: resolve(raizProjeto, 'html/cadastro.html'),
      },
    },
  },
});
