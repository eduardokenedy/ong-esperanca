# ONG Esperança

## Visão geral

Site institucional de uma organização sem fins lucrativos. O projeto reúne páginas de apresentação, campanhas e projetos sociais, além de um formulário para cadastro de voluntários. É um protótipo front-end: não possui API, servidor de aplicação ou banco de dados.

## Funcionalidades presentes

- **Página inicial** (`html/index.html`): apresentação da ONG e informações de contato.
- **Projetos** (`html/projetos.html`): campanhas e iniciativas renderizadas a partir de dados em JavaScript.
- **Cadastro** (`html/cadastro.html`): formulário de voluntariado com máscaras de CPF, CEP e telefone, validação de campos e CPF, e salvamento automático de rascunho no `localStorage`.
- **Acessibilidade visual**: paletas de alto contraste, tema escuro adaptado à preferência do sistema e foco visível nos controles.
- **JavaScript** (`html/js/modules/`): módulos para navegação, renderização dos projetos, máscaras, validação e persistência do formulário.

O formulário é demonstrativo: os dados ficam somente no navegador e não são enviados à ONG, pois o projeto ainda não tem backend. Como o rascunho inclui dados pessoais, use apenas informações fictícias durante os testes e evite computadores compartilhados.

## Tecnologias

- **HTML5** para a estrutura e o conteúdo das páginas.
- **CSS3** para apresentação visual (`css/estilo.css`).
- **JavaScript puro (Vanilla JS)** e APIs do navegador, incluindo `localStorage`.
- **Vite 8** como servidor de desenvolvimento e bundler multipágina; **html-minifier-terser** compacta o HTML final.

## Acessibilidade visual e temas

As cores de texto, links, botões, mensagens e superfícies foram ajustadas para manter contraste legível nos temas claro e escuro. O tema escuro acompanha `prefers-color-scheme: dark`; `prefers-contrast: more` ativa uma paleta reforçada, e `forced-colors` deixa o navegador aplicar seu esquema de alto contraste. Os controles mantêm foco visível por teclado. A preferência é automática, sem botão de alternância no site.

## Requisitos

- Node.js 20.19+ ou 22.12+ e pnpm (ou npm), para instalar o Vite e executar os comandos do projeto.
- Navegador moderno com JavaScript habilitado.

## Executar localmente

Na pasta raiz do repositório, instale as dependências e inicie o servidor de desenvolvimento do Vite:

```sh
pnpm install
pnpm dev
```

Abra o endereço local exibido pelo Vite no terminal. Com npm, os comandos equivalentes são `npm install` e `npm run dev`.

As entradas do site são `index.html`, `html/index.html`, `html/projetos.html` e `html/cadastro.html`.

## Dependências, build e testes

- **Instalação:** `pnpm install` instala Vite e `html-minifier-terser`, listados em `devDependencies` e travados em `pnpm-lock.yaml`.
- **Build:** `pnpm build` compila as quatro páginas de entrada para `dist/`. `vite.config.js` define as entradas, `base: './'` para hospedagem estática e minificação: Vite compacta CSS/JavaScript e `html-minifier-terser` remove espaços e comentários do HTML.
- **Pré-visualização da build:** `pnpm preview` inicia um servidor local para conferir os arquivos de `dist/`.
- **Testes automatizados:** não há suíte ou comando de teste configurado. A validação disponível nesta etapa é manual, pelo navegador; não existe comando `npm test`.

## Estrutura principal

```text
.
├── GITFLOW.md
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
├── .gitignore
├── index.html
├── css/
│   └── estilo.css
└── html/
    ├── index.html
    ├── projetos.html
    ├── cadastro.html
    └── js/
        └── modules/
            ├── navegacao.js
            ├── mascarasFormulario.js
            ├── renderizarProjetos.js
            ├── eventosFormulario.js
            ├── validacaoFormulario.js
            └── persistenciaFormulario.js
```

## Estado atual e limitações

- Adicione as imagens usadas pelas páginas na pasta `img/` na raiz do projeto: `equipe.webp`, `agasalho.jpg`, `alimentos.jpg`, `aulas.jpg` e `asilos.jpg`. A build copia essa pasta para `dist/img/` preservando os caminhos usados pelos projetos.
- O formulário usa `localStorage` no navegador e não realiza cadastro em um backend.

## Fluxo de branches

O projeto documenta o fluxo de branches em [GITFLOW.md](GITFLOW.md), com `main`, `develop`, `feature/*` e `hotfix/*`.
