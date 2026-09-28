# Fluxo de branches (GitFlow)

Este projeto usa um fluxo GitFlow simplificado:

- `main`: versão estável e pronta para entrega. Alterações entram por merge de `develop` em um lançamento ou de `hotfix/*` em uma correção urgente.
- `develop`: branch de integração do desenvolvimento contínuo. Novas funcionalidades são integradas aqui.
- `feature/<nome>`: branch criada a partir de `develop` para uma funcionalidade. Ao terminar e revisar, faça merge em `develop` e remova a branch.
- `hotfix/<nome>`: branch criada a partir de `main` para corrigir uma falha urgente em produção. Após validar, faça merge em `main` e também em `develop` para manter as branches sincronizadas.

## Comandos usuais

```bash
# Começar uma funcionalidade
git switch develop
git pull
git switch -c feature/nome-da-funcionalidade

# Integrar a funcionalidade
git switch develop
git merge --no-ff feature/nome-da-funcionalidade
git branch -d feature/nome-da-funcionalidade

# Corrigir uma falha urgente
git switch main
git pull
git switch -c hotfix/descricao-da-correcao

# Depois de corrigir e validar
git switch main
git merge --no-ff hotfix/descricao-da-correcao
git switch develop
git merge --no-ff hotfix/descricao-da-correcao
```

Para publicar as branches no remoto, use `git push -u origin develop` (e, para cada branch de trabalho, `git push -u origin <branch>`). Faça revisão e validação antes de integrar alterações. Para um lançamento, integre `develop` em `main` e marque a versão com uma tag.
