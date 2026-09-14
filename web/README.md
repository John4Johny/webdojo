# Automação de Testes E2E — Webdojo

## Visão geral

Este repositório reúne a aplicação **Webdojo** e sua suíte de testes automatizados end-to-end (E2E), implementada com [Cypress](https://www.cypress.io/). Os testes validam a aplicação pela perspectiva do usuário, exercitando fluxos funcionais no navegador.

Como a aplicação e os testes compartilham o mesmo repositório, o servidor da Webdojo deve estar ativo antes da execução da suíte.

## Tecnologias

| Tecnologia | Finalidade |
| --- | --- |
| Node.js | Ambiente de execução dos scripts do projeto. |
| npm | Gerenciamento de dependências e execução dos scripts. |
| Cypress | Framework para automação de testes end-to-end. |

## Pré-requisitos

Antes de iniciar, verifique se o ambiente possui:

- Node.js em versão LTS;
- npm instalado e acessível pelo terminal;
- dependências do projeto instaladas.

```bash
npm install
```

## Inicialização da aplicação

Em um terminal, na raiz do repositório, inicie a Webdojo:

```bash
npm run dev
```

O comando disponibiliza a aplicação na porta `3000`.

> O servidor deve permanecer em execução durante os testes. Abra outro terminal, também na raiz do projeto, para executar os comandos Cypress.

## Execução dos testes

| Objetivo | Comando | Resultado |
| --- | --- | --- |
| Executar toda a suíte | `npm test` | Executa os testes em modo headless com viewport de `1440 × 900`. |
| Executar em modo interativo | `npm run test:ui` | Abre o Cypress Runner para seleção, inspeção e depuração dos cenários. |
| Validar o login em desktop | `npm run test:login` | Executa `cypress/e2e/login.cy.js` com viewport de `1440 × 900`. |
| Validar o login em mobile | `npm run test:login:mobile` | Executa `cypress/e2e/login.cy.js` com viewport de `414 × 896`. |

### Exemplo de fluxo local

```bash
# Terminal 1 — aplicação Webdojo
npm run dev

# Terminal 2 — suíte de testes completa
npm test
```

Para analisar um cenário durante o desenvolvimento, substitua o segundo comando por:

```bash
npm run test:ui
```

## Scripts do projeto

```json
{
  "scripts": {
    "dev": "serve -s dist -p 3000",
    "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
    "test:ui": "npx cypress open",
    "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900",
    "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
  }
}
```

## Organização da suíte

```text
cypress/
├── e2e/                         # Especificações dos cenários E2E
├── fixtures/                    # Massa de dados e arquivos estáticos
│   ├── cep.json
│   ├── consultancy.json
│   └── do.pdf
└── support/                     # Recursos compartilhados entre os testes
    ├── actions/
    │   └── consultancy.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

| Caminho | Responsabilidade |
| --- | --- |
| `cypress/e2e/` | Armazena as especificações dos testes E2E, como `login.cy.js`. |
| `cypress/fixtures/` | Centraliza dados previsíveis e arquivos usados pelos cenários de teste. |
| `cypress/support/actions/` | Organiza ações de domínio reutilizáveis, como as relacionadas a consultorias. |
| `cypress/support/commands.js` | Declara comandos customizados do Cypress. |
| `cypress/support/e2e.js` | Reúne configurações carregadas antes das especificações E2E. |
| `cypress/support/utils.js` | Disponibiliza funções utilitárias compartilhadas. |

## Cobertura de viewport

O cenário de login é executável em dois contextos de viewport:

| Contexto | Dimensões | Script |
| --- | --- | --- |
| Desktop | `1440 × 900` | `npm run test:login` |
| Mobile | `414 × 896` | `npm run test:login:mobile` |

Essa separação permite validar o fluxo de autenticação tanto em resolução de desktop quanto em uma dimensão representativa de dispositivo móvel.

## Boas práticas de manutenção

- Mantenha as especificações em `cypress/e2e/` focadas no comportamento a ser validado.
- Centralize dados reutilizáveis em `fixtures/` para reduzir duplicação e facilitar a manutenção.
- Extraia passos repetidos para `support/actions/`, comandos customizados ou utilitários.
- Ao alterar uma funcionalidade, execute pelo menos o cenário diretamente relacionado antes de executar a suíte completa.
