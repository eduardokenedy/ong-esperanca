# ONG Esperança

## Visão geral

Site institucional de uma organização sem fins lucrativos. O projeto reúne páginas de apresentação, campanhas e projetos sociais, além de um formulário para cadastro de voluntários. É um protótipo front-end: não possui API, servidor de aplicação ou banco de dados.

## Funcionalidades presentes

- **Página inicial** (`html/index.html`): apresentação da ONG e informações de contato.
- **Projetos** (`html/projetos.html`): campanhas e iniciativas renderizadas a partir de dados em JavaScript.
- **Cadastro** (`html/cadastro.html`): formulário de voluntariado com máscaras de CPF, CEP e telefone, validação de campos e CPF, e salvamento automático de rascunho no `localStorage`.
- **JavaScript** (`html/js/modules/`): módulos para navegação, renderização dos projetos e comportamento, validação e persistência do formulário.

O formulário é demonstrativo: os dados ficam somente no navegador e não são enviados à ONG, pois o projeto ainda não tem backend. Como o rascunho inclui dados pessoais, use apenas informações fictícias durante os testes e evite computadores compartilhados.

## Tecnologias

- **HTML5** para a estrutura e o conteúdo das páginas.
- **CSS3** para apresentação visual (`css/estilo.css`).
- **JavaScript puro (Vanilla JS)** e APIs do navegador, incluindo `localStorage`.

O repositório não contém `package.json`, framework, biblioteca externa ou dependência de instalação.

## Requisitos

- Navegador moderno com JavaScript habilitado.
- Python 3, apenas para iniciar o servidor local sugerido abaixo. Não é necessário instalar dependências do projeto.

## Executar localmente

Na pasta raiz do repositório, inicie um servidor HTTP:

```powershell
py -m http.server 8000
```

Se o comando `py` não estiver disponível, tente:

```powershell
python -m http.server 8000
```

Abra `http://localhost:8000/` no navegador. O arquivo `index.html` da raiz encaminha para `html/index.html`; os links internos levam diretamente às páginas HTML correspondentes.

## Dependências, build e testes

- **Instalação:** não há dependências externas nem comando `npm install` configurado.
- **Build:** não há empacotador nem etapa de build; os arquivos HTML, CSS e JavaScript são servidos diretamente.
- **Testes automatizados:** não há suíte ou comando de teste configurado. A validação disponível nesta etapa é manual, pelo navegador; não existe comando `npm test`.

## Estrutura principal

```text
.
├── GITFLOW.md
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
            ├── renderizarProjetos.js
            ├── eventosFormulario.js
            ├── validacaoFormulario.js
            └── persistenciaFormulario.js
```

## Estado atual e limitações

- Adicione as imagens usadas pelas páginas na pasta `img/` na raiz do projeto: `equipe.webp`, `agasalho.jpg`, `alimentos.jpg`, `aulas.jpg` e `asilos.jpg`.
- O formulário usa `localStorage` no navegador e não realiza cadastro em um backend.
- As rotinas de build e testes automatizados ainda não foram adicionadas.

## Fluxo de branches

O projeto documenta o fluxo de branches em [GITFLOW.md](GITFLOW.md), com `main`, `develop`, `feature/*` e `hotfix/*`.
