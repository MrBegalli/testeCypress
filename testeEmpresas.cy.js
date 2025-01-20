describe('Testes da página de menu lateral', () => {
  beforeEach(() => {
    cy.visit('https://egrc-app.homologacao.com.br');
  });

  it('Deve clicar no botão Ativos', () => {
    // Realiza login ou ações iniciais
    cy.get('button').contains('Entrar').should('not.be.disabled').click();

    // Aguarda o carregamento da página principal
    cy.get('button').contains('Nova').should('be.visible');

    // Clica na seta dupla para abrir o menu lateral
    cy.get('button[aria-label="open drawer"]').should('be.visible').click();

    // Localiza e clica no botão "Empresas" usando o seletor baseado na classe e no texto
    cy.get('h6.MuiTypography-root.MuiTypography-h6').contains('Empresas').should('be.visible').click();

    cy.url().should('include', '/empresas-lista');
    cy.get('button').contains('Nova').should('not.be.disabled').click();

    cy.get('input[placeholder="Digite o nome da empresa"]').type('Teste');

    cy.contains('label', 'CNPJ').parent().find('input').type('24.377.856/0001-49');

    cy.get('[placeholder="00/00/0000"]').should('be.visible'); // Verifica se o campo está visível
    cy.get('[placeholder="00/00/0000"]').click().type('12/01/2024') // Localiza pelo placeholder

    cy.contains('Empresa superior').parent().click();
    cy.contains('CBA').click();

    cy.contains('Empresas Inferiores').parent().click();
    cy.contains('Selecionar todas').click();

    cy.contains('Processos').parent().click();
    cy.contains('Selecionar todas').click();

    cy.contains('label', 'Conta').parent().click();
    cy.contains('Selecionar todas').click();

    cy.contains('label', 'Responsável').parent().click();
    cy.contains('Pedro Octavio Begalli Neto').click();

    cy.get('label').contains('Inserir Arquivo').click();//Funciona, mas precisa de passos a mais!

    cy.contains('button', 'Atualizar').click({ force: true });

  });
});
