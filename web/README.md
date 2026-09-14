# Testes automatizados — Webdojo

Este projeto contém os testes automatizados end-to-end da aplicação **Webdojo**, utilizando [Cypress](https://www.cypress.io/). A aplicação e os testes ficam no mesmo repositório.

## Pré-requisitos

- Node.js instalado (recomenda-se a versão LTS);
- npm disponível no terminal;
- Dependências do projeto instaladas.

```bash
npm install
```

## Executando a aplicação

Antes de executar os testes, inicie a aplicação Webdojo em um terminal separado:

```bash
npm run dev
```

A aplicação será disponibilizada na porta `3000`.

> Mantenha esse comando em execução durante os testes Cypress.

## Executando os testes

Com a aplicação em execução, utilize os comandos abaixo conforme o cenário desejado.

| Comando | Descrição |
| --- | --- |
| `npm test` | Executa todos os testes em modo headless, com viewport de 1440 × 900. |
| `npm run test:ui` | Abre a interface interativa do Cypress para selecionar e acompanhar os testes. |
| `npm run test:login` | Executa somente o teste de login em viewport de 1440 × 900. |
| `npm run test:login:mobile` | Executa somente o teste de login simulando um dispositivo móvel, com viewport de 414 × 896. |

## Scripts disponíveis

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

## Estrutura do projeto Cypress

```text
cypress/
├── e2e/                         # Especificações dos testes end-to-end
├── fixtures/                    # Dados e arquivos usados pelos testes
│   ├── cep.json
│   ├── consultancy.json
│   └── do.pdf
└── support/                     # Comandos e funções de apoio reutilizáveis
    ├── actions/
    │   └── consultancy.actions.js
    ├── commands.js
    ├── e2e.js
    └── utils.js
```

### Diretórios e arquivos de apoio

- `cypress/e2e/`: concentra os arquivos de teste, como `login.cy.js`.
- `cypress/fixtures/`: armazena dados estáticos e arquivos utilizados durante os cenários de teste.
- `cypress/support/actions/`: reúne ações reutilizáveis relacionadas a funcionalidades da aplicação, como consultorias.
- `cypress/support/commands.js`: define comandos customizados do Cypress.
- `cypress/support/e2e.js`: arquivo carregado antes da execução dos testes end-to-end; indicado para configurações globais.
- `cypress/support/utils.js`: contém funções utilitárias compartilhadas entre os testes.

## Fluxo sugerido

1. Instale as dependências com `npm install`.
2. Em um terminal, execute `npm run dev` para iniciar a Webdojo.
3. Em outro terminal, execute o script Cypress apropriado.
4. Para desenvolver ou depurar um cenário, prefira `npm run test:ui`.

## Observação sobre responsividade

Os scripts de login validam a mesma especificação em dois tamanhos de tela: desktop (`1440 × 900`) e mobile (`414 × 896`). Isso permite verificar o comportamento do fluxo de autenticação em contextos de uso distintos.
