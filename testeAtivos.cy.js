describe('Testes do menu lateral', () => {
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

    // Localiza e clica no botão "Ativos" usando o seletor baseado na classe e no texto
    cy.get('h6.MuiTypography-root.MuiTypography-h6').contains('Ativos').should('be.visible').click();

    // Verifica se a URL da página de "Ativos" foi carregada
    cy.url().should('include', '/ativos-lista');

    cy.get('button').contains('Novo').should('not.be.disabled').click();

    cy.get('input[placeholder="Código do ativo"]').type('Teste');

    cy.contains('label', 'Nome').parent().find('input').type('Teste');

    cy.get('textarea[aria-invalid="false"]').type('Teste');

    cy.get('#\\:r25\\:').type('Teste').click();

    cy.contains('Atividades associados').parent().click();
    cy.contains('IPE - Inativar').click();

    cy.contains('Departamentos').parent().click();
    cy.contains('Selecionar todas').click();

    cy.contains('Ambientes').parent().click();
    cy.contains('Selecionar todas').click();

    cy.contains('Processos').parent().click();
    cy.contains('Selecionar todas').click();

    cy.contains('button', 'Atualizar').click({ force: true });



  });
});